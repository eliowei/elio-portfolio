"""Splits pose-lifted.webp into body + two hands so the hands can swing on their own (see SketchbookJourney.vue).
Run after changing pose-lifted.webp:  python scripts/split-lifted-hands.py   (needs numpy + Pillow)
The pivots printed at the end are the transform-origin values used in sketchbook.css (.journey-ghost-hand-l/-r)."""
import os
import numpy as np
from PIL import Image, ImageFilter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
base = os.path.join(ROOT, 'public', 'images', 'sketchbook')
out = base  # writes pose-lifted-body / -hand-l / -hand-r next to pose-lifted.webp
os.makedirs(out, exist_ok=True)

im = Image.open(os.path.join(base, 'pose-lifted.webp')).convert('RGBA')
w, h = im.size
rgba = np.asarray(im).astype(np.float32)
r, g, b, al = rgba[..., 0], rgba[..., 1], rgba[..., 2], rgba[..., 3]
skin = (al > 60) & (r > 190) & (g > 125) & (b > 90) & (r - b > 40)
yy, xx = np.mgrid[0:h, 0:w]
roi_y = (yy >= int(.535 * h)) & (yy <= int(.69 * h))
rois = {'hand-l': roi_y & (xx < int(.40 * w)), 'hand-r': roi_y & (xx > int(.60 * w))}
dark = (al > 200) & (rgba[..., :3].max(axis=2) < 125)   # trouser hatch / outlines


def dilate(mask, size):
    m = Image.fromarray((mask * 255).astype(np.uint8), 'L')
    return np.asarray(m.filter(ImageFilter.MaxFilter(size))) > 0


body = rgba.copy()
pivots = {}
for name, roi in rois.items():
    core = skin & roi
    hand = dilate(core, 7) & (al > 20)                         # the hand plus its outline: goes to the hand layer
    erase = hand                                               # exactly the hand: body + hand layer rebuild the original when at rest
    soft = np.asarray(Image.fromarray((hand * 255).astype(np.uint8), 'L').filter(ImageFilter.GaussianBlur(.6))).astype(np.float32) / 255
    layer = rgba.copy()
    layer[..., 3] = rgba[..., 3] * soft
    Image.fromarray(np.clip(layer, 0, 255).astype(np.uint8), 'RGBA').save(os.path.join(out, 'pose-lifted-' + name + '.webp'), 'WEBP', quality=94, method=6)

    # erase from the body with the complementary soft mask (body alpha + hand alpha = original alpha)
    body[..., 3] = body[..., 3] * (1 - soft)

    # patch the trousers edge the hand used to cover: texture copied from further inside the trousers
    inward = 1 if name == 'hand-l' else -1
    ys, xs = np.where(hand)
    for y in range(ys.min() + 6, ys.max() - 7):                # skip the fingertips: they hang free of the trousers
        row = np.where(erase[y])[0]
        if len(row) == 0:
            continue
        edge = row.max() if inward == 1 else row.min()
        x = edge + inward
        steps = 0
        while 0 <= x < w and not dark[y, x] and steps < 8:
            x += inward
            steps += 1
        if not (0 <= x < w and dark[y, x]):
            continue
        for k in range(0, 7):
            tx = edge - inward * k
            src = tx + inward * 9
            if 0 <= tx < w and 0 <= src < w and erase[y, tx] and dark[y, src]:
                body[y, tx, :] = rgba[y, src, :]

    pivots[name] = ((xs.min() + xs.max()) / 2 / w * 100, (ys.min() + 3) / h * 100, (ys.max() - ys.min()) / h * 100)

Image.fromarray(np.clip(body, 0, 255).astype(np.uint8), 'RGBA').save(os.path.join(out, 'pose-lifted-body.webp'), 'WEBP', quality=94, method=6)
for name, (px, py, ln) in pivots.items():
    print('%s pivot %.1f%% %.1f%%  length %.1f%% of height' % (name, px, py, ln))
