import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { SearchBar } from '../common/SearchBar';
import { cn } from '../../lib/utils';
import { SECTIONS, type SectionId } from '../../context/SectionContext';
import { useData } from '../../context/DataContext';

const sectionSubNav: Record<SectionId, { name: string; path: string }[]> = {
    sanat_kosesi: [
        { name: 'Köşe Yazıları', path: '/sanat-kosesi/articles' },
        { name: 'Podcastler',    path: '/sanat-kosesi/podcasts' },
    ],
    siyaset: [
        { name: 'Köşe Yazıları', path: '/siyaset/articles' },
        { name: 'Podcastler',    path: '/siyaset/podcasts' },
    ],
    ui: [
        { name: 'Köşe Yazıları', path: '/ui/articles' },
        { name: 'Podcastler',    path: '/ui/podcasts' },
    ],
    portal: [],
};

function getActiveSectionId(pathname: string): SectionId {
    for (const s of SECTIONS) {
        if (pathname.startsWith(s.path)) return s.id;
    }
    return 'portal';
}

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI'] as const;

function todayLabel(): string {
    const d = new Date();
    const days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
    const months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
    return `${days[d.getDay()]}, ${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

export function Navbar() {
    const { settings } = useData();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const infoOfDay = settings.infoOfDay || {
        text: 'Agora360, siyaset ve sanat alanında bağımsız analizler sunan gençlik topluluğudur.',
        attr: 'Agora360'
    };

    const activeSectionId = getActiveSectionId(location.pathname);
    const subNavItems = sectionSubNav[activeSectionId] ?? [];

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 8);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    return (
        <>
        <header
            className="w-full"
            style={{
                background: 'var(--paper)',
                borderBottom: scrolled ? '3px double var(--ink)' : '1px solid var(--rule-soft)',
                transition: 'border-color 0.2s ease',
            }}
        >
            {/* ── Top dateline strip ── */}
            <div
                className="hidden md:block"
                style={{ borderBottom: '1px solid var(--rule-soft)' }}
            >
                <div className="container-custom flex items-center justify-between py-2">
                    <span className="dateline">{todayLabel()}</span>
                    <span className="dateline" style={{ color: 'var(--ink-faint)' }}>
                        Cilt MMXXVI · Sayı {ROMAN[new Date().getDate() % 6]}
                    </span>
                    <div className="flex items-center gap-4">
                        <Link to="/about" className="dateline" style={{ color: 'var(--ink-muted)' }}>Hakkımızda</Link>
                        <span className="dateline" style={{ color: 'var(--ink-faint)' }}>·</span>
                        <Link to="/admin" className="dateline" style={{ color: 'var(--ink-muted)' }}>Yönetim</Link>
                    </div>
                </div>
            </div>

            {/* ── Masthead ── */}
            <div className="container-custom py-6">
                <style>
                    {`
                        @keyframes feather-sway {
                            0% {
                                transform: rotate(-1.5deg);
                            }
                            50% {
                                transform: rotate(1.5deg);
                            }
                            100% {
                                transform: rotate(-1.5deg);
                            }
                        }
                        .animated-feather {
                            animation: feather-sway 4s ease-in-out infinite;
                            transform-origin: 50% 82%;
                        }
                        .logo-container img {
                            filter: sepia(0.4) saturate(2.2) hue-rotate(320deg) contrast(1.05) drop-shadow(0 2px 10px rgba(139,26,26,0.25));
                            transition: filter 0.2s ease;
                        }
                        .logo-container:hover img {
                            filter: sepia(0.55) saturate(2.8) hue-rotate(320deg) contrast(1.1) drop-shadow(0 3px 14px rgba(139,26,26,0.45));
                        }
                    `}
                </style>
                <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-6">
                    <div className="hidden md:flex flex-col justify-center text-left border-r-[3px] border-double border-[var(--ink)] pr-6 h-full min-h-[140px] max-w-[240px] justify-self-start">
                        <span className="kicker mb-1" style={{ color: 'var(--accent-red)' }}>Günün Bilgisi</span>
                        <p className="body-copy" style={{ fontSize: '12px', lineHeight: '1.4' }}>
                            {infoOfDay.text}
                        </p>
                        <span className="dateline mt-1 text-right">— {infoOfDay.attr}</span>
                    </div>

                    {/* Center Masthead (Logo) */}
                    <div className="col-span-1 md:col-span-2 flex flex-col items-center justify-center text-center">
                        <Link to="/" className="relative block logo-container w-[260px] h-[142px] sm:w-[300px] sm:h-[164px] md:w-[366px] md:h-[200px]" style={{ lineHeight: 0, margin: '0 auto' }}>
                            {/* Static part of the logo (with center hole) */}
                            <img
                                src="/logo-bw.png"
                                alt="Agora360"
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                    display: 'block',
                                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, 42% 42%, 42% 82%, 58% 82%, 58% 42%, 42% 42%)',
                                }}
                            />
                            {/* Waving feather in the center */}
                            <img
                                src="/logo-bw.png"
                                alt="Agora360 Feather"
                                className="animated-feather"
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                    display: 'block',
                                    clipPath: 'polygon(42% 42%, 58% 42%, 58% 82%, 42% 82%)',
                                }}
                            />
                        </Link>
                        <div className="mt-3 dateline" style={{ color: 'var(--ink-muted)' }}>
                            Siyaset · Uluslararası İlişkiler · Sanat
                        </div>
                    </div>

                    {/* Right ear (desktop only) */}
                    <div className="hidden md:flex flex-col justify-center text-right border-l-[3px] border-double border-[var(--ink)] pl-6 h-full min-h-[140px] max-w-[240px] justify-self-end">
                        <span className="kicker mb-1" style={{ color: 'var(--accent-red)' }}>Çağrı & Katılım</span>
                        <p className="body-copy" style={{ fontSize: '12px', lineHeight: '1.4' }}>
                            Gençliğin ortak ses kürasyonu. Yazılarınızı ve podcast tekliflerinizi ileterek fikrinizi meydanda paylaşın.
                        </p>
                        <Link to="/about" className="dateline mt-1 ink-link text-right" style={{ color: 'var(--accent-red)', fontWeight: 'bold' }}>Detaylı Bilgi →</Link>
                    </div>
                </div>
            </div>

            {/* ── Mobile toggle ── */}
            <div className="lg:hidden flex items-center justify-between container-custom py-3" style={{ borderTop: '1px solid var(--rule-soft)' }}>
                <span className="dateline">{todayLabel()}</span>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="inline-flex items-center justify-center w-10 h-10"
                    style={{ border: '1px solid var(--ink)' }}
                >
                    {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                </button>
            </div>

            {isOpen && (
                <div
                    className="lg:hidden absolute left-0 right-0 top-full"
                    style={{ background: 'var(--paper)', borderBottom: '3px double var(--ink)', borderTop: '1px solid var(--ink)' }}
                >
                    <div className="container-custom py-4 space-y-3">
                        <Link to="/" className="block byline py-2" style={{ borderBottom: '1px solid var(--rule-soft)' }}>
                            Manşet
                        </Link>
                        {SECTIONS.filter(s => s.id !== 'portal').map(s => (
                            <Link key={s.id} to={s.path} className="block byline py-2" style={{ borderBottom: '1px solid var(--rule-soft)' }}>
                                {s.label}
                            </Link>
                        ))}
                        {subNavItems.length > 0 && (
                            <div className="pt-3 mt-2" style={{ borderTop: '1px solid var(--ink)' }}>
                                <p className="kicker mb-2">Bu Bölüm</p>
                                {subNavItems.map(item => (
                                    <Link key={item.path} to={item.path} className="block py-1.5" style={{ color: 'var(--ink-muted)' }}>
                                        — {item.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                        <div className="pt-3 mt-2" style={{ borderTop: '1px solid var(--rule-soft)' }}>
                            <SearchBar />
                        </div>
                    </div>
                </div>
            )}
        </header>

        {/* ── Section nav (top-level) — sticky outside header ── */}
            <div
                className="hidden lg:block sticky top-0 z-[100]"
                style={{ borderTop: '3px double var(--ink)', borderBottom: '1px solid var(--ink)', background: 'var(--paper)' }}
            >
                <div className="container-custom flex items-center justify-between gap-4 py-2.5">
                    <div className="flex items-center gap-1">
                        <Link
                            to="/"
                            className={cn(
                                'px-4 py-1.5 byline transition-colors',
                                activeSectionId === 'portal' && 'text-white'
                            )}
                            style={
                                activeSectionId === 'portal'
                                    ? { background: 'var(--ink)', color: 'var(--paper)' }
                                    : { color: 'var(--ink)' }
                            }
                        >
                            Manşet
                        </Link>
                        {SECTIONS.filter(s => s.id !== 'portal').map(section => {
                            const isActive = activeSectionId === section.id;
                            return (
                                <Link
                                    key={section.id}
                                    to={section.path}
                                    className="px-4 py-1.5 byline transition-colors"
                                    style={
                                        isActive
                                            ? { background: 'var(--ink)', color: 'var(--paper)' }
                                            : { color: 'var(--ink)' }
                                    }
                                    onMouseEnter={(e) => {
                                        if (!isActive) (e.currentTarget as HTMLElement).style.color = 'var(--accent-red)';
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!isActive) (e.currentTarget as HTMLElement).style.color = 'var(--ink)';
                                    }}
                                >
                                    {section.label}
                                </Link>
                            );
                        })}
                    </div>

                    <SearchBar />
                </div>
            </div>

            {/* ── Sub-section bar ── */}
            {subNavItems.length > 0 && (
                <div
                    className="hidden lg:block"
                    style={{ background: 'var(--paper-deep)', borderBottom: '1px solid var(--rule-soft)' }}
                >
                    <div className="container-custom flex items-center gap-4 py-2 overflow-x-auto">
                        <span className="kicker" style={{ color: 'var(--accent-red)' }}>
                            {SECTIONS.find(s => s.id === activeSectionId)?.label}
                        </span>
                        <span style={{ borderLeft: '1px solid var(--rule-soft)', height: 14 }} />
                        {subNavItems.map(item => {
                            const active = location.pathname === item.path;
                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className="byline whitespace-nowrap transition-colors"
                                    style={{
                                        color: active ? 'var(--accent-red)' : 'var(--ink-muted)',
                                        borderBottom: active ? '2px solid var(--accent-red)' : '2px solid transparent',
                                        paddingBottom: 2,
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!active) (e.currentTarget as HTMLElement).style.color = 'var(--ink)';
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!active) (e.currentTarget as HTMLElement).style.color = 'var(--ink-muted)';
                                    }}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            )}

        </>
    );
}
