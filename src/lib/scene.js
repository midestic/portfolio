import {
  GLITCH,
  drawStatic,
  hash3,
  layoutArtworks,
  prefersReducedMotion,
  resizeCanvas,
} from "./ascii";

function debounce(fn, ms) {
  let id;
  return () => {
    clearTimeout(id);
    id = setTimeout(fn, ms);
  };
}

function drawBeam(ctx, p1, p2, progress, headBoost) {
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  const dist = Math.hypot(dx, dy);
  if (dist < 4) return;
  const nx = dx / dist;
  const ny = dy / dist;
  const spacing = 9;
  const count = Math.floor(dist / spacing);
  const visible = Math.floor(count * Math.min(1, progress * 1.35));
  ctx.save();
  ctx.fillStyle = "#ffe4c4";
  ctx.font = '13px "Courier New", monospace';
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  const alpha = progress >= 1 ? Math.max(0, 1 - (progress - 1) * 2.4) : Math.min(1, progress * 2.4);
  for (let i = 0; i <= visible; i++) {
    const t = i / Math.max(1, count);
    const x = p1.x + nx * dist * t;
    const y = p1.y + ny * dist * t;
    const isHead = i === visible && visible < count;
    ctx.globalAlpha = alpha * (isHead ? 1 : 0.55 + 0.45 * (1 - t));
    ctx.fillStyle = headBoost && isHead ? "#fff6ea" : "#ffe4c4";
    ctx.fillText(isHead ? "*" : "=", x, y);
  }
  ctx.restore();
}

export function runPreloaderScene(canvas, onComplete) {
  if (!canvas) return () => {};

  const reduced = prefersReducedMotion();
  let metrics = resizeCanvas(canvas);
  let disposed = false;
  let raf = 0;
  const start = performance.now();

  const T = {
    scramble: 1080,
    tipHi: 320,
    beam: 640,
    glow: 150,
    burst: 400,
  };

  if (reduced) {
    drawStatic(metrics.ctx, metrics.w, metrics.h, "#c9542f");
    const id = setTimeout(() => {
      if (!disposed) onComplete();
    }, 650);
    return () => {
      disposed = true;
      clearTimeout(id);
    };
  }

  const onResize = debounce(() => {
    if (disposed) return;
    metrics = resizeCanvas(canvas);
  }, 150);
  window.addEventListener("resize", onResize);

  const frame = (now) => {
    if (disposed) return;
    const { ctx, w, h } = metrics;
    const t = now - start;
    const placements = layoutArtworks(w, h);

    ctx.clearRect(0, 0, w, h);

    const scrambleEnd = T.scramble;
    const tipStart = scrambleEnd;
    const beamStart = tipStart + T.tipHi;
    const glowStart = beamStart + T.beam;
    const burstStart = glowStart + T.glow;

    let burstProgress = -1;
    if (t >= burstStart) burstProgress = Math.min(1, (t - burstStart) / T.burst);

    const pA = placements[0];
    const pB = placements[1];

    for (let pi = 0; pi < placements.length; pi++) {
      const p = placements[pi];
      const { art } = p;
      ctx.font = `${p.cell * 1.2}px "Courier New", monospace`;
      ctx.textBaseline = "top";
      ctx.textAlign = "left";

      for (let r = 0; r < art.rows; r++) {
        const row = art.chars[r];
        for (let c = 0; c < row.length; c++) {
          const ch = row[c];
          if (ch === " ") continue;

          const hx = hash3(pi + 1, c, r);
          const startFrac = ((hx % 1000) / 1000) * 0.6;
          const progress = Math.min(1, Math.max(0, (t / scrambleEnd - startFrac) / 0.4));
          if (progress <= 0) continue;

          const gx = p.x + c * p.cell;
          const gy = p.y + r * p.cell;

          let char = ch;
          let color = "#c9542f";
          let alpha = progress < 1 ? 0.14 + progress * 0.2 : Math.min(1, 0.5 + progress * 0.5);

          if (progress < 1) {
            const gi = Math.floor(hash3(pi + 3, c + Math.floor(t / 60), r) % GLITCH.length);
            char = GLITCH[gi];
            alpha = 0.14;
          } else {
            alpha = 1;
          }

          const tipDist = Math.hypot(c - art.tip.x, r - art.tip.y);
          const nearTip = tipDist < 4.5;

          if (t >= tipStart && t < beamStart && nearTip) {
            color = "#ffe4c4";
            alpha = 0.6 + 0.4 * Math.abs(Math.sin(t / 40));
          }
          if (t >= glowStart && t < burstStart && nearTip) {
            color = "#ffe4c4";
            alpha = 0.6 + 0.4 * Math.abs(Math.sin(t / 45));
            if (tipDist < 1.6) char = "*";
          }

          if (burstProgress >= 0) {
            const maxDist = Math.hypot(w, h) * 0.75;
            const radius = burstProgress * maxDist;
            const bx = w / 2;
            const by = h / 2;
            const d = Math.hypot(gx - bx, gy - by);
            if (Math.abs(d - radius) < p.cell * 7) {
              color = "#ff8a52";
              alpha = 1 - burstProgress * 0.55;
            } else {
              alpha = Math.max(0, alpha * (1 - burstProgress));
            }
          }

          ctx.globalAlpha = alpha;
          ctx.fillStyle = color;
          ctx.fillText(char, gx, gy);
        }
      }
    }

    if (t >= beamStart && t < glowStart + 400 && burstProgress < 0) {
      const bp = Math.min(1, (t - beamStart) / T.beam);
      drawBeam(ctx, pA.tip, pB.tip, bp, t >= beamStart + 480);
    }

    if (burstProgress >= 0) {
      const I = burstProgress;
      const diag = Math.hypot(w, h);
      const radius = I * I * diag * 0.85;
      const grad = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, Math.max(1, radius));
      grad.addColorStop(0, "#fff6ea");
      grad.addColorStop(0.55, `rgba(255, 228, 196, ${0.9 * I})`);
      grad.addColorStop(1, "rgba(152, 53, 32, 0)");
      ctx.globalAlpha = Math.min(1, I * 1.2);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
      ctx.globalAlpha = 1;

      if (I >= 1 && !disposed) {
        onComplete();
        return;
      }
    }

    raf = requestAnimationFrame(frame);
  };

  raf = requestAnimationFrame(frame);

  return () => {
    disposed = true;
    cancelAnimationFrame(raf);
    window.removeEventListener("resize", onResize);
  };
}

export function runHeroScene(canvas) {
  if (!canvas) return () => {};

  const reduced = prefersReducedMotion();
  let metrics = resizeCanvas(canvas);
  let disposed = false;
  let raf = 0;
  const start = performance.now();

  const INTRO = 1600;
  const IDLE = 700;
  const PERIOD = 5200;

  const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
  const onPointer = (e) => {
    pointer.tx = (e.clientX / window.innerWidth) * 2 - 1;
    pointer.ty = (e.clientY / window.innerHeight) * 2 - 1;
  };

  if (reduced) {
    drawStatic(metrics.ctx, metrics.w, metrics.h, "#c9542f");
    return () => {};
  }

  window.addEventListener("pointermove", onPointer, { passive: true });
  const onResize = debounce(() => {
    if (disposed) return;
    metrics = resizeCanvas(canvas);
  }, 150);
  window.addEventListener("resize", onResize);

  const glitches = [];
  const sparks = [];
  let last = performance.now();

  const frame = (now) => {
    if (disposed) return;
    const { ctx, w, h } = metrics;
    const t = now - start;
    const dt = Math.min(64, now - last);
    last = now;

    pointer.x += (pointer.tx - pointer.x) * 0.06;
    pointer.y += (pointer.ty - pointer.y) * 0.06;
    const offX = pointer.x * 15;
    const offY = pointer.y * 6;

    const baseColor = w <= 1024 ? "#ff7a45" : "#c9542f";
    const placements = layoutArtworks(w, h).map((p) => ({
      ...p,
      x: p.x + offX,
      y: p.y + offY,
      tipX: p.tipX + offX,
      tipY: p.tipY + offY,
    }));

    ctx.clearRect(0, 0, w, h);

    const loopT = t > INTRO + IDLE ? (t - INTRO - IDLE) % PERIOD : -1;
    const beamPhase = loopT >= 0 && loopT < 520;
    const pulsePhase = loopT >= 460 && loopT < 2010;
    const tipPhase = loopT >= PERIOD - 520;

    if (loopT >= 460 && loopT < 2010 && placements.length === 2) {
      const pp = (loopT - 460) / 1550;
      const [pa, pb] = placements;
      const cx = (pa.tipX + pb.tipX) / 2;
      const cy = (pa.tipY + pb.tipY) / 2;
      const radius = pp * Math.min(w, h) * 0.55;
      ctx.save();
      ctx.strokeStyle = "#ff8a52";
      ctx.globalAlpha = Math.max(0, 0.5 * (1 - pp));
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }

    if (glitches.length < 26 && Math.random() < 0.08) {
      const pi = Math.floor(Math.random() * placements.length);
      const p = placements[pi];
      for (let attempt = 0; attempt < 6; attempt++) {
        const c = Math.floor(Math.random() * p.art.cols);
        const r = Math.floor(Math.random() * p.art.rows);
        if (p.art.chars[r][c] !== " ") {
          glitches.push({
            pi,
            c,
            r,
            born: t,
            life: 120 + Math.random() * 260,
            ch: GLITCH[Math.floor(Math.random() * GLITCH.length)],
          });
          break;
        }
      }
    }

    for (let i = glitches.length - 1; i >= 0; i--) {
      if (t - glitches[i].born > glitches[i].life) glitches.splice(i, 1);
    }

    if (Math.random() < 0.04 && sparks.length < 22 && placements.length) {
      const p = placements[Math.random() < 0.5 ? 0 : 1];
      sparks.push({
        x: p.tipX,
        y: p.tipY,
        vx: (Math.random() - 0.5) * 14,
        vy: -(24 + Math.random() * 34),
        born: t,
        life: 1300 + Math.random() * 900,
      });
    }

    for (let i = sparks.length - 1; i >= 0; i--) {
      const s = sparks[i];
      const age = t - s.born;
      if (age > s.life) {
        sparks.splice(i, 1);
        continue;
      }
      s.x += s.vx * (dt / 1000);
      s.y += s.vy * (dt / 1000);
      s.vy += 8 * (dt / 1000);
      const a = (1 - age / s.life) * 0.6;
      ctx.globalAlpha = a;
      ctx.fillStyle = "#c86a44";
      ctx.font = '11px "Courier New", monospace';
      ctx.fillText("·", s.x, s.y);
    }

    for (let pi = 0; pi < placements.length; pi++) {
      const p = placements[pi];
      const { art } = p;
      ctx.font = `${p.cell * 1.2}px "Courier New", monospace`;
      ctx.textBaseline = "top";
      ctx.textAlign = "left";

      for (let r = 0; r < art.rows; r++) {
        const row = art.chars[r];
        for (let c = 0; c < row.length; c++) {
          const ch = row[c];
          if (ch === " ") continue;

          const hx = hash3(pi + 1, c, r);
          const startFrac = ((hx % 1000) / 1000) * 0.65;
          const progress = Math.min(1, Math.max(0, (t / INTRO - startFrac) / 0.35));
          if (progress <= 0) continue;

          const gx = p.x + c * p.cell;
          const gy = p.y + r * p.cell;

          let char = ch;
          let color = baseColor;
          let alpha = progress < 1 ? 0.16 : 1;

          if (progress < 1) {
            const gi = Math.floor(hash3(pi + 3, c + Math.floor(t / 70), r) % GLITCH.length);
            char = GLITCH[gi];
          }

          const g = glitches.find((gg) => gg.pi === pi && gg.c === c && gg.r === r);
          if (g) {
            char = g.ch;
            alpha = 0.85;
          }

          const tipDist = Math.hypot(c - art.tip.x, r - art.tip.y);

          if (beamPhase && tipDist < 5) {
            color = "#ffe4c4";
            alpha = 0.7;
          }
          if (tipPhase && tipDist < 5) {
            color = "#ffe4c4";
            alpha = 0.6 + 0.4 * Math.abs(Math.sin(t / 45));
            if (tipDist < 1.6) char = "*";
          }
          if (pulsePhase && progress >= 1) {
            const [pa, pb] = placements;
            const cx = (pa.tipX + pb.tipX) / 2;
            const cy = (pa.tipY + pb.tipY) / 2;
            const pp = (loopT - 460) / 1550;
            const radius = pp * Math.min(w, h) * 0.55;
            const d = Math.hypot(gx + p.cell / 2 - cx, gy + p.cell / 2 - cy);
            if (Math.abs(d - radius) < p.cell * 4) {
              color = "#ff8a52";
            }
          }

          ctx.globalAlpha = alpha;
          ctx.fillStyle = color;
          ctx.fillText(char, gx, gy);
        }
      }
    }

    if (beamPhase && placements.length === 2) {
      const bp = loopT / 520;
      drawBeam(
        ctx,
        { x: placements[0].tipX, y: placements[0].tipY },
        { x: placements[1].tipX, y: placements[1].tipY },
        bp,
        false
      );
    }

    ctx.globalAlpha = 1;
    raf = requestAnimationFrame(frame);
  };

  raf = requestAnimationFrame(frame);

  return () => {
    disposed = true;
    cancelAnimationFrame(raf);
    window.removeEventListener("pointermove", onPointer);
    window.removeEventListener("resize", onResize);
  };
}
