import * as S from './shapes.js';

/* Each page: list of shapes (one per [data-s] section) and where each sits.
   place = [x, y, scale, tiltX, spin]  (desktop). Mobile is centred automatically. */
const homeNet = S.makeNet([4, 7, 7, 3]);
const pipeline = S.makeNet([1, 5, 7, 5, 1], 6.8, 0.62);
const framework = S.makeNet([1, 4, 6, 4, 1], 6.8, 0.7);

const resNet = S.makeNet([4, 7, 7, 3]);
const pxd = S.makeNet([2, 1], 4.6, 2.6, 0.32);

export const PAGES = {
  research: {
    // intro · the question · SLR · CAL-ENERGY · CAL-TRANSFER · what's next · contact
    shapes: [resNet.fn, S.grid, S.funnel, pxd.fn, S.cubes, S.dbStack, S.galaxy],
    place: [[3.0, 0.1, 0.55, 0, 0], [3.1, -0.3, 0.6, 0.85, 0.3], [-3.0, 0, 0.88, 0.25, 1], [2.85, 0, 0.75, 0, 0], [-3.0, 0, 0.85, 0.45, 1], [3.0, 0, 0.88, 0.3, 0.6], [0, -0.3, 1.1, 1.08, 0.5]],
    nets: [{ index: 0, net: resNet }, { index: 3, net: pxd }],
    wave: 1,
  },
  home: {
    // intro · about · work · experience · research · explore · contact
    shapes: [S.sphere, S.sphere, S.grid, S.helix, homeNet.fn, S.knot, S.galaxy],
    place: [[2.55, 0.15, 0.95, 0, 1], [4.3, 1.7, 0.42, 0, 1], [-2.9, -0.2, 0.9, 0.85, 0.3], [3.1, 0, 0.95, 0, 1], [0, 0.1, 1, 0, 0], [0, -1.15, 0.68, 0, 1], [0, -0.3, 1.1, 1.08, 0.5]],
    nets: [{ index: 4, net: homeNet }],
    wave: 2,
  },
  projects: {
    // intro · UGAbstracts · DataForge · Applied ML · Tenant app · NPRA · contact
    shapes: [S.clusters(6, 2.1, 0.55), pipeline.fn, S.cubes, S.iris, S.house, S.pillars, S.galaxy],
    place: [[2.7, 0, 0.95, 0, 0.8], [2.95, 0.2, 0.56, 0, 0], [-3.1, 0, 0.95, 0.45, 1], [3.1, 0, 0.95, 0, 0.35], [-3.0, 0.1, 0.95, 0.22, 1], [3.0, -0.1, 0.9, 0.1, 0], [0, -0.3, 1.1, 1.08, 0.5]],
    nets: [{ index: 1, net: pipeline }],
  },
  leadership: {
    // intro · the role · the framework · the build · reflection · contact
    shapes: [S.star, S.clusters(7, 2.1, 0.42), framework.fn, S.cubes, S.lemniscate, S.galaxy],
    place: [[2.7, 0, 0.9, 0, 0], [2.9, 0, 0.85, 0, 0], [-2.95, 0.1, 0.56, 0, 0], [2.9, 0, 0.8, 0.45, 1], [2.9, 0, 0.62, 0.2, 0.5], [0, -0.3, 1.1, 1.08, 0.5]],
    nets: [{ index: 2, net: framework }],
  },
  teaching: {
    // intro · two groups · case study · approach · contact
    shapes: [S.book, S.twoGroups, S.slides, S.atom, S.galaxy],
    place: [[2.75, 0, 0.8, -0.35, 0.4], [2.85, 0, 0.7, 0, 0.5], [-3.0, 0, 0.92, 0.2, 0.25], [2.9, 0, 0.85, 0.3, 0.35], [0, -0.3, 1.1, 1.08, 0.5]],
    nets: [],
  },
};
