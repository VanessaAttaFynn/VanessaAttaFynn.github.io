/* Generative sound for the site — everything is synthesised with the Web Audio API (no audio files).
   Off by default; the visitor turns it on with the toggle. The choice is remembered across pages. */

const KEY = 'vaf-sound';
const VOL = 1.9; // overall loudness
// one chord per section (Hz): calm, slightly minor; the pad glides between them as you scroll
const CHORDS = [
  [110.0, 164.81, 220.0, 261.63],   // A  (Am)
  [98.0, 146.83, 196.0, 246.94],    // G
  [87.31, 130.81, 174.61, 220.0],   // F
  [130.81, 196.0, 261.63, 329.63],  // C
  [146.83, 220.0, 293.66, 349.23],  // Dm
  [123.47, 185.0, 246.94, 293.66],  // Bdim-ish
  [110.0, 164.81, 220.0, 329.63],   // A  (open)
  [98.0, 146.83, 196.0, 293.66],    // G
];

export function createSound() {
  let ctx = null, master, pad, padFilter, voices = [], air, reverb, on = false, section = 0;
  try { on = localStorage.getItem(KEY) === '1'; } catch (e) { /* storage blocked */ }

  function impulse(seconds = 3.2, decay = 2.6) {
    const len = ctx.sampleRate * seconds, buf = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let c = 0; c < 2; c++) { const d = buf.getChannelData(c); for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, decay); }
    return buf;
  }
  function noiseBuffer(seconds = 2) {
    const len = ctx.sampleRate * seconds, buf = ctx.createBuffer(1, len, ctx.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    return buf;
  }

  function build() {
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -18; comp.ratio.value = 3;
    master = ctx.createGain(); master.gain.value = 0;
    master.connect(comp).connect(ctx.destination);

    reverb = ctx.createConvolver(); reverb.buffer = impulse();
    const wet = ctx.createGain(); wet.gain.value = 0.55;
    reverb.connect(wet).connect(master);

    // ambient pad: detuned oscillators -> slow-moving lowpass
    padFilter = ctx.createBiquadFilter(); padFilter.type = 'lowpass'; padFilter.frequency.value = 700; padFilter.Q.value = 0.6;
    pad = ctx.createGain(); pad.gain.value = 0.11;
    padFilter.connect(pad); pad.connect(master); pad.connect(reverb);
    const lfo = ctx.createOscillator(), lfoAmt = ctx.createGain();
    lfo.frequency.value = 0.07; lfoAmt.gain.value = 260; lfo.connect(lfoAmt).connect(padFilter.frequency); lfo.start();
    CHORDS[0].forEach((f, i) => {
      ['sine', 'triangle'].forEach((type, j) => {
        const o = ctx.createOscillator(), g = ctx.createGain(), p = ctx.createStereoPanner();
        o.type = type; o.frequency.value = f; o.detune.value = (j ? 7 : -7) + (i - 1.5) * 2;
        g.gain.value = (type === 'sine' ? 0.22 : 0.08) / (1 + i * 0.35);
        p.pan.value = (i % 2 ? 0.35 : -0.35) * (j ? -1 : 1);
        o.connect(g).connect(p).connect(padFilter); o.start();
        voices.push({ o, i });
      });
    });

    // soft "air": filtered noise underneath
    const n = ctx.createBufferSource(); n.buffer = noiseBuffer(4); n.loop = true;
    const nf = ctx.createBiquadFilter(); nf.type = 'bandpass'; nf.frequency.value = 900; nf.Q.value = 0.4;
    air = ctx.createGain(); air.gain.value = 0.012;
    n.connect(nf).connect(air).connect(master); air.connect(reverb); n.start();

    setSection(section, true);
  }

  function fadeTo(v, t = 1.2) { if (!ctx) return; master.gain.cancelScheduledValues(ctx.currentTime); master.gain.setTargetAtTime(v, ctx.currentTime, t / 3); }

  function setSection(i, instant = false) {
    section = i;
    if (!ctx) return;
    const ch = CHORDS[i % CHORDS.length], tc = instant ? 0.01 : 0.9;
    voices.forEach(({ o, i: k }) => o.frequency.setTargetAtTime(ch[k], ctx.currentTime, tc));
    if (!instant) whoosh();
  }

  function env(node, peak, attack, release) {
    const t = ctx.currentTime;
    node.gain.setValueAtTime(0.0001, t);
    node.gain.exponentialRampToValueAtTime(peak, t + attack);
    node.gain.exponentialRampToValueAtTime(0.0001, t + attack + release);
  }

  function whoosh(up = true) {
    if (!ctx || !on) return;
    const s = ctx.createBufferSource(); s.buffer = noiseBuffer(1.6);
    const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.Q.value = 1.4;
    const g = ctx.createGain(), t = ctx.currentTime;
    f.frequency.setValueAtTime(up ? 250 : 2200, t); f.frequency.exponentialRampToValueAtTime(up ? 2200 : 220, t + 1.1);
    s.connect(f).connect(g); g.connect(master); g.connect(reverb);
    env(g, 0.09, 0.35, 1.0); s.start(t); s.stop(t + 1.6);
  }

  function tick(high = true) {
    if (!ctx || !on) return;
    const o = ctx.createOscillator(), g = ctx.createGain(), t = ctx.currentTime;
    o.type = 'sine';
    const f = (high ? 1760 : 880) * (1 + (Math.random() - 0.5) * 0.06);
    o.frequency.setValueAtTime(f, t); o.frequency.exponentialRampToValueAtTime(f * 0.6, t + 0.08);
    o.connect(g); g.connect(master); g.connect(reverb);
    env(g, high ? 0.035 : 0.06, 0.004, 0.09); o.start(t); o.stop(t + 0.15);
  }

  // rising tone while the loader counts (p: 0..1)
  let riser = null;
  function loaderProgress(p) {
    if (!ctx || !on || ctx.state !== 'running') return;
    if (!riser) {
      const o = ctx.createOscillator(), g = ctx.createGain(), f = ctx.createBiquadFilter();
      o.type = 'sawtooth'; f.type = 'lowpass'; f.frequency.value = 900; g.gain.value = 0.0001;
      o.connect(f).connect(g); g.connect(master); g.connect(reverb); o.start();
      riser = { o, g };
      g.gain.setTargetAtTime(0.03, ctx.currentTime, 0.2);
    }
    riser.o.frequency.setTargetAtTime(110 * Math.pow(2, p * 2), ctx.currentTime, 0.05);
    if (p >= 1) { const r = riser; r.g.gain.setTargetAtTime(0.0001, ctx.currentTime, 0.25); setTimeout(() => r.o.stop(), 1500); riser = null; chime(); }
  }
  function chime() {
    if (!ctx || !on) return;
    [880, 1318.5].forEach((f, k) => {
      const o = ctx.createOscillator(), g = ctx.createGain(), t = ctx.currentTime + k * 0.07;
      o.type = 'sine'; o.frequency.value = f; o.connect(g); g.connect(master); g.connect(reverb);
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.05, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + 1.4);
      o.start(t); o.stop(t + 1.5);
    });
  }

  // scroll speed opens the filter a little
  function scrollVelocity(v) {
    if (!ctx || !on) return;
    padFilter.frequency.setTargetAtTime(700 + Math.min(Math.abs(v) * 40, 1600), ctx.currentTime, 0.4);
  }

  async function enable() {
    if (!ctx) build();
    if (ctx.state !== 'running') { try { await ctx.resume(); } catch (e) { /* needs a gesture */ } }
    fadeTo(VOL, 1.6);
  }
  function setOn(v) {
    on = v;
    try { localStorage.setItem(KEY, v ? '1' : '0'); } catch (e) { /* ignore */ }
    document.body.classList.toggle('sound-on', on);
    if (on) enable(); else fadeTo(0, 0.6);
  }

  // if it was on during the last page, start as soon as the browser allows (first click / key)
  document.body.classList.toggle('sound-on', on);
  if (on) {
    build();
    const unlock = () => { enable(); removeEventListener('pointerdown', unlock, true); removeEventListener('keydown', unlock, true); };
    if (ctx.state === 'running') fadeTo(VOL, 1.6);
    else { addEventListener('pointerdown', unlock, true); addEventListener('keydown', unlock, true); }
  }

  return {
    get on() { return on; },
    toggle() { setOn(!on); if (on) setTimeout(() => tick(false), 60); },
    setSection, tick, whoosh, loaderProgress, scrollVelocity,
    leave() { if (on && ctx) { whoosh(false); fadeTo(0, 0.9); } },
  };
}
