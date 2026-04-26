import { Clock, Calendar, ArrowRight, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { type Analysis } from '../../data/analyses';
import { format, parseISO } from 'date-fns';
import { tr } from 'date-fns/locale';

interface AnalysisCardProps {
    analysis: Analysis;
}

export function AnalysisCard({ analysis }: AnalysisCardProps) {
    return (
        <div className="card-premium group relative flex flex-col h-full bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
            <div className="p-8 flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
                        {analysis.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{analysis.readTime}</span>
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors leading-tight tracking-tight">
                    <Link to={`/analysis/${analysis.id}`}>
                        <span className="absolute inset-0" />
                        {analysis.title}
                    </Link>
                </h3>

                <p className="text-slate-600 dark:text-slate-400 mb-8 line-clamp-3 flex-1 text-base leading-relaxed">
                    {analysis.summary}
                </p>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100 dark:border-slate-800/60">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:scale-110 transition-transform duration-500">
                            <User className="h-5 w-5" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-bold text-slate-900 dark:text-slate-200">
                                {analysis.author}
                            </span>
                            <span className="text-[11px] font-medium text-slate-500 flex items-center gap-1 mt-0.5">
                                <Calendar className="h-3 w-3" />
                                {format(parseISO(analysis.date), 'd MMMM yyyy', { locale: tr })}
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 group-hover:bg-primary-600 group-hover:border-primary-600 group-hover:text-white transition-all duration-300">
                        <ArrowRight className="h-5 w-5" />
                    </div>
                </div>
            </div>
        </div>
    );
}
