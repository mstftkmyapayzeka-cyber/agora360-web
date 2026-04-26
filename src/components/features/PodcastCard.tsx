import { Play, Clock, Calendar, Volume2 } from 'lucide-react';
import { type Podcast } from '../../data/podcasts';
import { format, parseISO } from 'date-fns';
import { tr } from 'date-fns/locale';

interface PodcastCardProps {
    podcast: Podcast;
    onClick?: () => void;
}

export function PodcastCard({ podcast, onClick }: PodcastCardProps) {
    return (
        <div
            className="card-premium group cursor-pointer aspect-[4/5] md:aspect-auto md:h-full min-h-[400px]"
            onClick={onClick}
        >
            <div className="absolute inset-0 z-0">
                <img
                    src={podcast.thumbnailUrl}
                    alt={podcast.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-900/20" />
            </div>

            <div className="relative z-10 h-full flex flex-col justify-between p-8">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white">
                        <Volume2 className="h-3.5 w-3.5" />
                        <span className="text-[10px] font-bold uppercase tracking-wider">Podcast</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-white/80">
                        <Clock className="h-4 w-4" />
                        <span>{podcast.duration}</span>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center flex-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-16 h-16 rounded-full bg-primary-500 flex items-center justify-center text-white shadow-2xl shadow-primary-500/50 transform scale-90 group-hover:scale-100 transition-transform duration-500">
                        <Play className="h-6 w-6 fill-current ml-1" />
                    </div>
                </div>

                <div className="space-y-4">
                    <span className="text-xs font-bold text-primary-400 uppercase tracking-[0.2em]">
                        {podcast.topic}
                    </span>
                    <h3 className="text-2xl font-bold text-white leading-tight line-clamp-2 italic">
                        "{podcast.title}"
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-medium text-white/60 pt-4 border-t border-white/10">
                        <Calendar className="h-3.5 w-3.5" />
                        {format(parseISO(podcast.date), 'd MMMM yyyy', { locale: tr })}
                    </div>
                </div>
            </div>
        </div>
    );
}
