import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { ArrowLeft, Share2, Clock } from 'lucide-react';
import { ThreeAsterisks } from '../components/common/Ornaments';

function readingTimeMinutes(html?: string, fallback?: string): number {
    const src = (html || fallback || '').replace(/<[^>]+>/g, ' ');
    const words = src.trim().split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(words / 220));
}

export function ArticleDetail() {
    const { articles } = useData();
    const { id } = useParams<{ id: string }>();
    const article = articles.find(a => a.id === id);

    const minutes = useMemo(
        () => readingTimeMinutes(article?.content, article?.summary),
        [article?.content, article?.summary]
    );

    if (!article) {
        return (
            <div className="container-custom py-20 text-center">
                <h2 className="headline mb-4" style={{ fontSize: 32 }}>Yazı Bulunamadı</h2>
                <Link to="/articles" className="ink-link byline">Yazılara Geri Dön</Link>
            </div>
        );
    }

    return (
        <div className="container-custom py-12 max-w-4xl relative">
            <div
                className="vintage-panel"
                style={{ padding: 'clamp(20px, 5vw, 60px)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}
            >
                <div
                className="flex items-center justify-between mb-8 pb-3"
                style={{ borderBottom: '1px solid var(--rule-soft)' }}
            >
                <Link to="/articles" className="byline ink-link inline-flex items-center gap-2">
                    <ArrowLeft className="h-3.5 w-3.5" /> Yazılara Dön
                </Link>
                <button
                    type="button"
                    onClick={() => navigator.share?.({ title: article.title, url: window.location.href }).catch(() => {})}
                    className="byline inline-flex items-center gap-1.5"
                    style={{ color: 'var(--ink-muted)' }}
                >
                    <Share2 className="h-3.5 w-3.5" /> Paylaş
                </button>
            </div>

            <article>
                <header
                    className="mb-10 pt-4"
                    style={{ borderTop: '3px double var(--ink)' }}
                >
                    <div className="kicker mb-3">
                        {article.tags[0] ?? 'Köşe Yazısı'} · {article.publication ?? 'Agora360'}
                    </div>
                    <h1
                        className="headline mb-4"
                        style={{ fontSize: 'clamp(36px, 5vw, 60px)', lineHeight: 1.04 }}
                    >
                        {article.title}
                    </h1>
                    <p className="deck mb-6" style={{ fontSize: 22 }}>
                        {article.summary}
                    </p>

                    <div
                        className="flex flex-wrap items-center gap-x-6 gap-y-2 py-3"
                        style={{ borderTop: '1px solid var(--rule-soft)', borderBottom: '1px solid var(--rule-soft)' }}
                    >
                        <span className="byline">— {article.author}</span>
                        <span className="dateline" style={{ color: 'var(--ink-faint)' }}>
                            {article.publication} · {article.year}
                        </span>
                        <span className="dateline inline-flex items-center gap-1" style={{ color: 'var(--ink-muted)' }}>
                            <Clock className="h-3 w-3" /> Tahmini Okuma · {minutes} dk
                        </span>
                    </div>
                </header>

                <div
                    className="article-body"
                >
                    {article.content ? (
                        <div dangerouslySetInnerHTML={{ __html: article.content }} />
                    ) : (
                        <div>
                            <p className="drop-cap mb-5" style={{ fontSize: 18 }}>
                                {article.summary}
                            </p>
                        </div>
                    )}
                </div>

                <ThreeAsterisks className="my-10" />

                <footer
                    className="mt-6 pt-8"
                    style={{ borderTop: '3px double var(--ink)' }}
                >
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                        {article.tags.map(tag => (
                            <span key={tag} className="tag-chip">{tag}</span>
                        ))}
                    </div>
                    <p className="dateline" style={{ color: 'var(--ink-muted)' }}>
                        — Agora360 Yayın Kurulu
                    </p>
                </footer>
            </article>
            </div>

            <div className="mt-10 text-center">
                <Link to="/articles" className="btn btn-outline">Tüm Yazıları Gör</Link>
            </div>
        </div>
    );
}
