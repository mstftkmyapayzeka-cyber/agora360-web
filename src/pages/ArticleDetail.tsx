import { useParams, Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { ArrowLeft, Share2 } from 'lucide-react';

export function ArticleDetail() {
    const { articles } = useData();
    const { id } = useParams<{ id: string }>();
    const article = articles.find(a => a.id === id);

    if (!article) {
        return (
            <div className="container-custom py-20 text-center">
                <h2 className="headline mb-4" style={{ fontSize: 32 }}>Yazı Bulunamadı</h2>
                <Link to="/articles" className="ink-link byline">Yazılara Geri Dön</Link>
            </div>
        );
    }

    return (
        <div className="container-custom py-12 max-w-4xl">
            <div
                className="flex items-center justify-between mb-8 pb-3"
                style={{ borderBottom: '1px solid var(--rule-soft)' }}
            >
                <Link to="/articles" className="byline ink-link inline-flex items-center gap-2">
                    <ArrowLeft className="h-3.5 w-3.5" /> Yazılara Dön
                </Link>
                <button
                    className="byline inline-flex items-center gap-1.5"
                    style={{ color: 'var(--ink-muted)' }}
                >
                    <Share2 className="h-3.5 w-3.5" /> Paylaş
                </button>
            </div>

            <article>
                <header
                    className="mb-10 pt-4"
                    style={{ borderTop: '3px double var(--ink)' }}
                >
                    <div className="kicker mb-3">
                        {article.tags[0] ?? 'Makale'} · {article.publication ?? 'Agora360'}
                    </div>
                    <h1
                        className="headline mb-4"
                        style={{ fontSize: 'clamp(36px, 5vw, 60px)', lineHeight: 1.04 }}
                    >
                        {article.title}
                    </h1>
                    <p className="deck mb-6" style={{ fontSize: 22 }}>
                        {article.summary}
                    </p>

                    <div
                        className="flex flex-wrap items-center gap-x-6 gap-y-2 py-3"
                        style={{ borderTop: '1px solid var(--rule-soft)', borderBottom: '1px solid var(--rule-soft)' }}
                    >
                        <span className="byline">— {article.author}</span>
                        <span className="dateline" style={{ color: 'var(--ink-faint)' }}>
                            {article.publication} · {article.year}
                        </span>
                    </div>
                </header>

                <div
                    className="body-copy"
                    style={{ fontSize: 18, color: 'var(--ink-soft)' }}
                >
                    {article.content ? (
                        <div dangerouslySetInnerHTML={{ __html: article.content }} />
                    ) : (
                        <div>
                            <p className="drop-cap mb-5" style={{ fontSize: 18 }}>
                                {article.summary}
                            </p>
                            <p className="mb-5">
                                Uluslararası ilişkiler teorileri, modern dünya düzenini anlamlandırmak için kullanılan temel araçlardır. Realizmden liberalizme, inşacılıktan eleştirel teorilere kadar geniş bir yelpazede sunulan bu perspektifler, devletlerin davranışlarını, uluslararası örgütlerin rolünü ve küresel sistemin dinamiklerini açıklamaya çalışır.
                            </p>
                            <p className="mb-5">
                                Bu yazımızda, güncel tartışmalar ışığında küresel siyasetin dönüşümünü ve bu dönüşümün arkasındaki itici güçleri ele alıyoruz. Özellikle son on yılda yaşanan teknolojik gelişmeler, iklim değişikliği ve değişen güç dengeleri, klasik teorilerin yeniden yorumlanmasını zorunlu kılmıştır.
                            </p>

                            <div className="pull-quote">
                                Çok kutuplu bir düzen, çoğul bir dünya tasavvuru gerektirir.
                            </div>

                            <div
                                className="my-8 p-6"
                                style={{ background: 'var(--paper-deep)', border: '1px solid var(--ink)' }}
                            >
                                <h3 className="headline mb-3" style={{ fontSize: 20 }}>Temel Çıkarımlar</h3>
                                <ul className="space-y-2 body-copy" style={{ fontSize: 16 }}>
                                    <li>— Küresel güç dengeleri çok kutuplu bir yapıya evrilmektedir.</li>
                                    <li>— Yenilikçi diplomasi araçları, geleneksel yöntemlerin yerini almaktadır.</li>
                                    <li>— Ekonomik bağımlılık, güvenlik stratejilerinin merkezinde yer almaktadır.</li>
                                </ul>
                            </div>

                            <p>
                                Sonuç olarak, uluslararası ilişkiler disiplini, sürekli değişen bir gerçekliği anlamlandırma çabasıdır. Bu süreçte hem tarihsel birikimi hem de güncel verileri harmanlayan bütüncül bir yaklaşım, daha doğru analizler yapmamıza olanak sağlar.
                            </p>
                        </div>
                    )}
                </div>

                <footer
                    className="mt-14 pt-8"
                    style={{ borderTop: '3px double var(--ink)' }}
                >
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                        {article.tags.map(tag => (
                            <span key={tag} className="tag-chip">{tag}</span>
                        ))}
                    </div>
                    <p className="dateline" style={{ color: 'var(--ink-muted)' }}>
                        — Agora360 Yayın Kurulu
                    </p>
                </footer>
            </article>

            <div className="mt-10 text-center">
                <Link to="/articles" className="btn btn-outline">Tüm Yazıları Gör</Link>
            </div>
        </div>
    );
}
