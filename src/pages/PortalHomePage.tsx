import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { StarfieldCanvas } from '../components/canvas/StarfieldCanvas';

const portalCards = [
  {
    to: '/siyaset',
    num: '02',
    label: 'Siyaset',
    icon: '🗳️',
    title: 'Güç & Demokrasi',
    desc: 'Veri odaklı analizler, güncel siyasi gelişmeler ve gençlerin gözünden siyasi panorama.',
    glowColor: 'rgba(13,148,136,0.22)',
    hoverGlow: '0 0 0 1px rgba(13,148,136,0.35), 0 20px 80px rgba(13,148,136,0.30), 0 0 120px rgba(13,148,136,0.10)',
    hoverBorder: 'rgba(13,148,136,0.45)',
    iconBg: 'rgba(13,148,136,0.15)',
    labelColor: '#0d9488',
    gradientFrom: '#0d9488',
    gradientTo: '#2dd4bf',
    orbColor: 'rgba(13,148,136,0.3)',
    accentLine: 'linear-gradient(90deg, #0d9488, #2dd4bf, #34d399)',
  },
  {
    to: '/ui',
    num: '03',
    label: 'Uluslararası İlişkiler',
    icon: '🌐',
    title: 'Küresel Sahne',
    desc: 'Jeopolitik analizler, diplomatik gelişmeler ve küresel güç dinamiklerinin derinlemesine incelemesi.',
    glowColor: 'rgba(37,99,235,0.22)',
    hoverGlow: '0 0 0 1px rgba(37,99,235,0.35), 0 20px 80px rgba(37,99,235,0.30), 0 0 120px rgba(37,99,235,0.10)',
    hoverBorder: 'rgba(37,99,235,0.45)',
    iconBg: 'rgba(37,99,235,0.15)',
    labelColor: '#60a5fa',
    gradientFrom: '#2563eb',
    gradientTo: '#60a5fa',
    orbColor: 'rgba(37,99,235,0.3)',
    accentLine: 'linear-gradient(90deg, #2563eb, #60a5fa, #93c5fd)',
  },
];

/* ── Deep space floating orbs with drift ── */
function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
      {/* Primary nebula blobs */}
      <div
        className="absolute rounded-full animate-blob opacity-25"
        style={{
          width: '900px', height: '900px',
          background: 'radial-gradient(circle, rgba(192,38,211,0.28), transparent 70%)',
          top: '-20%', left: '-15%',
          filter: 'blur(100px)',
        }}
      />
      <div
        className="absolute rounded-full animate-blob animation-delay-2000 opacity-20"
        style={{
          width: '750px', height: '750px',
          background: 'radial-gradient(circle, rgba(13,148,136,0.28), transparent 70%)',
          top: '35%', right: '-18%',
          filter: 'blur(100px)',
        }}
      />
      <div
        className="absolute rounded-full animate-blob animation-delay-4000 opacity-20"
        style={{
          width: '800px', height: '800px',
          background: 'radial-gradient(circle, rgba(37,99,235,0.28), transparent 70%)',
          bottom: '-15%', left: '25%',
          filter: 'blur(100px)',
        }}
      />

      {/* Aurora horizontal streak */}
      <div
        className="absolute"
        style={{
          width: '100%', height: '2px',
          top: '30%', left: 0,
          background: 'linear-gradient(90deg, transparent, rgba(192,38,211,0.15), rgba(37,99,235,0.2), rgba(13,148,136,0.15), transparent)',
          filter: 'blur(4px)',
          animation: 'aurora-drift 12s ease-in-out infinite',
        }}
      />
      <div
        className="absolute"
        style={{
          width: '100%', height: '1px',
          top: '32%', left: 0,
          background: 'linear-gradient(90deg, transparent, rgba(96,165,250,0.25), rgba(192,38,211,0.2), transparent)',
          filter: 'blur(2px)',
          animation: 'aurora-drift 16s ease-in-out infinite reverse',
        }}
      />

      {/* Floating micro particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${1.5 + (i % 4) * 1.2}px`,
            height: `${1.5 + (i % 4) * 1.2}px`,
            background: ['#c026d3', '#0d9488', '#60a5fa', '#e879f9', '#2dd4bf', '#a855f7'][i % 6],
            opacity: 0.2 + (i % 5) * 0.1,
            top: `${(i * 33.3) % 100}%`,
            left: `${(i * 17.7) % 100}%`,
            animation: `cosmic-drift ${5 + (i % 7) * 2}s ease-in-out infinite`,
            animationDelay: `${(i * 0.4) % 6}s`,
          }}
        />
      ))}

      {/* Cosmic grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(96,165,250,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(96,165,250,0.8) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />
    </div>
  );
}

/* ── Animated counter ── */
function AnimatedCounter({ end, suffix = '' }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const duration = 2000;
          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ── Main portal page ── */
export function PortalHomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#030816] overflow-hidden">
      <StarfieldCanvas />
      <FloatingOrbs />

      {/* Hero */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6 pt-16 pb-10 text-center">

        {/* Cosmic halo behind title */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            width: '700px', height: '700px',
            background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, rgba(192,38,211,0.05) 40%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />

        {/* Animated title */}
        <h1
          className="font-serif font-black leading-[1.0] tracking-[-3px] mb-6 select-none transition-all duration-1000 relative"
          style={{
            fontSize: 'clamp(52px, 9vw, 120px)',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(30px)',
            transitionDelay: '150ms',
          }}
        >
          <span
            className="inline-block transition-all duration-500 hover:scale-105 cursor-default"
            style={{
              background: 'linear-gradient(160deg, #f0f4ff 10%, #d4e8ff 55%, #90c0ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 24px rgba(144,192,255,0.5))',
            }}
          >
            Siyaset
          </span>
          <span style={{ color: 'rgba(255,255,255,0.10)', fontWeight: 200, margin: '0 20px' }}> · </span>
          <span
            className="inline-block transition-all duration-500 hover:scale-105 cursor-default"
            style={{
              background: 'linear-gradient(160deg, #ffffff 10%, #e0ecff 55%, #b0ccff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 24px rgba(180,210,255,0.55))',
            }}
          >
            Dünya
          </span>
        </h1>

        {/* Tagline */}
        <div
          className="transition-all duration-1000 mb-3"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '350ms',
          }}
        >
          <span
            className="inline-block font-mono text-[11px] tracking-[0.25em] uppercase px-4 py-1.5 rounded-full"
            style={{
              color: 'rgba(200,220,255,0.55)',
              border: '1px solid rgba(150,180,255,0.15)',
              background: 'rgba(100,140,255,0.05)',
              letterSpacing: '0.22em',
            }}
          >
            Agora 360 — Gençliğin Fikir Meydanı
          </span>
        </div>

        {/* Subtitle */}
        <p
          className="max-w-[580px] text-[15px] leading-[1.85] mb-16 transition-all duration-1000"
          style={{
            color: 'rgba(180,200,240,0.4)',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '500ms',
          }}
        >
          Gençlerin sesinin yankılandığı platform — fikirler burada şekillenir, dünya buradan izlenir.
        </p>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000"
          style={{
            opacity: mounted ? 0.5 : 0,
            transitionDelay: '1200ms',
          }}
        >
          <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-white/35">Keşfet</span>
          <div className="w-[1px] h-12 overflow-hidden">
            <div
              className="w-full h-full"
              style={{
                background: 'linear-gradient(to bottom, rgba(96,165,250,0.8), transparent)',
                animation: 'scroll-down 2s ease-in-out infinite',
              }}
            />
          </div>
        </div>
      </div>

      {/* Portal Cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto px-5 pb-12">
        {portalCards.map((card, index) => (
          <div
            key={card.to}
            className="transition-all duration-1000"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(50px)',
              transitionDelay: `${900 + index * 160}ms`,
            }}
          >
            <PortalCard card={card} />
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="relative z-10 max-w-[700px] mx-auto px-10 pb-10 pt-2">
        <div
          className="h-[1px] w-full"
          style={{
            background: 'linear-gradient(to right, transparent, rgba(96,165,250,0.25), rgba(192,38,211,0.25), rgba(13,148,136,0.25), transparent)',
          }}
        />
      </div>

      {/* Bottom ticker */}
      <div className="relative z-10 pb-16">
        <div className="overflow-hidden py-4" style={{ borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="animate-ticker whitespace-nowrap">
            {['🗳️ Siyaset: Güncel analizler', '🌐 Uluslararası İlişkiler: Küresel gelişmeler', '📰 Her gün yeni içerik', '🎙️ Podcast serimiz yayında', '📊 Derinlemesine analizler'].map((text, i) => (
              <span
                key={i}
                className="inline-block mx-10 font-mono text-[11px] tracking-wider text-white/25"
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PortalCard({ card }: { card: typeof portalCards[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={card.to}
      className="group relative block text-left overflow-hidden rounded-[24px] cursor-pointer transition-all duration-500"
      style={{
        background: 'rgba(8, 15, 40, 0.6)',
        border: `1px solid ${hovered ? card.hoverBorder : 'rgba(255,255,255,0.07)'}`,
        padding: '40px 36px 48px',
        transitionTimingFunction: 'cubic-bezier(.2,.8,.3,1)',
        transform: hovered ? 'translateY(-8px) scale(1.015)' : 'translateY(0) scale(1)',
        boxShadow: hovered ? card.hoverGlow : '0 4px 24px rgba(0,0,0,0.3)',
        backdropFilter: 'blur(24px)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Radial glow overlay on hover */}
      <div
        className="absolute inset-0 rounded-[24px] transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 30% 20%, ${card.glowColor}, transparent 65%)`,
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Animated gradient line at top */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] transition-opacity duration-500"
        style={{
          background: card.accentLine,
          opacity: hovered ? 1 : 0,
          boxShadow: hovered ? `0 0 12px ${card.glowColor}` : 'none',
        }}
      />

      {/* Corner glow accent */}
      <div
        className="absolute bottom-0 right-0 w-48 h-48 rounded-full pointer-events-none transition-opacity duration-700"
        style={{
          background: `radial-gradient(circle, ${card.orbColor}, transparent 70%)`,
          filter: 'blur(30px)',
          opacity: hovered ? 0.6 : 0.15,
          transform: 'translate(30%, 30%)',
        }}
      />

      {/* Icon */}
      <div
        className="w-[60px] h-[60px] rounded-[16px] flex items-center justify-center text-2xl mb-8 transition-all duration-500"
        style={{
          background: hovered ? card.iconBg.replace('0.15', '0.25') : card.iconBg,
          transform: hovered ? 'scale(1.12) rotate(4deg)' : 'scale(1) rotate(0deg)',
          border: `1px solid ${hovered ? card.hoverBorder : 'rgba(255,255,255,0.06)'}`,
          boxShadow: hovered ? `0 0 20px ${card.glowColor}` : 'none',
        }}
      >
        {card.icon}
      </div>

      {/* Label */}
      <div
        className="font-mono text-[10px] tracking-[0.16em] uppercase mb-3"
        style={{ color: card.labelColor }}
      >
        {card.num} — {card.label}
      </div>

      {/* Title */}
      <h2
        className="font-serif text-[26px] font-bold mb-4 relative z-10 transition-all duration-300"
        style={{ color: hovered ? '#ffffff' : 'rgba(255,255,255,0.9)' }}
      >
        {card.title}
      </h2>

      {/* Description */}
      <p
        className="text-sm leading-[1.75] relative z-10 transition-all duration-300"
        style={{ color: hovered ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.38)' }}
      >
        {card.desc}
      </p>

      {/* CTA */}
      <div
        className="mt-8 flex items-center gap-2 font-mono text-[11px] tracking-[0.08em] transition-all duration-300"
        style={{
          color: hovered ? card.labelColor : 'rgba(255,255,255,0.25)',
        }}
      >
        <span>Keşfet</span>
        <span
          className="transition-all duration-300"
          style={{ transform: hovered ? 'translateX(4px)' : 'translateX(0)' }}
        >
          →
        </span>
      </div>

      {/* Hover particle dots */}
      <div
        className="absolute bottom-5 right-5 w-[90px] h-[90px] pointer-events-none transition-opacity duration-700"
        style={{ opacity: hovered ? 0.5 : 0 }}
      >
        <div className="w-2 h-2 rounded-full absolute animate-float" style={{ background: card.gradientFrom, top: '15%', left: '25%', animationDuration: '2.8s' }} />
        <div className="w-1.5 h-1.5 rounded-full absolute animate-float" style={{ background: card.gradientTo, top: '55%', left: '58%', animationDuration: '3.8s', animationDelay: '0.8s' }} />
        <div className="w-1 h-1 rounded-full absolute animate-float" style={{ background: card.gradientFrom, top: '35%', left: '80%', animationDuration: '3.2s', animationDelay: '0.4s' }} />
        <div className="w-1 h-1 rounded-full absolute animate-float" style={{ background: card.gradientTo, top: '75%', left: '15%', animationDuration: '4s', animationDelay: '1.2s' }} />
      </div>
    </Link>
  );
}
