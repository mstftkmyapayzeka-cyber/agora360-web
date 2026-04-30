import { Link } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import { PodcastCard } from '../../components/features/PodcastCard';

const tickerItems = [
    'G7 ülkeleri ortak iklim bildirisi yayımladı',
    'Türkiye yerel seçimlerine 3 ay kaldı',
    'Avrupa Parlamentosu yapay zeka yasasını onayladı',
    'BM Güvenlik Konseyi acil toplanma kararı aldı',
    'Dijital seçim kampanyaları tartışması büyüyor',
    'Merkez Bankası yeni faiz kararını açıkladı',
];

const siyasetAnalyses = [
    {
        id: 'a1',
        title: 'Küresel Popülizmin Anatomisi: 2026’da Neredeyiz?',
        excerpt: 'Batı demokrasilerinde yükselen sağ popülizm dalgası, geleneksel siyasi partileri dönüştürürken yeni bir siyasi çağın kapılarını aralıyor.',
        author: 'Prof. Dr. Murat Aydın',
        category: 'Siyasi Analiz',
        readTime: '12 dk',
    },
    {
        id: 'a2',
        title: 'Türkiye’nin Orta Doğu Politikasında Yeni Eksen',
        excerpt: 'Suriye normalleşmesi, İsrail-Hamas savaşı ve Körfez ülkeleriyle ilişkiler bağlamında Ankara’nın bölgesel stratejisi yeniden şekilleniyor.',
        author: 'Dr. Ayşe Kaya',
        category: 'Dış Politika',
        readTime: '9 dk',
    },
];

const polCards = [
    { cat: 'Dış Politika', title: 'Türkiye-AB İlişkilerinde Yeni Dönem: Üyelik Müzakereleri Yeniden Gündemde', desc: 'On yılı aşan duraksama sonrası yeniden başlayan diyalog sürecinin arkasındaki dinamikler.', date: '22 Nisan 2026', tag: 'Analiz' },
    { cat: 'İç Politika',  title: 'Yerel Yönetim Reformu: Belediye Bütçeleri ve Şeffaflık',                              desc: 'Yeni düzenlemeler kapsamında belediyelerde hesap verebilirlik mekanizmaları.',                  date: '20 Nisan 2026', tag: 'Araştırma' },
    { cat: 'Ekonomi',      title: 'Enflasyonla Mücadelede Politika Araçlarının Etkinliği',                                desc: 'Para politikasının sınırları ve maliye politikasıyla koordinasyon ihtiyacı.',                    date: '18 Nisan 2026', tag: 'Ekonomi' },
    { cat: 'Küresel',      title: 'İklim Diplomasisi: COP31 Öncesinde Müzakere Dinamikleri',                              desc: 'Gelişmiş ve gelişmekte olan ülkeler arasındaki finansman anlaşmazlıkları.',                      date: '17 Nisan 2026', tag: 'Çevre' },
    { cat: 'Medya',        title: 'Yapay Zeka ve Gazetecilik: Dezenformasyon Çağında Doğrulama',                          desc: 'Fact-checking araçlarının gelişimi ve editoryal sorumluluk tartışmaları.',                       date: '15 Nisan 2026', tag: 'Teknoloji' },
    { cat: 'Gençlik',      title: 'Z Kuşağı’nın Siyasi Kimliği: Aktivizmden Seçim Sandığına',                            desc: 'Genç seçmenlerin tercihleri ve geleneksel partilerin uyum stratejileri.',                        date: '12 Nisan 2026', tag: 'Toplum' },
];

const sidebarStories = [
    { num: '01', title: 'AB’nin Yeni Göç Paketi Oylaması',         cat: 'Dış Politika' },
    { num: '02', title: 'Merkez Bankası Faiz Kararı Açıklandı',    cat: 'Ekonomi' },
    { num: '03', title: 'NATO Savunma Bütçesi Müzakereleri',       cat: 'Güvenlik' },
    { num: '04', title: 'Gençlerin Siyasi Katılım Oranları',       cat: 'Araştırma' },
];

export function SiyasetHomePage() {
    const { podcasts } = useData();
    const latestPodcasts = podcasts.slice(0, 3);

    return (
        <div className="container-custom pb-20">
            {/* Section banner */}
            <div
                className="text-center mt-8 mb-2 pt-5 pb-3"
                style={{ borderTop: '3px double var(--ink)', borderBottom: '3px double var(--ink)' }}
            >
                <div className="kicker mb-1">Bölüm I</div>
                <h1 className="masthead-title" style={{ fontSize: 'clamp(40px, 6vw, 84px)' }}>
                    Siyaset
                </h1>
                <p className="deck italic mt-2" style={{ fontSize: 17, color: 'var(--ink-muted)' }}>
                    Güç, demokrasi ve kamuoyu — bağımsız analiz ve yorum.
                </p>
            </div>

            {/* Ticker */}
            <div
                className="overflow-hidden flex items-stretch mb-10"
                style={{ borderBottom: '1px solid var(--ink)' }}
            >
                <div className="byline px-3 py-2" style={{ background: 'var(--ink)', color: 'var(--paper)' }}>
                    Bugünkü Gündem
                </div>
                <div className="flex-1 overflow-hidden flex items-center">
                    <div className="animate-ticker whitespace-nowrap dateline" style={{ color: 'var(--ink)' }}>
                        {[...tickerItems, ...tickerItems].map((t, i) => (
                            <span key={i} className="mx-6">◆ {t}</span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Lead + sidebar */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-8">
                    <article style={{ borderTop: '3px double var(--ink)', paddingTop: 16 }}>
                        <div className="flex items-center gap-3 mb-3">
                            <span className="kicker">Manşet Yorum</span>
                            <span style={{ borderLeft: '1px solid var(--rule-soft)', height: 12 }} />
                            <span className="dateline" style={{ color: 'var(--ink-faint)' }}>25 Nisan 2026</span>
                        </div>
                        <h2 className="headline mb-4" style={{ fontSize: 'clamp(34px, 4.6vw, 60px)', lineHeight: 1.04 }}>
                            Dijital Seçim Kampanyaları: <em style={{ fontWeight: 400 }}>Geleceğin Siyaseti</em> mi?
                        </h2>
                        <p className="deck mb-5" style={{ fontSize: 19 }}>
                            Sosyal medya algoritmalarının seçim süreçlerini nasıl şekillendirdiği, mikro-hedefli reklam stratejileri ve dijital dezenformasyonla mücadele politikaları üzerine kapsamlı bir analiz.
                        </p>
                        <div
                            className="flex items-center justify-between py-3 mb-6"
                            style={{ borderTop: '1px solid var(--rule-soft)', borderBottom: '1px solid var(--rule-soft)' }}
                        >
                            <span className="byline">— Ayşe Yılmaz · Siyaset Editörü</span>
                            <span className="dateline" style={{ color: 'var(--ink-faint)' }}>8 dk okuma</span>
                        </div>
                        <div className="news-columns drop-cap body-copy" style={{ color: 'var(--ink-soft)' }}>
                            <p className="mb-4">
                                Yeni medya çağında siyasi iletişim eskisi gibi tek yönlü değil. Adaylar, sandığa giden seçmenle algoritmik bir aracı üzerinden konuşuyor; kampanya stratejileri reklam verisine, davranışsal modellemeye ve veri tabanlı hedeflemeye dayanıyor.
                            </p>
                            <p className="mb-4">
                                Bu dönüşüm aynı zamanda yeni bir denetim sorununu doğuruyor. Reklam karelerinin saydam olmadığı, hedeflemenin görünmez kaldığı bir kampanyada seçmen — pek çok ülkede — neye maruz kaldığını tam olarak bilmiyor.
                            </p>
                            <p>
                                <Link to="/siyaset/analysis" className="ink-link byline">Devamı için Analizler →</Link>
                            </p>
                        </div>
                    </article>
                </div>

                <aside className="lg:col-span-4">
                    <div className="kicker-ink pb-2 mb-3" style={{ borderBottom: '3px solid var(--ink)' }}>
                        Öne Çıkan Haberler
                    </div>
                    <ul className="space-y-3">
                        {sidebarStories.map(s => (
                            <li
                                key={s.num}
                                className="flex gap-4 py-3"
                                style={{ borderBottom: '1px dotted var(--rule-soft)' }}
                            >
                                <span className="dateline" style={{ color: 'var(--accent-red)' }}>{s.num}</span>
                                <div>
                                    <div className="body-copy" style={{ fontSize: 15, fontWeight: 600 }}>{s.title}</div>
                                    <div className="kicker mt-1" style={{ color: 'var(--ink-muted)' }}>{s.cat}</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </aside>
            </section>

            {/* Article grid 3-up */}
            <section className="mt-14">
                <div className="kicker-ink pb-2 mb-6" style={{ borderBottom: '3px solid var(--ink)' }}>
                    Son Makaleler
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8" style={{ borderTop: '1px solid var(--ink)' }}>
                    {polCards.map((card, i) => (
                        <article
                            key={i}
                            className="py-6 px-2"
                            style={{
                                borderBottom: '1px solid var(--rule-soft)',
                                borderRight: (i % 3 !== 2) ? '1px solid var(--rule-soft)' : 'none',
                            }}
                        >
                            <div className="kicker mb-2">{card.cat}</div>
                            <h3 className="headline mb-2" style={{ fontSize: 20 }}>{card.title}</h3>
                            <p className="body-copy line-clamp-3 mb-3" style={{ fontSize: 14, color: 'var(--ink-muted)' }}>{card.desc}</p>
                            <div className="flex items-center justify-between">
                                <span className="dateline" style={{ color: 'var(--ink-faint)' }}>{card.date}</span>
                                <span className="tag-chip">{card.tag}</span>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Analyses */}
            <section className="mt-14">
                <div className="kicker-ink pb-2 mb-6" style={{ borderBottom: '3px solid var(--ink)' }}>
                    Yorum
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {siyasetAnalyses.map(a => (
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
                        Siyaset Podcastleri
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
                <div className="kicker mb-2">Bağımsız Yorum</div>
                <h3 className="headline mb-3" style={{ fontSize: 'clamp(28px, 3vw, 40px)' }}>
                    Siyasi Zekânızı Geliştirin
                </h3>
                <p className="lede italic mx-auto" style={{ maxWidth: 720, color: 'var(--ink-muted)' }}>
                    Bağımsız analizler, uzman yorumlar ve kapsamlı siyasi içerikler ile dünyanın nabzını tutun.
                </p>
                <div className="mt-5">
                    <Link to="/siyaset/analysis" className="btn btn-primary">Analizlere Git</Link>
                </div>
            </section>
        </div>
    );
}
