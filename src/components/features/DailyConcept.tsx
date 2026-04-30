import { RefreshCw } from 'lucide-react';
import { type Concept } from '../../data/concepts';
import { useState, useEffect } from 'react';
import { useData } from '../../context/DataContext';
import { cn } from '../../lib/utils';

export function DailyConcept() {
    const { concepts } = useData();
    const [concept, setConcept] = useState<Concept | null>(null);
    const [isAnimating, setIsAnimating] = useState(false);

    const getRandomConcept = () => {
        if (concepts.length === 0) return;
        setIsAnimating(true);
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * concepts.length);
            setConcept(concepts[randomIndex]);
            setIsAnimating(false);
        }, 300);
    };

    useEffect(() => {
        if (concepts.length > 0 && !concept) {
            const randomIndex = Math.floor(Math.random() * concepts.length);
            setConcept(concepts[randomIndex]);
        }
    }, [concepts, concept]);

    if (!concept) return null;

    return (
        <aside
            className="relative"
            style={{
                background: 'var(--paper-deep)',
                border: '1px solid var(--ink)',
                padding: '24px',
            }}
        >
            <div
                className="flex items-center justify-between mb-4 pb-2"
                style={{ borderBottom: '1px solid var(--rule-soft)' }}
            >
                <span className="kicker">Mercek Altında — Günün Kavramı</span>
                <button
                    onClick={getRandomConcept}
                    title="Yeni Kavram"
                    className="inline-flex items-center justify-center w-7 h-7"
                    style={{ border: '1px solid var(--ink)', background: 'var(--paper)' }}
                >
                    <RefreshCw className={cn('h-3.5 w-3.5', isAnimating && 'animate-spin')} style={{ color: 'var(--ink)' }} />
                </button>
            </div>

            <div className={cn('transition-opacity duration-300', isAnimating ? 'opacity-0' : 'opacity-100')}>
                <h3 className="headline mb-2" style={{ fontSize: 28 }}>
                    {concept.term}
                </h3>
                <div className="rule-double mt-3 mb-4" style={{ width: 60 }} />
                <p className="body-copy line-clamp-5" style={{ color: 'var(--ink-soft)' }}>
                    {concept.definition}
                </p>
                <div className="mt-4 dateline" style={{ color: 'var(--ink-faint)' }}>
                    Sözlükten — Agora360
                </div>
            </div>
        </aside>
    );
}
