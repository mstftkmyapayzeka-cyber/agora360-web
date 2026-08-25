import type { SVGProps } from 'react';

export function LogoSVG({ height = 110, className, style, ...props }: { height?: number } & SVGProps<SVGSVGElement>) {
    const aspect = 300 / 158;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 300 158"
            height={height}
            width={Math.round(height * aspect)}
            aria-hidden="true"
            className={className}
            style={{ display: 'block', margin: '0 auto', ...style }}
            {...props}
        >
            <style>
                {`
                    @keyframes feather-wave {
                        0% {
                            transform: rotate(-3deg);
                        }
                        50% {
                            transform: rotate(3deg);
                        }
                        100% {
                            transform: rotate(-3deg);
                        }
                    }
                    .feather-quill {
                        transform-origin: 141px 132px;
                        animation: feather-wave 3s ease-in-out infinite;
                    }
                `}
            </style>

            {/* ── Pediment ── */}
            <polyline
                points="20,62 150,10 280,62"
                fill="none" stroke="var(--ink)" strokeWidth="3.5" strokeLinejoin="miter"
            />
            <polyline
                points="35,60 150,18 265,60"
                fill="none" stroke="var(--ink)" strokeWidth="1.5"
            />

            {/* ── Top entablature ── */}
            <rect x="18" y="62" width="264" height="11" fill="var(--ink)" />

            {/* ── 4 Columns (cx = left edge of capital) ── */}
            {[38, 90, 170, 222].map((cx) => (
                <g key={cx}>
                    <rect x={cx}     y={73} width={22} height={3}  fill="var(--ink)" />
                    <rect x={cx + 2} y={76} width={18} height={52} fill="none" stroke="var(--ink)" strokeWidth="2" />
                    <line x1={cx + 5}  y1={76} x2={cx + 5}  y2={128} stroke="var(--ink)" strokeWidth="0.8" />
                    <line x1={cx + 10} y1={76} x2={cx + 10} y2={128} stroke="var(--ink)" strokeWidth="0.8" />
                    <line x1={cx + 15} y1={76} x2={cx + 15} y2={128} stroke="var(--ink)" strokeWidth="0.8" />
                    <rect x={cx} y={128} width={22} height={4} fill="var(--ink)" />
                </g>
            ))}

            {/* ── Architrave + steps ── */}
            <rect x="18" y="132" width="264" height="9"  fill="var(--ink)" />
            <rect x="12" y="141" width="276" height="6"  fill="var(--ink)" />
            <rect x="6"  y="147" width="288" height="6"  fill="var(--ink)" />

            {/* ── Feather quill  (centred at x=141 between col-2 end=112 and col-3 start=170) ── */}
            <g className="feather-quill">
                {/* Left vane */}
                <path
                    d="M141,78 C130,89 120,105 126,118 C129,125 136,130 141,132"
                    fill="var(--accent-red)" fillOpacity="0.18"
                    stroke="var(--accent-red)" strokeWidth="1.5"
                />
                {/* Right vane */}
                <path
                    d="M141,78 C152,89 162,105 156,118 C153,125 146,130 141,132"
                    fill="var(--accent-red)" fillOpacity="0.18"
                    stroke="var(--accent-red)" strokeWidth="1.5"
                />
                {/* Rachis (centre spine) */}
                <line x1="141" y1="78" x2="141" y2="132" stroke="var(--accent-red)" strokeWidth="2" />
                {/* Barbs */}
                {[83, 89, 95, 101, 107, 113, 119, 125].map((y) => (
                    <g key={y}>
                        <line x1="141" y1={y} x2="133" y2={y + 5} stroke="var(--accent-red)" strokeWidth="0.9" />
                        <line x1="141" y1={y} x2="149" y2={y + 5} stroke="var(--accent-red)" strokeWidth="0.9" />
                    </g>
                ))}
            </g>

            {/* ── Ink jar ── */}
            <rect x="133" y="126" width="16" height="2" rx="1" fill="var(--ink)" />
            <rect x="131" y="128" width="20" height="14" rx="3" fill="var(--ink)" />
            <rect x="133" y="130" width="4"  height="8"  rx="1" fill="white" opacity="0.22" />
        </svg>
    );
}
