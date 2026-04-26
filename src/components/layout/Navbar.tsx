import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import { Menu, X, Globe, FileText, BookOpen, GraduationCap, Radio, Library, Palette, Landmark, Home } from 'lucide-react';
import { SearchBar } from '../common/SearchBar';
import { cn } from '../../lib/utils';
import { SECTIONS, type SectionId } from '../../context/SectionContext';

const sectionSubNav: Record<SectionId, { name: string; path: string; icon: React.ElementType }[]> = {
    sanat_kosesi: [
        { name: 'Haberler', path: '/sanat-kosesi/news', icon: Globe },
        { name: 'Makaleler', path: '/sanat-kosesi/articles', icon: FileText },
        { name: 'Analizler', path: '/sanat-kosesi/analysis', icon: BookOpen },
        { name: 'Podcastler', path: '/sanat-kosesi/podcasts', icon: Radio },
    ],
    siyaset: [
        { name: 'Haberler', path: '/siyaset/news', icon: Globe },
        { name: 'Makaleler', path: '/siyaset/articles', icon: FileText },
        { name: 'Analizler', path: '/siyaset/analysis', icon: BookOpen },
        { name: 'Podcastler', path: '/siyaset/podcasts', icon: Radio },
    ],
    ui: [
        { name: 'Makaleler', path: '/ui/articles', icon: FileText },
        { name: 'Gelişmeler', path: '/ui/news', icon: Globe },
        { name: 'Analizler', path: '/ui/analysis', icon: BookOpen },
        { name: 'Uİ Öğren', path: '/ui/learning', icon: GraduationCap },
        { name: 'Podcastler', path: '/ui/podcasts', icon: Radio },
        { name: 'Kaynaklar', path: '/ui/resources', icon: Library },
    ],
    portal: [],
};

const sectionIcons: Record<SectionId, React.ElementType> = {
    sanat_kosesi: Palette,
    siyaset: Landmark,
    ui: Globe,
    portal: Home,
};

const sectionActiveStyle: Record<SectionId, { link: string; dot: string; sub: string }> = {
    sanat_kosesi: {
        link: 'text-[#e879f9] bg-[rgba(192,38,211,0.1)] border-[rgba(192,38,211,0.25)]',
        dot: 'bg-[#c026d3] shadow-[0_0_6px_#c026d3]',
        sub: 'bg-[rgba(192,38,211,0.15)] text-[#e879f9]',
    },
    siyaset: {
        link: 'text-[#2dd4bf] bg-[rgba(13,148,136,0.1)] border-[rgba(13,148,136,0.25)]',
        dot: 'bg-[#0d9488] shadow-[0_0_6px_#0d9488]',
        sub: 'bg-[rgba(13,148,136,0.15)] text-[#2dd4bf]',
    },
    ui: {
        link: 'text-[#60a5fa] bg-[rgba(37,99,235,0.1)] border-[rgba(37,99,235,0.25)]',
        dot: 'bg-[#2563eb] shadow-[0_0_6px_#2563eb]',
        sub: 'bg-[rgba(37,99,235,0.15)] text-[#60a5fa]',
    },
    portal: {
        link: 'text-white bg-white/[0.06] border-white/[0.12]',
        dot: 'bg-white shadow-[0_0_6px_rgba(255,255,255,0.5)]',
        sub: 'bg-white/[0.1] text-white',
    },
};

const sectionSubAccentBg: Record<SectionId, string> = {
    sanat_kosesi: 'bg-[#c026d3]',
    siyaset: 'bg-[#0d9488]',
    ui: 'bg-[#2563eb]',
    portal: 'bg-white/20',
};

function getActiveSectionId(pathname: string): SectionId {
    for (const s of SECTIONS) {
        if (pathname.startsWith(s.path)) return s.id;
    }
    return 'portal';
}

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const activeSectionId = getActiveSectionId(location.pathname);
    const subNavItems = sectionSubNav[activeSectionId] ?? [];

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    return (
        <nav
            className={cn(
                'sticky top-0 z-[100] w-full transition-all duration-300',
                scrolled ? 'border-b border-white/[0.08] shadow-lg' : 'border-b border-transparent'
            )}
            style={{
                background: scrolled ? 'rgba(5,10,26,0.75)' : 'transparent',
                backdropFilter: scrolled ? 'blur(24px)' : 'none',
            }}
        >
            {/* Top bar */}
            <div className={cn('container-custom flex items-center justify-between', scrolled ? 'py-2' : 'py-4')}>
                {/* Logo & Text Container */}
                <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
                    {/* Logo Image */}
                    <img
                        src="/logo.jpg"
                        alt="Agora360 Logo"
                        className="h-[60px] w-auto transition-all duration-300 group-hover:scale-105"
                        style={{
                            filter: 'invert(1) brightness(1.2) drop-shadow(0 0 12px rgba(255,255,255,0.3))',
                            mixBlendMode: 'screen',
                        }}
                    />
                    {/* Text block */}
                    <div className="flex flex-col justify-center">
                        <span
                            className="font-serif text-[24px] font-bold tracking-tight text-white transition-all duration-300"
                            style={{
                                filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.2))',
                            }}
                        >
                            Agora360
                        </span>
                        <span className="font-mono text-[10px] tracking-[0.1em] text-white/50 uppercase mt-[-2px]">
                            Gençliğin Fikir Meydanı
                        </span>
                    </div>
                </Link>

                {/* Section Tabs - Desktop */}
                <div className="hidden lg:flex lg:items-center lg:gap-3 mx-6">
                    {SECTIONS.filter(s => s.id !== 'sanat_kosesi').map(section => {
                        const isActive = activeSectionId === section.id;
                        const style = sectionActiveStyle[section.id];
                        const Icon = sectionIcons[section.id];
                        
                        return (
                            <Link
                                key={section.id}
                                to={section.path}
                                className={cn(
                                    'group relative flex items-center gap-2.5 px-6 py-2.5 rounded-full font-sans text-[15px] font-medium tracking-wide border transition-all duration-300 overflow-hidden',
                                    isActive
                                        ? `${style.link} shadow-lg shadow-black/20`
                                        : 'text-white/70 border-white/[0.08] bg-white/[0.03] hover:text-white hover:bg-white/[0.08] hover:border-white/[0.15] hover:-translate-y-0.5 hover:shadow-xl'
                                )}
                            >
                                {/* Glowing background effect on hover for non-active */}
                                {!isActive && (
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-white/[0.05] to-transparent pointer-events-none" />
                                )}
                                
                                <Icon className={cn("w-[18px] h-[18px] transition-transform duration-300 group-hover:scale-110", isActive ? "" : "text-white/50 group-hover:text-white/90")} />
                                
                                <span className="relative z-10">{section.label}</span>
                                
                                {/* Active/Hover status dot */}
                                <span
                                    className={cn(
                                        'w-1.5 h-1.5 rounded-full transition-all duration-300 flex-shrink-0 ml-1',
                                        isActive ? style.dot : 'bg-transparent group-hover:bg-white/40 shadow-[0_0_4px_rgba(255,255,255,0)] group-hover:shadow-[0_0_6px_rgba(255,255,255,0.4)]'
                                    )}
                                />
                            </Link>
                        );
                    })}
                </div>

                {/* Right actions */}
                <div className="hidden lg:flex lg:items-center lg:gap-4">
                    {/* Sanat Köşesi Secondary Link */}
                    <Link
                        to="/sanat-kosesi"
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono text-white/50 hover:text-white hover:bg-white/[0.04] border border-transparent hover:border-white/[0.06] transition-all"
                    >
                        <Palette className="w-3.5 h-3.5" />
                        Sanat Köşesi
                    </Link>
                    
                    <SearchBar />
                </div>

                {/* Mobile menu button */}
                <div className="flex items-center gap-3 lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-10 h-10 inline-flex items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-white/70 hover:text-white transition-all"
                    >
                        <span className="sr-only">Menüyü aç</span>
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {/* Sub-navigation bar */}
            {subNavItems.length > 0 && (
                <div
                    className="border-t border-white/[0.06] hidden lg:block"
                    style={{ background: 'rgba(5,10,26,0.5)', backdropFilter: 'blur(20px)' }}
                >
                    <div className="container-custom flex items-center gap-1 py-1.5">
                        <div className={cn(
                            'flex items-center gap-1.5 px-3 py-1 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider text-white mr-4',
                            sectionSubAccentBg[activeSectionId]
                        )}>
                            {(() => {
                                const Icon = sectionIcons[activeSectionId];
                                return <Icon className="w-3.5 h-3.5" />;
                            })()}
                            {SECTIONS.find(s => s.id === activeSectionId)?.label ?? ''}
                        </div>

                        {subNavItems.map(item => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={cn(
                                    'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all duration-200',
                                    location.pathname === item.path
                                        ? sectionActiveStyle[activeSectionId].sub
                                        : 'text-white/40 hover:text-white hover:bg-white/[0.06]'
                                )}
                            >
                                <item.icon className="w-3.5 h-3.5" />
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}

            {/* Mobile Menu */}
            {isOpen && (
                <div
                    className="lg:hidden absolute top-full left-0 right-0 mt-2 mx-4 p-4 rounded-2xl shadow-2xl border border-white/[0.08]"
                    style={{ background: 'rgba(5,10,26,0.95)', backdropFilter: 'blur(24px)' }}
                >
                    <div className="space-y-1 mb-4">
                        <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/30 px-3 mb-2">Bölümler</p>
                        {SECTIONS.filter(s => s.id !== 'sanat_kosesi').map(section => {
                            const Icon = sectionIcons[section.id];
                            const isActive = activeSectionId === section.id;
                            const style = sectionActiveStyle[section.id];
                            return (
                                <Link
                                    key={section.id}
                                    to={section.path}
                                    className={cn(
                                        'flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-mono font-bold transition-all',
                                        isActive
                                            ? `${style.link} border`
                                            : 'text-white/50 hover:text-white hover:bg-white/[0.05]'
                                    )}
                                >
                                    <span className={cn('w-2 h-2 rounded-full flex-shrink-0', isActive ? style.dot : 'bg-white/20')} />
                                    <Icon className="h-4 w-4" />
                                    {section.label}
                                </Link>
                            );
                        })}
                        
                        {/* Mobile Sanat Köşesi Link */}
                        <Link
                            to="/sanat-kosesi"
                            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-mono font-medium text-white/50 hover:text-white hover:bg-white/[0.05] transition-all mt-2 border-t border-white/[0.04] pt-4"
                        >
                            <Palette className="h-4 w-4" />
                            Sanat Köşesi
                        </Link>
                    </div>

                    {subNavItems.length > 0 && (
                        <div className="border-t border-white/[0.08] pt-4 space-y-1">
                            <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/30 px-3 mb-2">
                                {SECTIONS.find(s => s.id === activeSectionId)?.label} Menüsü
                            </p>
                            {subNavItems.map(item => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={cn(
                                        'flex items-center gap-3 rounded-xl px-4 py-2.5 text-xs font-mono font-semibold transition-all',
                                        location.pathname === item.path
                                            ? sectionActiveStyle[activeSectionId].sub
                                            : 'text-white/40 hover:text-white hover:bg-white/[0.06]'
                                    )}
                                >
                                    <item.icon className="h-4 w-4" />
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    )}

                    <div className="pt-4 mt-4 border-t border-white/[0.08]">
                        <SearchBar />
                    </div>
                </div>
            )}
        </nav>
    );
}
