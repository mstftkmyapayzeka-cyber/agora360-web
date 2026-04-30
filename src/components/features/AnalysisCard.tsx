import { Link } from 'react-router-dom';
import { type Analysis } from '../../data/analyses';
import { format, parseISO } from 'date-fns';
import { tr } from 'date-fns/locale';

interface AnalysisCardProps {
    analysis: Analysis;
}

export function AnalysisCard({ analysis }: AnalysisCardProps) {
    return (
        <article
            className="group relative flex flex-col h-full"
            style={{
                background: 'var(--paper)',
                borderTop: '3px solid var(--ink)',
                borderBottom: '1px solid var(--rule-soft)',
                padding: '20px 4px 24px',
            }}
        >
            <div className="flex items-center justify-between mb-3">
                <span className="kicker">{analysis.category}</span>
                <span className="dateline" style={{ color: 'var(--ink-faint)' }}>
                    {analysis.readTime} okuma
                </span>
            </div>

            <h3 className="headline mb-3" style={{ fontSize: 'clamp(22px, 2.2vw, 28px)' }}>
                <Link to={`/analysis/${analysis.id}`} style={{ color: 'inherit' }}>
                    <span className="hover:underline decoration-1 underline-offset-4">
                        {analysis.title}
                    </span>
                </Link>
            </h3>

            <p
                className="body-copy mb-5 line-clamp-4 flex-1"
                style={{ fontSize: 15, color: 'var(--ink-muted)' }}
            >
                {analysis.summary}
            </p>

            <div
                className="mt-auto pt-4 flex items-center justify-between"
                style={{ borderTop: '1px solid var(--rule-soft)' }}
            >
                <div>
                    <div className="byline" style={{ color: 'var(--ink)' }}>{analysis.author}</div>
                    <div className="dateline" style={{ color: 'var(--ink-faint)' }}>
                        {format(parseISO(analysis.date), 'd MMMM yyyy', { locale: tr })}
                    </div>
                </div>
                <Link
                    to={`/analysis/${analysis.id}`}
                    className="byline ink-link"
                >
                    Devamı →
                </Link>
            </div>
        </article>
    );
}
