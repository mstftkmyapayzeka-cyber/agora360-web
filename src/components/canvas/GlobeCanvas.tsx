import { useEffect, useRef } from 'react';

export function GlobeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0, H = 0;
    let raf = 0;
    let angle = 0;

    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    resize();

    const RADIUS = Math.min(W, H) * 0.32;
    const NUM_DOTS = 300;
    const NUM_LINES = 40;

    const sphereDots = Array.from({ length: NUM_DOTS }, () => ({
      lat: Math.acos(2 * Math.random() - 1) - Math.PI / 2,
      lon: Math.random() * Math.PI * 2,
      phase: Math.random() * Math.PI * 2,
    }));

    const connPairs: [number, number, number][] = Array.from({ length: NUM_LINES }, () => [
      Math.floor(Math.random() * NUM_DOTS),
      Math.floor(Math.random() * NUM_DOTS),
      Math.random() * Math.PI * 2,
    ]);

    const project = (lat: number, lon: number) => {
      const x3 = Math.cos(lat) * Math.sin(lon + angle);
      const y3 = Math.sin(lat);
      const z3 = Math.cos(lat) * Math.cos(lon + angle);
      return { x: W / 2 + x3 * RADIUS, y: H / 2 - y3 * RADIUS, z: z3 };
    };

    const draw = (t: number) => {
      const time = t * 0.001;
      ctx.clearRect(0, 0, W, H);

      const grd = ctx.createRadialGradient(W / 2, H / 2, RADIUS * 0.5, W / 2, H / 2, RADIUS * 1.4);
      grd.addColorStop(0, 'rgba(37,99,235,0.06)');
      grd.addColorStop(1, 'transparent');
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, W, H);

      const projected = sphereDots.map(d => project(d.lat, d.lon));

      for (const [ai, bi, phase] of connPairs) {
        const a = projected[ai], b = projected[bi];
        if (a.z < -0.2 || b.z < -0.2) continue;
        const alpha = 0.08 + 0.12 * (0.5 + 0.5 * Math.sin(time * 0.8 + phase));
        const depth = ((a.z + b.z) / 2 + 1) / 2;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = `rgba(96,165,250,${alpha * depth})`;
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }

      sphereDots.forEach((d, i) => {
        const p = projected[i];
        if (p.z < -0.15) return;
        const depth = (p.z + 1) / 2;
        const alpha = 0.2 + 0.7 * depth * (0.6 + 0.4 * Math.sin(time * 1.2 + d.phase));
        ctx.beginPath();
        ctx.arc(p.x, p.y, 0.8 + 2.2 * depth, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(96,165,250,${alpha})`;
        ctx.fill();
      });

      angle += 0.003;
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => cancelAnimationFrame(raf);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}
