import { Calendar, User, BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { type Article } from '../../data/articles';

interface ArticleCardProps {
    article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
    return (
        <div className="card-premium group flex flex-col h-full bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
            <div className="p-8 flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-lg bg-primary-500/5 border border-primary-500/10 text-[10px] font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">
                            {tag}
                        </span>
                    ))}
                </div>
                <h3 className="text-2xl font-bold mb-4 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors tracking-tight">
                    {article.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3 text-base leading-relaxed">
                    {article.summary}
                </p>

                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                        <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                            <User className="h-4 w-4" />
                        </div>
                        <span className="font-medium">{article.author}</span>
                    </div>
                </div>
            </div>

            <div className="px-8 pb-8">
                <div className="pt-6 border-t border-slate-100 dark:border-slate-800/60">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                        <div className="flex items-center gap-1.5 font-medium">
                            <BookOpen className="h-3.5 w-3.5" />
                            <span className="truncate max-w-[150px]">{article.publication}</span>
                        </div>
                        <div className="flex items-center gap-1.5 font-medium">
                            <Calendar className="h-3.5 w-3.5" />
                            <span>{article.year}</span>
                        </div>
                    </div>

                    <div className="mt-6">
                        <Link
                            to={`/articles/${article.id}`}
                            className="w-full btn btn-primary flex items-center justify-center gap-2 group/btn py-3 shadow-lg shadow-primary-500/10 hover:shadow-primary-500/20 transition-all"
                        >
                            <span>Yazıyı Oku</span>
                            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
