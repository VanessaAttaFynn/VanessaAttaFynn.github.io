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

/* fantasy castle: walls with battlements, an arched gate, round towers with pointed roofs and flags */
export function castle(N) {
  const segs = [], y0 = -1.9;
  // towers: [x, z, radius, height]
  const towers = [[-2.3, 0, 0.42, 2.4], [2.3, 0, 0.42, 2.4], [-0.95, -0.5, 0.36, 3.1], [0.95, -0.5, 0.36, 3.1], [0, -0.9, 0.5, 3.9]];
  // curtain wall between outer towers
  const wallH = 1.5, wz = 0.25;
  segs.push([[-2.3, y0, wz], [2.3, y0, wz]], [[-2.3, y0 + wallH, wz], [2.3, y0 + wallH, wz]]);
  for (let k = 0; k < 14; k++) { // battlements along the wall top
    const x = -2.05 + k * 0.315, y = y0 + wallH;
    segs.push([[x, y, wz], [x, y + 0.18, wz]], [[x, y + 0.18, wz], [x + 0.16, y + 0.18, wz]], [[x + 0.16, y + 0.18, wz], [x + 0.16, y, wz]]);
  }
  // arched gate
  const gate = [];
  for (let k = 0; k <= 16; k++) { const a = Math.PI * k / 16; gate.push([Math.cos(a) * 0.42, y0 + 0.75 + Math.sin(a) * 0.42, wz]); }
  segs.push([[-0.42, y0, wz], gate[16]], [[0.42, y0, wz], gate[0]]);
  for (let k = 0; k < 16; k++) segs.push([gate[k], gate[k + 1]]);
  // windows on the keep
  [[-0.14, 1.3], [0.14, 1.3], [0, 2.1]].forEach(([x, y]) => segs.push(...[[[x - 0.07, y0 + y, -0.4], [x + 0.07, y0 + y, -0.4]], [[x - 0.07, y0 + y + 0.22, -0.4], [x + 0.07, y0 + y + 0.22, -0.4]], [[x - 0.07, y0 + y, -0.4], [x - 0.07, y0 + y + 0.22, -0.4]], [[x + 0.07, y0 + y, -0.4], [x + 0.07, y0 + y + 0.22, -0.4]]]));
  // flags on top of each roof
  towers.forEach(([x, z, r, h]) => { const top = y0 + h + r * 2.2; segs.push([[x, top, z], [x, top + 0.35, z]], [[x, top + 0.35, z], [x + 0.25, top + 0.27, z]], [[x + 0.25, top + 0.27, z], [x, top + 0.2, z]]); });
  const s = segSampler(segs);
  const tw = towers.map(([, , r, h]) => r * h), twTot = tw.reduce((a, b) => a + b, 0);
  return out(N, () => {
    const q = Math.random();
    if (q < 0.5) { // tower walls + cone roofs
      let p = Math.random() * twTot, k = 0; while (p > tw[k]) { p -= tw[k]; k++; }
      const [x, z, r, h] = towers[k], a = rand(0, Math.PI * 2);
      if (Math.random() < 0.68) { const y = rand(y0, y0 + h); return [x + Math.cos(a) * r, y, z + Math.sin(a) * r]; }
      const t = Math.random(), rr = (r + 0.1) * (1 - t);                       // pointed roof, slightly overhanging
      return [x + Math.cos(a) * rr, y0 + h + t * r * 2.2, z + Math.sin(a) * rr];
    }
    if (q < 0.57) return [rand(-2.3, 2.3), rand(y0, y0 + wallH), wz + gauss() * 0.01];  // faint wall fill
    return s(0.022);
  });
}

/* a seedling 🌱: soil mound, curved stem, two leaves */
export function sprout(N) {
  // stem: gentle S-curve from soil to the leaf joint
  const stem = (t) => [Math.sin(t * Math.PI) * 0.18, -1.6 + t * 2.3, 0];
  // leaf outline: a pointed oval from the joint outward, tilted up
  function leaf(side) {
    const base = stem(1), len = 1.9, wid = 0.75, ang = side > 0 ? 0.42 : Math.PI - 0.42;
    return (u, v) => { // u along leaf 0..1, v across -1..1
      const w = Math.sin(Math.PI * u) * wid * Math.pow(1 - u, 0.15), lx = u * len, ly = v * w * 0.5 + Math.sin(u * Math.PI) * 0.25;
      return [base[0] + lx * Math.cos(ang) - ly * Math.sin(ang), base[1] + lx * Math.sin(ang) + ly * Math.cos(ang), v * 0.08 * (1 - u)];
    };
  }
  const L = leaf(1), R = leaf(-1);
  return out(N, () => {
    const q = Math.random();
    if (q < 0.14) { const t = Math.random(), p = stem(t), a = rand(0, Math.PI * 2); return [p[0] + Math.cos(a) * 0.06, p[1], Math.sin(a) * 0.06]; }
    if (q < 0.74) { // leaves: outline + midrib + light fill
      const f = Math.random() < 0.5 ? L : R, u = Math.random(), r = Math.random();
      const v = r < 0.45 ? (Math.random() < 0.5 ? -1 : 1) : r < 0.6 ? 0 : rand(-1, 1);
      const p = f(u, v); return [p[0] + gauss() * 0.015, p[1] + gauss() * 0.015, p[2]];
    }
    // soil mound
    const x = rand(-1.6, 1.6), h = 0.45 * Math.pow(Math.max(0, 1 - (x / 1.6) ** 2), 1.2), z = rand(-0.6, 0.6) * (1 - Math.abs(x) / 1.6);
    return Math.random() < 0.55 ? [x, -1.75 + h + gauss() * 0.02, z * 0.4] : [x, -1.75 + Math.random() * h, z];
  });
}

/* a smartphone: rounded body, screen with app tiles, notch and home bar (PDE mobile app) */
export function phone(N) {
  const W = 2.3, H = 4.5, R = 0.38, segs = [];
  const rr = (w, h, r, z) => { // rounded rectangle outline at depth z
    const s = [], k = 6;
    const corners = [[w / 2 - r, h / 2 - r, 0], [-w / 2 + r, h / 2 - r, Math.PI / 2], [-w / 2 + r, -h / 2 + r, Math.PI], [w / 2 - r, -h / 2 + r, 1.5 * Math.PI]];
    const pts = [];
    corners.forEach(([cx, cy, a0]) => { for (let i = 0; i <= k; i++) { const a = a0 + (i / k) * Math.PI / 2; pts.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r, z]); } });
    for (let i = 0; i < pts.length; i++) s.push([pts[i], pts[(i + 1) % pts.length]]);
    return s;
  };
  segs.push(...rr(W, H, R, 0.12), ...rr(W, H, R, -0.12), ...rr(W - 0.22, H - 0.22, R * 0.8, 0.13));
  segs.push([[-0.28, H / 2 - 0.26, 0.13], [0.28, H / 2 - 0.26, 0.13]]);       // notch
  segs.push([[-0.42, -H / 2 + 0.24, 0.13], [0.42, -H / 2 + 0.24, 0.13]]);    // home bar
  // app tiles: 3 x 4 grid of small rounded squares
  for (let r = 0; r < 4; r++) for (let c = 0; c < 3; c++) segs.push(...rr(0.42, 0.42, 0.1, 0.13).map(([a, b]) => [[a[0] + (c - 1) * 0.62, a[1] + 1.15 - r * 0.62, a[2]], [b[0] + (c - 1) * 0.62, b[1] + 1.15 - r * 0.62, b[2]]]));
  // a wide card at the bottom of the screen
  segs.push(...rr(1.7, 0.55, 0.14, 0.13).map(([a, b]) => [[a[0], a[1] - 1.45, a[2]], [b[0], b[1] - 1.45, b[2]]]));
  const s = segSampler(segs);
  return out(N, () => (Math.random() < 0.9 ? s(0.018) : [rand(-W / 2 + 0.15, W / 2 - 0.15), rand(-H / 2 + 0.15, H / 2 - 0.15), 0.13]));
}

/* graduation cap: square board seen at an angle, skull cap underneath, button and hanging tassel */
export function gradCap(N) {
  const segs = [], S = 2.4, top = 0.55;
  const c = [[-S, top, 0], [0, top + 0.12, S * 0.62], [S, top, 0], [0, top - 0.12, -S * 0.62]]; // diamond board
  for (let k = 0; k < 4; k++) { const a = c[k], b = c[(k + 1) % 4]; segs.push([a, b], [[a[0], a[1] - 0.12, a[2]], [b[0], b[1] - 0.12, b[2]]], [a, [a[0], a[1] - 0.12, a[2]]]); }
  // tassel: from the button to a corner, then hanging down
  const btn = [0, top + 0.06, 0], corner = [S * 0.92, top - 0.02, 0.05], hang = [S * 0.92, top - 1.5, 0.05];
  segs.push([btn, corner], [corner, hang]);
  for (let k = 0; k < 7; k++) segs.push([hang, [hang[0] + (k - 3) * 0.05, hang[1] - 0.45, hang[2] + (k % 2) * 0.05]]); // fringe
  const s = segSampler(segs);
  return out(N, () => {
    const q = Math.random();
    if (q < 0.3) { // board surface
      const u = Math.random(), v = Math.random();
      const p = [c[0][0] + (c[1][0] - c[0][0]) * u + (c[3][0] - c[0][0]) * v, c[0][1] + (c[1][1] - c[0][1]) * u + (c[3][1] - c[0][1]) * v, c[0][2] + (c[1][2] - c[0][2]) * u + (c[3][2] - c[0][2]) * v];
      return [p[0] + (Math.random() < 0.5 ? S : 0) * 0, p[1], p[2]];
    }
    if (q < 0.5) { // skull cap: a short rounded band under the board
      const a = rand(0, Math.PI * 2), h = rand(0, 1);
      const r = 1.2 * (1 - 0.12 * h * h);
      return [Math.cos(a) * r, top - 0.15 - h * 0.75, Math.sin(a) * r * 0.8];
    }
    if (q < 0.53) { const d = randDir(); return [d[0] * 0.12, top + 0.1 + d[1] * 0.08, d[2] * 0.12]; } // button
    return s(0.025);
  });
}
