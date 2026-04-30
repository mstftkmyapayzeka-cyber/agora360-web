import { Link } from 'react-router-dom';
import { ArticleCard } from '../../components/features/ArticleCard';
import { AnalysisCard } from '../../components/features/AnalysisCard';
import { PodcastCard } from '../../components/features/PodcastCard';
import { DailyConcept } from '../../components/features/DailyConcept';
import { useData } from '../../context/DataContext';

const irBriefs = [
    { region: 'Asya-Pasifik', title: 'Güney Çin Denizi: Toprak Anlaşmazlıkları ve Deniz Hukuku', meta: '21 Nisan · 7 dk okuma' },
    { region: 'Avrupa',       title: 'AB Ortak Savunma Politikası: NATO’ya Alternatif mi, Tamamlayıcı mı?', meta: '19 Nisan · 9 dk okuma' },
    { region: 'Afrika',       title: 'Sahel Bölgesinde Büyük Güç Rekabeti ve Kalkınma Paradigmaları',     meta: '17 Nisan · 11 dk okuma' },
    { region: 'Diplomasi',    title: 'İkili Anlaşmalar Çağının Sonu: Çok Taraflılığın Geri Dönüşü',      meta: '15 Nisan · 6 dk okuma' },
];

const breakingItems = [
    'BM Genel Kurulu iklim eylem planını onayladı',
    'NATO Genel Sekreteri: Avrupa savunma harcamalarını artırmalı',
    'AB Dış İlişkiler Konseyi olağanüstü toplantıya çağrıldı',
    'Çin-Tayvan geriliminde yeni diplomatik hamle',
    'G20 Zirvesi’nde küresel vergi reformu anlaşması sağlandı',
];

export function UIHomePage() {
    const { articles, analyses, podcasts } = useData();
    const latestArticles = articles.slice(0, 4);
    const featuredAnalysis = analyses.slice(0, 2);
    const latestPodcasts = podcasts.slice(0, 3);

    return (
        <div className="container-custom pb-20">
            {/* Section banner */}
            <div
                className="text-center mt-8 mb-2 pt-5 pb-3"
                style={{ borderTop: '3px double var(--ink)', borderBottom: '3px double var(--ink)' }}
            >
                <div className="kicker mb-1">Bölüm II</div>
                <h1 className="masthead-title" style={{ fontSize: 'clamp(40px, 6vw, 84px)' }}>
                    Uluslararası İlişkiler
                </h1>
                <p className="deck italic mt-2" style={{ fontSize: 17, color: 'var(--ink-muted)' }}>
                    Küresel sahne, yerel perspektif — diplomasinin günlük muhasebesi.
                </p>
            </div>

            {/* Breaking strip */}
            <div
                className="overflow-hidden flex items-stretch mb-10"
                style={{ borderBottom: '1px solid var(--ink)' }}
            >
                <div className="byline px-3 py-2" style={{ background: 'var(--accent-red)', color: 'var(--paper)' }}>
                    Son Dakika
                </div>
                <div className="flex-1 overflow-hidden flex items-center">
                    <div className="animate-ticker whitespace-nowrap dateline" style={{ color: 'var(--ink)' }}>
                        {[...breakingItems, ...breakingItems].map((t, i) => (
                            <span key={i} className="mx-6">◆ {t}</span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Lead grid */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-8">
                    <article style={{ borderTop: '3px double var(--ink)', paddingTop: 16 }}>
                        <div className="flex items-center justify-between mb-3">
                            <span className="kicker">BM Güvenlik Konseyi</span>
                            <span className="dateline" style={{ color: 'var(--ink-faint)' }}>24 Nisan 2026</span>
                        </div>
                        <h2 className="headline mb-4" style={{ fontSize: 'clamp(32px, 4.4vw, 56px)', lineHeight: 1.04 }}>
                            BM Güvenlik Konseyi Reformu: Veto Hakkının Geleceği Tartışılıyor
                        </h2>
                        <p className="deck mb-5" style={{ fontSize: 19 }}>
                            P5 ülkelerinin blokaj gücü, Küresel Güney’in artan talepleri ve Konsey’in 21. yüzyıldaki meşruiyet krizi üzerine kapsamlı bir analiz.
                        </p>
                        <div
                            className="flex items-center justify-between py-3 mb-6"
                            style={{ borderTop: '1px solid var(--rule-soft)', borderBottom: '1px solid var(--rule-soft)' }}
                        >
                            <span className="byline">— Dr. Ahmet Demir · Uİ Uzmanı</span>
                            <span className="dateline" style={{ color: 'var(--ink-faint)' }}>12 dk okuma</span>
                        </div>
                        <div className="news-columns drop-cap body-copy" style={{ color: 'var(--ink-soft)' }}>
                            <p className="mb-4">
                                Birleşmiş Milletler örgütünün karar alma mekanizmasının kalbinde duran Güvenlik Konseyi, kuruluşundan bu yana büyük güç dengelerinin şekillendirdiği bir kurumdur. P5 ülkelerinin sahip olduğu veto hakkı, kararların etkinliğini sınırlayan en kritik unsur olmaya devam ediyor.
                            </p>
                            <p className="mb-4">
                                Küresel Güney ülkeleri, 21. yüzyılın sorunlarına çözüm üretmek için Konsey’in genişletilmesi ve veto hakkının yeniden tanımlanması gerektiğini savunuyor. Bu tartışma, uluslararası örgütlerin meşruiyet krizini doğrudan ilgilendiriyor.
                            </p>
                            <p className="mb-4">
                                Reform önerileri, daimi üyelik genişlemesi, dönüşümlü temsil ve veto kullanımının kısıtlanması gibi farklı mekanizmaları içeriyor. Her seçenek, mevcut güç dengelerini farklı biçimde dönüştürecek.
                            </p>
                            <p>
                                <Link to="/ui/analysis" className="ink-link byline">
                                    Tüm Analizleri Gör →
                                </Link>
                            </p>
                        </div>
                    </article>
                </div>

                <aside className="lg:col-span-4 space-y-8">
                    <div>
                        <div className="kicker-ink pb-2 mb-3" style={{ borderBottom: '3px solid var(--ink)' }}>
                            Bölge Bültenleri
                        </div>
                        <ul className="space-y-4">
                            {irBriefs.map((b, i) => (
                                <li key={i} className="pb-4" style={{ borderBottom: '1px dotted var(--rule-soft)' }}>
                                    <div className="kicker mb-1">{b.region}</div>
                                    <div className="body-copy" style={{ fontSize: 15, fontWeight: 600 }}>
                                        {b.title}
                                    </div>
                                    <div className="mt-1 dateline" style={{ color: 'var(--ink-faint)' }}>
                                        {b.meta}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <DailyConcept />
                </aside>
            </section>

            {/* Articles */}
            <section className="mt-14">
                <div className="kicker-ink pb-2 mb-6" style={{ borderBottom: '3px solid var(--ink)' }}>
                    Güncel Yazılar
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {latestArticles.map(article => (
                        <ArticleCard key={article.id} article={article} />
                    ))}
                </div>
            </section>

            {/* Analyses */}
            {featuredAnalysis.length > 0 && (
                <section className="mt-14">
                    <div className="kicker-ink pb-2 mb-6" style={{ borderBottom: '3px solid var(--ink)' }}>
                        Stratejik Analizler
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {featuredAnalysis.map(a => (
                            <AnalysisCard key={a.id} analysis={a} />
                        ))}
                    </div>
                </section>
            )}

            {/* Podcasts */}
            {latestPodcasts.length > 0 && (
                <section className="mt-14">
                    <div className="kicker-ink pb-2 mb-6" style={{ borderBottom: '3px solid var(--ink)' }}>
                        Multimedya
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
                <div className="kicker mb-2">Eğitim Köşesi</div>
                <h3 className="headline mb-3" style={{ fontSize: 'clamp(28px, 3vw, 40px)' }}>
                    Akademik Yolculuğunuza Bugün Başlayın
                </h3>
                <p className="lede italic mx-auto" style={{ maxWidth: 720, color: 'var(--ink-muted)' }}>
                    Uİ teorilerini, kavramları ve stratejik düşünceyi öğrenmek için hazırlanan modüller.
                </p>
                <div className="mt-5">
                    <Link to="/ui/learning" className="btn btn-primary">Eğitim Platformuna Git</Link>
                </div>
            </section>
        </div>
    );
}
