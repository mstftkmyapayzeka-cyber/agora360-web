import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useData } from '../../context/DataContext';
import { SectionHeader } from '../../components/common/SectionHeader';
import { PodcastCard } from '../../components/features/PodcastCard';

const sanatNews = [
  { id: '1', title: 'İstanbul Modern\'de Yeni Sergi: "Dijital Çağda Kimlik"', category: 'Sergi' },
  { id: '2', title: 'Cannes Film Festivali\'nde Türk Sineması Yankı Uyandırdı', category: 'Sinema' },
  { id: '3', title: 'Müzik Dünyasının Yeni İsmi: Yükselen Sanatçılar 2025', category: 'Müzik' },
  { id: '4', title: 'Çağdaş Sanat Piyasasında Rekor Fiyatlar', category: 'Sanat Piyasası' },
];

const sanatAnalyses = [
  {
    id: 'a1',
    title: 'Türk Sinemasının Yeni Dalgası: Bağımsız Filmler ve Küresel Sahnede Türkiye',
    excerpt: '2020\'lerle birlikte yükselişe geçen bağımsız Türk sineması, uluslararası festivallerde ödüller toplarken içerik anlayışını da kökten değiştiriyor.',
    author: 'Deniz Şahin',
    category: 'Sinema Analiz',
    readTime: '10 dk',
  },
  {
    id: 'a2',
    title: 'Dijital Sanatın Yükselişi: NFT\'den Sonra Sırada Ne Var?',
    excerpt: 'Blockchain tabanlı sanat piyasasının çöküşünün ardından dijital sanat; yapay zeka, interaktif enstalasyon ve karma gerçeklikle yeniden şekilleniyor.',
    author: 'Elif Arslan',
    category: 'Dijital Sanat',
    readTime: '7 dk',
  },
];

const artistPills = [
  { name: 'Layla Işık', category: 'Dijital Sanat', color: '#c026d3' },
  { name: 'Eren Demirtaş', category: 'Fotoğraf', color: '#a855f7' },
  { name: 'Selin Çelik', category: 'Heykel', color: '#e879f9' },
  { name: 'Murat Yıldız', category: 'Müzik & Görsel', color: '#9333ea' },
  { name: 'Buse Kara', category: 'Şiir & Metin', color: '#f0abfc' },
];

const artFilters = ['Tümü', 'Dijital', 'Fotoğraf', 'Resim', 'Heykel', 'Şiir'];

const masonryPieces = [
  {
    title: 'Konsantrik Evren',
    category: 'Dijital Sanat',
    height: 280,
    svg: (
      <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" style={{ height: 280, width: '100%', background: 'linear-gradient(135deg,#1a0a2e,#2d1060)', display: 'block' }}>
        <circle cx="200" cy="140" r="100" fill="none" stroke="#c026d3" strokeWidth="1.5" opacity=".6"/>
        <circle cx="200" cy="140" r="75" fill="none" stroke="#a855f7" strokeWidth="1" opacity=".5"/>
        <circle cx="200" cy="140" r="50" fill="none" stroke="#e879f9" strokeWidth="1" opacity=".5"/>
        <circle cx="200" cy="140" r="28" fill="rgba(192,38,211,0.15)"/>
        <circle cx="200" cy="140" r="8" fill="#e879f9"/>
        <line x1="100" y1="140" x2="300" y2="140" stroke="#c026d3" strokeWidth=".8" opacity=".3"/>
        <line x1="200" y1="40" x2="200" y2="240" stroke="#c026d3" strokeWidth=".8" opacity=".3"/>
        <circle cx="200" cy="40" r="3" fill="#a855f7" opacity=".8"/>
        <circle cx="200" cy="240" r="3" fill="#a855f7" opacity=".8"/>
        <circle cx="100" cy="140" r="3" fill="#a855f7" opacity=".8"/>
        <circle cx="300" cy="140" r="3" fill="#a855f7" opacity=".8"/>
      </svg>
    ),
  },
  {
    title: 'Üçgenin İçindeki Sessizlik',
    category: 'Geometrik',
    height: 200,
    svg: (
      <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style={{ height: 200, width: '100%', background: 'linear-gradient(135deg,#0f0520,#1d0a45)', display: 'block' }}>
        <polygon points="200,30 340,170 60,170" fill="none" stroke="#9333ea" strokeWidth="1.5" opacity=".7"/>
        <polygon points="200,65 305,170 95,170" fill="none" stroke="#a855f7" strokeWidth="1" opacity=".55"/>
        <polygon points="200,100 270,170 130,170" fill="none" stroke="#c026d3" strokeWidth="1" opacity=".5"/>
        <polygon points="200,130 235,170 165,170" fill="rgba(192,38,211,0.12)"/>
        <line x1="200" y1="30" x2="200" y2="170" stroke="#e879f9" strokeWidth=".6" opacity=".3"/>
      </svg>
    ),
  },
  {
    title: 'Dalga Formu',
    category: 'Ses Görselleştirme',
    height: 320,
    svg: (
      <svg viewBox="0 0 400 340" xmlns="http://www.w3.org/2000/svg" style={{ height: 320, width: '100%', background: 'linear-gradient(180deg,#110330,#1e0850,#110330)', display: 'block' }}>
        <path d="M0,120 Q100,80 200,120 T400,120" fill="none" stroke="#c026d3" strokeWidth="1.5" opacity=".7"/>
        <path d="M0,150 Q100,110 200,150 T400,150" fill="none" stroke="#a855f7" strokeWidth="1.2" opacity=".55"/>
        <path d="M0,180 Q100,140 200,180 T400,180" fill="none" stroke="#e879f9" strokeWidth="1" opacity=".5"/>
        <path d="M0,210 Q100,170 200,210 T400,210" fill="none" stroke="#9333ea" strokeWidth="1" opacity=".45"/>
        <path d="M0,240 Q100,200 200,240 T400,240" fill="none" stroke="#c026d3" strokeWidth=".8" opacity=".3"/>
        <circle cx="200" cy="150" r="20" fill="rgba(192,38,211,0.15)" stroke="#c026d3" strokeWidth="1" opacity=".5"/>
        <circle cx="200" cy="150" r="5" fill="#e879f9"/>
      </svg>
    ),
  },
  {
    title: 'İç İçe Kareler',
    category: 'Minimalizm',
    height: 240,
    svg: (
      <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" style={{ height: 240, width: '100%', background: 'linear-gradient(135deg,#0d0225,#1a0545)', display: 'block' }}>
        <rect x="140" y="60" width="120" height="120" fill="none" stroke="#9333ea" strokeWidth="1.5" opacity=".7"/>
        <rect x="160" y="80" width="80" height="80" fill="none" stroke="#a855f7" strokeWidth="1" opacity=".55"/>
        <rect x="180" y="100" width="40" height="40" fill="rgba(192,38,211,0.18)" stroke="#c026d3" strokeWidth="1"/>
        <rect x="190" y="110" width="20" height="20" fill="#c026d3" opacity=".7"/>
        <line x1="140" y1="60" x2="260" y2="180" stroke="#e879f9" strokeWidth=".6" opacity=".25"/>
        <line x1="260" y1="60" x2="140" y2="180" stroke="#e879f9" strokeWidth=".6" opacity=".25"/>
      </svg>
    ),
  },
  {
    title: 'Venn Diyagramı',
    category: 'Kavramsal',
    height: 280,
    svg: (
      <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style={{ height: 280, width: '100%', background: 'linear-gradient(180deg,#0a0220,#180640)', display: 'block' }}>
        <circle cx="120" cy="150" r="70" fill="none" stroke="#c026d3" strokeWidth="1" opacity=".5"/>
        <circle cx="200" cy="150" r="70" fill="none" stroke="#9333ea" strokeWidth="1" opacity=".5"/>
        <circle cx="280" cy="150" r="70" fill="none" stroke="#a855f7" strokeWidth="1" opacity=".5"/>
        <path d="M155,100 Q200,150 155,200" fill="rgba(192,38,211,0.08)"/>
        <path d="M245,100 Q200,150 245,200" fill="rgba(147,51,234,0.08)"/>
        <circle cx="200" cy="150" r="12" fill="rgba(232,121,249,0.3)" stroke="#e879f9" strokeWidth="1"/>
      </svg>
    ),
  },
  {
    title: 'Piramit Yapısı',
    category: 'Geometrik',
    height: 180,
    svg: (
      <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg" style={{ height: 180, width: '100%', background: 'linear-gradient(135deg,#130428,#220850)', display: 'block' }}>
        <polygon points="200,20 380,160 20,160" fill="none" stroke="#c026d3" strokeWidth="1.5" opacity=".6"/>
        <polygon points="200,50 350,160 50,160" fill="none" stroke="#9333ea" strokeWidth="1" opacity=".45"/>
        <polygon points="200,80 310,160 90,160" fill="none" stroke="#a855f7" strokeWidth="1" opacity=".4"/>
        <polygon points="200,108 268,160 132,160" fill="rgba(192,38,211,0.1)"/>
        <circle cx="200" cy="20" r="4" fill="#e879f9"/>
        <circle cx="380" cy="160" r="4" fill="#9333ea" opacity=".7"/>
        <circle cx="20" cy="160" r="4" fill="#9333ea" opacity=".7"/>
      </svg>
    ),
  },
];

export function SanatKosesiHomePage() {
  const { podcasts } = useData();
  const latestPodcasts = podcasts.slice(0, 3);

  return (
    <div className="min-h-screen bg-[#0d0514]">

      {/* Hero */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-6 lg:px-16 py-20 max-w-[1200px] mx-auto">
        {/* Left */}
        <div>
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full font-mono text-[10px] tracking-[0.12em] uppercase mb-6"
            style={{ background: 'rgba(192,38,211,0.12)', border: '1px solid rgba(192,38,211,0.25)', color: '#e879f9' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#c026d3]" />
            Sanat Köşesi
          </div>
          <h1
            className="font-serif italic font-bold leading-[1.15] mb-5 text-gradient-sanat"
            style={{ fontSize: 'clamp(36px,4vw,58px)' }}
          >
            Yaratıcılığın<br />Sınırı Yok.
          </h1>
          <p className="text-white/65 text-[15px] leading-[1.75] mb-8 max-w-[480px]">
            Genç sanatçıların sesini yükselten, yaratıcı ifadenin her formunu kucaklayan bir alan. Resimden dijital sanata, şiirden performansa.
          </p>
          <Link
            to="/sanat-kosesi/articles"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-white font-mono text-[11px] tracking-[0.08em] uppercase transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #9333ea, #c026d3)',
              boxShadow: '0 0 30px rgba(192,38,211,0.4)',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 50px rgba(192,38,211,0.6)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(192,38,211,0.4)'; (e.currentTarget as HTMLElement).style.transform = ''; }}
          >
            Keşfet <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Right — Artist pills */}
        <div className="flex flex-col gap-3">
          {artistPills.map((pill) => (
            <div
              key={pill.name}
              className="flex items-center gap-3.5 px-5 py-4 rounded-xl cursor-pointer transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateX(4px)';
                el.style.background = 'rgba(192,38,211,0.07)';
                el.style.borderColor = 'rgba(192,38,211,0.2)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = '';
                el.style.background = 'rgba(255,255,255,0.03)';
                el.style.borderColor = 'rgba(255,255,255,0.06)';
              }}
            >
              <span
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ background: pill.color, boxShadow: `0 0 8px ${pill.color}` }}
              />
              <span className="text-[14px] font-medium text-white flex-1">{pill.name}</span>
              <span className="font-mono text-[9px] tracking-[0.1em] uppercase text-white/40">{pill.category}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Filter buttons */}
      <div className="flex gap-2 flex-wrap px-6 lg:px-16 mb-10 max-w-[1200px] mx-auto">
        {artFilters.map((filter, i) => (
          <button
            key={filter}
            className="px-4 py-2 rounded-full font-mono text-[10px] tracking-[0.08em] uppercase cursor-pointer transition-all duration-300"
            style={
              i === 0
                ? { background: 'rgba(192,38,211,0.12)', border: '1px solid rgba(192,38,211,0.35)', color: '#e879f9' }
                : { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.45)' }
            }
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = 'rgba(192,38,211,0.12)';
              el.style.borderColor = 'rgba(192,38,211,0.35)';
              el.style.color = '#e879f9';
            }}
            onMouseLeave={(e) => {
              if (i !== 0) {
                const el = e.currentTarget as HTMLElement;
                el.style.background = 'rgba(255,255,255,0.04)';
                el.style.borderColor = 'rgba(255,255,255,0.08)';
                el.style.color = 'rgba(255,255,255,0.45)';
              }
            }}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Masonry art grid */}
      <div
        className="px-6 lg:px-16 pb-20 max-w-[1200px] mx-auto"
        style={{ columns: 3, columnGap: 20 }}
      >
        {masonryPieces.map((piece) => (
          <div
            key={piece.title}
            className="group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-400 mb-5"
            style={{
              breakInside: 'avoid',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = 'translateY(-6px) scale(1.01)';
              el.style.boxShadow = '0 20px 60px rgba(192,38,211,0.25)';
              el.style.borderColor = 'rgba(192,38,211,0.35)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = '';
              el.style.boxShadow = '';
              el.style.borderColor = 'rgba(255,255,255,0.06)';
            }}
          >
            {piece.svg}

            {/* Overlay */}
            <div
              className="absolute bottom-0 left-0 right-0 px-5 py-5 translate-y-full group-hover:translate-y-0 transition-transform duration-400"
              style={{ background: 'linear-gradient(to top, rgba(13,5,20,0.95), transparent)' }}
            >
              <div className="font-serif text-[16px] font-semibold text-white mb-1">{piece.title}</div>
              <div className="font-mono text-[9px] tracking-[0.1em] uppercase text-[#c026d3]">{piece.category}</div>
            </div>
          </div>
        ))}
      </div>

      {/* News + Analyses */}
      <div className="container-custom pb-24 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-10">
            <SectionHeader
              title="Kültür & Gündem"
              description="Sanat dünyasından son haberler, röportajlar ve eleştiriler."
              linkTo="/sanat-kosesi/news"
            />

            {/* Breaking news panel */}
            <div
              className="rounded-3xl p-1"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div className="flex flex-col md:flex-row gap-4">
                <div
                  className="md:w-1/3 rounded-[1.4rem] p-6 text-white flex flex-col justify-between"
                  style={{ background: 'linear-gradient(135deg, #9333ea, #c026d3)' }}
                >
                  <div>
                    <div
                      className="inline-flex items-center gap-2 px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider mb-4"
                      style={{ background: 'rgba(255,255,255,0.2)' }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      Öne Çıkan
                    </div>
                    <h4 className="text-xl font-bold leading-tight mb-4">Venedik Bienali'nde Türk Sanatçılar Büyük Ödülü Kaptı</h4>
                  </div>
                  <Link to="/sanat-kosesi/news" className="text-sm font-semibold flex items-center gap-2 hover:translate-x-1 transition-transform">
                    Detaylar <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="md:w-2/3 p-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                  {sanatNews.map(item => (
                    <Link
                      key={item.id}
                      to="/sanat-kosesi/news"
                      className="group p-4 rounded-xl transition-all"
                      style={{ border: '1px solid transparent' }}
                      onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(255,255,255,0.04)'; el.style.borderColor = 'rgba(255,255,255,0.08)'; }}
                      onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = ''; el.style.borderColor = 'transparent'; }}
                    >
                      <div className="font-mono text-[10px] uppercase tracking-widest mb-1 text-[#c026d3]">{item.category}</div>
                      <h5 className="font-bold text-white/90 text-sm line-clamp-2">{item.title}</h5>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Analyses */}
            <div className="grid grid-cols-1 gap-5">
              {sanatAnalyses.map((analysis) => (
                <div
                  key={analysis.id}
                  className="card-premium p-6"
                >
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#c026d3]">{analysis.category}</span>
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
              <h3 className="text-lg font-bold text-white mb-5">Kategoriler</h3>
              <div className="flex flex-wrap gap-2">
                {['Sinema', 'Müzik', 'Tiyatro', 'Edebiyat', 'Resim', 'Heykel', 'Fotoğraf', 'Dans'].map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-xl text-sm font-medium cursor-pointer transition-all duration-200 text-white/50 hover:text-white"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
                    onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(192,38,211,0.2)'; el.style.borderColor = 'rgba(192,38,211,0.4)'; el.style.color = '#e879f9'; }}
                    onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(255,255,255,0.06)'; el.style.borderColor = 'rgba(255,255,255,0.08)'; el.style.color = 'rgba(255,255,255,0.5)'; }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="card-premium p-7">
              <h3 className="text-lg font-bold text-white mb-5">Bu Hafta Vizyonda</h3>
              <div className="space-y-3">
                {[
                  { title: 'Düşen Yapraklar', director: 'Aki Kaurismäki', genre: 'Drama' },
                  { title: 'Perfect Days', director: 'Wim Wenders', genre: 'Drama' },
                  { title: 'Zone of Interest', director: 'Jonathan Glazer', genre: 'Tarih' },
                ].map((film, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200"
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = ''; }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, #9333ea, #c026d3)' }}
                    >
                      {i + 1}
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-white">{film.title}</div>
                      <div className="text-xs text-white/40">{film.director} · {film.genre}</div>
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
              title="Kültür Podcastleri"
              description="Sanat ve kültür dünyasının sesini dinleyin."
              linkTo="/sanat-kosesi/podcasts"
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
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(192,38,211,0.2)' }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(192,38,211,0.15), transparent 70%)' }}
          />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sanatın Her Boyutunu <br />
              <span className="text-gradient-sanat">Birlikte Keşfedelim</span>
            </h2>
            <p className="text-white/55 text-lg mb-12 leading-relaxed">
              Sinema, müzik, edebiyat ve görsel sanatlar üzerine derin analizler ve güncel yorumlar.
            </p>
            <Link
              to="/sanat-kosesi/articles"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-full text-white font-mono text-sm uppercase tracking-wider transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #9333ea, #c026d3)', boxShadow: '0 0 40px rgba(192,38,211,0.4)' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 60px rgba(192,38,211,0.6)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 40px rgba(192,38,211,0.4)'; (e.currentTarget as HTMLElement).style.transform = ''; }}
            >
              Tüm İçerikler <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
