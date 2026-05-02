type SvgProps = { className?: string; size?: number; color?: string };

function P({ className, size = 24, color = 'currentColor', children, viewBox = '0 0 24 24' }: SvgProps & { children: React.ReactNode; viewBox?: string }) {
    return (
        <svg
            className={className}
            width={size}
            height={size}
            viewBox={viewBox}
            fill="none"
            stroke={color}
            strokeWidth={1.2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            {children}
        </svg>
    );
}

/** Manicule — pointing hand, classic Victorian print symbol */
export function Manicule({ className, size = 22, color }: SvgProps) {
    return (
        <P className={className} size={size} color={color} viewBox="0 0 32 24">
            <path d="M2 12 H17" />
            <path d="M14 9 L20 12 L14 15" />
            <path d="M18 8 C 21 8, 24 9, 26 12 C 24 15, 21 16, 18 16" />
            <path d="M20 10 C 22 10, 24 11, 25 12 C 24 13, 22 14, 20 14" />
            <path d="M21 12 H 28" />
            <path d="M23 11 H 30" strokeWidth={0.8} />
            <path d="M23 13 H 30" strokeWidth={0.8} />
        </P>
    );
}

/** Inkwell + quill */
export function Quill({ className, size = 26, color }: SvgProps) {
    return (
        <P className={className} size={size} color={color} viewBox="0 0 28 28">
            <path d="M22 4 C 18 6, 14 10, 10 16 L 8 22 L 14 20 C 20 16, 24 12, 26 8 Z" />
            <path d="M8 22 L 4 26" />
            <path d="M14 20 L 12 24" strokeWidth={0.8} />
            <path d="M10 16 L 16 14" strokeWidth={0.8} />
        </P>
    );
}

/** Vintage fountain pen nib */
export function PenNib({ className, size = 22, color }: SvgProps) {
    return (
        <P className={className} size={size} color={color} viewBox="0 0 24 24">
            <path d="M12 3 L 18 14 L 12 21 L 6 14 Z" />
            <path d="M12 3 L 12 21" />
            <circle cx="12" cy="13" r="1.6" fill={color || 'currentColor'} />
        </P>
    );
}

/** Fleur-de-lis */
export function FleurDeLis({ className, size = 28, color }: SvgProps) {
    return (
        <P className={className} size={size} color={color} viewBox="0 0 32 32">
            <path d="M16 2 C 14 8, 14 14, 16 18 C 18 14, 18 8, 16 2 Z" />
            <path d="M16 14 C 10 12, 6 16, 8 22 C 12 22, 14 18, 16 18" />
            <path d="M16 14 C 22 12, 26 16, 24 22 C 20 22, 18 18, 16 18" />
            <path d="M10 22 H 22" strokeWidth={1.6} />
            <path d="M16 18 V 26" />
            <circle cx="16" cy="6" r="0.8" fill={color || 'currentColor'} />
        </P>
    );
}

/** Sun with rays — almanac glyph */
export function VintageSun({ className, size = 28, color }: SvgProps) {
    return (
        <P className={className} size={size} color={color} viewBox="0 0 32 32">
            <circle cx="16" cy="16" r="6" />
            <path d="M16 4 V 8 M16 24 V 28 M4 16 H 8 M24 16 H 28 M7.5 7.5 L 10 10 M22 22 L 24.5 24.5 M7.5 24.5 L 10 22 M22 10 L 24.5 7.5" />
            <circle cx="14" cy="15" r="0.6" fill={color || 'currentColor'} />
            <circle cx="18" cy="15" r="0.6" fill={color || 'currentColor'} />
            <path d="M13.5 18 Q 16 20, 18.5 18" />
        </P>
    );
}

/** Crescent moon — almanac glyph */
export function VintageMoon({ className, size = 28, color }: SvgProps) {
    return (
        <P className={className} size={size} color={color} viewBox="0 0 32 32">
            <path d="M22 6 C 14 8, 10 14, 12 22 C 14 26, 20 28, 26 24 C 18 22, 14 14, 22 6 Z" />
            <circle cx="6" cy="8" r="0.8" fill={color || 'currentColor'} />
            <circle cx="4" cy="14" r="0.5" fill={color || 'currentColor'} />
            <circle cx="8" cy="22" r="0.6" fill={color || 'currentColor'} />
        </P>
    );
}

/** Steam locomotive plume — newspaper era industrial icon */
export function Steamer({ className, size = 36, color }: SvgProps) {
    return (
        <P className={className} size={size} color={color} viewBox="0 0 48 32">
            <path d="M2 24 H 38 V 16 H 30 L 28 12 H 16 L 14 16 H 2 Z" />
            <circle cx="10" cy="26" r="3" />
            <circle cx="22" cy="26" r="3" />
            <circle cx="34" cy="26" r="3" />
            <path d="M22 12 V 6 M20 6 H 24" />
            <path d="M22 6 C 26 4, 30 6, 32 4 M30 6 C 34 4, 38 8, 40 6" strokeWidth={0.8} />
        </P>
    );
}

/** Compass rose — used in UI section / international relations */
export function CompassRose({ className, size = 36, color }: SvgProps) {
    return (
        <P className={className} size={size} color={color} viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="20" />
            <circle cx="24" cy="24" r="14" strokeWidth={0.6} />
            <path d="M24 4 L 28 24 L 24 44 L 20 24 Z" fill={color || 'currentColor'} fillOpacity="0.08" />
            <path d="M4 24 L 24 28 L 44 24 L 24 20 Z" fill={color || 'currentColor'} fillOpacity="0.08" />
            <text x="24" y="9" fontSize="5" textAnchor="middle" fill={color || 'currentColor'} stroke="none" fontFamily="serif" fontWeight="700">N</text>
            <text x="24" y="44" fontSize="5" textAnchor="middle" fill={color || 'currentColor'} stroke="none" fontFamily="serif" fontWeight="700">S</text>
            <text x="6" y="26" fontSize="5" fill={color || 'currentColor'} stroke="none" fontFamily="serif" fontWeight="700">B</text>
            <text x="38" y="26" fontSize="5" fill={color || 'currentColor'} stroke="none" fontFamily="serif" fontWeight="700">D</text>
        </P>
    );
}

/** Ornate fleuron divider — used between sections */
export function FleuronBar({ className, color = 'currentColor' }: { className?: string; color?: string }) {
    return (
        <svg className={className} width="240" height="22" viewBox="0 0 240 22" fill="none" aria-hidden="true">
            <line x1="0" y1="11" x2="92" y2="11" stroke={color} strokeWidth="1" />
            <line x1="0" y1="13.5" x2="92" y2="13.5" stroke={color} strokeWidth="0.5" />
            <line x1="148" y1="11" x2="240" y2="11" stroke={color} strokeWidth="1" />
            <line x1="148" y1="13.5" x2="240" y2="13.5" stroke={color} strokeWidth="0.5" />
            <g transform="translate(120 11)">
                <path d="M-10 0 C -8 -6, -2 -7, 0 -3 C 2 -7, 8 -6, 10 0 C 8 6, 2 7, 0 3 C -2 7, -8 6, -10 0 Z" fill="none" stroke={color} strokeWidth="1" />
                <circle cx="0" cy="0" r="2" fill={color} />
                <circle cx="-14" cy="0" r="1" fill={color} />
                <circle cx="14" cy="0" r="1" fill={color} />
            </g>
        </svg>
    );
}

/** Acorn-and-vines ornament — corner decoration */
export function AcornVine({ className, size = 80, color = 'currentColor' }: SvgProps) {
    return (
        <svg className={className} width={size} height={size * 0.5} viewBox="0 0 160 80" fill="none" aria-hidden="true">
            <path d="M2 78 C 30 70, 50 50, 60 30 C 65 18, 75 10, 90 14" stroke={color} strokeWidth="1" />
            <path d="M30 56 C 24 52, 22 46, 28 42 C 34 44, 36 50, 32 56" stroke={color} strokeWidth="0.8" fill="none" />
            <path d="M50 36 C 44 32, 42 26, 48 22 C 54 24, 56 30, 52 36" stroke={color} strokeWidth="0.8" fill="none" />
            <ellipse cx="100" cy="22" rx="6" ry="9" stroke={color} strokeWidth="1" fill="none" />
            <path d="M94 16 Q 100 12, 106 16" stroke={color} strokeWidth="0.8" fill="none" />
            <path d="M100 13 V 8" stroke={color} strokeWidth="0.8" />
            <ellipse cx="120" cy="34" rx="5" ry="7" stroke={color} strokeWidth="0.8" fill="none" />
            <path d="M115 30 Q 120 27, 125 30" stroke={color} strokeWidth="0.6" fill="none" />
            <path d="M150 22 C 156 26, 158 36, 154 46 C 150 56, 140 66, 120 72" stroke={color} strokeWidth="1" />
        </svg>
    );
}

/** Old-style printer's ornament — section break */
export function ThreeAsterisks({ className }: { className?: string }) {
    return (
        <div className={className} style={{ display: 'flex', justifyContent: 'center', gap: 18, color: 'var(--ink-muted)', letterSpacing: '0.5em' }}>
            <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 22 }}>✦</span>
            <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 22 }}>✦</span>
            <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 22 }}>✦</span>
        </div>
    );
}

/** Telegraph sparkles — for "Son Dakika" */
export function TelegraphSpark({ className, size = 18, color = 'currentColor' }: SvgProps) {
    return (
        <P className={className} size={size} color={color} viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="2" fill={color} />
            <path d="M12 4 V 8 M12 16 V 20 M4 12 H 8 M16 12 H 20 M6 6 L 9 9 M15 15 L 18 18 M6 18 L 9 15 M15 9 L 18 6" />
        </P>
    );
}

/** Decorative drop-shadow bracket — wraps elegant headlines */
export function HeadlineBracket({ side = 'left', color = 'currentColor' }: { side?: 'left' | 'right'; color?: string }) {
    return (
        <svg width="22" height="48" viewBox="0 0 22 48" fill="none" aria-hidden="true"
            style={{ transform: side === 'right' ? 'scaleX(-1)' : 'none' }}>
            <path d="M16 2 C 6 6, 6 42, 16 46" stroke={color} strokeWidth="1.2" fill="none" />
            <circle cx="14" cy="24" r="2" fill={color} />
            <path d="M16 18 L 14 24 L 16 30" stroke={color} strokeWidth="0.8" fill="none" />
        </svg>
    );
}

/** Gear / cogwheel — almanac industry */
export function Cogwheel({ className, size = 22, color }: SvgProps) {
    return (
        <P className={className} size={size} color={color} viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="4" />
            <circle cx="12" cy="12" r="1.4" fill={color || 'currentColor'} />
            <g>
                {Array.from({ length: 8 }).map((_, i) => (
                    <line key={i}
                        x1="12" y1="2" x2="12" y2="5"
                        transform={`rotate(${i * 45} 12 12)`}
                        strokeWidth="1.4" />
                ))}
            </g>
        </P>
    );
}
