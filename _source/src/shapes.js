/* Particle shape library. Each shape: (N) => Float32Array(N*3). Units ≈ radius 2.5 */
const rand = (a = 0, b = 1) => a + Math.random() * (b - a);
export const gauss = () => { let u = 0, v = 0; while (!u) u = Math.random(); while (!v) v = Math.random(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); };
const randDir = () => { const t = rand(0, Math.PI * 2), z = rand(-1, 1), r = Math.sqrt(1 - z * z); return [r * Math.cos(t), r * Math.sin(t), z]; };
const out = (N, f) => { const a = new Float32Array(N * 3); for (let i = 0; i < N; i++) a.set(f(i), i * 3); return a; };
// pick a point on a list of segments, weighted by length
function segSampler(segs) {
  const L = segs.map(([a, b]) => Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2]));
  const tot = L.reduce((s, x) => s + x, 0);
  return (j = 0.02) => {
    let r = Math.random() * tot, k = 0; while (r > L[k]) { r -= L[k]; k++; }
    const [a, b] = segs[k], t = Math.random();
    return [a[0] + (b[0] - a[0]) * t + gauss() * j, a[1] + (b[1] - a[1]) * t + gauss() * j, a[2] + (b[2] - a[2]) * t + gauss() * j];
  };
}
const boxEdges = (cx, cy, cz, w, h, d) => {
  const x0 = cx - w / 2, x1 = cx + w / 2, y0 = cy - h / 2, y1 = cy + h / 2, z0 = cz - d / 2, z1 = cz + d / 2;
  const v = [[x0, y0, z0], [x1, y0, z0], [x1, y1, z0], [x0, y1, z0], [x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1]];
  return [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]].map(([a, b]) => [v[a], v[b]]);
};

export function sphere(N) {
  const shell = Math.floor(N * 0.78), g = Math.PI * (3 - Math.sqrt(5));
  return out(N, (i) => {
    if (i < shell) { const y = 1 - (i / (shell - 1)) * 2, r = Math.sqrt(1 - y * y), th = g * i, R = 2.3 + gauss() * 0.04; return [Math.cos(th) * r * R, y * R, Math.sin(th) * r * R]; }
    const d = randDir(), R = Math.pow(Math.random(), 0.5) * 1.9; return [d[0] * R, d[1] * R, d[2] * R];
  });
}
export function grid(N) {
  const s = Math.ceil(Math.sqrt(N)), size = 7.2;
  return out(N, (i) => { const x = ((i % s) / (s - 1) - 0.5) * size, z = (Math.floor(i / s) / (s - 1) - 0.5) * size; return [x, Math.sin(x * 0.9) * 0.35 + Math.cos(z * 0.8) * 0.35, z]; });
}
export function helix(N) {
  return out(N, () => {
    const t = rand(-1, 1), R = 1.15;
    if (Math.random() < 0.78) { const ang = t * Math.PI * 3.2 + (Math.random() < 0.5 ? 0 : Math.PI); return [Math.cos(ang) * R + gauss() * 0.05, t * 3.1, Math.sin(ang) * R + gauss() * 0.05]; }
    const k = Math.round(t * 14) / 14, ak = k * Math.PI * 3.2, u = rand(-1, 1); return [Math.cos(ak) * R * u, k * 3.1, Math.sin(ak) * R * u];
  });
}
export function knot(N) {
  return out(N, () => { const t = rand(0, Math.PI * 2), r = Math.cos(3 * t) + 2.1, d = randDir(), tb = Math.abs(gauss()) * 0.16; return [r * Math.cos(2 * t) * 0.82 + d[0] * tb, r * Math.sin(2 * t) * 0.82 + d[1] * tb, -Math.sin(3 * t) * 0.82 + d[2] * tb]; });
}
export function galaxy(N) {
  return out(N, (i) => { const r = Math.pow(Math.random(), 0.7) * 4.4, ang = (i % 3) * (Math.PI * 2 / 3) + r * 1.05 + gauss() * (0.35 / (r + 0.5)); return [Math.cos(ang) * r, gauss() * 0.12 * (1.2 - r / 4.4), Math.sin(ang) * r]; });
}
/* layered network; returns a shape fn plus nodes/edges for drawing connection lines */
export function makeNet(layers, width = 6.8, gapY = 0.72, nodeR = 0.09) {
  const nodes = [], xs = layers.map((_, l) => -width / 2 + (width * l) / (layers.length - 1));
  layers.forEach((n, l) => { for (let j = 0; j < n; j++) nodes.push({ l, p: [xs[l], (j - (n - 1) / 2) * gapY, rand(-0.15, 0.15)] }); });
  const edges = [];
  for (let i = 0; i < nodes.length; i++) for (let k = 0; k < nodes.length; k++) if (nodes[k].l === nodes[i].l + 1) edges.push([i, k]);
  const fn = (N) => out(N, (i) => {
    if (Math.random() < 0.6) { const n = nodes[i % nodes.length].p; return [n[0] + gauss() * nodeR, n[1] + gauss() * nodeR, n[2] + gauss() * nodeR]; }
    const e = edges[Math.floor(Math.random() * edges.length)], A = nodes[e[0]].p, B = nodes[e[1]].p, t = Math.random();
    return [A[0] + (B[0] - A[0]) * t + gauss() * 0.015, A[1] + (B[1] - A[1]) * t + gauss() * 0.015, A[2] + (B[2] - A[2]) * t];
  });
  return { fn, nodes, edges };
}
/* k small spheres on a ring (a body of work / a committee) */
export const clusters = (k = 6, R = 2.2, r = 0.5) => (N) => out(N, (i) => {
  const a = ((i % k) / k) * Math.PI * 2 + Math.PI / 2, d = randDir(), rr = r * Math.cbrt(Math.random()) * (Math.random() < 0.7 ? 1 : 0.6) + (Math.random() < 0.6 ? r * 0.2 : 0);
  return [Math.cos(a) * R + d[0] * rr, Math.sin(a) * R + d[1] * rr, d[2] * rr];
});
/* 2x2x2 data blocks (wireframe + light fill) */
export function cubes(N) {
  const segs = [], c = [-0.85, 0.85];
  c.forEach((x) => c.forEach((y) => c.forEach((z) => segs.push(...boxEdges(x, y, z, 1.25, 1.25, 1.25)))));
  const s = segSampler(segs);
  return out(N, () => { if (Math.random() < 0.8) return s(0.025); return [rand(-1.5, 1.5), rand(-1.5, 1.5), rand(-1.5, 1.5)]; });
}
/* concentric rings — a lens / iris for vision work */
export function iris(N) {
  return out(N, () => {
    if (Math.random() < 0.18) { const d = randDir(), r = 0.45 * Math.cbrt(Math.random()); return [d[0] * r, d[1] * r, d[2] * r]; }
    const ring = 1 + Math.floor(Math.random() * 7), R = 0.45 + ring * 0.3 + gauss() * 0.025, a = rand(0, Math.PI * 2);
    return [Math.cos(a) * R, Math.sin(a) * R, gauss() * 0.04 + Math.sin(a * 3 + ring) * 0.05];
  });
}
/* a house outline */
export function house(N) {
  const w = 3, h = 1.9, d = 2.2, y0 = -1.2, roofH = 1.3, segs = boxEdges(0, y0 + h / 2, 0, w, h, d);
  const tl = [-w / 2, y0 + h, -d / 2], tr = [w / 2, y0 + h, -d / 2], bl = [-w / 2, y0 + h, d / 2], br = [w / 2, y0 + h, d / 2], pf = [0, y0 + h + roofH, -d / 2], pb = [0, y0 + h + roofH, d / 2];
  segs.push([tl, pf], [tr, pf], [bl, pb], [br, pb], [pf, pb]);
  segs.push(...boxEdges(0, y0 + 0.55, d / 2, 0.6, 1.1, 0)); // door
  segs.push(...boxEdges(-0.95, y0 + 1.15, d / 2, 0.55, 0.5, 0), ...boxEdges(0.95, y0 + 1.15, d / 2, 0.55, 0.5, 0)); // windows
  const s = segSampler(segs);
  return out(N, () => s(0.03));
}
/* classical institution: steps, columns, pediment */
export function pillars(N) {
  const segs = [], cols = 6, W = 4.2, y0 = -1.6;
  segs.push(...boxEdges(0, y0 + 0.1, 0, W + 0.6, 0.2, 1.8), ...boxEdges(0, y0 + 0.3, 0, W + 0.3, 0.2, 1.5));
  segs.push(...boxEdges(0, y0 + 2.75, 0, W + 0.3, 0.2, 1.5));
  const L = [-(W + 0.3) / 2, y0 + 2.85, 0.75], R = [(W + 0.3) / 2, y0 + 2.85, 0.75], T = [0, y0 + 3.75, 0.75];
  segs.push([L, R], [L, T], [R, T]);
  const s = segSampler(segs);
  return out(N, () => {
    if (Math.random() < 0.55) { // column surfaces
      const c = Math.floor(Math.random() * cols), x = -W / 2 + 0.25 + (c * (W - 0.5)) / (cols - 1), a = rand(0, Math.PI * 2), y = rand(y0 + 0.4, y0 + 2.65);
      return [x + Math.cos(a) * 0.17, y, 0.45 + Math.sin(a) * 0.17];
    }
    return s(0.03);
  });
}
/* five-point star, extruded */
export function star(N) {
  const pts = []; for (let k = 0; k < 10; k++) { const a = Math.PI / 2 + (k * Math.PI) / 5, r = k % 2 ? 1.05 : 2.5; pts.push([Math.cos(a) * r, Math.sin(a) * r]); }
  const segs = [];
  [-0.3, 0.3].forEach((z) => pts.forEach((p, k) => { const q = pts[(k + 1) % 10]; segs.push([[p[0], p[1], z], [q[0], q[1], z]]); }));
  pts.forEach((p) => segs.push([[p[0], p[1], -0.3], [p[0], p[1], 0.3]]));
  const s = segSampler(segs);
  return out(N, () => { if (Math.random() < 0.82) return s(0.03); const d = randDir(), r = Math.cbrt(Math.random()) * 0.9; return [d[0] * r, d[1] * r, d[2] * r * 0.4]; });
}
/* infinity loop */
export function lemniscate(N) {
  return out(N, () => { const t = rand(0, Math.PI * 2), s = Math.sin(t), den = 1 + s * s, a = 3.1, d = randDir(), tb = Math.abs(gauss()) * 0.17; return [(a * Math.cos(t)) / den + d[0] * tb, (a * s * Math.cos(t)) / den + d[1] * tb, Math.sin(t * 2) * 0.35 + d[2] * tb]; });
}
/* open book */
export function book(N) {
  return out(N, () => {
    const side = Math.random() < 0.5 ? -1 : 1, u = Math.random(), v = rand(-1.6, 1.6), page = Math.floor(Math.random() * 5);
    const x = side * u * 2.5, z = Math.sin(u * Math.PI) * 0.5 + u * 0.4 - page * 0.06 * u;
    if (Math.random() < 0.3) { const e = Math.random() < 0.5 ? 1.6 : -1.6; return [x, e, z]; } // page edges
    return [x + gauss() * 0.01, v, z + gauss() * 0.01];
  });
}
/* two groups */
export function twoGroups(N) {
  return out(N, (i) => { const c = i % 2 ? 1.7 : -1.7, r = i % 2 ? 1.35 : 1.05, d = randDir(), rr = Math.random() < 0.7 ? r : r * Math.cbrt(Math.random()); return [c + d[0] * rr, (i % 2 ? -0.25 : 0.25) + d[1] * rr, d[2] * rr]; });
}
/* cascading slide deck */
export function slides(N) {
  const segs = [];
  for (let k = 0; k < 6; k++) { const ox = -1.0 + k * 0.4, oy = 0.9 - k * 0.36, oz = -1 + k * 0.4; segs.push(...boxEdges(ox, oy, oz, 2.6, 1.6, 0).slice(0, 4)); }
  const s = segSampler(segs);
  return out(N, () => { if (Math.random() < 0.75) return s(0.02); const k = Math.floor(Math.random() * 6); return [-1.0 + k * 0.4 + rand(-1.3, 1.3), 0.9 - k * 0.36 + rand(-0.8, 0.8), -1 + k * 0.4]; });
}
/* atom: nucleus + three orbits */
export function atom(N) {
  return out(N, () => {
    if (Math.random() < 0.22) { const d = randDir(), r = 0.55 * Math.cbrt(Math.random()); return [d[0] * r, d[1] * r, d[2] * r]; }
    const o = Math.floor(Math.random() * 3), a = rand(0, Math.PI * 2), R = 2.3 + gauss() * 0.04, x = Math.cos(a) * R, y = Math.sin(a) * R * 0.38;
    const rot = (o * Math.PI) / 3; return [x * Math.cos(rot) - y * Math.sin(rot), x * Math.sin(rot) + y * Math.cos(rot), Math.sin(a) * R * 0.3 * (o - 1)];
  });
}

/* screening funnel (systematic review): wide at the top, narrow at the bottom */
export function funnel(N) {
  return out(N, () => {
    const lv = Math.floor(Math.random() * 6), y = 2.2 - lv * 0.88, R = 2.5 * Math.pow(0.66, lv);
    if (Math.random() < 0.85) { const a = rand(0, Math.PI * 2); return [Math.cos(a) * R + gauss() * 0.03, y + gauss() * 0.03, Math.sin(a) * R + gauss() * 0.03]; }
    const t = Math.random(), a = rand(0, Math.PI * 2), yy = 2.2 - t * 4.4, rr = 2.5 * Math.pow(0.66, t * 5);
    return [Math.cos(a) * rr, yy, Math.sin(a) * rr];
  });
}
/* database: stacked discs */
export function dbStack(N) {
  return out(N, () => {
    const k = Math.floor(Math.random() * 3), y0 = -1.5 + k * 1.15, a = rand(0, Math.PI * 2), R = 1.9;
    const r = Math.random();
    if (r < 0.5) { const yy = y0 + (Math.random() < 0.5 ? 0 : 0.85); return [Math.cos(a) * R + gauss() * 0.02, yy, Math.sin(a) * R + gauss() * 0.02]; }
    if (r < 0.8) { return [Math.cos(a) * R, y0 + Math.random() * 0.85, Math.sin(a) * R]; }
    const rr = Math.sqrt(Math.random()) * R; return [Math.cos(a) * rr, y0 + 0.85, Math.sin(a) * rr];
  });
}


/* a puffy 3D heart */
export function heart(N) {
  return out(N, () => {
    const t = rand(0, Math.PI * 2), shell = Math.random() < 0.8, s = shell ? 1 : Math.cbrt(Math.random());
    const x = 16 * Math.pow(Math.sin(t), 3), y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
    const k = 0.135 * s, r = Math.hypot(x, y) / 17, z = (Math.random() < 0.5 ? -1 : 1) * Math.sqrt(Math.max(0, 1 - r * r)) * 0.9 * Math.random() ** (shell ? 0.15 : 1);
    return [x * k + gauss() * 0.03, y * k + 0.35 + gauss() * 0.03, z];
  });
}
/* a tree: trunk, branches and a leafy canopy (solarpunk) — mostly flat so it reads from the front */
export function tree(N) {
  const segs = [], tips = [];
  function branch(a, len, ang, depth, w) {
    const b = [a[0] + Math.sin(ang) * len, a[1] + Math.cos(ang) * len, a[2] + gauss() * 0.12];
    segs.push([a, b, w]);
    if (depth === 0) { tips.push(b); return; }
    const n = depth > 3 ? 2 : 3;
    for (let k = 0; k < n; k++) branch(b, len * 0.74, ang + (k - (n - 1) / 2) * 0.62 + gauss() * 0.1, depth - 1, w * 0.6);
  }
  branch([0, -2.6, 0], 1.25, 0, 5, 1);
  const L = segs.map(([a, b, w]) => Math.hypot(b[0] - a[0], b[1] - a[1]) * (0.4 + w)), tot = L.reduce((x, y) => x + y, 0);
  return out(N, () => {
    if (Math.random() < 0.45) {
      let r = Math.random() * tot, k = 0; while (r > L[k]) { r -= L[k]; k++; }
      const [a, b, w] = segs[k], t = Math.random(), th = 0.05 + w * 0.09;
      return [a[0] + (b[0] - a[0]) * t + gauss() * th, a[1] + (b[1] - a[1]) * t + gauss() * th, a[2] + (b[2] - a[2]) * t + gauss() * th];
    }
    const c = tips[Math.floor(Math.random() * tips.length)], d = randDir(), r = 0.38 * Math.cbrt(Math.random());
    return [c[0] + d[0] * r, c[1] + d[1] * r * 0.8, c[2] + d[2] * r * 0.6];
  });
}
