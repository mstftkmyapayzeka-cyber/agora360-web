import { Link } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import { PodcastCard } from '../../components/features/PodcastCard';

const sanatNews = [
    { id: '1', title: 'İstanbul Modern’de Yeni Sergi: “Dijital Çağda Kimlik”',     category: 'Sergi' },
    { id: '2', title: 'Cannes Film Festivali’nde Türk Sineması Yankı Uyandırdı',    category: 'Sinema' },
    { id: '3', title: 'Müzik Dünyasının Yeni İsmi: Yükselen Sanatçılar 2026',       category: 'Müzik' },
    { id: '4', title: 'Çağdaş Sanat Piyasasında Rekor Fiyatlar',                   category: 'Sanat Piyasası' },
];

const sanatAnalyses = [
    {
        id: 'a1',
        title: 'Türk Sinemasının Yeni Dalgası: Bağımsız Filmler ve Küresel Sahnede Türkiye',
        excerpt: '2020’lerle birlikte yükselişe geçen bağımsız Türk sineması, uluslararası festivallerde ödüller toplarken içerik anlayışını da kökten değiştiriyor.',
        author: 'Deniz Şahin',
        category: 'Sinema',
        readTime: '10 dk',
    },
    {
        id: 'a2',
        title: 'Dijital Sanatın Yükselişi: NFT’den Sonra Sırada Ne Var?',
        excerpt: 'Blockchain tabanlı sanat piyasasının çöküşünün ardından dijital sanat; yapay zeka, interaktif enstalasyon ve karma gerçeklikle yeniden şekilleniyor.',
        author: 'Elif Arslan',
        category: 'Dijital Sanat',
        readTime: '7 dk',
    },
];

const filmsThisWeek = [
    { title: 'Düşen Yapraklar', director: 'Aki Kaurismäki', genre: 'Drama' },
    { title: 'Perfect Days',    director: 'Wim Wenders',    genre: 'Drama' },
    { title: 'Zone of Interest',director: 'Jonathan Glazer',genre: 'Tarih' },
];

export function SanatKosesiHomePage() {
    const { podcasts } = useData();
    const latestPodcasts = podcasts.slice(0, 3);

    return (
        <div className="container-custom pb-20">
            {/* Section banner */}
            <div
                className="text-center mt-8 mb-2 pt-5 pb-3"
                style={{ borderTop: '3px double var(--ink)', borderBottom: '3px double var(--ink)' }}
            >
                <div className="kicker mb-1">Bölüm III</div>
                <h1 className="masthead-title" style={{ fontSize: 'clamp(40px, 6vw, 84px)', fontStyle: 'italic' }}>
                    Sanat Köşesi
                </h1>
                <p className="deck italic mt-2" style={{ fontSize: 17, color: 'var(--ink-muted)' }}>
                    Sinema, edebiyat, görsel sanat — yaratıcı ifadenin tarafsız günlüğü.
                </p>
            </div>

            {/* Lead grid */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-10">
                <div className="lg:col-span-8">
                    <article style={{ borderTop: '3px double var(--ink)', paddingTop: 16 }}>
                        <div className="flex items-center gap-3 mb-3">
                            <span className="kicker">Hafta’nın Eleştirisi</span>
                            <span style={{ borderLeft: '1px solid var(--rule-soft)', height: 12 }} />
                            <span className="dateline" style={{ color: 'var(--ink-faint)' }}>Sinema</span>
                        </div>
                        <h2 className="headline mb-4" style={{ fontSize: 'clamp(34px, 4.4vw, 54px)', lineHeight: 1.04, fontStyle: 'italic' }}>
                            Bağımsız Türk sinemasının festivaller üzerinden inşa ettiği yeni dil
                        </h2>
                        <p className="deck mb-5" style={{ fontSize: 19 }}>
                            Düşük bütçeli yapımların uluslararası festivallerde aldığı ödüller, sektörün ekonomik mantığını değil — anlatım ekonomisini değiştiriyor.
                        </p>
                        <div
                            className="flex items-center justify-between py-3 mb-6"
                            style={{ borderTop: '1px solid var(--rule-soft)', borderBottom: '1px solid var(--rule-soft)' }}
                        >
                            <span className="byline">— Deniz Şahin · Sinema Eleştirmeni</span>
                            <span className="dateline" style={{ color: 'var(--ink-faint)' }}>10 dk okuma</span>
                        </div>
                        <div className="news-columns drop-cap body-copy" style={{ color: 'var(--ink-soft)' }}>
                            <p className="mb-4">
                                Son beş yılda bağımsız Türk sineması, festival ekranlarında dikkat çekici bir görünürlük kazandı. Bu görünürlüğün ardında üç temel etken var: küçük ölçekli üretim, yönetmen-yazar geleneğinin güçlenmesi ve kalıplaşmış anlatıdan kaçınma eğilimi.
                            </p>
                            <p className="mb-4">
                                Eleştirmenler için bu sinemanın belirleyici özelliği, gerçekçi gözlemi şiirsel bir formla buluşturma çabasıdır. Yönetmenler, kentsel ya da kırsal mekânın içinden yükselen sessizliği, anlatıyı taşıyan asıl figür haline getiriyor.
                            </p>
                            <p>
                                <Link to="/sanat-kosesi/analysis" className="ink-link byline">
                                    Tüm Eleştirileri Gör →
                                </Link>
                            </p>
                        </div>
                    </article>
                </div>

                <aside className="lg:col-span-4 space-y-8">
                    <div>
                        <div className="kicker-ink pb-2 mb-3" style={{ borderBottom: '3px solid var(--ink)' }}>
                            Kültür Bültenleri
                        </div>
                        <ul className="space-y-3">
                            {sanatNews.map((n, i) => (
                                <li
                                    key={n.id}
                                    className="flex gap-4 py-3"
                                    style={{ borderBottom: '1px dotted var(--rule-soft)' }}
                                >
                                    <span className="dateline" style={{ color: 'var(--accent-red)' }}>
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    <div>
                                        <div className="body-copy" style={{ fontSize: 15, fontWeight: 600 }}>
                                            {n.title}
                                        </div>
                                        <div className="kicker mt-1" style={{ color: 'var(--ink-muted)' }}>
                                            {n.category}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div style={{ border: '1px solid var(--ink)', padding: 18, background: 'var(--paper-deep)' }}>
                        <div className="kicker mb-3">Bu Hafta Vizyonda</div>
                        <ul className="space-y-2">
                            {filmsThisWeek.map((f, i) => (
                                <li key={i} className="flex justify-between gap-3 py-1" style={{ borderBottom: '1px dotted var(--rule-soft)' }}>
                                    <span className="body-copy" style={{ fontSize: 14, fontWeight: 600 }}>{f.title}</span>
                                    <span className="dateline" style={{ color: 'var(--ink-muted)' }}>{f.director}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>
            </section>

            {/* Critic essays */}
            <section className="mt-14">
                <div className="kicker-ink pb-2 mb-6" style={{ borderBottom: '3px solid var(--ink)' }}>
                    Eleştiri Köşesi
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {sanatAnalyses.map(a => (
                        <article key={a.id} style={{ borderTop: '3px solid var(--ink)', paddingTop: 16 }}>
                            <div className="kicker mb-2">{a.category}</div>
                            <h3 className="headline mb-2" style={{ fontSize: 24 }}>{a.title}</h3>
                            <p className="body-copy mb-3" style={{ fontSize: 15, color: 'var(--ink-muted)' }}>{a.excerpt}</p>
                            <div className="flex items-center justify-between byline" style={{ color: 'var(--ink-muted)' }}>
                                <span>— {a.author}</span>
                                <span className="dateline" style={{ color: 'var(--ink-faint)' }}>{a.readTime} okuma</span>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Podcasts */}
            {latestPodcasts.length > 0 && (
                <section className="mt-14">
                    <div className="kicker-ink pb-2 mb-6" style={{ borderBottom: '3px solid var(--ink)' }}>
                        Kültür Podcastleri
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {latestPodcasts.map(p => <PodcastCard key={p.id} podcast={p} />)}
                    </div>
                </section>
            )}

            {/* CTA */}
            <section
                className="mt-16 text-center py-10"
                style={{ borderTop: '3px double var(--ink)', borderBottom: '3px double var(--ink)' }}
            >
                <div className="kicker mb-2">Yaratıcı Yazı</div>
                <h3 className="headline mb-3" style={{ fontSize: 'clamp(28px, 3vw, 40px)' }}>
                    Sanatın Her Boyutunu Birlikte Keşfedelim
                </h3>
                <p className="lede italic mx-auto" style={{ maxWidth: 720, color: 'var(--ink-muted)' }}>
                    Sinema, müzik, edebiyat ve görsel sanatlar üzerine derin analizler ve güncel yorumlar.
                </p>
                <div className="mt-5">
                    <Link to="/sanat-kosesi/articles" className="btn btn-primary">Tüm İçerikler</Link>
                </div>
            </section>
        </div>
    );
}
