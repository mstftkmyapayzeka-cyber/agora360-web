import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ArrowRight, AlertTriangle, Zap } from 'lucide-react';
import { SectionHeader } from '../../components/common/SectionHeader';
import { ArticleCard } from '../../components/features/ArticleCard';
import { AnalysisCard } from '../../components/features/AnalysisCard';
import { PodcastCard } from '../../components/features/PodcastCard';
import { DailyConcept } from '../../components/features/DailyConcept';
import { GlobeCanvas } from '../../components/canvas/GlobeCanvas';
import { useData } from '../../context/DataContext';

const irStats = [
  { num: '195', label: 'Ülke' },
  { num: '48', label: 'Aktif Kriz' },
  { num: '1.2K', label: 'Haftalık Analiz' },
];

const irSideCards = [
  { icon: '🌊', region: 'Asya-Pasifik', title: 'Güney Çin Denizi: Toprak Anlaşmazlıkları ve Deniz Hukuku', meta: '21 NİS 2026 · 7 dk okuma' },
  { icon: '🛡️', region: 'Avrupa', title: 'AB Ortak Savunma Politikası: NATO\'ya Alternatif mi, Tamamlayıcı mı?', meta: '19 NİS 2026 · 9 dk okuma' },
  { icon: '🌍', region: 'Afrika', title: 'Sahel Bölgesinde Büyük Güç Rekabeti ve Kalkınma Paradigmaları', meta: '17 NİS 2026 · 11 dk okuma' },
  { icon: '🤝', region: 'Diplomasi', title: 'İkili Anlaşmalar Çağının Sonu: Çok Taraflılığın Geri Dönüşü', meta: '15 NİS 2026 · 6 dk okuma' },
];

const latestNews = [
  { id: '1', title: 'Küresel Diplomasi Arenasında Yeni Dönem Başlıyor', category: 'Diplomasi' },
  { id: '2', title: 'BM Güvenlik Konseyi Olağanüstü Toplantı Kararı Aldı', category: 'BM' },
  { id: '3', title: 'NATO Savunma Bütçesi Müzakereleri Kritik Aşamada', category: 'NATO' },
  { id: '4', title: 'Orta Doğu\'da Ateşkes Görüşmeleri Yeniden Başladı', category: 'Orta Doğu' },
];

const breakingNewsItems = [
  { id: 'b1', tag: 'SON DAKİKA', text: 'BM Genel Kurulu, iklim krizi için acil eylem planını onayladı', time: '2 dk önce', urgent: true },
  { id: 'b2', tag: 'FLAŞ', text: 'NATO Genel Sekreteri: "Avrupa savunma harcamalarını artırmalı"', time: '15 dk önce', urgent: true },
  { id: 'b3', tag: 'GELİŞME', text: 'AB Dış İlişkiler Konseyi olağanüstü toplantıya çağrıldı', time: '28 dk önce', urgent: false },
  { id: 'b4', tag: 'HABER', text: 'Çin-Tayvan geriliminde yeni diplomatik hamle', time: '45 dk önce', urgent: false },
  { id: 'b5', tag: 'SON DAKİKA', text: 'G20 Zirvesi\'nde küresel vergi reformu anlaşması sağlandı', time: '1 sa önce', urgent: true },
  { id: 'b6', tag: 'GELİŞME', text: 'Orta Doğu barış sürecinde kritik görüşmeler başladı', time: '1.5 sa önce', urgent: false },
  { id: 'b7', tag: 'FLAŞ', text: 'Rusya-Ukrayna müzakerelerinde yeni bir dönem', time: '2 sa önce', urgent: true },
  { id: 'b8', tag: 'HABER', text: 'Afrika Birliği\'nden BRICS genişlemesine destek açıklaması', time: '3 sa önce', urgent: false },
];

/* ── Breaking News Ticker Component ── */
function BreakingNewsTicker() {
  const [isPaused, setIsPaused] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const doubled = [...breakingNewsItems, ...breakingNewsItems];

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        background: 'linear-gradient(90deg, rgba(2,7,20,0.95), rgba(15,23,52,0.95), rgba(2,7,20,0.95))',
        borderTop: '1px solid rgba(239,68,68,0.2)',
        borderBottom: '1px solid rgba(239,68,68,0.15)',
      }}
    >
      {/* Left label */}
      <div className="absolute left-0 top-0 bottom-0 z-20 flex items-center pl-4 pr-6"
        style={{ background: 'linear-gradient(to right, rgba(220,38,38,0.9), rgba(220,38,38,0.7), transparent)' }}
      >
        <div className="flex items-center gap-2">
          <Zap className="w-3.5 h-3.5 text-white" />
          <span
            className="w-2 h-2 rounded-full bg-white"
            style={{ animation: 'pulse-glow 1.5s ease-in-out infinite' }}
          />
          <span className="font-mono text-[11px] font-bold text-white tracking-[0.1em] uppercase whitespace-nowrap">
            Son Dakika
          </span>
        </div>
      </div>

      {/* Ticker strip */}
      <div
        className="py-3 pl-[160px]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => { setIsPaused(false); setExpandedId(null); }}
      >
        <div
          className="flex items-center gap-6 animate-breaking-ticker whitespace-nowrap"
          style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
        >
          {doubled.map((item, i) => (
            <button
              key={`${item.id}-${i}`}
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-lg transition-all duration-300 shrink-0 text-left"
              style={{
                background: expandedId === `${item.id}-${i}` ? 'rgba(37,99,235,0.15)' : 'transparent',
                border: `1px solid ${expandedId === `${item.id}-${i}` ? 'rgba(37,99,235,0.3)' : 'transparent'}`,
              }}
              onClick={() => setExpandedId(expandedId === `${item.id}-${i}` ? null : `${item.id}-${i}`)}
            >
              {item.urgent && (
                <AlertTriangle className="w-3 h-3 text-red-400 shrink-0" />
              )}
              <span
                className="font-mono text-[9px] font-bold tracking-wider px-1.5 py-0.5 rounded shrink-0"
                style={{
                  background: item.urgent ? 'rgba(239,68,68,0.2)' : 'rgba(37,99,235,0.15)',
                  color: item.urgent ? '#fca5a5' : '#60a5fa',
                  border: `1px solid ${item.urgent ? 'rgba(239,68,68,0.3)' : 'rgba(37,99,235,0.25)'}`,
                }}
              >
                {item.tag}
              </span>
              <span className="text-[13px] font-medium text-white/80">{item.text}</span>
              <span className="font-mono text-[9px] text-white/30 shrink-0">{item.time}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, rgba(2,7,20,0.95), transparent)' }}
      />
    </div>
  );
}

export function UIHomePage() {
  const { articles, analyses, podcasts } = useData();
  const latestArticles = articles.slice(0, 3);
  const featuredAnalysis = analyses.slice(0, 2);
  const latestPodcasts = podcasts.slice(0, 3);

  return (
    <div className="min-h-screen bg-[#020714]">

      {/* ── Globe Hero ── */}
      <section className="relative min-h-[520px] flex items-center justify-center overflow-hidden">
        <GlobeCanvas />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(2,7,20,0.3), rgba(2,7,20,0.7) 60%, #020714)' }}
        />
        <div className="relative z-10 text-center px-6 py-20">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-mono text-[10px] tracking-[0.12em] uppercase mb-6"
            style={{ background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.25)', color: '#60a5fa' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" />
            Uluslararası İlişkiler
          </div>
          <h1
            className="font-serif font-black leading-[1.1] text-gradient-ui mb-5"
            style={{ fontSize: 'clamp(40px,5vw,72px)', letterSpacing: '-1px' }}
          >
            Küresel Sahne,<br />Yerel Perspektif.
          </h1>
          <p className="max-w-[500px] mx-auto text-white/65 text-[15px] leading-[1.7] mb-10">
            Jeopolitik analiz, diplomatik gelişmeler ve küresel güç dengelerini gençlerin perspektifinden okuyoruz.
          </p>
          <div className="flex items-center justify-center gap-12">
            {irStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-mono text-[32px] font-bold" style={{ color: '#60a5fa' }}>{stat.num}</div>
                <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-white/40 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Breaking News Ticker ── */}
      <BreakingNewsTicker />

      {/* ── Main content + side cards ── */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6 px-6 lg:px-16 py-10 max-w-[1200px] mx-auto">
        {/* Main card */}
        <div
          className="rounded-[20px] overflow-hidden cursor-pointer transition-all duration-400 group"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.transform = 'translateY(-6px)';
            el.style.boxShadow = '0 24px 60px rgba(37,99,235,0.2)';
            el.style.borderColor = 'rgba(37,99,235,0.35)';
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.transform = '';
            el.style.boxShadow = '';
            el.style.borderColor = 'rgba(255,255,255,0.08)';
          }}
        >
          {/* SVG network image */}
          <div
            className="w-full h-[220px] relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.15), rgba(29,78,216,0.1))' }}
          >
            <svg width="100%" height="100%" viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg">
              <line x1="100" y1="110" x2="220" y2="70" stroke="rgba(96,165,250,0.25)" strokeWidth="1"/>
              <line x1="220" y1="70" x2="360" y2="110" stroke="rgba(96,165,250,0.25)" strokeWidth="1"/>
              <line x1="360" y1="110" x2="480" y2="60" stroke="rgba(96,165,250,0.25)" strokeWidth="1"/>
              <line x1="480" y1="60" x2="600" y2="110" stroke="rgba(96,165,250,0.25)" strokeWidth="1"/>
              <line x1="100" y1="110" x2="360" y2="110" stroke="rgba(96,165,250,0.12)" strokeWidth="1"/>
              <line x1="220" y1="70" x2="480" y2="60" stroke="rgba(96,165,250,0.12)" strokeWidth="1"/>
              <line x1="220" y1="70" x2="360" y2="160" stroke="rgba(96,165,250,0.15)" strokeWidth="1"/>
              <line x1="360" y1="110" x2="360" y2="160" stroke="rgba(96,165,250,0.2)" strokeWidth="1"/>
              <line x1="480" y1="60" x2="360" y2="160" stroke="rgba(96,165,250,0.15)" strokeWidth="1"/>
              <circle cx="100" cy="110" r="7" fill="rgba(37,99,235,0.4)" stroke="#60a5fa" strokeWidth="1.5"/>
              <circle cx="220" cy="70" r="10" fill="rgba(37,99,235,0.5)" stroke="#60a5fa" strokeWidth="1.5"/>
              <circle cx="360" cy="110" r="14" fill="rgba(37,99,235,0.55)" stroke="#93c5fd" strokeWidth="2"/>
              <circle cx="480" cy="60" r="9" fill="rgba(37,99,235,0.4)" stroke="#60a5fa" strokeWidth="1.5"/>
              <circle cx="600" cy="110" r="7" fill="rgba(37,99,235,0.4)" stroke="#60a5fa" strokeWidth="1.5"/>
              <circle cx="360" cy="160" r="6" fill="rgba(37,99,235,0.3)" stroke="#60a5fa" strokeWidth="1"/>
              <text x="360" y="107" textAnchor="middle" fontFamily="Space Mono,monospace" fontSize="9" fill="rgba(191,219,254,0.8)">BM</text>
              <text x="220" y="67" textAnchor="middle" fontFamily="Space Mono,monospace" fontSize="8" fill="rgba(191,219,254,0.6)">AB</text>
              <text x="480" y="57" textAnchor="middle" fontFamily="Space Mono,monospace" fontSize="8" fill="rgba(191,219,254,0.6)">NATO</text>
            </svg>
          </div>
          <div className="p-7">
            <div className="font-mono text-[10px] uppercase tracking-[0.12em] mb-3" style={{ color: '#60a5fa' }}>BM Güvenlik Konseyi</div>
            <h2 className="font-serif text-[22px] font-bold leading-[1.3] text-white mb-3">
              BM Güvenlik Konseyi Reformu: Veto Hakkının Geleceği Tartışılıyor
            </h2>
            <p className="text-white/55 text-[13px] leading-[1.65] mb-5">
              P5 ülkelerinin blokaj gücü, Küresel Güney'in artan talepleri ve Güvenlik Konseyi'nin 21. yüzyıldaki meşruiyet krizi üzerine kapsamlı bir analiz.
            </p>
            <div className="flex items-center gap-4">
              <span className="font-mono text-[9px] text-white/35">24 NİS 2026</span>
              <span
                className="px-2 py-0.5 rounded font-mono text-[9px] tracking-[0.08em] uppercase"
                style={{ background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.25)', color: '#60a5fa' }}
              >Analiz</span>
              <span className="font-mono text-[9px] text-white/35">12 dk okuma</span>
            </div>
          </div>
        </div>

        {/* Side cards */}
        <div className="flex flex-col gap-4">
          {irSideCards.map((card) => (
            <div
              key={card.title}
              className="flex items-start gap-4 p-5 rounded-[14px] cursor-pointer transition-all duration-300"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateX(4px)';
                el.style.boxShadow = '0 8px 30px rgba(37,99,235,0.2)';
                el.style.borderColor = 'rgba(37,99,235,0.35)';
                el.style.background = 'rgba(37,99,235,0.06)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = '';
                el.style.boxShadow = '';
                el.style.borderColor = 'rgba(255,255,255,0.08)';
                el.style.background = 'rgba(255,255,255,0.04)';
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                style={{ background: 'rgba(37,99,235,0.15)' }}
              >
                {card.icon}
              </div>
              <div>
                <div className="font-mono text-[9px] uppercase tracking-[0.1em] mb-1.5" style={{ color: '#60a5fa' }}>{card.region}</div>
                <div className="text-[13px] font-medium text-white leading-[1.45] mb-1.5">{card.title}</div>
                <div className="font-mono text-[9px] tracking-[0.08em] text-white/35">{card.meta}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Articles & News ── */}
      <div className="container-custom space-y-24 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-10">
            <SectionHeader
              title="Gündem ve Güncel Yazılar"
              description="Küresel siyasetteki son gelişmeleri ve uzman kalemlerden güncel değerlendirmeleri takip edin."
              linkTo="/ui/news"
            />

            {/* Breaking news panel */}
            <div
              className="rounded-3xl p-1"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div className="flex flex-col md:flex-row gap-4">
                <div
                  className="md:w-1/3 rounded-[1.4rem] p-6 text-white flex flex-col justify-between"
                  style={{ background: 'linear-gradient(135deg, #1d4ed8, #2563eb)' }}
                >
                  <div>
                    <div
                      className="inline-flex items-center gap-2 px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider mb-4"
                      style={{ background: 'rgba(255,255,255,0.2)' }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      Son Dakika
                    </div>
                    <h4 className="text-xl font-bold leading-tight mb-4">Küresel Diplomasi Arenasında Yeni Dönem Başlıyor</h4>
                  </div>
                  <Link to="/ui/news" className="text-sm font-semibold flex items-center gap-2 hover:translate-x-1 transition-transform">
                    Detaylar <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="md:w-2/3 p-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                  {latestNews.map(item => (
                    <Link
                      key={item.id}
                      to="/ui/news"
                      className="group p-4 rounded-xl transition-all"
                      style={{ border: '1px solid transparent' }}
                      onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(255,255,255,0.04)'; el.style.borderColor = 'rgba(255,255,255,0.08)'; }}
                      onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = ''; el.style.borderColor = 'transparent'; }}
                    >
                      <div className="font-mono text-[10px] uppercase tracking-widest mb-1" style={{ color: '#60a5fa' }}>{item.category}</div>
                      <h5 className="font-bold text-white/90 text-sm line-clamp-2">{item.title}</h5>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {latestArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <DailyConcept />
            <div className="card-premium p-7">
              <h3 className="text-lg font-bold text-white mb-5">Popüler Etiketler</h3>
              <div className="flex flex-wrap gap-2">
                {['Jeopolitik', 'Güvenlik', 'Ekonomi', 'Diplomasi', 'AB', 'NATO', 'Orta Doğu', 'Asya'].map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-xl text-sm font-medium cursor-pointer transition-all duration-200 text-white/50"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
                    onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(37,99,235,0.2)'; el.style.borderColor = 'rgba(37,99,235,0.4)'; el.style.color = '#60a5fa'; }}
                    onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(255,255,255,0.06)'; el.style.borderColor = 'rgba(255,255,255,0.08)'; el.style.color = 'rgba(255,255,255,0.5)'; }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Analyses */}
        <section>
          <SectionHeader
            title="Stratejik Analizler"
            description="Bölge uzmanlarından ve akademisyenlerden güncel olayların derinlemesine değerlendirmeleri."
            linkTo="/ui/analysis"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredAnalysis.map((analysis) => (
              <AnalysisCard key={analysis.id} analysis={analysis} />
            ))}
          </div>
        </section>

        {/* Podcasts */}
        <section>
          <SectionHeader
            title="Multimedya"
            description="Görsel ve işitsel içeriklerle uluslararası ilişkileri farklı perspektiflerden dinleyin."
            linkTo="/ui/podcasts"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestPodcasts.map(podcast => (
              <PodcastCard key={podcast.id} podcast={podcast} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          className="relative overflow-hidden rounded-[2rem] p-12 md:p-20 text-center"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(37,99,235,0.2)' }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.12), transparent 70%)' }}
          />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Akademik Yolculuğunuza <br />
              <span className="text-gradient-ui">Bugün Başlayın</span>
            </h2>
            <p className="text-white/55 text-lg mb-12 leading-relaxed">
              Uluslararası İlişkiler teorilerini, temel kavramları ve stratejik düşünceyi öğrenmek için hazırladığımız kapsamlı eğitim modüllerini keşfedin.
            </p>
            <Link
              to="/ui/learning"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-full text-white font-mono text-sm uppercase tracking-wider transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #1d4ed8, #2563eb)', boxShadow: '0 0 40px rgba(37,99,235,0.4)' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 60px rgba(37,99,235,0.6)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 40px rgba(37,99,235,0.4)'; (e.currentTarget as HTMLElement).style.transform = ''; }}
            >
              Eğitim Platformuna Git <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
