const RAMP = " .:-=+*#%@";
const GLITCH = "«»[]{}()<>/\\|;:!?+=~^-";
const DPR_CAP = 2;

function hash3(a, b, c) {
  let h = (a * 374761393 + b * 668265263 + c * 2147483647) | 0;
  h = (h ^ (h >>> 13)) * 1274126177;
  return Math.abs(h ^ (h >>> 16));
}

function buildHandGrid(facing) {
  const cellPx = 8;
  const cols = 44;
  const rows = 30;
  const w = cols * cellPx;
  const h = rows * cellPx;

  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, w, h);

  const draw = () => {
    const grad = ctx.createLinearGradient(facing > 0 ? 0 : w, 0, facing > 0 ? w : 0, 0);
    grad.addColorStop(0, "#3a3a3a");
    grad.addColorStop(0.55, "#b0b0b0");
    grad.addColorStop(1, "#ffffff");
    ctx.fillStyle = grad;

    const roundRect = (x, y, rw, rh, r) => {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.arcTo(x + rw, y, x + rw, y + rh, r);
      ctx.arcTo(x + rw, y + rh, x, y + rh, r);
      ctx.arcTo(x, y + rh, x, y, r);
      ctx.arcTo(x, y, x + rw, y, r);
      ctx.closePath();
      ctx.fill();
    };

    const cy = h * 0.5;

    if (facing > 0) {
      roundRect(18, cy - 52, 118, 104, 40);
      roundRect(118, cy - 16, 158, 32, 16);
      roundRect(112, cy - 64, 44, 34, 14);
      roundRect(146, cy - 70, 40, 34, 14);
      roundRect(176, cy - 66, 36, 32, 14);
      roundRect(40, cy + 30, 74, 34, 16);
      ctx.beginPath();
      ctx.arc(44, cy - 4, 16, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(96, cy - 8, 10, 0, Math.PI * 2);
      ctx.fill();
    } else {
      roundRect(w - 18 - 118, cy - 52, 118, 104, 40);
      roundRect(w - 118 - 158, cy - 16, 158, 32, 16);
      roundRect(w - 112 - 44, cy - 64, 44, 34, 14);
      roundRect(w - 146 - 40, cy - 70, 40, 34, 14);
      roundRect(w - 176 - 36, cy - 66, 36, 32, 14);
      roundRect(w - 40 - 74, cy + 30, 74, 34, 16);
      ctx.beginPath();
      ctx.arc(w - 44, cy - 4, 16, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(w - 96, cy - 8, 10, 0, Math.PI * 2);
      ctx.fill();
    }

    for (let i = 0; i < 26; i++) {
      const hx = hash3(facing + 1, i, 7);
      const px = (hx % 1000) / 1000;
      const py = ((hx >> 10) % 1000) / 1000;
      const x = 14 + px * (w - 28);
      const y = 10 + py * (h - 20);
      const nearFinger =
        facing > 0 ? x > w * 0.55 && x < w * 0.95 : x < w * 0.45 && x > w * 0.05;
      if (nearFinger && Math.abs(y - cy) < 60) continue;
      const r = 2 + ((hx >> 20) % 5);
      ctx.globalAlpha = 0.35;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    }
  };

  draw();

  const data = ctx.getImageData(0, 0, w, h).data;
  const chars = [];
  for (let r = 0; r < rows; r++) {
    let row = "";
    for (let c = 0; c < cols; c++) {
      let sum = 0;
      let count = 0;
      for (let y = 0; y < cellPx; y += 2) {
        for (let x = 0; x < cellPx; x += 2) {
          const i = ((r * cellPx + y) * w + (c * cellPx + x)) * 4;
          const a = data[i + 3] / 255;
          if (a > 0.2) {
            const lum = (data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114) / 255;
            sum += lum * a;
            count += a;
          }
        }
      }
      if (count > 0) {
        const lum = sum / count;
        const idx = Math.min(RAMP.length - 1, Math.max(1, Math.round(lum * (RAMP.length - 1))));
        row += RAMP[idx];
      } else {
        row += " ";
      }
    }
    chars.push(row);
  }

  const tipY = Math.floor(rows / 2);
  let tipX = facing > 0 ? cols - 6 : 5;
  while (tipX > 0 && tipX < cols - 1) {
    const ch = chars[tipY][tipX];
    if (ch !== " ") break;
    tipX += facing > 0 ? -1 : 1;
  }

  return { cols, rows, chars, tip: { x: tipX, y: tipY }, facing };
}

let cachedArts = null;
export function getArtworks() {
  if (!cachedArts) {
    cachedArts = { left: buildHandGrid(1), right: buildHandGrid(-1) };
  }
  return cachedArts;
}

export function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function resizeCanvas(canvas) {
  const dpr = Math.min(window.devicePixelRatio || 1, DPR_CAP);
  const rect = canvas.getBoundingClientRect();
  const w = Math.max(1, Math.floor(rect.width));
  const h = Math.max(1, Math.floor(rect.height));
  canvas.width = Math.floor(w * dpr);
  canvas.height = Math.floor(h * dpr);
  const ctx = canvas.getContext("2d");
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  return { ctx, w, h, dpr };
}

export function layoutArtworks(w, h) {
  const { left, right } = getArtworks();
  const mobile = w < 768;
  const placements = [];

  if (mobile) {
    const availH = h * 0.34;
    const cell = Math.min((w * 0.86) / left.cols, availH / left.rows);
    const lw = left.cols * cell;
    const lh = left.rows * cell;
    const rw = right.cols * cell;
    const rh = right.rows * cell;
    const gap = h * 0.06;
    const totalH = lh + gap + rh;
    const top = (h - totalH) / 2;
    placements.push({
      art: left,
      x: (w - lw) / 2,
      y: top,
      cell,
      tipX: (w - lw) / 2 + (left.tip.x + 0.7) * cell,
      tipY: top + (left.tip.y + 0.7) * cell,
    });
    placements.push({
      art: right,
      x: (w - rw) / 2,
      y: top + lh + gap,
      cell,
      tipX: (w - rw) / 2 + (right.tip.x + 0.7) * cell,
      tipY: top + lh + gap + (right.tip.y + 0.7) * cell,
    });
  } else {
    const cell = Math.min((w * 0.4) / left.cols, (h * 0.56) / left.rows);
    const lw = left.cols * cell;
    const lh = left.rows * cell;
    const gap = Math.min(w * 0.04, 70);
    const totalW = lw * 2 + gap;
    const leftX = (w - totalW) / 2;
    const rightX = leftX + lw + gap;
    const top = (h - lh) / 2 - h * 0.02;
    placements.push({
      art: left,
      x: leftX,
      y: top,
      cell,
      tipX: leftX + (left.tip.x + 0.7) * cell,
      tipY: top + (left.tip.y + 0.7) * cell,
    });
    placements.push({
      art: right,
      x: rightX,
      y: top,
      cell,
      tipX: rightX + (right.tip.x + 0.7) * cell,
      tipY: top + (right.tip.y + 0.7) * cell,
    });
  }

  return placements;
}

export function drawStatic(ctx, w, h, color) {
  const placements = layoutArtworks(w, h);
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = color || "#c9542f";
  for (const p of placements) {
    ctx.font = `${p.cell * 1.2}px "Courier New", monospace`;
    ctx.textBaseline = "top";
    for (let r = 0; r < p.art.rows; r++) {
      const row = p.art.chars[r];
      for (let c = 0; c < row.length; c++) {
        const ch = row[c];
        if (ch === " ") continue;
        ctx.fillText(ch, p.x + c * p.cell, p.y + r * p.cell);
      }
    }
  }
}

export { RAMP, GLITCH, hash3 };
