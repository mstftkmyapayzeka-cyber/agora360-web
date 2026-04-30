import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { format, parseISO } from 'date-fns';
import { tr } from 'date-fns/locale';
import { DailyConcept } from '../components/features/DailyConcept';

const tickerItems = [
    'BM Güvenlik Konseyi olağanüstü toplantı çağrısı',
    'AB ortak savunma paketi onay sürecinde',
    'Türkiye-Yunanistan istişare görüşmeleri başlıyor',
    'Venedik Bienali’nde Türk pavyonu açıldı',
    'NATO bütçe müzakereleri kritik aşamada',
    'COP31 öncesi iklim diplomasisi yoğunlaştı',
];

const sectionFronts = [
    {
        to: '/siyaset',
        kicker: 'Bölüm I',
        title: 'Siyaset',
        deck: 'Güç, demokrasi ve kamuoyu — gençlerin gözünden iç ve dış politika.',
        lead: {
            label: 'Manşet Yorum',
            headline: 'Dijital seçim kampanyaları: geleceğin siyaseti mi, gözetimin yeni biçimi mi?',
            byline: 'Ayşe Yılmaz · Siyaset Editörü',
        },
    },
    {
        to: '/ui',
        kicker: 'Bölüm II',
        title: 'Uluslararası İlişkiler',
        deck: 'Jeopolitik, diplomasi ve güvenlik — küresel sahnenin günlük muhasebesi.',
        lead: {
            label: 'Açılış Analizi',
            headline: 'BM Güvenlik Konseyi reformu: Veto hakkının geleceği yeniden tartışmada.',
            byline: 'Dr. Ahmet Demir · Uİ Uzmanı',
        },
    },
    {
        to: '/sanat-kosesi',
        kicker: 'Bölüm III',
        title: 'Sanat Köşesi',
        deck: 'Sinema, edebiyat, görsel sanat ve kültür — yaratıcı ifadenin tarafsız günlüğü.',
        lead: {
            label: 'Hafta’nın Eleştirisi',
            headline: 'Türk sinemasının yeni dalgası: bağımsız üretim ve festival ekonomisi.',
            byline: 'Deniz Şahin · Sinema Eleştirmeni',
        },
    },
];

function FrontPageMasthead() {
    const today = new Date();
    const dateStr = format(today, 'd MMMM yyyy', { locale: tr });
    const dayName = format(today, 'EEEE', { locale: tr });

    return (
        <header className="text-center pt-10 pb-4">
            <div
                className="flex items-center justify-between mb-6 pb-2 byline"
                style={{ borderBottom: '1px solid var(--ink)', color: 'var(--ink-muted)' }}
            >
                <span>Cilt MMXXVI · No. {today.getDate()}</span>
                <span className="hidden md:inline italic">“Akıl, hür düşüncenin ışığında parlar.”</span>
                <span>Fiyat: Bedava</span>
            </div>

            <div className="kicker mb-2" style={{ color: 'var(--accent-red)' }}>
                Gençliğin Fikir Meydanı
            </div>
            <h1
                className="masthead-title"
                style={{ fontSize: 'clamp(56px, 11vw, 160px)', lineHeight: 0.92 }}
            >
                AGORA<span style={{ color: 'var(--accent-red)' }}>·</span>360
            </h1>
            <div className="mt-4 italic deck" style={{ fontSize: 18, color: 'var(--ink-muted)' }}>
                Bağımsız Akademik Gazete — Siyaset, Uluslararası İlişkiler ve Sanat
            </div>

            <div
                className="mt-6 mx-auto flex items-center justify-center gap-6"
                style={{ borderTop: '3px double var(--ink)', borderBottom: '3px double var(--ink)', padding: '10px 0' }}
            >
                <span className="byline">{dayName.toUpperCase()}</span>
                <span style={{ borderLeft: '1px solid var(--ink)', height: 14 }} />
                <span className="byline">{dateStr}</span>
                <span style={{ borderLeft: '1px solid var(--ink)', height: 14 }} />
                <span className="byline hidden md:inline">İSTANBUL</span>
                <span className="hidden md:inline" style={{ borderLeft: '1px solid var(--ink)', height: 14 }} />
                <span className="byline hidden md:inline">8 SAYFA</span>
            </div>
        </header>
    );
}

function TickerStrip() {
    const doubled = [...tickerItems, ...tickerItems];
    return (
        <div
            className="overflow-hidden flex items-stretch"
            style={{ borderTop: '1px solid var(--ink)', borderBottom: '1px solid var(--ink)' }}
        >
            <div
                className="flex-shrink-0 px-3 py-2 byline flex items-center"
                style={{ background: 'var(--ink)', color: 'var(--paper)' }}
            >
                Son Dakika
            </div>
            <div className="flex-1 overflow-hidden flex items-center">
                <div className="animate-ticker whitespace-nowrap">
                    {doubled.map((item, i) => (
                        <span key={i} className="inline-flex items-center mx-6 dateline" style={{ color: 'var(--ink)' }}>
                            <span style={{ color: 'var(--accent-red)' }}>◆</span>
                            <span className="ml-2">{item}</span>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export function PortalHomePage() {
    const { articles, news, analyses, concepts } = useData();

    const lead = articles[0] ?? null;
    const subLead1 = articles[1] ?? null;
    const subLead2 = articles[2] ?? null;
    const briefs = news.slice(0, 6);
    const opinion = analyses.slice(0, 3);
    const todayConcept = concepts[0] ?? null;

    return (
        <div className="container-custom pb-20">
            <FrontPageMasthead />
            <TickerStrip />

            {/* ── Lead grid: 8/4 split ── */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10">
                {/* Lead Story */}
                <div className="lg:col-span-8">
                    {lead ? (
                        <article style={{ borderTop: '3px double var(--ink)', paddingTop: 16 }}>
                            <div className="flex items-center justify-between mb-3">
                                <span className="kicker">Manşet</span>
                                <span className="dateline" style={{ color: 'var(--ink-faint)' }}>
                                    Sayfa I · Önce Yayımlandı
                                </span>
                            </div>
                            <Link to={`/articles/${lead.id}`} style={{ color: 'inherit' }}>
                                <h2
                                    className="headline mb-4"
                                    style={{ fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.02 }}
                                >
                                    {lead.title}
                                </h2>
                            </Link>
                            <p className="deck mb-5" style={{ fontSize: 'clamp(17px, 1.6vw, 22px)' }}>
                                {lead.summary}
                            </p>
                            <div
                                className="flex items-center justify-between mb-6 py-3"
                                style={{ borderTop: '1px solid var(--rule-soft)', borderBottom: '1px solid var(--rule-soft)' }}
                            >
                                <span className="byline">— {lead.author}</span>
                                <span className="dateline" style={{ color: 'var(--ink-faint)' }}>
                                    {lead.publication ?? 'Agora360'} · {lead.year ?? new Date().getFullYear()}
                                </span>
                            </div>

                            <div
                                className="news-columns drop-cap body-copy"
                                style={{ color: 'var(--ink-soft)' }}
                            >
                                <p className="mb-4">
                                    {lead.summary}
                                </p>
                                <p className="mb-4">
                                    Bu sayımızda, kamuoyunun yeniden şekillendiği bir çağda gençlerin sesi nasıl çıkar sorusunu masaya yatırıyoruz. Analiz ekibimiz bağımsız kaynaklardan derlediği veri ve uzman görüşleriyle olayın arka planını okurla paylaşıyor.
                                </p>
                                <p className="mb-4">
                                    Konunun derinleşmesi için aşağıdaki bölümlere de göz atılabilir; her sayfa farklı bir disiplinden okuma sunuyor. Editörler kurulu, içeriklerin akademik standarda uygunluğunu yayım öncesinde inceler.
                                </p>
                                <p>
                                    <Link to={`/articles/${lead.id}`} className="ink-link byline">
                                        Yazının Tamamı →
                                    </Link>
                                </p>
                            </div>
                        </article>
                    ) : (
                        <div className="dateline">İçerik hazırlanıyor.</div>
                    )}
                </div>

                {/* Sidebar: editor's note + briefs + concept */}
                <aside className="lg:col-span-4 space-y-8">
                    {/* Editor's Note */}
                    <div style={{ border: '1px solid var(--ink)', padding: 18, background: 'var(--paper-deep)' }}>
                        <div className="kicker mb-2">Editörün Notu</div>
                        <h4 className="headline mb-2" style={{ fontSize: 22 }}>
                            Bir gazeteyi açar gibi…
                        </h4>
                        <p className="body-copy italic" style={{ fontSize: 14 }}>
                            Agora360, üç bölümlü bir bağımsız gazetedir. İlk sayfada gündem; iç sayfalarda eleştiri, analiz ve eğitim. Sayfaları çevirmeye buradan başlayabilirsiniz.
                        </p>
                        <div className="mt-3 byline" style={{ color: 'var(--ink-muted)' }}>— Yayın Kurulu</div>
                    </div>

                    {/* Briefs (haber özetleri) */}
                    <div>
                        <div className="kicker-ink pb-2 mb-3" style={{ borderBottom: '3px solid var(--ink)' }}>
                            Kısa Kısa · Briefs
                        </div>
                        <ul className="space-y-3">
                            {briefs.map((b, i) => (
                                <li
                                    key={b.id}
                                    className="flex gap-3 pb-3"
                                    style={{ borderBottom: '1px dotted var(--rule-soft)' }}
                                >
                                    <span
                                        className="flex-shrink-0 dateline pt-1"
                                        style={{ color: 'var(--accent-red)', minWidth: 18 }}
                                    >
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    <div>
                                        <div className="kicker" style={{ color: 'var(--ink-muted)', fontSize: 9 }}>
                                            {b.category}
                                        </div>
                                        <div className="body-copy mt-0.5" style={{ fontSize: 14, lineHeight: 1.4 }}>
                                            {b.title}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Today's concept */}
                    {todayConcept && <DailyConcept />}
                </aside>
            </section>

            {/* ── Three-up sub leads ── */}
            <section className="mt-12 pt-6 grid grid-cols-1 md:grid-cols-3 gap-8" style={{ borderTop: '3px double var(--ink)' }}>
                {[subLead1, subLead2, articles[3] ?? null].map((a, i) => a && (
                    <article key={a.id} style={{ borderTop: '1px solid var(--ink)', paddingTop: 12 }}>
                        <div className="kicker mb-2">{['İkinci Manşet', 'Üçüncü Manşet', 'Dördüncü Manşet'][i]}</div>
                        <Link to={`/articles/${a.id}`} style={{ color: 'inherit' }}>
                            <h3 className="headline mb-3" style={{ fontSize: 24 }}>
                                <span className="hover:underline decoration-1 underline-offset-4">{a.title}</span>
                            </h3>
                        </Link>
                        <p className="body-copy line-clamp-4" style={{ fontSize: 15, color: 'var(--ink-muted)' }}>
                            {a.summary}
                        </p>
                        <div className="mt-3 byline" style={{ color: 'var(--ink-muted)' }}>
                            — {a.author}
                        </div>
                    </article>
                ))}
            </section>

            {/* ── Section fronts (Three sections previewed) ── */}
            <section className="mt-16">
                <div
                    className="flex items-center justify-center gap-6 mb-8 py-2"
                    style={{ borderTop: '3px double var(--ink)', borderBottom: '3px double var(--ink)' }}
                >
                    <span className="kicker">İç Sayfalar</span>
                    <span style={{ borderLeft: '1px solid var(--ink)', height: 14 }} />
                    <span className="byline">Üç Bölüm — Üç Disiplin</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {sectionFronts.map((s) => (
                        <Link
                            key={s.to}
                            to={s.to}
                            className="group"
                            style={{
                                background: 'var(--paper)',
                                border: '1px solid var(--ink)',
                                padding: 24,
                                color: 'inherit',
                                transition: 'background 0.2s ease',
                            }}
                            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--paper-deep)'; }}
                            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--paper)'; }}
                        >
                            <div className="flex items-center justify-between pb-2 mb-4" style={{ borderBottom: '1px solid var(--ink)' }}>
                                <span className="kicker">{s.kicker}</span>
                                <span className="dateline">→</span>
                            </div>
                            <h3 className="headline mb-2" style={{ fontSize: 30 }}>
                                {s.title}
                            </h3>
                            <p className="deck mb-5" style={{ fontSize: 15 }}>
                                {s.deck}
                            </p>
                            <div className="pt-4" style={{ borderTop: '1px dotted var(--rule-soft)' }}>
                                <div className="kicker mb-1">{s.lead.label}</div>
                                <p className="body-copy" style={{ fontSize: 15, fontWeight: 600 }}>
                                    {s.lead.headline}
                                </p>
                                <div className="mt-2 byline" style={{ color: 'var(--ink-muted)' }}>
                                    — {s.lead.byline}
                                </div>
                            </div>
                            <div className="mt-5 byline ink-link inline-block">
                                Bölüme Geç →
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* ── Opinion / Analysis row (Yorum) ── */}
            {opinion.length > 0 && (
                <section className="mt-16">
                    <div
                        className="kicker-ink pb-2 mb-6"
                        style={{ borderBottom: '3px solid var(--ink)' }}
                    >
                        Yorum · Op-Ed
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {opinion.map(a => (
                            <article key={a.id} style={{ borderTop: '1px solid var(--rule-soft)', paddingTop: 12 }}>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="kicker">{a.category}</span>
                                    <span className="dateline" style={{ color: 'var(--ink-faint)' }}>
                                        {a.readTime} okuma
                                    </span>
                                </div>
                                <Link to={`/analysis/${a.id}`} style={{ color: 'inherit' }}>
                                    <h4 className="headline mb-2" style={{ fontSize: 22 }}>
                                        <span className="hover:underline decoration-1 underline-offset-4">{a.title}</span>
                                    </h4>
                                </Link>
                                <p className="body-copy line-clamp-3" style={{ fontSize: 14, color: 'var(--ink-muted)' }}>
                                    {a.summary}
                                </p>
                                <div className="mt-3 byline" style={{ color: 'var(--ink-muted)' }}>
                                    — {a.author}
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            )}

            {/* ── Footer banner ── */}
            <section className="mt-16 text-center" style={{ borderTop: '3px double var(--ink)', borderBottom: '3px double var(--ink)', padding: '32px 16px' }}>
                <div className="kicker mb-2">Yayın Politikası</div>
                <h3 className="headline mb-3" style={{ fontSize: 'clamp(28px, 3vw, 40px)' }}>
                    Bağımsız, akademik, çok sesli.
                </h3>
                <p className="lede italic mx-auto" style={{ maxWidth: 720, color: 'var(--ink-muted)' }}>
                    Agora360, kâr amacı gütmeyen bir öğrenci yayınıdır. Tüm metinler bağımsız hakemler tarafından okunur; ticari sponsorluk kabul edilmez.
                </p>
                <div className="mt-5 flex items-center justify-center gap-4">
                    <Link to="/about" className="btn btn-outline">Hakkımızda</Link>
                    <Link to="/ui/learning" className="btn btn-primary">Eğitim Modülleri</Link>
                </div>
            </section>
        </div>
    );
}
