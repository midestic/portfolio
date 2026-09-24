const RAMP = " .:-=+*#%@";
const GLITCH = "«»[]{}()<>/\\|;:!?+=~^-";
const DPR_CAP = 2;

function hash3(a, b, c) {
  let h = (a * 374761393 + b * 668265263 + c * 2147483647) | 0;
  h = (h ^ (h >>> 13)) * 1274126177;
  return Math.abs(h ^ (h >>> 16));
}

const LEFT_LINES = [
  "// js ts php py go rust c",
  "",
  "const engineer = {",
  '  name: "Badmus Usman",',
  '  role: "Fullstack Engineer",',
  '  base: "Lagos, NG",',
  "  stack: [",
];

const RIGHT_LINES = [
  '    "react", "next",',
  '    "node", "express",',
  '    "python", "sql",',
  '    "php", "docker",',
  "  ],",
  "  openToWork: true,",
  "};",
];

const RAIL_LEFT_TOP = "// html css js ts jsx sql";
const RAIL_LEFT_BOT = "// php python bash git npm";
const RAIL_RIGHT_TOP = "// java go rust csharp cpp";
const RAIL_RIGHT_BOT = "// docker redis aws linux";

function blankGrid(cols, rows) {
  return Array.from({ length: rows }, () => Array(cols).fill(" "));
}

function stampLine(grid, line, row, col) {
  if (row < 0 || row >= grid.length) return;
  for (let c = 0; c < line.length; c++) {
    const cc = col + c;
    if (cc >= 0 && cc < grid[0].length) grid[row][cc] = line[c];
  }
}

function stampCode(grid, lines, startRow, startCol) {
  lines.forEach((line, i) => stampLine(grid, line, startRow + i, startCol));
}

function buildCodeArt(side) {
  const cols = 54;
  const rows = 36;
  const grid = blankGrid(cols, rows);
  const isLeft = side === "left";
  const lines = isLeft ? LEFT_LINES : RIGHT_LINES;

  stampLine(grid, isLeft ? RAIL_LEFT_TOP : RAIL_RIGHT_TOP, 1, 2);
  stampLine(grid, isLeft ? RAIL_LEFT_BOT : RAIL_RIGHT_BOT, rows - 2, 2);

  const startRow = Math.floor((rows - lines.length) / 2);
  const startCol = 3;
  stampCode(grid, lines, startRow, startCol);

  const midRow = startRow + Math.floor(lines.length / 2);
  let tip;

  if (isLeft) {
    const endCol = startCol + Math.max(...lines.map((l) => l.length));
    for (let c = endCol + 1; c < cols - 1; c++) {
      if (grid[midRow][c] === " ") grid[midRow][c] = "·";
    }
    grid[midRow][cols - 1] = "█";
    tip = { x: cols - 1, y: midRow };
  } else {
    for (let c = 1; c < startCol - 1; c++) {
      if (grid[midRow][c] === " ") grid[midRow][c] = "·";
    }
    grid[midRow][0] = "█";
    tip = { x: 0, y: midRow };
  }

  return {
    cols,
    rows,
    chars: grid.map((row) => row.join("")),
    tip,
    facing: isLeft ? 1 : -1,
  };
}

let cachedArts = null;
export function getArtworks() {
  if (!cachedArts) {
    cachedArts = { left: buildCodeArt("left"), right: buildCodeArt("right") };
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
    const availH = h * 0.36;
    const cell = Math.min((w * 0.9) / left.cols, availH / left.rows);
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
    const cell = Math.min((w * 0.42) / left.cols, (h * 0.58) / left.rows);
    const lw = left.cols * cell;
    const lh = left.rows * cell;
    const gap = Math.min(w * 0.03, 56);
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
