"""Turn the portrait photo into a particle point cloud (Int16 xyz, base64) for the site."""
import sys, base64, numpy as np
from PIL import Image, ImageFilter
src, out, N = sys.argv[1], sys.argv[2], 9000
rng = np.random.default_rng(7)
im = Image.open(src).convert('RGBA')
W, H = im.size
a = np.array(im)[..., 3] / 255.0
g = np.array(im.convert('L')).astype(float) / 255.0
g = g * a + (1 - a)                                   # transparent -> white
mask = (g < 0.93).astype(float)                       # subject = anything not near-white background
mask = np.array(Image.fromarray((mask * 255).astype(np.uint8)).filter(ImageFilter.MinFilter(3))) / 255.0
gs = np.array(Image.fromarray((g * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(1.2))).astype(float) / 255.0
gx = np.abs(np.diff(gs, axis=1, append=gs[:, -1:])); gy = np.abs(np.diff(gs, axis=0, append=gs[-1:, :]))
edge = np.clip((gx + gy) * 9, 0, 1)
w_fill = mask * (0.04 + g ** 3)                   # positive image: highlights denser
w_edge = mask * edge ** 2.2
def pick(w, n):
    p = (w / w.sum()).ravel()
    idx = rng.choice(p.size, n, p=p)
    y, x = np.divmod(idx, W)
    return x + rng.random(n), y + rng.random(n)
nf = int(N * 0.5); xe, ye = pick(w_edge, N - nf); xf, yf = pick(w_fill, nf)
x = np.concatenate([xf, xe]); y = np.concatenate([yf, ye])
s = 4.8 / H                                            # ~4.8 units tall
X = (x - W / 2) * s; Y = -(y - H * 0.47) * s
bri = gs[np.clip(y.astype(int), 0, H - 1), np.clip(x.astype(int), 0, W - 1)]
cx, cy = W / 2 * s, 0
Z = (bri - 0.5) * 0.15 + 0.7 * np.exp(-((X) ** 2 + (Y - 0.2) ** 2) / 3.0)  # gentle relief: face forward
P = np.stack([X, Y, Z], 1)
P = P[rng.permutation(N)]
q = np.clip(np.round(P * 4000), -32767, 32767).astype('<i2')
open(out, 'w').write('export const PORTRAIT = "' + base64.b64encode(q.tobytes()).decode() + '";\n')
# preview
import matplotlib; matplotlib.use('Agg'); import matplotlib.pyplot as plt
fig = plt.figure(figsize=(5, 5), facecolor='#0d0403'); ax = fig.add_axes([0, 0, 1, 1]); ax.set_facecolor('#0d0403')
ax.scatter(P[:, 0], P[:, 1], s=0.9, c='#E8D2B5', alpha=0.7, linewidths=0); ax.set_aspect('equal'); ax.axis('off')
fig.savefig('/tmp/shots/portrait_preview.png', dpi=140, facecolor='#0d0403')
print('ok', len(q))
