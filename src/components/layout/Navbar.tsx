import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import { Menu, X } from 'lucide-react';
import { SearchBar } from '../common/SearchBar';
import { cn } from '../../lib/utils';
import { SECTIONS, type SectionId } from '../../context/SectionContext';

const sectionSubNav: Record<SectionId, { name: string; path: string }[]> = {
    sanat_kosesi: [
        { name: 'Haberler',   path: '/sanat-kosesi/news' },
        { name: 'Makaleler',  path: '/sanat-kosesi/articles' },
        { name: 'Analizler',  path: '/sanat-kosesi/analysis' },
        { name: 'Podcastler', path: '/sanat-kosesi/podcasts' },
    ],
    siyaset: [
        { name: 'Haberler',   path: '/siyaset/news' },
        { name: 'Makaleler',  path: '/siyaset/articles' },
        { name: 'Analizler',  path: '/siyaset/analysis' },
        { name: 'Podcastler', path: '/siyaset/podcasts' },
    ],
    ui: [
        { name: 'Makaleler',  path: '/ui/articles' },
        { name: 'Gelişmeler', path: '/ui/news' },
        { name: 'Analizler',  path: '/ui/analysis' },
        { name: 'Eğitim',     path: '/ui/learning' },
        { name: 'Podcastler', path: '/ui/podcasts' },
        { name: 'Kaynaklar',  path: '/ui/resources' },
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
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

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
        <header
            className="sticky top-0 z-[100] w-full"
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
            <div className="container-custom flex flex-col items-center pt-5 pb-3 text-center">
                <Link to="/" className="block group">
                    <div className="kicker mb-1" style={{ color: 'var(--accent-red)' }}>
                        Gençliğin Fikir Meydanı
                    </div>
                    <h1
                        className="masthead-title"
                        style={{
                            fontSize: 'clamp(36px, 6vw, 68px)',
                            lineHeight: 0.95,
                        }}
                    >
                        AGORA<span style={{ color: 'var(--accent-red)' }}>·</span>360
                    </h1>
                    <div
                        className="mt-2 mx-auto"
                        style={{ width: '120px', borderTop: '1px solid var(--ink)' }}
                    />
                    <div className="mt-2 dateline" style={{ color: 'var(--ink-muted)' }}>
                        Siyaset · Uluslararası İlişkiler · Sanat
                    </div>
                </Link>
            </div>

            {/* ── Section nav (top-level) ── */}
            <div
                className="hidden lg:block"
                style={{ borderTop: '3px double var(--ink)', borderBottom: '1px solid var(--ink)' }}
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
                        {SECTIONS.map(section => {
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
                        {SECTIONS.map(s => (
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
    );
}
