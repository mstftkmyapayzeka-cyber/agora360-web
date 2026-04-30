import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import { SectionHeader } from '../components/common/SectionHeader';
import { useData } from '../context/DataContext';
import { useSection } from '../context/SectionContext';

export function LearningPage() {
    const { learningModules: allData } = useData();
    const { activeSection } = useSection();
    const learningModules = useMemo(
        () => allData.filter(x => !activeSection || x.section === activeSection.id || x.section === 'portal'),
        [allData, activeSection]
    );

    return (
        <div className="container-custom py-12">
            <SectionHeader
                title="Akademi · Eğitim Modülleri"
                description="Temel teoriler, kavramlar ve yaklaşımlar — kütüphane düzeninde sıralı ders modülleri."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
                {learningModules.map((module, index) => (
                    <article
                        key={module.id}
                        className="flex flex-col h-full"
                        style={{
                            borderTop: '3px solid var(--ink)',
                            paddingTop: 16,
                        }}
                    >
                        <div className="flex items-baseline gap-3 mb-2">
                            <span
                                className="masthead-title"
                                style={{ fontSize: 36, color: 'var(--accent-red)' }}
                            >
                                {String(index + 1).padStart(2, '0')}
                            </span>
                            <span className="kicker">Modül</span>
                        </div>
                        <h3 className="headline mb-3" style={{ fontSize: 22 }}>
                            {module.title}
                        </h3>
                        <p className="body-copy mb-4 flex-1" style={{ fontSize: 14, color: 'var(--ink-muted)' }}>
                            {module.description}
                        </p>

                        <div className="mb-4">
                            <div className="kicker mb-2" style={{ color: 'var(--ink-muted)' }}>Kavramlar</div>
                            <div className="flex flex-wrap gap-2">
                                {module.concepts.slice(0, 3).map(c => (
                                    <span key={c} className="tag-chip">{c}</span>
                                ))}
                                {module.concepts.length > 3 && (
                                    <span className="dateline" style={{ color: 'var(--ink-faint)' }}>
                                        +{module.concepts.length - 3}
                                    </span>
                                )}
                            </div>
                        </div>

                        <Link
                            to={`/learning/${module.id}`}
                            className="byline ink-link inline-block"
                        >
                            Modülü Başlat →
                        </Link>
                    </article>
                ))}
            </div>
        </div>
    );
}
