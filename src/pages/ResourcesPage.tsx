import { useMemo } from 'react';
import { SectionHeader } from '../components/common/SectionHeader';
import { useData } from '../context/DataContext';
import { useSection } from '../context/SectionContext';
import { ExternalLink } from 'lucide-react';

export function ResourcesPage() {
    const { resources: allData } = useData();
    const { activeSection } = useSection();
    const resources = useMemo(
        () => allData.filter(x => !activeSection || x.section === activeSection.id || x.section === 'portal'),
        [allData, activeSection]
    );
    const books    = resources.filter(r => r.type === 'Kitap');
    const thinkers = resources.filter(r => r.type === 'Düşünür');
    const tools    = resources.filter(r => r.type === 'Araç' || r.type === 'Köşe Yazısı');

    return (
        <div className="container-custom py-12">
            <SectionHeader
                title="Kaynak Bibliyografyası"
                description="Akademik araştırma için temel başvuru kitapları, düşünürler ve dijital araçlar."
            />

            <section className="mb-14">
                <div className="kicker-ink pb-2 mb-6" style={{ borderBottom: '3px solid var(--ink)' }}>
                    Önemli Kitaplar
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
                    {books.map(r => (
                        <article key={r.id} style={{ borderTop: '1px solid var(--rule-soft)', paddingTop: 12 }}>
                            <div className="kicker mb-1">{r.category}</div>
                            <h3 className="headline mb-2" style={{ fontSize: 20 }}>{r.name}</h3>
                            <p className="body-copy" style={{ fontSize: 14, color: 'var(--ink-muted)' }}>{r.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="mb-14">
                <div className="kicker-ink pb-2 mb-6" style={{ borderBottom: '3px solid var(--ink)' }}>
                    Önemli Düşünürler
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
                    {thinkers.map(r => (
                        <article key={r.id} style={{ borderTop: '1px solid var(--rule-soft)', paddingTop: 12 }}>
                            <div className="kicker mb-1">{r.category}</div>
                            <h3 className="headline mb-2" style={{ fontSize: 20 }}>{r.name}</h3>
                            <p className="body-copy" style={{ fontSize: 14, color: 'var(--ink-muted)' }}>{r.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section>
                <div className="kicker-ink pb-2 mb-6" style={{ borderBottom: '3px solid var(--ink)' }}>
                    Dijital Araçlar & Veritabanları
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                    {tools.map(r => (
                        <a
                            key={r.id}
                            href={r.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block"
                            style={{ borderTop: '1px solid var(--rule-soft)', paddingTop: 12, color: 'inherit' }}
                        >
                            <div className="kicker mb-1">{r.category}</div>
                            <h3 className="headline mb-2 inline-flex items-center gap-2" style={{ fontSize: 20 }}>
                                <span className="group-hover:underline decoration-1 underline-offset-4">{r.name}</span>
                                <ExternalLink className="h-3.5 w-3.5" style={{ color: 'var(--ink-muted)' }} />
                            </h3>
                            <p className="body-copy" style={{ fontSize: 14, color: 'var(--ink-muted)' }}>{r.description}</p>
                        </a>
                    ))}
                </div>
            </section>
        </div>
    );
}
