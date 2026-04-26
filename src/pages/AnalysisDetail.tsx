import { useParams, Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { Calendar, Clock, ArrowLeft, User, Tag as TagIcon } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { tr } from 'date-fns/locale';

export function AnalysisDetail() {
    const { analyses } = useData();
    const { id } = useParams<{ id: string }>();
    const analysis = analyses.find(a => a.id === id);

    if (!analysis) {
        return (
            <div className="container-custom py-20 text-center">
                <h2 className="text-2xl font-bold mb-4">Analiz Bulunamadı</h2>
                <Link to="/analysis" className="text-primary-600 hover:underline">
                    Analizlere Geri Dön
                </Link>
            </div>
        );
    }

    return (
        <div className="container-custom py-12 max-w-4xl">
            <Link to="/analysis" className="inline-flex items-center text-sm text-slate-500 hover:text-primary-600 mb-8 transition-colors">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Analizlere Dön
            </Link>

            <article>
                <header className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-2.5 py-0.5 rounded-full text-xs font-semibold">
                            {analysis.category}
                        </span>
                        <span className="text-slate-300 dark:text-slate-700">•</span>
                        <span className="text-sm text-slate-500 flex items-center gap-1">
                            <Clock className="h-3 w-3" /> {analysis.readTime} okuma
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-slate-50 mb-6 leading-tight">
                        {analysis.title}
                    </h1>

                    <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-6">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                                <User className="h-5 w-5 text-slate-500" />
                            </div>
                            <div>
                                <div className="font-medium text-slate-900 dark:text-slate-200">{analysis.author}</div>
                                <div className="text-xs text-slate-500 flex items-center gap-1">
                                    <Calendar className="h-3 w-3" />
                                    {format(parseISO(analysis.date), 'd MMMM yyyy', { locale: tr })}
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div
                    className="prose prose-slate dark:prose-invert max-w-none prose-lg prose-headings:font-serif"
                    dangerouslySetInnerHTML={{ __html: analysis.content }}
                />

                <footer className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
                    <div className="flex flex-wrap gap-2">
                        {analysis.tags.map(tag => (
                            <span key={tag} className="inline-flex items-center text-sm text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                                <TagIcon className="h-3 w-3 mr-1.5" />
                                {tag}
                            </span>
                        ))}
                    </div>
                </footer>
            </article>
        </div>
    );
}
