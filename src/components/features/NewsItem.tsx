import { MapPin, Clock, ChevronRight } from 'lucide-react';
import { type NewsItem as NewsItemType } from '../../data/news';
import { cn } from '../../lib/utils';
import { format, parseISO } from 'date-fns';
import { tr } from 'date-fns/locale';

interface NewsItemProps {
    item: NewsItemType;
    className?: string;
}

export function NewsItem({ item, className }: NewsItemProps) {
    return (
        <div className={cn("group relative pl-10 pb-10 border-l border-slate-200 dark:border-slate-800 last:pb-0 last:border-0 transition-all", className)}>
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-white dark:bg-slate-950 border-2 border-slate-300 dark:border-slate-700 group-hover:border-primary-500 group-hover:scale-125 transition-all duration-300 z-10" />

            {/* Animated Link-like Structure */}
            <div className="flex flex-col gap-3">
                <div className="flex flex-wrap items-center gap-4">
                    <span className="px-2 py-0.5 rounded-md bg-primary-500/10 text-[10px] font-bold text-primary-600 dark:text-primary-400 uppercase tracking-widest">
                        {item.category}
                    </span>
                    <div className="flex items-center gap-3 text-[11px] font-medium text-slate-500 dark:text-slate-400">
                        <div className="flex items-center gap-1.5">
                            <Clock className="h-3.5 w-3.5" />
                            <time dateTime={item.date}>
                                {format(parseISO(item.date), 'd MMM', { locale: tr })}
                            </time>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <MapPin className="h-3.5 w-3.5" />
                            <span>{item.region}</span>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-primary-500 transition-colors leading-snug">
                        {item.title}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2 leading-relaxed">
                        {item.description}
                    </p>
                </div>

                {item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {item.tags.map(tag => (
                            <span key={tag} className="inline-flex items-center text-[10px] font-bold text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-900/50 px-2 py-1 rounded-lg border border-slate-100 dark:border-slate-800 transition-colors group-hover:border-primary-500/20">
                                #{tag}
                            </span>
                        ))}
                    </div>
                )}

                <div className="pt-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <button className="text-xs font-bold text-primary-600 dark:text-primary-400 flex items-center gap-1">
                        Detayları Görüntüle <ChevronRight className="w-3 h-3" />
                    </button>
                </div>
            </div>
        </div>
    );
}
