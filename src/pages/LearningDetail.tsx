import { useParams, Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { ArrowLeft, BookOpen, CheckCircle, HelpCircle } from 'lucide-react';

export function LearningDetail() {
    const { learningModules } = useData();
    const { id } = useParams<{ id: string }>();
    const module = learningModules.find(m => m.id === id);

    if (!module) return <div>Modül bulunamadı</div>;

    return (
        <div className="container-custom py-12 flex flex-col lg:flex-row gap-12">
            {/* Sidebar Navigation */}
            <div className="w-full lg:w-64 shrink-0">
                <div className="sticky top-24">
                    <Link to="/learning" className="inline-flex items-center text-sm text-slate-500 hover:text-primary-600 mb-6 transition-colors">
                        <ArrowLeft className="h-4 w-4 mr-1" />
                        Müfredata Dön
                    </Link>

                    <div className="bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden">
                        <div className="p-4 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 font-semibold text-sm">
                            Modül İçeriği
                        </div>
                        <nav className="p-2 space-y-1">
                            {['Genel Bakış', 'Öğrenme Hedefleri', 'Temel Kavramlar', 'Okuma Listesi', 'Quiz'].map((item, i) => (
                                <a
                                    key={item}
                                    href={`#section-${i}`}
                                    className="block px-3 py-2 text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md"
                                >
                                    {item}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 max-w-3xl">
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-slate-50 mb-6">
                    {module.title}
                </h1>

                <div className="prose prose-slate dark:prose-invert max-w-none mb-12">
                    <p className="lead text-xl text-slate-600 dark:text-slate-300">
                        {module.description}
                    </p>
                    <p>{module.content}</p>
                </div>

                <div className="space-y-12">
                    <section id="section-1" className="bg-primary-50 dark:bg-primary-900/10 rounded-xl p-6 border border-primary-100 dark:border-primary-900/20">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-primary-600" />
                            Öğrenme Hedefleri
                        </h3>
                        <ul className="space-y-2">
                            {module.objectives.map((obj, i) => (
                                <li key={i} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                                    {obj}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section id="section-2">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">Temel Kavramlar</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {module.concepts.map(concept => (
                                <div key={concept} className="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                                    <span className="font-medium text-primary-700 dark:text-primary-400">{concept}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section id="section-3">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                            <BookOpen className="h-6 w-6" />
                            Okuma Listesi
                        </h3>
                        <ul className="space-y-3">
                            {module.readings.map((reading, i) => (
                                <li key={i} className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg text-slate-700 dark:text-slate-300 border-l-4 border-primary-500">
                                    {reading}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section id="section-4" className="border-t-2 border-dashed border-slate-200 dark:border-slate-800 pt-12">
                        <div className="bg-slate-900 text-white rounded-xl p-8 text-center">
                            <HelpCircle className="h-12 w-12 mx-auto mb-4 text-primary-400" />
                            <h3 className="text-2xl font-bold mb-2">Kendini Test Et</h3>
                            <p className="text-slate-300 mb-6">Bu modüldeki bilgileri pekiştirmek için kısa bir quiz çöz.</p>
                            <button className="btn btn-primary px-8 py-3">
                                Quiz'e Başla
                            </button>
                            <p className="mt-4 text-xs text-slate-500">(Bu özellik yakında eklenecek)</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
