import { useParams, Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { ArrowLeft } from 'lucide-react';

export function LearningDetail() {
    const { learningModules } = useData();
    const { id } = useParams<{ id: string }>();
    const module = learningModules.find(m => m.id === id);

    if (!module) {
        return (
            <div className="container-custom py-20 text-center">
                <h2 className="headline" style={{ fontSize: 28 }}>Modül bulunamadı</h2>
            </div>
        );
    }

    return (
        <div className="container-custom py-12">
            <div className="flex flex-col lg:flex-row gap-12">
                {/* Sidebar */}
                <aside className="w-full lg:w-64 shrink-0">
                    <div className="sticky top-32">
                        <Link to="/ui/learning" className="byline ink-link inline-flex items-center gap-2 mb-6">
                            <ArrowLeft className="h-3.5 w-3.5" /> Müfredata Dön
                        </Link>

                        <div style={{ border: '1px solid var(--ink)', background: 'var(--paper-deep)' }}>
                            <div
                                className="kicker px-4 py-2"
                                style={{ background: 'var(--ink)', color: 'var(--paper)' }}
                            >
                                Modül İçeriği
                            </div>
                            <nav className="p-2">
                                {['Genel Bakış', 'Öğrenme Hedefleri', 'Temel Kavramlar', 'Okuma Listesi', 'Quiz'].map((item, i) => (
                                    <a
                                        key={item}
                                        href={`#section-${i}`}
                                        className="block px-3 py-2 byline transition-colors"
                                        style={{
                                            color: 'var(--ink-muted)',
                                            borderBottom: '1px solid var(--rule-soft)',
                                        }}
                                    >
                                        {String(i + 1).padStart(2, '0')} — {item}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>
                </aside>

                {/* Content */}
                <div className="flex-1 max-w-3xl">
                    <div style={{ borderTop: '3px double var(--ink)', paddingTop: 16 }}>
                        <div className="kicker mb-2">Modül</div>
                        <h1 className="headline mb-4" style={{ fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.04 }}>
                            {module.title}
                        </h1>
                        <p className="deck mb-8" style={{ fontSize: 20 }}>
                            {module.description}
                        </p>
                    </div>

                    <div className="body-copy mb-12 drop-cap" style={{ fontSize: 17, color: 'var(--ink-soft)' }}>
                        <p>{module.content}</p>
                    </div>

                    <section id="section-1" className="mb-12">
                        <div className="kicker-ink pb-2 mb-4" style={{ borderBottom: '3px solid var(--ink)' }}>
                            Öğrenme Hedefleri
                        </div>
                        <ul className="space-y-2 body-copy" style={{ fontSize: 16 }}>
                            {module.objectives.map((obj, i) => (
                                <li key={i} className="flex gap-3">
                                    <span style={{ color: 'var(--accent-red)' }}>§</span>
                                    {obj}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section id="section-2" className="mb-12">
                        <div className="kicker-ink pb-2 mb-4" style={{ borderBottom: '3px solid var(--ink)' }}>
                            Temel Kavramlar
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {module.concepts.map(c => (
                                <div
                                    key={c}
                                    className="px-4 py-3 body-copy"
                                    style={{ border: '1px solid var(--rule-soft)', fontSize: 14 }}
                                >
                                    {c}
                                </div>
                            ))}
                        </div>
                    </section>

                    <section id="section-3" className="mb-12">
                        <div className="kicker-ink pb-2 mb-4" style={{ borderBottom: '3px solid var(--ink)' }}>
                            Okuma Listesi
                        </div>
                        <ul className="space-y-3">
                            {module.readings.map((r, i) => (
                                <li
                                    key={i}
                                    className="body-copy py-3 px-4"
                                    style={{ borderLeft: '3px solid var(--ink)', background: 'var(--paper-deep)', fontSize: 15 }}
                                >
                                    {r}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section
                        id="section-4"
                        className="text-center py-10 px-6"
                        style={{ borderTop: '3px double var(--ink)', borderBottom: '3px double var(--ink)' }}
                    >
                        <div className="kicker mb-3">Sınav</div>
                        <h3 className="headline mb-3" style={{ fontSize: 28 }}>Kendini Test Et</h3>
                        <p className="lede italic mb-5" style={{ color: 'var(--ink-muted)' }}>
                            Bu modüldeki bilgileri pekiştirmek için kısa bir quiz çöz.
                        </p>
                        <button className="btn btn-primary">Quiz’e Başla</button>
                        <p className="mt-3 dateline" style={{ color: 'var(--ink-faint)' }}>
                            (Bu özellik yakında eklenecek)
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
