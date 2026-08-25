import { Link } from 'react-router-dom';
import { type Article } from '../../data/articles';
import { Clock } from 'lucide-react';

interface ArticleCardProps {
    article: Article;
    variant?: 'default' | 'compact' | 'featured';
}

function estimateReadingTime(text: string): number {
    const words = text.replace(/<[^>]+>/g, ' ').trim().split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(words / 200));
}

export function ArticleCard({ article, variant = 'default' }: ArticleCardProps) {
    const readingTime = estimateReadingTime(article.content || article.summary || '');
    const detailPath = `/articles/${article.id}`;

    if (variant === 'featured') {
        return (
            <article
                className="group flex flex-col h-full"
                style={{ borderTop: '3px double var(--ink)', paddingTop: 20 }}
            >
                <div className="flex items-center gap-3 mb-3">
                    <span className="kicker">{article.tags[0] ?? 'Köşe Yazısı'}</span>
                    <span style={{ borderLeft: '1px solid var(--rule-soft)', height: 10 }} />
                    <span className="dateline" style={{ color: 'var(--ink-faint)' }}>{article.year}</span>
                </div>
                <h2 className="headline mb-3" style={{ fontSize: 'clamp(26px, 3vw, 36px)', lineHeight: 1.08 }}>
                    <Link to={detailPath} style={{ color: 'inherit' }}>
                        <span className="group-hover:underline decoration-1 underline-offset-4">{article.title}</span>
                    </Link>
                </h2>
                <p className="deck mb-4" style={{ fontSize: 17 }}>{article.summary}</p>
                <div className="mt-auto flex items-center justify-between pt-3" style={{ borderTop: '1px solid var(--rule-soft)' }}>
                    <span className="byline" style={{ color: 'var(--ink-muted)' }}>— {article.author}</span>
                    <Link to={detailPath} className="byline ink-link">Oku →</Link>
                </div>
            </article>
        );
    }

    return (
        <article
            className="group flex flex-col h-full relative"
            style={{
                background: 'var(--paper)',
                borderTop: '3px solid var(--ink)',
                borderBottom: '1px solid var(--rule-soft)',
                padding: '20px 4px 24px',
                transition: 'border-color 0.2s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.borderTopColor = 'var(--accent-red)')}
            onMouseLeave={e => (e.currentTarget.style.borderTopColor = 'var(--ink)')}
        >
            <div className="flex items-center justify-between mb-3">
                <span className="kicker">{article.tags[0] ?? 'Köşe Yazısı'}</span>
                <span className="flex items-center gap-1 dateline" style={{ color: 'var(--ink-faint)' }}>
                    <Clock size={10} />
                    {readingTime} dk
                </span>
            </div>

            <h3 className="headline mb-3" style={{ fontSize: 'clamp(18px, 1.8vw, 24px)', lineHeight: 1.1 }}>
                <Link to={detailPath} style={{ color: 'inherit' }}>
                    <span className="group-hover:underline decoration-1 underline-offset-4">{article.title}</span>
                </Link>
            </h3>

            <p className="body-copy mb-5 line-clamp-3" style={{ fontSize: 14, color: 'var(--ink-muted)' }}>
                {article.summary}
            </p>

            <div
                className="mt-auto pt-4 flex flex-wrap items-center justify-between gap-2"
                style={{ borderTop: '1px solid var(--rule-soft)' }}
            >
                <div className="byline" style={{ color: 'var(--ink-muted)' }}>{article.author}</div>
                <div className="dateline" style={{ color: 'var(--ink-faint)' }}>
                    {article.publication} · {article.year}
                </div>
            </div>

            {article.tags.length > 1 && (
                <div className="flex flex-wrap gap-1.5 mt-3">
                    {article.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="tag-chip">{tag}</span>
                    ))}
                </div>
            )}

            <div className="mt-4">
                <Link to={detailPath} className="byline ink-link inline-flex items-center gap-1.5">
                    Gazete'de Oku →
                </Link>
            </div>
        </article>
    );
}
