import React, { useMemo } from 'react';
import { ArrowLeft, Clock, Calendar, Share2, Tag, BookOpen } from 'lucide-react';

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
    const readingTime = useMemo(() => {
        const text = (content || summary || '').replace(/<[^>]+>/g, ' ');
        const words = text.trim().split(/\s+/).filter(Boolean).length;
        return Math.max(1, Math.round(words / 200));
    }, [content, summary]);

    const displayDate = year || date || '2026';

    const initials = author.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({ title, text: summary, url: window.location.href }).catch(() => {});
        } else {
            navigator.clipboard?.writeText(window.location.href);
        }
    };

    return (
        <div className="ar-outer">
            {/* Top nav */}
            <div className="ar-topnav">
                <button onClick={() => { window.location.href = backPath; }} className="ar-back-btn">
                    <ArrowLeft size={13} /> {backText}
                </button>
                <button onClick={handleShare} className="ar-share-btn">
                    <Share2 size={13} /> Paylaş
                </button>
            </div>

            {/* Two-column layout */}
            <div className="ar-layout">

                {/* ── Sidebar ── */}
                <aside className="ar-sidebar">
                    {/* Publication badge */}
                    <div className="ar-sidebar-pub">
                        <div className="ar-sidebar-pub-name">{publication}</div>
                        <div className="ar-sidebar-pub-line" />
                    </div>

                    {/* Author card */}
                    <div className="ar-sidebar-author">
                        <div className="ar-sidebar-avatar">{initials}</div>
                        <div className="ar-sidebar-author-name">{author}</div>
                        <div className="ar-sidebar-author-role">Köşe Yazarı</div>
                    </div>

                    {/* Stats */}
                    <div className="ar-sidebar-stats">
                        <div className="ar-sidebar-stat">
                            <Clock size={13} />
                            <span>{readingTime} dk okuma</span>
                        </div>
                        <div className="ar-sidebar-stat">
                            <Calendar size={13} />
                            <span>{displayDate}</span>
                        </div>
                        <div className="ar-sidebar-stat">
                            <BookOpen size={13} />
                            <span>Köşe Yazısı</span>
                        </div>
                    </div>

                    {/* Tags */}
                    {tags.length > 0 && (
                        <div className="ar-sidebar-tags">
                            <div className="ar-sidebar-section-label">Konular</div>
                            <div className="ar-sidebar-tags-list">
                                {tags.map(t => (
                                    <span key={t} className="ar-sidebar-tag">{t}</span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Share */}
                    <button onClick={handleShare} className="ar-sidebar-share">
                        <Share2 size={12} /> Paylaş
                    </button>

                    {/* Back */}
                    <button onClick={() => { window.location.href = backPath; }} className="ar-sidebar-back">
                        <ArrowLeft size={12} /> Geri Dön
                    </button>
                </aside>

                {/* ── Article ── */}
                <article className="ar-article">
                    {/* Masthead strip */}
                    <div className="ar-masthead">
                        <div className="ar-masthead-line" />
                        <span className="ar-masthead-pub">{publication}</span>
                        <div className="ar-masthead-line" />
                    </div>

                    {/* Hero */}
                    <div className="ar-hero">
                        {tags.length > 0 && (
                            <div className="ar-hero-kicker">
                                <span className="ar-kicker-dash" />
                                {tags[0]}
                            </div>
                        )}
                        <h1 className="ar-hero-title">{title}</h1>
                        <p className="ar-hero-summary">{summary}</p>
                    </div>

                    {/* Byline */}
                    <div className="ar-byline">
                        <span className="ar-byline-author">— {author}</span>
                        <div className="ar-byline-dots" />
                        <span className="ar-byline-date">{displayDate}</span>
                    </div>

                    {/* Ornament divider */}
                    <div className="ar-ornament">
                        <span>✦</span><span>✦</span><span>✦</span>
                    </div>

                    {/* Body */}
                    <div
                        className="ar-body"
                        dangerouslySetInnerHTML={{ __html: content || `<p>${summary}</p>` }}
                    />

                    {/* Footer */}
                    <footer className="ar-footer">
                        <div className="ar-footer-rule" />
                        <div className="ar-footer-tags">
                            <Tag size={10} />
                            {tags.map(t => <span key={t} className="ar-footer-tag">{t}</span>)}
                        </div>
                        <div className="ar-footer-finis">§ SON §</div>
                    </footer>
                </article>
            </div>
        </div>
    );
};
