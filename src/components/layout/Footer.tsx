import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <footer
            className="mt-16"
            style={{
                background: 'var(--paper)',
                borderTop: '3px double var(--ink)',
                color: 'var(--ink)',
            }}
        >
            <div className="container-custom py-12">
                {/* Top crest line */}
                <div className="flex flex-col items-center text-center mb-10">
                    <div className="kicker mb-2">Edebi Künye · Colophon</div>
                    <h2 className="masthead-title" style={{ fontSize: '34px' }}>
                        AGORA<span style={{ color: 'var(--accent-red)' }}>·</span>360
                    </h2>
                    <div className="mt-2 dateline" style={{ color: 'var(--ink-muted)' }}>
                        Gençliğin Fikir Meydanı — est. 2026
                    </div>
                </div>

                <div
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8"
                    style={{ borderTop: '1px solid var(--rule-soft)' }}
                >
                    <div>
                        <h3 className="kicker-ink mb-3" style={{ paddingBottom: 6, borderBottom: '1px solid var(--ink)' }}>
                            Yayın
                        </h3>
                        <ul className="space-y-2 body-copy" style={{ fontSize: 14 }}>
                            <li><Link to="/" className="ink-link">Manşet</Link></li>
                            <li><Link to="/about" className="ink-link">Hakkımızda</Link></li>
                            <li><Link to="/admin" className="ink-link">Yönetim Paneli</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="kicker-ink mb-3" style={{ paddingBottom: 6, borderBottom: '1px solid var(--ink)' }}>
                            Siyaset
                        </h3>
                        <ul className="space-y-2 body-copy" style={{ fontSize: 14 }}>
                            <li><Link to="/siyaset" className="ink-link">Ana Sayfa</Link></li>
                            <li><Link to="/siyaset/news" className="ink-link">Haberler</Link></li>
                            <li><Link to="/siyaset/articles" className="ink-link">Makaleler</Link></li>
                            <li><Link to="/siyaset/analysis" className="ink-link">Analizler</Link></li>
                            <li><Link to="/siyaset/podcasts" className="ink-link">Podcastler</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="kicker-ink mb-3" style={{ paddingBottom: 6, borderBottom: '1px solid var(--ink)' }}>
                            Uluslararası İlişkiler
                        </h3>
                        <ul className="space-y-2 body-copy" style={{ fontSize: 14 }}>
                            <li><Link to="/ui" className="ink-link">Ana Sayfa</Link></li>
                            <li><Link to="/ui/news" className="ink-link">Gelişmeler</Link></li>
                            <li><Link to="/ui/analysis" className="ink-link">Analizler</Link></li>
                            <li><Link to="/ui/learning" className="ink-link">Eğitim</Link></li>
                            <li><Link to="/ui/resources" className="ink-link">Kaynaklar</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="kicker-ink mb-3" style={{ paddingBottom: 6, borderBottom: '1px solid var(--ink)' }}>
                            Sanat Köşesi
                        </h3>
                        <ul className="space-y-2 body-copy" style={{ fontSize: 14 }}>
                            <li><Link to="/sanat-kosesi" className="ink-link">Ana Sayfa</Link></li>
                            <li><Link to="/sanat-kosesi/news" className="ink-link">Haberler</Link></li>
                            <li><Link to="/sanat-kosesi/articles" className="ink-link">Makaleler</Link></li>
                            <li><Link to="/sanat-kosesi/analysis" className="ink-link">Eleştiri</Link></li>
                            <li><Link to="/sanat-kosesi/podcasts" className="ink-link">Podcastler</Link></li>
                        </ul>
                    </div>
                </div>

                <div
                    className="mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3"
                    style={{ borderTop: '1px solid var(--rule-soft)' }}
                >
                    <p className="dateline" style={{ color: 'var(--ink-muted)' }}>
                        © {new Date().getFullYear()} Agora360. Tüm hakları saklıdır.
                    </p>
                    <p className="dateline" style={{ color: 'var(--ink-muted)' }}>
                        İletişim — iletisim@agora360.com
                    </p>
                </div>
            </div>
        </footer>
    );
}
