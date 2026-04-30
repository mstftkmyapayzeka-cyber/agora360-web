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
        <article
            className={cn('group flex gap-5 py-6', className)}
            style={{ borderBottom: '1px solid var(--rule-soft)' }}
        >
            {/* Date column */}
            <div className="flex-shrink-0 w-20 text-right">
                <div className="dateline" style={{ color: 'var(--ink)', fontSize: 11 }}>
                    {format(parseISO(item.date), 'd MMM', { locale: tr }).toUpperCase()}
                </div>
                <div className="dateline mt-1" style={{ color: 'var(--ink-faint)', fontSize: 10 }}>
                    {format(parseISO(item.date), 'yyyy', { locale: tr })}
                </div>
                <div
                    className="mx-auto mt-2"
                    style={{ width: '36px', height: 1, background: 'var(--rule-soft)', marginLeft: 'auto' }}
                />
                <div className="dateline mt-2" style={{ color: 'var(--ink-faint)', fontSize: 9 }}>
                    {item.region}
                </div>
            </div>

            {/* Vertical rule */}
            <div style={{ width: 1, background: 'var(--rule-soft)' }} />

            {/* Content */}
            <div className="flex-1">
                <div className="kicker mb-2">{item.category}</div>
                <h4 className="headline mb-2" style={{ fontSize: 22 }}>
                    <span className="group-hover:underline decoration-1 underline-offset-4">{item.title}</span>
                </h4>
                <p className="body-copy line-clamp-2" style={{ fontSize: 15, color: 'var(--ink-muted)' }}>
                    {item.description}
                </p>

                {item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                        {item.tags.slice(0, 4).map(tag => (
                            <span key={tag} className="tag-chip">{tag}</span>
                        ))}
                    </div>
                )}
            </div>
        </article>
    );
}
