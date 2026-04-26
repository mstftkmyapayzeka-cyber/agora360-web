import { useState, useMemo } from 'react';
import { SectionHeader } from '../components/common/SectionHeader';
import { PodcastCard } from '../components/features/PodcastCard';
import { type Podcast } from '../data/podcasts';
import { useData } from '../context/DataContext';
import { useSection } from '../context/SectionContext';
import { X, Play, SkipBack, SkipForward } from 'lucide-react';

export function PodcastsPage() {
    const { podcasts: allData } = useData();
    const { activeSection } = useSection();
    const podcasts = useMemo(() => allData.filter(x => !activeSection || x.section === activeSection.id || x.section === 'portal'), [allData, activeSection]);
    const [activePodcast, setActivePodcast] = useState<Podcast | null>(null);

    return (
        <div className="container-custom py-12">
            <SectionHeader
                title="Podcast ve Videolar"
                description="Uzman konuklarla gerçekleştirilen söyleşiler ve ders videoları."
            />

            {/* Featured / Player Section */}
            {activePodcast ? (
                <div className="mb-12 bg-slate-900 rounded-2xl overflow-hidden shadow-2xl animate-in fade-in slide-in-from-top-4 duration-500">
                    <div className="relative aspect-video bg-black">
                        <button
                            onClick={() => setActivePodcast(null)}
                            className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                        >
                            <X className="h-6 w-6" />
                        </button>
                        <video
                            src={activePodcast.videoUrl}
                            controls
                            autoPlay
                            className="w-full h-full"
                            poster={activePodcast.thumbnailUrl}
                        >
                            Tarayıcınız video etiketini desteklemiyor.
                        </video>
                    </div>
                    <div className="p-6 md:p-8">
                        <div className="flex items-center gap-2 text-primary-400 text-sm font-medium mb-2">
                            <span className="bg-primary-900/30 px-2 py-0.5 rounded">{activePodcast.topic}</span>
                            <span>•</span>
                            <span>{activePodcast.duration}</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{activePodcast.title}</h2>
                        <p className="text-slate-300 max-w-3xl">{activePodcast.description}</p>

                        <div className="mt-6 flex items-center gap-4 border-t border-slate-800 pt-6">
                            <button className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                                <SkipBack className="h-5 w-5" /> Önceki
                            </button>
                            <button className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                                Sonraki <SkipForward className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="mb-12 relative rounded-2xl overflow-hidden bg-slate-900 text-white p-8 md:p-12">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20" />
                    <div className="relative z-10 max-w-2xl">
                        <span className="inline-block px-3 py-1 rounded-full bg-primary-600/20 text-primary-300 text-sm font-medium mb-4">
                            Öne Çıkan
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Uluslararası İlişkilerde Teori ve Pratik</h2>
                        <p className="text-lg text-slate-300 mb-8">
                            Bu seride, teorik yaklaşımların güncel olayları anlamlandırmada nasıl kullanıldığını tartışıyoruz.
                        </p>
                        <button
                            onClick={() => setActivePodcast(podcasts[0])}
                            className="btn btn-primary px-6 py-3 flex items-center gap-2"
                        >
                            <Play className="h-5 w-5 fill-current" />
                            Şimdi İzle
                        </button>
                    </div>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {podcasts.map(podcast => (
                    <PodcastCard
                        key={podcast.id}
                        podcast={podcast}
                        onClick={() => {
                            setActivePodcast(podcast);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
