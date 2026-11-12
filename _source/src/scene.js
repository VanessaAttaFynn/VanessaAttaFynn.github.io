import * as THREE from 'three';

export const C = {
  bg: new THREE.Color('#0d0403'),
  cream: new THREE.Color('#E8D2B5'),
  sage: new THREE.Color('#A5A79B'),
  hot: new THREE.Color('#c23a2c'),
};
const MAX = 8;

const vert = /* glsl */`
uniform float uTime, uMorph, uSize, uPR, uIntro, uWave, uMax, uCalm;
uniform vec3 uMouse;
attribute vec3 p1; attribute vec3 p2; attribute vec3 p3; attribute vec3 p4; attribute vec3 p5; attribute vec3 p6; attribute vec3 p7;
attribute vec4 aRand;
varying float vHot; varying float vMix; varying float vAlpha;
vec3 shapeAt(float i){
  if(i<0.5) return position; if(i<1.5) return p1; if(i<2.5) return p2; if(i<3.5) return p3;
  if(i<4.5) return p4; if(i<5.5) return p5; if(i<6.5) return p6; return p7;
}
void main(){
  float m = clamp(uMorph, 0., uMax);
  float fi = min(floor(m), uMax - 1.); float f = m - fi;
  float d = aRand.x * 0.42;
  float t = smoothstep(d, d + 0.58, f);
  vec3 p = mix(shapeAt(fi), shapeAt(fi + 1.), t);
  float sw = sin(t * 3.14159);
  float ph = aRand.w * 6.2831;
  p.y += uWave * 0.28 * sin(p.x * 1.25 + uTime * 1.1) * cos(p.z * 1.05 + uTime * 0.8);
  p += vec3(sin(uTime*.6+ph+p.y*1.3), cos(uTime*.5+ph+p.x*1.1), sin(uTime*.55+ph*1.3+p.z)) * (0.03 * (1. - 0.8 * uCalm) + sw * (0.35 + aRand.y * 0.9));
  vec3 dm = p - uMouse; float dist = length(dm);
  p += (dm / max(dist, 1e-3)) * smoothstep(1.5, 0., dist) * 0.6;
  vec3 dir = normalize(p + vec3(1e-3));
  p = mix(p + dir * (6. + aRand.y * 10.) + vec3(0., 0., 4.), p, smoothstep(aRand.x * .5, aRand.x * .5 + .5, uIntro));
  vec4 mv = modelViewMatrix * vec4(p, 1.);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = uSize * (0.45 + aRand.y) * (1. - 0.22 * uCalm) * uPR / -mv.z;
  vHot = step(0.9, aRand.z) * (1. - 0.85 * uCalm);
  vMix = aRand.z;
  vAlpha = 0.6 + 0.4 * sin(uTime * 1.4 + ph);
}`;
const frag = /* glsl */`
uniform vec3 uC1, uC2, uHot; uniform float uEnergy, uOpacity;
varying float vHot; varying float vMix; varying float vAlpha;
void main(){
  float d = length(gl_PointCoord - .5); if (d > .5) discard;
  float a = pow(smoothstep(.5, 0., d), 1.4);
  vec3 c = mix(uC1, uC2, smoothstep(.35, .8, vMix));
  c = mix(c, uHot * 1.5, vHot * (0.55 + uEnergy * 0.45));
  gl_FragColor = vec4(c, a * vAlpha * uOpacity);
}`;
const lineVert = /* glsl */`
attribute float aT; attribute float aOff;
varying float vT; varying float vOff;
void main(){ vT = aT; vOff = aOff; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }`;
const lineFrag = /* glsl */`
uniform float uTime, uLines; uniform vec3 uC, uHot;
varying float vT; varying float vOff;
void main(){
  float x = fract(vT - uTime * 0.45 + vOff);
  float pulse = exp(-pow((x - .5) * 16., 2.));
  gl_FragColor = vec4(mix(uC, uHot * 1.6, pulse), (0.06 + pulse * 0.75) * uLines);
}`;

/**
 * shapes: array (2..8) of (N)=>Float32Array
 * nets:   [{ index, net:{nodes,edges} }] — pulsing connection lines shown when that shape is active
 */
export function createScene(canvas, isMobile, shapes, nets = []) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  const PR = Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2);
  renderer.setPixelRatio(PR);
  renderer.setSize(innerWidth, innerHeight, false);
  renderer.setClearColor(C.bg, 1);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, innerWidth / innerHeight, 0.1, 100);
  camera.position.set(0, 0, 9);

  const N = isMobile ? 3800 : 9000;
  const geo = new THREE.BufferGeometry();
  const built = shapes.slice(0, MAX).map((f) => f(N));
  for (let k = 0; k < MAX; k++) geo.setAttribute(k === 0 ? 'position' : `p${k}`, new THREE.BufferAttribute(built[Math.min(k, built.length - 1)], 3));
  const r = new Float32Array(N * 4);
  for (let i = 0; i < N * 4; i++) r[i] = Math.random();
  geo.setAttribute('aRand', new THREE.BufferAttribute(r, 4));

  const uniforms = {
    uTime: { value: 0 }, uMorph: { value: 0 }, uMax: { value: built.length - 1 },
    uSize: { value: isMobile ? 32 : 40 }, uPR: { value: PR },
    uIntro: { value: 0 }, uWave: { value: 0 }, uCalm: { value: 0 }, uMouse: { value: new THREE.Vector3(99, 99, 99) },
    uC1: { value: C.cream }, uC2: { value: C.sage }, uHot: { value: C.hot },
    uEnergy: { value: 0 }, uOpacity: { value: isMobile ? 0.7 : 1 },
  };
  const points = new THREE.Points(geo, new THREE.ShaderMaterial({ vertexShader: vert, fragmentShader: frag, uniforms, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
  points.frustumCulled = false;
  const group = new THREE.Group();
  group.add(points);

  const lineSets = nets.map(({ index, net }) => {
    const lp = [], lt = [], lo = [];
    net.edges.forEach(([i, k]) => { const A = net.nodes[i].p, B = net.nodes[k].p, off = Math.random(); lp.push(...A, ...B); lt.push(0, 1); lo.push(off, off); });
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(lp, 3));
    g.setAttribute('aT', new THREE.Float32BufferAttribute(lt, 1));
    g.setAttribute('aOff', new THREE.Float32BufferAttribute(lo, 1));
    const u = { uTime: uniforms.uTime, uLines: { value: 0 }, uC: { value: C.cream }, uHot: { value: C.hot } };
    group.add(new THREE.LineSegments(g, new THREE.ShaderMaterial({ vertexShader: lineVert, fragmentShader: lineFrag, uniforms: u, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending })));
    return { index, u };
  });
  scene.add(group);

  const dN = isMobile ? 500 : 1400, dp = new Float32Array(dN * 3);
  for (let i = 0; i < dN; i++) dp.set([Math.random() * 28 - 14, Math.random() * 18 - 9, Math.random() * 14 - 12], i * 3);
  const dg = new THREE.BufferGeometry(); dg.setAttribute('position', new THREE.BufferAttribute(dp, 3));
  const dust = new THREE.Points(dg, new THREE.PointsMaterial({ color: C.sage, size: 0.025, transparent: true, opacity: 0.35, depthWrite: false }));
  scene.add(dust);

  function resize() { camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix(); renderer.setSize(innerWidth, innerHeight, false); }
  return { renderer, scene, camera, group, uniforms, lineSets, dust, resize };
}
