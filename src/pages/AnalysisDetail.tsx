import { useParams, Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { ArrowLeft } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { tr } from 'date-fns/locale';

export function AnalysisDetail() {
    const { analyses } = useData();
    const { id } = useParams<{ id: string }>();
    const analysis = analyses.find(a => a.id === id);

    if (!analysis) {
        return (
            <div className="container-custom py-20 text-center">
                <h2 className="headline mb-4" style={{ fontSize: 32 }}>Analiz Bulunamadı</h2>
                <Link to="/analysis" className="ink-link byline">Analizlere Geri Dön</Link>
            </div>
        );
    }

    return (
        <div className="container-custom py-12 max-w-4xl">
            <Link
                to="/analysis"
                className="byline ink-link inline-flex items-center gap-2 mb-8"
            >
                <ArrowLeft className="h-3.5 w-3.5" /> Analizlere Dön
            </Link>

            <article>
                <header className="mb-10 pt-4" style={{ borderTop: '3px double var(--ink)' }}>
                    <div className="flex items-center gap-3 mb-3">
                        <span className="kicker">{analysis.category}</span>
                        <span style={{ borderLeft: '1px solid var(--rule-soft)', height: 12 }} />
                        <span className="dateline" style={{ color: 'var(--ink-faint)' }}>
                            {analysis.readTime} okuma
                        </span>
                    </div>

                    <h1 className="headline mb-4" style={{ fontSize: 'clamp(32px, 4.4vw, 54px)', lineHeight: 1.04 }}>
                        {analysis.title}
                    </h1>

                    <p className="deck mb-6" style={{ fontSize: 20 }}>
                        {analysis.summary}
                    </p>

                    <div
                        className="flex flex-wrap items-center justify-between gap-4 py-3"
                        style={{ borderTop: '1px solid var(--rule-soft)', borderBottom: '1px solid var(--rule-soft)' }}
                    >
                        <span className="byline">— {analysis.author}</span>
                        <span className="dateline" style={{ color: 'var(--ink-faint)' }}>
                            {format(parseISO(analysis.date), 'd MMMM yyyy', { locale: tr })}
                        </span>
                    </div>
                </header>

                <div
                    className="body-copy"
                    style={{ fontSize: 18, color: 'var(--ink-soft)' }}
                    dangerouslySetInnerHTML={{ __html: analysis.content }}
                />

                <footer
                    className="mt-14 pt-8"
                    style={{ borderTop: '3px double var(--ink)' }}
                >
                    <div className="flex flex-wrap items-center gap-2">
                        {analysis.tags.map(tag => (
                            <span key={tag} className="tag-chip">{tag}</span>
                        ))}
                    </div>
                </footer>
            </article>
        </div>
    );
}
