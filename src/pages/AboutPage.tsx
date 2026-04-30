import { Mail, MapPin, Phone } from 'lucide-react';

export function AboutPage() {
    return (
        <div className="container-custom py-12">
            <div
                className="text-center mb-10 pt-5 pb-3"
                style={{ borderTop: '3px double var(--ink)', borderBottom: '3px double var(--ink)' }}
            >
                <div className="kicker mb-1">Künye</div>
                <h1 className="masthead-title" style={{ fontSize: 'clamp(40px, 6vw, 80px)' }}>
                    Hakkımızda
                </h1>
                <p className="deck italic mt-2" style={{ color: 'var(--ink-muted)' }}>
                    Bağımsız öğrenci yayını — misyon, ekip ve iletişim bilgileri.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-7">
                    <div className="news-columns drop-cap body-copy" style={{ color: 'var(--ink-soft)' }}>
                        <p className="mb-4">
                            Agora360, Uluslararası İlişkiler, Siyaset ve Sanat alanlarına ilgi duyan öğrenciler, akademisyenler ve meraklılar için kapsamlı bir dijital gazete olma hedefiyle kurulmuştur. Amacımız, karmaşık küresel gelişmeleri anlaşılır analizlerle sunmak, teorik bilgiyi pratik örneklerle harmanlamak ve Türkçe literatüre özgün bir katkı sağlamaktır.
                        </p>
                        <p className="mb-4">
                            Yayın kurulumuz, akademik standartlara bağlı kalarak güvenilir içerik üretir; farklı perspektiflere yer vererek eleştirel düşünceyi teşvik eder. Tüm metinler yayın öncesinde bağımsız hakemler tarafından değerlendirilir.
                        </p>
                        <p>
                            Eğitim modülleri, podcast serileri ve kaynak rehberleri ile uluslararası ilişkiler eğitimini dijital araçlarla desteklemeyi amaçlıyoruz. Genç yazarlara açık bir platform olarak işlerlik gösteriyoruz.
                        </p>
                    </div>

                    <div className="pull-quote">
                        “Akıl, hür düşüncenin ışığında parlar — ve gazete, bu ışığın ortak okunduğu meydandır.”
                    </div>

                    <div>
                        <div className="kicker-ink mb-3 pb-2" style={{ borderBottom: '1px solid var(--ink)' }}>Misyonumuz</div>
                        <ul className="space-y-3 body-copy" style={{ fontSize: 16 }}>
                            <li>— Güvenilir ve akademik standartlara uygun içerik üretmek.</li>
                            <li>— Uluslararası ilişkiler eğitimini dijital araçlarla desteklemek.</li>
                            <li>— Farklı perspektiflere yer vererek eleştirel düşünceyi teşvik etmek.</li>
                            <li>— Genç yazarlara bağımsız bir yayın alanı sunmak.</li>
                        </ul>
                    </div>
                </div>

                <aside
                    className="lg:col-span-5"
                    style={{ background: 'var(--paper-deep)', border: '1px solid var(--ink)', padding: 28 }}
                >
                    <div className="kicker mb-4">İletişim Bürosu</div>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4 pb-5" style={{ borderBottom: '1px solid var(--rule-soft)' }}>
                            <Mail className="h-5 w-5 mt-1" style={{ color: 'var(--accent-red)' }} />
                            <div>
                                <div className="byline mb-1">E-posta</div>
                                <a href="mailto:iletisim@agora360.com" className="ink-link body-copy">
                                    iletisim@agora360.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 pb-5" style={{ borderBottom: '1px solid var(--rule-soft)' }}>
                            <MapPin className="h-5 w-5 mt-1" style={{ color: 'var(--accent-red)' }} />
                            <div>
                                <div className="byline mb-1">Adres</div>
                                <p className="body-copy" style={{ color: 'var(--ink-muted)' }}>
                                    Üniversite Mahallesi, Kampüs Caddesi
                                    <br />
                                    Teknopark Binası No: 123
                                    <br />
                                    İstanbul, Türkiye
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Phone className="h-5 w-5 mt-1" style={{ color: 'var(--accent-red)' }} />
                            <div>
                                <div className="byline mb-1">Telefon</div>
                                <p className="body-copy" style={{ color: 'var(--ink-muted)' }}>
                                    +90 (212) 555 0123
                                </p>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}
