import { Link } from 'react-router-dom';
import { type Article } from '../../data/articles';

interface ArticleCardProps {
    article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
    return (
        <article
            className="group flex flex-col h-full"
            style={{
                background: 'var(--paper)',
                borderTop: '3px solid var(--ink)',
                borderBottom: '1px solid var(--rule-soft)',
                padding: '20px 4px 24px',
            }}
        >
            <div className="kicker mb-3">{article.tags[0] ?? 'Köşe Yazısı'}</div>

            <h3 className="headline mb-3" style={{ fontSize: 'clamp(20px, 2vw, 26px)' }}>
                <Link to={`/articles/${article.id}`} style={{ color: 'inherit' }}>
                    <span className="hover:underline decoration-1 underline-offset-4">{article.title}</span>
                </Link>
            </h3>

            <p
                className="body-copy mb-5 line-clamp-3"
                style={{ fontSize: 15, color: 'var(--ink-muted)' }}
            >
                {article.summary}
            </p>

            <div
                className="mt-auto pt-4 flex flex-wrap items-center justify-between gap-2"
                style={{ borderTop: '1px solid var(--rule-soft)' }}
            >
                <div className="byline" style={{ color: 'var(--ink-muted)' }}>
                    {article.author}
                </div>
                <div className="dateline" style={{ color: 'var(--ink-faint)' }}>
                    {article.publication} · {article.year}
                </div>
            </div>

            {article.tags.length > 1 && (
                <div className="flex flex-wrap gap-2 mt-3">
                    {article.tags.slice(0, 4).map(tag => (
                        <span key={tag} className="tag-chip">{tag}</span>
                    ))}
                </div>
            )}

            <div className="mt-4">
                <Link
                    to={`/articles/${article.id}`}
                    className="byline ink-link"
                >
                    Yazıyı Oku →
                </Link>
            </div>
        </article>
    );
}
