import React, { useState, useMemo, useEffect } from 'react';
import { ArrowLeft, ArrowRight, BookOpen, Clock, Calendar, Share2 } from 'lucide-react';

interface NewspaperReaderProps {
    title: string;
    summary: string;
    author: string;
    date?: string;
    year?: number | string;
    publication?: string;
    tags: string[];
    content?: string;
    backPath: string;
    backText: string;
}

export const NewspaperReader: React.FC<NewspaperReaderProps> = ({
    title,
    summary,
    author,
    date,
    year,
    publication = 'Agora360',
    tags,
    content,
    backPath,
    backText
}) => {
    const [isMobile, setIsMobile] = useState(false);
    const [currentPage, setCurrentPage] = useState(0); // If desktop, even page index. If mobile, single page index.
    const [isFlipping, setIsFlipping] = useState(false);
    const [flipDirection, setFlipDirection] = useState<'next' | 'prev' | null>(null);

    // Responsive listener
    useEffect(() => {
        const checkMobile = () => {
            const mobile = window.innerWidth <= 768;
            setIsMobile(mobile);
            // Reset to page 0 on resize to avoid alignment issues
            setCurrentPage(0);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Split HTML content dynamically by paragraphs / headings
    const parsedPages = useMemo(() => {
        const pageList: string[] = [];

        // 1. Page 0 is the Title/Cover Page
        // (We construct this inside renderPage, so we use an empty placeholder here)
        pageList.push('__TITLE_PAGE__');

        if (!content) {
            // Fallback if no content
            pageList.push(`<p className="drop-cap">${summary}</p>`);
            return pageList;
        }

        try {
            const parser = new DOMParser();
            const doc = parser.parseFromString(content, 'text/html');
            const elements = Array.from(doc.body.children);

            if (elements.length === 0) {
                // If it's a flat string without HTML tags, split by newlines
                const paragraphs = content.split(/\n\n+/).filter(Boolean);
                let currentChunk = '';
                let words = 0;

                paragraphs.forEach(p => {
                    const pWords = p.split(/\s+/).filter(Boolean).length;
                    if (words + pWords > 180 && currentChunk) {
                        pageList.push(currentChunk);
                        currentChunk = `<p>${p}</p>`;
                        words = pWords;
                    } else {
                        currentChunk += `<p>${p}</p>`;
                        words += pWords;
                    }
                });

                if (currentChunk) pageList.push(currentChunk);
            } else {
                let currentChunk = '';
                let words = 0;

                elements.forEach((el) => {
                    const text = el.textContent || '';
                    const elWords = text.trim().split(/\s+/).filter(Boolean).length;

                    // Group paragraphs. Target around 180-220 words per page to fit without overflow.
                    if (words + elWords > 180 && currentChunk) {
                        pageList.push(currentChunk);
                        currentChunk = el.outerHTML;
                        words = elWords;
                    } else {
                        currentChunk += el.outerHTML;
                        words += elWords;
                    }
                });

                if (currentChunk) pageList.push(currentChunk);
            }
        } catch (e) {
            console.error('Pagination error:', e);
            pageList.push(content);
        }

        // Add a concluding page if we have odd total pages on desktop
        // to make sure we always have a clean spread (even number of total pages)
        if (!isMobile && pageList.length % 2 !== 0) {
            pageList.push('__CLOSING_PAGE__');
        } else {
            pageList.push('__CLOSING_PAGE__');
        }

        return pageList;
    }, [content, summary, isMobile]);

    const totalPages = parsedPages.length;

    // Navigation handlers
    const handleNext = () => {
        if (isFlipping) return;
        const step = isMobile ? 1 : 2;
        if (currentPage + step >= totalPages) return;

        setFlipDirection('next');
        setIsFlipping(true);
        setTimeout(() => {
            setCurrentPage(prev => prev + step);
            setIsFlipping(false);
            setFlipDirection(null);
        }, 750);
    };

    const handlePrev = () => {
        if (isFlipping) return;
        const step = isMobile ? 1 : 2;
        if (currentPage - step < 0) return;

        setFlipDirection('prev');
        setIsFlipping(true);
        setTimeout(() => {
            setCurrentPage(prev => prev - step);
            setIsFlipping(false);
            setFlipDirection(null);
        }, 750);
    };

    // Calculate reading time
    const readingTime = useMemo(() => {
        const text = (content || summary || '').replace(/<[^>]+>/g, ' ');
        const words = text.trim().split(/\s+/).filter(Boolean).length;
        return Math.max(1, Math.round(words / 200));
    }, [content, summary]);

    // Share utility
    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title,
                text: summary,
                url: window.location.href
            }).catch(err => console.log(err));
        }
    };

    // Page renderer
    const renderPageContent = (pageIndex: number) => {
        if (pageIndex < 0 || pageIndex >= totalPages) {
            return (
                <div className="flex flex-col justify-between h-full py-6 select-none opacity-20">
                    <div className="newspaper-reader-header text-center">
                        <span className="kicker">{publication}</span>
                    </div>
                    <div className="text-center font-serif italic text-3xl">Boş Sayfa</div>
                    <div className="newspaper-page-number">
                        <span>—</span>
                        <span>Agora360</span>
                    </div>
                </div>
            );
        }

        const pageHtml = parsedPages[pageIndex];

        if (pageHtml === '__TITLE_PAGE__') {
            return (
                <div className="flex flex-col justify-between h-full">
                    <div>
                        <div className="newspaper-reader-header flex justify-between items-end border-b-2 border-[#14110d] pb-2">
                            <span className="kicker-ink">{publication}</span>
                            <span className="dateline font-semibold">{year || date || '2026'}</span>
                        </div>
                        
                        <div className="pt-6 pb-4">
                            <span className="kicker">{tags[0] || 'Köşe Yazısı'}</span>
                            <h1 className="headline mt-2 mb-4 text-[#14110d] text-align-justify" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', lineHeight: 1.1 }}>
                                {title}
                            </h1>
                            <div className="w-16 h-[2px] bg-[#14110d] my-4" />
                            <p className="deck text-lg text-align-justify font-serif italic text-[#2a251e] leading-relaxed">
                                {summary}
                            </p>
                        </div>
                    </div>

                    <div className="newspaper-reader-footer pt-4" style={{ borderTop: '1px solid var(--rule-soft)' }}>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="columnist-portrait font-bold">
                                {author.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}
                            </div>
                            <div>
                                <span className="byline block text-sm">— {author}</span>
                                <span className="dateline text-[10px] text-gray-500 font-sans tracking-wider block">Yazar</span>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#57503f] font-sans pt-2" style={{ borderTop: '1px dashed var(--rule-soft)' }}>
                            <span className="flex items-center gap-1"><Clock size={12} /> {readingTime} dk okuma</span>
                            <span className="flex items-center gap-1"><Calendar size={12} /> {year || date || '2026'}</span>
                        </div>

                        <div className="newspaper-page-number mt-4">
                            <span>SAYFA 1</span>
                            <span>AGORA360</span>
                        </div>
                    </div>
                </div>
            );
        }

        if (pageHtml === '__CLOSING_PAGE__') {
            return (
                <div className="flex flex-col justify-between h-full text-center py-6 select-none relative">
                    <div className="newspaper-reader-header flex justify-between items-end border-b border-dashed border-[#14110d] pb-2">
                        <span className="kicker-ink">Kapanış</span>
                        <span className="dateline">{year || date || '2026'}</span>
                    </div>

                    <div className="my-auto py-8">
                        <div className="text-sm font-sans tracking-[0.2em] text-[#8b1a1a] uppercase font-bold mb-2">§ SON §</div>
                        <h3 className="headline font-serif italic text-2xl mb-4">Yazının Sonu</h3>
                        <div className="flex justify-center my-4">
                            <BookOpen className="text-[#8a8170] h-10 w-10 opacity-60" />
                        </div>
                        <p className="text-xs text-[#8a8170] font-sans max-w-xs mx-auto italic">
                            Bu yazı Agora360 editörleri tarafından derlenmiş ve yayınlanmıştır. Tüm hakları saklıdır.
                        </p>
                        
                        <div className="mt-6 flex justify-center gap-2">
                            {tags.map(t => (
                                <span key={t} className="tag-chip text-[9px] px-2 py-0.5">{t}</span>
                            ))}
                        </div>
                    </div>

                    <div className="newspaper-page-number border-t border-dashed border-[#14110d] pt-2">
                        <span>SAYFA {pageIndex + 1}</span>
                        <span>SON</span>
                    </div>
                    <div className="newspaper-page-corner-fold" />
                </div>
            );
        }

        return (
            <div className="flex flex-col justify-between h-full">
                <div className="flex justify-between items-center text-[10px] text-[#8a8170] uppercase tracking-wider mb-4 border-b border-dashed border-gray-300 pb-1 font-sans">
                    <span>{title.substring(0, 30)}{title.length > 30 ? '...' : ''}</span>
                    <span>{publication}</span>
                </div>

                <div 
                    className="article-body flex-1 text-justify select-text font-serif leading-relaxed text-[#2a251e]"
                    style={{ fontSize: '16.5px', textJustify: 'inter-word' }}
                    dangerouslySetInnerHTML={{ __html: pageHtml }}
                />

                <div className="newspaper-page-number mt-4">
                    <span>SAYFA {pageIndex + 1}</span>
                    <span>{publication}</span>
                </div>
                {pageIndex % 2 === 0 ? (
                    <div className="newspaper-page-corner-fold left-side" />
                ) : (
                    <div className="newspaper-page-corner-fold" />
                )}
            </div>
        );
    };

    // Spread coordinates for desktop
    const leftPageIdx = currentPage;
    const rightPageIdx = currentPage + 1;

    // Next page indices (pre-calculated for flipping sheets)
    const nextLeftPageIdx = currentPage + 2;
    const nextRightPageIdx = currentPage + 3;
    const prevLeftPageIdx = currentPage - 2;
    const prevRightPageIdx = currentPage - 1;

    return (
        <div className="newspaper-reader-container py-4">
            {/* Top Toolbar */}
            <div className="flex justify-between items-center mb-6 px-1">
                <button
                    onClick={() => window.location.href = backPath}
                    className="byline ink-link inline-flex items-center gap-2 hover:text-[#8b1a1a]"
                >
                    <ArrowLeft size={14} /> {backText}
                </button>
                <div className="flex items-center gap-4">
                    <button
                        onClick={handleShare}
                        className="byline inline-flex items-center gap-1.5 hover:text-[#8b1a1a]"
                        style={{ color: 'var(--ink-muted)' }}
                    >
                        <Share2 size={13} /> Paylaş
                    </button>
                    <div className="font-serif italic text-sm text-[#8a8170]">
                        Sayfa {currentPage + 1} / {totalPages}
                    </div>
                </div>
            </div>

            {/* Main Newspaper Book */}
            <div className="newspaper-book-frame">
                <div className="newspaper-spread">
                    {/* Spine Binding (Desktop Only) */}
                    {!isMobile && (
                        <>
                            <div className="newspaper-spine-seam" />
                            <div className="newspaper-spine-gradient-left" />
                            <div className="newspaper-spine-gradient-right" />
                        </>
                    )}

                    {isMobile ? (
                        /* Mobile Layout: Single Page view with simple fade */
                        <div className={`newspaper-page-content justified-text w-full transition-opacity duration-300 ${isFlipping ? 'opacity-30' : 'opacity-100'}`}>
                            {renderPageContent(currentPage)}
                        </div>
                    ) : (
                        /* Desktop Layout: Double-Page Spread with 3D Flip */
                        <>
                            {/* Underneath Left Page */}
                            <div className="newspaper-page-content justified-text">
                                {renderPageContent(
                                    isFlipping && flipDirection === 'prev' ? prevLeftPageIdx : leftPageIdx
                                )}
                            </div>

                            {/* Underneath Right Page */}
                            <div className="newspaper-page-content justified-text">
                                {renderPageContent(
                                    isFlipping && flipDirection === 'next' ? nextRightPageIdx : rightPageIdx
                                )}
                            </div>

                            {/* 3D Flipping Sheet */}
                            {isFlipping && flipDirection === 'next' && (
                                <div className="newspaper-flipping-sheet right-to-left flipped">
                                    {/* Front side of flipping page (shows current right page text) */}
                                    <div className="newspaper-flipping-face front justified-text">
                                        {renderPageContent(rightPageIdx)}
                                    </div>
                                    {/* Back side of flipping page (shows next left page text) */}
                                    <div className="newspaper-flipping-face back justified-text">
                                        {renderPageContent(nextLeftPageIdx)}
                                    </div>
                                </div>
                            )}

                            {isFlipping && flipDirection === 'prev' && (
                                <div className="newspaper-flipping-sheet left-to-right">
                                    {/* Front side of flipping page (shows current left page text) */}
                                    <div className="newspaper-flipping-face front justified-text">
                                        {renderPageContent(leftPageIdx)}
                                    </div>
                                    {/* Back side of flipping page (shows previous right page text) */}
                                    <div className="newspaper-flipping-face back justified-text">
                                        {renderPageContent(prevRightPageIdx)}
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-between items-center mt-6">
                <button
                    onClick={handlePrev}
                    disabled={currentPage === 0 || isFlipping}
                    className="btn btn-outline flex items-center gap-2 disabled:opacity-30 hover:bg-[#14110d] hover:text-[#f4efe4]"
                    style={{ borderWidth: '1px', borderColor: 'var(--ink)' }}
                >
                    <ArrowLeft size={16} /> ÖNCEKİ
                </button>

                <div className="flex items-center gap-1 select-none font-serif text-sm">
                    {Array.from({ length: isMobile ? totalPages : Math.ceil(totalPages / 2) }).map((_, idx) => {
                        const pageNum = isMobile ? idx : idx * 2;
                        const isActive = isMobile ? currentPage === pageNum : currentPage === pageNum || currentPage === pageNum - 1;
                        return (
                            <button
                                key={idx}
                                onClick={() => {
                                    if (isFlipping) return;
                                    setCurrentPage(pageNum);
                                }}
                                className={`w-7 h-7 flex items-center justify-center border font-sans text-xs transition-all ${
                                    isActive 
                                        ? 'bg-[#14110d] text-[#f4efe4] border-[#14110d]' 
                                        : 'border-transparent text-[#8a8170] hover:text-[#14110d] hover:border-gray-400'
                                }`}
                            >
                                {idx + 1}
                            </button>
                        );
                    })}
                </div>

                <button
                    onClick={handleNext}
                    disabled={(isMobile ? currentPage + 1 >= totalPages : currentPage + 2 >= totalPages) || isFlipping}
                    className="btn btn-outline flex items-center gap-2 disabled:opacity-30 hover:bg-[#14110d] hover:text-[#f4efe4]"
                    style={{ borderWidth: '1px', borderColor: 'var(--ink)' }}
                >
                    SONRAKİ <ArrowRight size={16} />
                </button>
            </div>
        </div>
    );
};
