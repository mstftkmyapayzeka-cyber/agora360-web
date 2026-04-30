import { Play, Clock } from 'lucide-react';
import { type Podcast } from '../../data/podcasts';
import { format, parseISO } from 'date-fns';
import { tr } from 'date-fns/locale';

interface PodcastCardProps {
    podcast: Podcast;
    onClick?: () => void;
}

export function PodcastCard({ podcast, onClick }: PodcastCardProps) {
    return (
        <article
            className="group cursor-pointer flex flex-col h-full"
            onClick={onClick}
            style={{
                background: 'var(--paper)',
                border: '1px solid var(--rule-soft)',
                transition: 'border-color 0.2s ease',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--ink)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--rule-soft)'; }}
        >
            {/* Thumbnail with sepia treatment */}
            <div className="relative" style={{ aspectRatio: '16/10', overflow: 'hidden' }}>
                <img
                    src={podcast.thumbnailUrl}
                    alt={podcast.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    style={{ filter: 'grayscale(80%) sepia(15%) contrast(1.05)' }}
                />
                <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: 'rgba(20,17,13,0.35)' }}
                >
                    <div
                        className="flex items-center justify-center w-14 h-14"
                        style={{ background: 'var(--paper)', border: '1px solid var(--ink)' }}
                    >
                        <Play className="h-5 w-5 fill-current ml-0.5" style={{ color: 'var(--ink)' }} />
                    </div>
                </div>
                {/* Top label strip */}
                <div
                    className="absolute top-0 left-0 right-0 flex items-center justify-between px-3 py-1.5"
                    style={{ background: 'var(--ink)' }}
                >
                    <span className="byline" style={{ color: 'var(--paper)', fontSize: 9 }}>
                        ◐ Podcast
                    </span>
                    <span className="dateline flex items-center gap-1" style={{ color: 'var(--paper)', fontSize: 9 }}>
                        <Clock className="h-3 w-3" /> {podcast.duration}
                    </span>
                </div>
            </div>

            <div className="p-5 flex flex-col flex-1">
                <div className="kicker mb-2">{podcast.topic}</div>
                <h3 className="headline mb-3" style={{ fontSize: 20 }}>
                    {podcast.title}
                </h3>
                <p className="body-copy line-clamp-2 flex-1" style={{ fontSize: 14, color: 'var(--ink-muted)' }}>
                    {podcast.description}
                </p>
                <div
                    className="mt-4 pt-3 dateline"
                    style={{ color: 'var(--ink-faint)', borderTop: '1px solid var(--rule-soft)' }}
                >
                    {format(parseISO(podcast.date), 'd MMMM yyyy', { locale: tr })}
                </div>
            </div>
        </article>
    );
}
