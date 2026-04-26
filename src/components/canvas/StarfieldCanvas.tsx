import { useEffect, useRef } from 'react';

interface Star {
  x: number; y: number; r: number;
  phase: number; speed: number;
  color: string;
}

interface ShootingStar {
  x: number; y: number;
  vx: number; vy: number;
  life: number; maxLife: number;
  active: boolean;
}

interface NebulaOrb {
  x: number; y: number;
  r: number; color: string;
  phase: number; speed: number;
}

export function StarfieldCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0, H = 0;
    let raf = 0;

    const STAR_COLORS = [
      'rgba(200,220,255,',   // cold white-blue
      'rgba(180,200,255,',   // blue-ish
      'rgba(255,220,200,',   // warm white
      'rgba(200,180,255,',   // lavender
      'rgba(150,200,255,',   // sky blue
    ];

    const stars: Star[] = Array.from({ length: 320 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.8 + 0.2,
      phase: Math.random() * Math.PI * 2,
      speed: 0.3 + Math.random() * 1.0,
      color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
    }));

    // Shooting stars pool
    const shootingStars: ShootingStar[] = Array.from({ length: 6 }, () => ({
      x: 0, y: 0, vx: 0, vy: 0, life: 0, maxLife: 0, active: false,
    }));

    // Nebula orbs
    const nebulae: NebulaOrb[] = [
      { x: 0.1, y: 0.15, r: 0.35, color: 'rgba(192,38,211,', phase: 0, speed: 0.15 },
      { x: 0.85, y: 0.6,  r: 0.30, color: 'rgba(37,99,235,',  phase: 2, speed: 0.12 },
      { x: 0.5,  y: 0.85, r: 0.28, color: 'rgba(13,148,136,', phase: 4, speed: 0.18 },
      { x: 0.75, y: 0.1,  r: 0.22, color: 'rgba(120,60,200,', phase: 1, speed: 0.10 },
      { x: 0.2,  y: 0.75, r: 0.25, color: 'rgba(30,80,220,',  phase: 3, speed: 0.13 },
    ];

    let shootingTimer = 0;

    function spawnShootingStar() {
      const s = shootingStars.find(s => !s.active);
      if (!s) return;
      // spawn from top or right edge
      const fromTop = Math.random() > 0.4;
      if (fromTop) {
        s.x = Math.random() * W;
        s.y = 0;
      } else {
        s.x = W;
        s.y = Math.random() * H * 0.6;
      }
      const angle = (0.3 + Math.random() * 0.4) * Math.PI; // mostly downward-left
      const speed = 8 + Math.random() * 14;
      s.vx = -Math.cos(angle) * speed;
      s.vy = Math.sin(angle) * speed;
      s.maxLife = 40 + Math.random() * 60;
      s.life = 0;
      s.active = true;
    }

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = (t: number) => {
      ctx.clearRect(0, 0, W, H);
      const time = t * 0.001;

      // ── Nebula clouds ──
      for (const n of nebulae) {
        const pulse = 0.04 + 0.03 * Math.sin(time * n.speed + n.phase);
        const grad = ctx.createRadialGradient(
          n.x * W, n.y * H, 0,
          n.x * W, n.y * H, n.r * Math.min(W, H)
        );
        grad.addColorStop(0,   n.color + (0.10 + pulse) + ')');
        grad.addColorStop(0.4, n.color + (0.05 + pulse * 0.5) + ')');
        grad.addColorStop(1,   n.color + '0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(n.x * W, n.y * H, n.r * Math.min(W, H), 0, Math.PI * 2);
        ctx.fill();
      }

      // ── Stars ──
      for (const s of stars) {
        const alpha = 0.2 + 0.75 * (0.5 + 0.5 * Math.sin(time * s.speed + s.phase));
        // Glow for larger stars
        if (s.r > 1.2) {
          const glowGrad = ctx.createRadialGradient(
            s.x * W, s.y * H, 0,
            s.x * W, s.y * H, s.r * 4
          );
          glowGrad.addColorStop(0, s.color + alpha * 0.6 + ')');
          glowGrad.addColorStop(1, s.color + '0)');
          ctx.fillStyle = glowGrad;
          ctx.beginPath();
          ctx.arc(s.x * W, s.y * H, s.r * 4, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.beginPath();
        ctx.arc(s.x * W, s.y * H, s.r, 0, Math.PI * 2);
        ctx.fillStyle = s.color + alpha + ')';
        ctx.fill();
      }

      // ── Shooting stars ──
      shootingTimer++;
      if (shootingTimer > 80 + Math.random() * 120) {
        spawnShootingStar();
        shootingTimer = 0;
      }

      for (const s of shootingStars) {
        if (!s.active) continue;
        s.x += s.vx;
        s.y += s.vy;
        s.life++;
        if (s.life >= s.maxLife || s.x < -100 || s.y > H + 100) {
          s.active = false;
          continue;
        }
        const progress = s.life / s.maxLife;
        const alpha = progress < 0.1 ? progress * 10 : progress > 0.7 ? (1 - progress) / 0.3 : 1;
        const tailLen = 80 + s.maxLife * 1.2;

        const grad = ctx.createLinearGradient(
          s.x, s.y,
          s.x - s.vx * (tailLen / Math.hypot(s.vx, s.vy)),
          s.y - s.vy * (tailLen / Math.hypot(s.vx, s.vy))
        );
        grad.addColorStop(0, `rgba(255,255,255,${alpha * 0.95})`);
        grad.addColorStop(0.2, `rgba(180,210,255,${alpha * 0.6})`);
        grad.addColorStop(1, 'rgba(150,180,255,0)');

        ctx.save();
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(150,180,255,0.8)';
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(
          s.x - s.vx * (tailLen / Math.hypot(s.vx, s.vy)),
          s.y - s.vy * (tailLen / Math.hypot(s.vx, s.vy))
        );
        ctx.stroke();
        ctx.restore();

        // Head glow
        ctx.save();
        ctx.shadowBlur = 12;
        ctx.shadowColor = 'rgba(220,235,255,1)';
        ctx.beginPath();
        ctx.arc(s.x, s.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.fill();
        ctx.restore();
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
}
