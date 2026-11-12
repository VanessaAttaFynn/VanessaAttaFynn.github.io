import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { createScene } from './scene.js';
import { PAGES } from './pages.js';

gsap.registerPlugin(ScrollTrigger);

const page = PAGES[document.body.dataset.page] || PAGES.home;
const isMobile = matchMedia('(max-width: 860px)').matches;
const isTouch = matchMedia('(hover: none)').matches;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------------- smooth scroll ---------------- */
const lenis = new Lenis({ duration: 1.25, smoothWheel: true });
window.__lenis = lenis;
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((t) => lenis.raf(t * 1000));
gsap.ticker.lagSmoothing(0);
document.querySelectorAll('a[href^="#"]').forEach((a) => a.addEventListener('click', (e) => {
  const id = a.getAttribute('href'); if (id.length < 2) return;
  e.preventDefault(); lenis.scrollTo(id, { duration: 1.8 });
}));

/* ---------------- page transitions ---------------- */
const loader = document.getElementById('loader');
document.querySelectorAll('a[href]').forEach((a) => {
  const href = a.getAttribute('href');
  if (!href || href.startsWith('#') || /^(https?:|mailto:|tel:)/.test(href) || a.target === '_blank') return;
  a.addEventListener('click', (e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey) return;
    e.preventDefault();
    loader.querySelector('.l-num').textContent = '000';
    loader.querySelector('.l-label').textContent = 'Initialising network';
    gsap.set('.loader-bar i', { scaleX: 0 });
    gsap.fromTo(loader, { yPercent: 100 }, { yPercent: 0, duration: 0.75, ease: 'expo.inOut', onComplete: () => { location.href = href; } });
  });
});
addEventListener('pageshow', (e) => { if (e.persisted) gsap.set(loader, { yPercent: -100 }); });

/* ---------------- 3D ---------------- */
const S = createScene(document.getElementById('gl'), isMobile, page.shapes, page.nets);
addEventListener('resize', () => { S.resize(); measure(); });

const KEY = page.place.map((p, i) => (isMobile ? [0, i === 0 ? 0.7 : 0, p[2] * 0.66, p[3], p[4]] : p));
const sections = [...document.querySelectorAll('[data-s]')];
let tops = [];
function measure() { tops = sections.map((s) => s.getBoundingClientRect().top + scrollY); }
measure(); addEventListener('load', measure); setTimeout(measure, 1200);

const st = { morph: 0, x: KEY[0][0], y: KEY[0][1], s: KEY[0][2], tilt: KEY[0][3], spin: KEY[0][4], angle: 0 };
const mouse = { x: 0, y: 0, sx: 0, sy: 0 };
const ray = new THREE.Raycaster(), plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0), hit = new THREE.Vector3();
addEventListener('pointermove', (e) => { mouse.x = (e.clientX / innerWidth) * 2 - 1; mouse.y = -(e.clientY / innerHeight) * 2 + 1; });

const smooth = (t) => t * t * (3 - 2 * t);
const lerp = (a, b, t) => a + (b - a) * t;
function target() {
  const mid = scrollY + innerHeight * 0.55;
  let i = 0; for (let k = 0; k < tops.length; k++) if (mid >= tops[k]) i = k;
  i = Math.min(i, KEY.length - 1);
  if (i === 0) return { m: 0, a: KEY[0], b: KEY[0], t: 0 };
  const t = smooth(Math.min(Math.max((mid - tops[i]) / (innerHeight * 0.65), 0), 1));
  return { m: i - 1 + t, a: KEY[i - 1], b: KEY[i], t };
}

const hudE = document.getElementById('energy'), hudN = document.getElementById('secnum');
const hudT = document.getElementById('sectot'); if (hudT) hudT.textContent = String(sections.length).padStart(2, '0');
const dots = [...document.querySelectorAll('.dots a')];
let last = performance.now(), currentSec = -1;

gsap.ticker.add(() => {
  const now = performance.now(), dt = Math.min((now - last) / 1000, 0.05); last = now;
  const u = S.uniforms; u.uTime.value += dt;
  const T = target(), k = 1 - Math.pow(0.0025, dt);
  st.morph = lerp(st.morph, T.m, k);
  st.x = lerp(st.x, lerp(T.a[0], T.b[0], T.t), k);
  st.y = lerp(st.y, lerp(T.a[1], T.b[1], T.t), k);
  st.s = lerp(st.s, lerp(T.a[2], T.b[2], T.t), k);
  st.tilt = lerp(st.tilt, lerp(T.a[3], T.b[3], T.t), k);
  st.spin = lerp(st.spin, lerp(T.a[4], T.b[4], T.t), k);
  if (st.spin > 0.15) st.angle += dt * 0.16 * st.spin;
  else { const full = Math.round(st.angle / (Math.PI * 2)) * Math.PI * 2; st.angle = lerp(st.angle, full, 1 - Math.pow(0.004, dt)); }
  mouse.sx = lerp(mouse.sx, mouse.x, 1 - Math.pow(0.02, dt));
  mouse.sy = lerp(mouse.sy, mouse.y, 1 - Math.pow(0.02, dt));

  const g = S.group;
  g.position.set(st.x, st.y, 0);
  g.scale.setScalar(st.s);
  g.rotation.set(st.tilt + mouse.sy * 0.12, st.angle + mouse.sx * 0.25, 0);
  S.camera.position.x = mouse.sx * 0.35; S.camera.position.y = mouse.sy * 0.25;
  S.camera.lookAt(0, 0, 0);
  S.dust.rotation.y += dt * 0.01;

  u.uMorph.value = st.morph;
  u.uWave.value = page.wave != null ? Math.max(0, 1 - Math.abs(st.morph - page.wave) * 1.4) : 0;
  u.uCalm.value = page.calm != null ? Math.max(0, 1 - Math.abs(st.morph - page.calm) * 1.5) : 0;
  S.lineSets.forEach((L) => { L.u.uLines.value = Math.max(0, 1 - Math.abs(st.morph - L.index) * 1.6); });

  if (!isTouch) {
    g.updateMatrixWorld();
    ray.setFromCamera({ x: mouse.x, y: mouse.y }, S.camera);
    if (ray.ray.intersectPlane(plane, hit)) u.uMouse.value.copy(g.worldToLocal(hit.clone()));
  }

  const max = document.documentElement.scrollHeight - innerHeight;
  const p = max > 0 ? scrollY / max : 0;
  u.uEnergy.value = p;
  if (hudE) hudE.textContent = (p * 0.742).toFixed(3);
  const sec = Math.round(st.morph);
  if (sec !== currentSec) {
    currentSec = sec;
    if (hudN) hudN.textContent = String(sec + 1).padStart(2, '0');
    dots.forEach((d, j) => d.classList.toggle('on', j === sec));
  }
  S.renderer.render(S.scene, S.camera);
});

/* ---------------- text splitting ---------------- */
document.querySelectorAll('[data-split]').forEach((el) => {
  const walk = (node) => {
    [...node.childNodes].forEach((c) => {
      if (c.nodeType === 3) {
        const frag = document.createDocumentFragment();
        c.textContent.split(/(\s+)/).forEach((w) => {
          if (!w) return;
          if (/^\s+$/.test(w)) { frag.append(' '); return; }
          const o = document.createElement('span'); o.className = 'w';
          const i = document.createElement('span'); i.className = 'wi'; i.textContent = w;
          o.append(i); frag.append(o);
        });
        c.replaceWith(frag);
      } else if (c.nodeType === 1) walk(c);
    });
  };
  walk(el);
});
document.querySelectorAll('[data-chars]').forEach((el) => {
  el.innerHTML = [...el.textContent].map((ch) => `<span class="ch"><span class="chi">${ch}</span></span>`).join('');
});

/* ---------------- intro ---------------- */
const loaderNum = document.getElementById('lnum');
const quick = reduce;
const intro = gsap.timeline({ paused: true });
if (quick) {
  loaderNum.textContent = document.body.dataset.title || '';
  document.querySelector('.l-label').textContent = '';
  gsap.set('.loader-bar i', { scaleX: 1 });
  intro.to('#loader', { yPercent: -100, duration: 0.95, ease: 'expo.inOut', delay: 0.25 });
} else {
  const cnt = { v: 0 };
  intro
    .to(cnt, { v: 100, duration: 1.6, ease: 'power2.inOut', onUpdate: () => { loaderNum.textContent = String(Math.round(cnt.v)).padStart(3, '0'); } })
    .to('.loader-bar i', { scaleX: 1, duration: 1.6, ease: 'power2.inOut' }, 0)
    .to('#loader', { yPercent: -100, duration: 1.1, ease: 'expo.inOut' }, '+=0.15');
}
intro
  .to(S.uniforms.uIntro, { value: 1, duration: quick ? 2 : 2.6, ease: 'power3.out' }, '-=0.9')
  .from('.hero .chi', { yPercent: 115, duration: 1.1, ease: 'expo.out', stagger: 0.035 }, quick ? '-=1.7' : '-=2.3')
  .from('.hero [data-split] .wi', { yPercent: 115, duration: 1.1, ease: 'expo.out', stagger: 0.05 }, '<')
  .from('.hero .rv', { y: 30, opacity: 0, duration: 0.9, ease: 'power3.out', stagger: 0.08 }, '-=0.8')
  .from('nav, .hud, .dots', { opacity: 0, duration: 0.8 }, '-=1');
lenis.stop();
let started = false;
const go = () => { if (started) return; started = true; intro.play().then(() => lenis.start()); };
if (document.readyState === 'complete') go(); else addEventListener('load', go);
setTimeout(go, 2500);

/* ---------------- scroll reveals ---------------- */
gsap.utils.toArray('section:not(.hero) [data-split]').forEach((el) => {
  gsap.from(el.querySelectorAll('.wi'), { yPercent: 110, duration: 1.1, ease: 'expo.out', stagger: 0.04, scrollTrigger: { trigger: el, start: 'top 85%' } });
});
ScrollTrigger.batch('section:not(.hero) .rv', {
  start: 'top 90%',
  onEnter: (els) => gsap.from(els, { y: 50, opacity: 0, duration: 1, ease: 'power3.out', stagger: 0.09, overwrite: true }),
});
if (document.querySelector('.band')) {
  gsap.to('.band-track', { xPercent: -50, ease: 'none', duration: 30, repeat: -1 });
  gsap.to('.band', { xPercent: -8, ease: 'none', scrollTrigger: { trigger: '.band', start: 'top bottom', end: 'bottom top', scrub: true } });
}
document.querySelectorAll('[data-count]').forEach((el) => {
  const to = +el.dataset.count, suf = el.dataset.suffix || '', o = { v: 0 };
  const inHero = !!el.closest('.hero');
  ScrollTrigger.create({ trigger: el, start: 'top 95%', once: true, onEnter: () => gsap.to(o, { v: to, duration: 1.6, delay: inHero ? (quick ? 1.2 : 2.4) : 0.2, ease: 'power3.out', onUpdate: () => { el.textContent = Math.round(o.v) + suf; } }) });
});

/* ---------------- cursor, magnetic buttons, tilt cards ---------------- */
if (!isTouch) {
  const dot = document.querySelector('.cur-dot'), ring = document.querySelector('.cur-ring');
  const qx = gsap.quickTo(ring, 'x', { duration: 0.45, ease: 'power3' }), qy = gsap.quickTo(ring, 'y', { duration: 0.45, ease: 'power3' });
  addEventListener('pointermove', (e) => { gsap.set(dot, { x: e.clientX, y: e.clientY }); qx(e.clientX); qy(e.clientY); });
  document.querySelectorAll('a, button, .tilt').forEach((el) => {
    el.addEventListener('pointerenter', () => document.body.classList.add('hovering'));
    el.addEventListener('pointerleave', () => document.body.classList.remove('hovering'));
  });
  document.querySelectorAll('.mag').forEach((el) => {
    el.addEventListener('pointermove', (e) => { const r = el.getBoundingClientRect(); gsap.to(el, { x: (e.clientX - r.left - r.width / 2) * 0.3, y: (e.clientY - r.top - r.height / 2) * 0.4, duration: 0.4, ease: 'power3' }); });
    el.addEventListener('pointerleave', () => gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1,0.4)' }));
  });
  document.querySelectorAll('.tilt').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect(), px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5;
      gsap.to(el, { rotateY: px * 6, rotateX: -py * 6, duration: 0.5, ease: 'power3', transformPerspective: 1000 });
      el.style.setProperty('--mx', `${(px + 0.5) * 100}%`); el.style.setProperty('--my', `${(py + 0.5) * 100}%`);
    });
    el.addEventListener('pointerleave', () => gsap.to(el, { rotateY: 0, rotateX: 0, duration: 0.8, ease: 'power3' }));
  });
}

/* ---------------- nav state ---------------- */
const nav = document.querySelector('nav');
lenis.on('scroll', ({ scroll }) => nav.classList.toggle('scrolled', scroll > 60));
