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
    const podcasts = useMemo(
        () => allData.filter(x => !activeSection || x.section === activeSection.id || x.section === 'portal'),
        [allData, activeSection]
    );
    const [activePodcast, setActivePodcast] = useState<Podcast | null>(null);

    return (
        <div className="container-custom py-12">
            <SectionHeader
                title="Podcast & Söyleşi"
                description="Uzman konuklarla gerçekleştirilen söyleşiler ve ders videoları."
            />

            {activePodcast ? (
                <article
                    className="mb-12 animate-fadeIn"
                    style={{ border: '1px solid var(--ink)', background: 'var(--paper)' }}
                >
                    <div className="relative" style={{ aspectRatio: '16/9', background: 'var(--ink)' }}>
                        <button
                            onClick={() => setActivePodcast(null)}
                            className="absolute top-3 right-3 z-10 p-2"
                            style={{ background: 'var(--paper)', border: '1px solid var(--ink)' }}
                        >
                            <X className="h-4 w-4" style={{ color: 'var(--ink)' }} />
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
                        <div className="flex items-center gap-3 mb-2">
                            <span className="kicker">{activePodcast.topic}</span>
                            <span style={{ borderLeft: '1px solid var(--rule-soft)', height: 12 }} />
                            <span className="dateline" style={{ color: 'var(--ink-faint)' }}>
                                {activePodcast.duration}
                            </span>
                        </div>
                        <h2 className="headline mb-3" style={{ fontSize: 32 }}>{activePodcast.title}</h2>
                        <p className="body-copy" style={{ color: 'var(--ink-muted)', maxWidth: 720 }}>
                            {activePodcast.description}
                        </p>
                        <div
                            className="mt-6 pt-4 flex items-center gap-6"
                            style={{ borderTop: '1px solid var(--rule-soft)' }}
                        >
                            <button className="byline ink-link inline-flex items-center gap-1.5">
                                <SkipBack className="h-4 w-4" /> Önceki
                            </button>
                            <button className="byline ink-link inline-flex items-center gap-1.5">
                                Sonraki <SkipForward className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </article>
            ) : (
                <div
                    className="mb-12 p-10 md:p-14"
                    style={{ background: 'var(--paper-deep)', border: '1px solid var(--ink)' }}
                >
                    <div className="kicker mb-3">Öne Çıkan Bölüm</div>
                    <h2 className="headline mb-3" style={{ fontSize: 'clamp(28px, 3vw, 40px)' }}>
                        Uluslararası İlişkilerde Teori ve Pratik
                    </h2>
                    <p className="lede italic mb-6" style={{ color: 'var(--ink-muted)', maxWidth: 720 }}>
                        Bu seride, teorik yaklaşımların güncel olayları anlamlandırmada nasıl kullanıldığını tartışıyoruz.
                    </p>
                    {podcasts.length > 0 && (
                        <button
                            onClick={() => setActivePodcast(podcasts[0])}
                            className="btn btn-primary inline-flex items-center gap-2"
                        >
                            <Play className="h-3 w-3 fill-current" /> Şimdi İzle
                        </button>
                    )}
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
