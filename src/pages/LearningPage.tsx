import { Link } from 'react-router-dom';
import { SectionHeader } from '../components/common/SectionHeader';
import { useData } from '../context/DataContext';
import { ArrowRight } from 'lucide-react';

export function LearningPage() {
    const { learningModules } = useData();
    return (
        <div className="container-custom py-12">
            <SectionHeader
                title="Uluslararası İlişkiler Öğren"
                description="Temel teoriler, kavramlar ve yaklaşımlar için eğitim modülleri."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {learningModules.map((module, index) => (
                    <div key={module.id} className="group flex flex-col bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 hover:shadow-md transition-all">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-10 w-10 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 font-bold text-lg">
                                {index + 1}
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 group-hover:text-primary-600 transition-colors">
                                {module.title}
                            </h3>
                        </div>

                        <p className="text-slate-600 dark:text-slate-400 mb-6 flex-1 text-sm">
                            {module.description}
                        </p>

                        <div className="space-y-3 mb-6">
                            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Kavramlar</div>
                            <div className="flex flex-wrap gap-1.5">
                                {module.concepts.slice(0, 3).map(concept => (
                                    <span key={concept} className="inline-block px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded">
                                        {concept}
                                    </span>
                                ))}
                                {module.concepts.length > 3 && (
                                    <span className="inline-block px-2 py-0.5 text-slate-400 text-xs">+{module.concepts.length - 3}</span>
                                )}
                            </div>
                        </div>

                        <Link
                            to={`/learning/${module.id}`}
                            className="mt-auto flex items-center justify-center w-full py-2.5 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-200 font-medium text-sm hover:bg-primary-50 dark:hover:bg-slate-700 hover:text-primary-700 dark:hover:text-primary-400 transition-colors"
                        >
                            Modülü Başlat
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
