import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useData } from '../../context/DataContext';
import { SectionHeader } from '../../components/common/SectionHeader';
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
    title: 'Küresel Popülizmin Anatomisi: 2025\'te Neredeyiz?',
    excerpt: 'Batı demokrasilerinde yükselen sağ populizm dalgası, geleneksel siyasi partileri dönüştürürken yeni bir siyasi çağın kapılarını aralıyor.',
    author: 'Prof. Dr. Murat Aydın',
    category: 'Siyasi Analiz',
    readTime: '12 dk',
  },
  {
    id: 'a2',
    title: 'Türkiye\'nin Orta Doğu Politikasında Yeni Eksen',
    excerpt: 'Suriye normalleşmesi, İsrail-Hamas savaşı ve Körfez ülkeleriyle ilişkiler bağlamında Ankara\'nın bölgesel stratejisi yeniden şekilleniyor.',
    author: 'Dr. Ayşe Kaya',
    category: 'Dış Politika',
    readTime: '9 dk',
  },
];

const polCards = [
  { cat: 'Dış Politika', title: 'Türkiye-AB İlişkilerinde Yeni Dönem: Üyelik Müzakereleri Yeniden Gündemde', desc: 'On yılı aşan duraksama sonrası yeniden başlayan diyalog sürecinin arkasındaki dinamikler.', date: '22 NİS 2026', tag: 'Analiz' },
  { cat: 'İç Politika', title: 'Yerel Yönetim Reformu: Belediye Bütçeleri ve Şeffaflık', desc: 'Yeni düzenlemeler kapsamında belediyelerde hesap verebilirlik mekanizmaları.', date: '20 NİS 2026', tag: 'Araştırma' },
  { cat: 'Ekonomi', title: 'Enflasyonla Mücadelede Politika Araçlarının Etkinliği', desc: 'Para politikasının sınırları ve maliye politikasıyla koordinasyon ihtiyacı.', date: '18 NİS 2026', tag: 'Ekonomi' },
  { cat: 'Küresel', title: 'İklim Diplomasisi: COP31 Öncesinde Müzakere Dinamikleri', desc: 'Gelişmiş ve gelişmekte olan ülkeler arasındaki finansman anlaşmazlıkları.', date: '17 NİS 2026', tag: 'Çevre' },
  { cat: 'Medya', title: 'Yapay Zeka ve Gazetecilik: Dezenformasyon Çağında Doğrulama', desc: 'Fact-checking araçlarının gelişimi ve editoryal sorumluluk tartışmaları.', date: '15 NİS 2026', tag: 'Teknoloji' },
  { cat: 'Gençlik', title: 'Z Kuşağının Siyasi Kimliği: Aktivizmden Seçim Sandığına', desc: 'Genç seçmenlerin tercihleri ve geleneksel partilerin uyum stratejileri.', date: '12 NİS 2026', tag: 'Toplum' },
];

const sidebarStories = [
  { num: '01', title: 'AB\'nin Yeni Göç Paketi Oylaması', cat: 'Dış Politika' },
  { num: '02', title: 'Merkez Bankası Faiz Kararı Açıklandı', cat: 'Ekonomi' },
  { num: '03', title: 'NATO Savunma Bütçesi Müzakereleri', cat: 'Güvenlik' },
  { num: '04', title: 'Gençlerin Siyasi Katılım Oranları', cat: 'Araştırma' },
];

export function SiyasetHomePage() {
  const { podcasts } = useData();
  const latestPodcasts = podcasts.slice(0, 3);

  return (
    <div className="min-h-screen bg-[#030f0e]">

      {/* ── Ticker bar ── */}
      <div
        className="flex items-center h-[44px] overflow-hidden"
        style={{ background: 'rgba(13,148,136,0.08)', borderBottom: '1px solid rgba(13,148,136,0.2)' }}
      >
        <div
          className="flex-shrink-0 h-full flex items-center px-4 font-mono text-[10px] font-bold tracking-[0.1em] uppercase text-black"
          style={{ background: '#0d9488' }}
        >
          Son Dakika
        </div>
        <div className="flex-1 overflow-hidden">
          <span className="inline-block whitespace-nowrap font-mono text-[11px] tracking-[0.04em] animate-ticker" style={{ color: '#2dd4bf' }}>
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span key={i}>{item} &nbsp;·&nbsp; </span>
            ))}
          </span>
        </div>
      </div>

      {/* ── Hero ── */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 px-6 lg:px-16 py-16 max-w-[1200px] mx-auto">
        {/* Left */}
        <div>
          <div className="font-mono text-[10px] tracking-[0.12em] uppercase mb-4" style={{ color: '#0d9488' }}>
            25 NİSAN 2026 &nbsp;·&nbsp; ANALİZ
          </div>
          <h1
            className="font-serif font-bold leading-[1.2] mb-5 text-white"
            style={{ fontSize: 'clamp(28px,3vw,44px)' }}
          >
            Dijital Seçim Kampanyaları:<br />
            <span style={{ color: '#2dd4bf' }}>Geleceğin Siyaseti</span> mi?
          </h1>
          <div className="flex items-center gap-3 mb-5">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white font-mono"
              style={{ background: 'linear-gradient(135deg, #0d9488, #0a6b61)' }}
            >
              AY
            </div>
            <div>
              <div className="font-medium text-[13px] text-white">Ayşe Yılmaz</div>
              <div className="font-mono text-[11px] text-white/40">Siyaset Editörü · 8 dk okuma</div>
            </div>
          </div>
          <p className="text-white/65 text-[14px] leading-[1.75]">
            Sosyal medya algoritmalarının seçim süreçlerini nasıl şekillendirdiği, mikro-hedefli reklam stratejileri ve dijital dezenformasyonla mücadele politikaları üzerine kapsamlı bir analiz.
          </p>
        </div>

        {/* Right — Sidebar stories */}
        <div>
          <div
            className="font-mono text-[10px] tracking-[0.12em] uppercase text-white/40 mb-4 pb-3"
            style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
          >
            Öne Çıkan Haberler
          </div>
          <div className="flex flex-col gap-1">
            {sidebarStories.map((story) => (
              <div
                key={story.num}
                className="flex items-start gap-4 px-3 py-3.5 rounded-xl cursor-pointer transition-all duration-300"
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = 'rgba(13,148,136,0.06)';
                  el.style.paddingLeft = '20px';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = '';
                  el.style.paddingLeft = '12px';
                }}
              >
                <span className="font-mono text-[18px] font-bold leading-none flex-shrink-0 pt-0.5" style={{ color: '#0d9488' }}>
                  {story.num}
                </span>
                <div>
                  <div className="text-[13px] font-medium text-white leading-snug mb-1">{story.title}</div>
                  <div className="font-mono text-[9px] uppercase tracking-[0.1em] text-white/40">{story.cat}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Article grid ── */}
      <div className="px-6 lg:px-16 pb-16 max-w-[1200px] mx-auto">
        <div
          className="font-mono text-[10px] tracking-[0.12em] uppercase text-white/40 mb-6 flex items-center gap-3"
        >
          Son Makaleler
          <span className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.08)' }} />
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-hidden rounded-2xl"
          style={{ gap: 1, background: 'rgba(13,148,136,0.12)' }}
        >
          {polCards.map((card, i) => (
            <div
              key={i}
              className="relative cursor-pointer overflow-hidden group transition-colors duration-300"
              style={{ background: '#030f0e', padding: '28px 24px' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(13,148,136,0.06)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#030f0e'; }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(90deg, #0d9488, transparent)' }}
              />
              <div className="font-mono text-[10px] uppercase tracking-[0.12em] mb-2.5" style={{ color: '#0d9488' }}>{card.cat}</div>
              <div className="text-[15px] font-semibold leading-[1.4] text-white mb-2.5">{card.title}</div>
              <p className="text-white/45 text-[12px] leading-[1.6] mb-4">{card.desc}</p>
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-[9px] text-white/35">{card.date}</span>
                <span
                  className="px-2 py-0.5 rounded font-mono text-[9px] tracking-[0.08em] uppercase"
                  style={{ background: 'rgba(13,148,136,0.12)', border: '1px solid rgba(13,148,136,0.2)', color: '#2dd4bf' }}
                >
                  {card.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── News + Analyses ── */}
      <div className="container-custom pb-24 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-10">
            <SectionHeader
              title="Siyasi Gündem"
              description="Türkiye ve dünyadan güncel siyasi gelişmeler, bağımsız haber ve yorum."
              linkTo="/siyaset/news"
            />
            <div className="grid grid-cols-1 gap-5">
              {siyasetAnalyses.map((analysis) => (
                <div key={analysis.id} className="card-premium p-6">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest" style={{ color: '#0d9488' }}>{analysis.category}</span>
                  <h3 className="text-xl font-bold mt-2 mb-2 text-white">{analysis.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">{analysis.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-white/40">
                    <span className="font-medium text-white/60">{analysis.author}</span>
                    <span>·</span>
                    <span>{analysis.readTime} okuma</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="card-premium p-7">
              <h3 className="text-lg font-bold text-white mb-5">Gündem Etiketleri</h3>
              <div className="flex flex-wrap gap-2">
                {['Seçimler', 'Dış Politika', 'AB', 'NATO', 'TBMM', 'Ekonomi', 'İklim', 'Güvenlik'].map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-xl text-sm font-medium cursor-pointer transition-all duration-200 text-white/50"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
                    onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(13,148,136,0.2)'; el.style.borderColor = 'rgba(13,148,136,0.4)'; el.style.color = '#2dd4bf'; }}
                    onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(255,255,255,0.06)'; el.style.borderColor = 'rgba(255,255,255,0.08)'; el.style.color = 'rgba(255,255,255,0.5)'; }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="card-premium p-7">
              <h3 className="text-lg font-bold text-white mb-5">Gündem Takvimi</h3>
              <div className="space-y-3">
                {[
                  { date: '28 Nis', event: 'TBMM Olağanüstü Oturumu', tag: 'Meclis' },
                  { date: '3 May', event: 'AB Dışişleri Konseyi Toplantısı', tag: 'Dış Politika' },
                  { date: '10 May', event: 'Türkiye-Yunanistan İstişare Görüşmeleri', tag: 'İkili İlişkiler' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-3 rounded-xl cursor-pointer transition-all duration-200"
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = ''; }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex flex-col items-center justify-center text-white flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, #0d9488, #0a6b61)' }}
                    >
                      <span className="text-[9px] font-bold font-mono">{item.date.split(' ')[1]}</span>
                      <span className="text-base font-black leading-none">{item.date.split(' ')[0]}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-white">{item.event}</div>
                      <div className="text-xs font-medium mt-0.5" style={{ color: '#0d9488' }}>{item.tag}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Podcasts */}
        {latestPodcasts.length > 0 && (
          <section>
            <SectionHeader
              title="Siyaset Podcastleri"
              description="Uzman görüşleri, tartışmalar ve siyasi değerlendirmeler."
              linkTo="/siyaset/podcasts"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {latestPodcasts.map(podcast => (
                <div key={podcast.id}>
                  <PodcastCard podcast={podcast} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section
          className="relative overflow-hidden rounded-[2rem] p-12 md:p-20 text-center"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(13,148,136,0.2)' }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(13,148,136,0.12), transparent 70%)' }}
          />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Siyasi Zekânızı <br />
              <span className="text-gradient-siyaset">Geliştirin</span>
            </h2>
            <p className="text-white/55 text-lg mb-12 leading-relaxed">
              Bağımsız analizler, uzman yorumlar ve kapsamlı siyasi içerikler ile dünyanın nabzını tutun.
            </p>
            <Link
              to="/siyaset/analysis"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-full text-white font-mono text-sm uppercase tracking-wider transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #0d9488, #0a6b61)', boxShadow: '0 0 40px rgba(13,148,136,0.4)' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 60px rgba(13,148,136,0.6)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 40px rgba(13,148,136,0.4)'; (e.currentTarget as HTMLElement).style.transform = ''; }}
            >
              Analizlere Git <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
