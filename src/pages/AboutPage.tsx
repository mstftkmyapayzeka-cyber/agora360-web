import { SectionHeader } from '../components/common/SectionHeader';
import { Mail, MapPin, Phone } from 'lucide-react';

export function AboutPage() {
    return (
        <div className="container-custom py-12">
            <SectionHeader
                title="Hakkımızda"
                description="IR Insight projesi ve misyonumuz hakkında."
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                    <div className="prose prose-slate dark:prose-invert">
                        <p className="lead text-lg">
                            IR Insight, Uluslararası İlişkiler disiplinine ilgi duyan öğrenciler, akademisyenler ve meraklılar için kapsamlı bir dijital kaynak olma hedefiyle kurulmuştur.
                        </p>
                        <p>
                            Amacımız, karmaşık küresel gelişmeleri anlaşılır analizlerle sunmak, teorik bilgiyi pratik örneklerle harmanlamak ve Türkçe literatüre katkı sağlamaktır.
                        </p>
                        <h3>Misyonumuz</h3>
                        <ul>
                            <li>Güvenilir ve akademik standartlara uygun içerik üretmek.</li>
                            <li>Uluslararası İlişkiler eğitimini dijital araçlarla desteklemek.</li>
                            <li>Farklı perspektiflere yer vererek eleştirel düşünceyi teşvik etmek.</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-6">İletişim</h3>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm text-primary-600">
                                <Mail className="h-6 w-6" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900 dark:text-slate-50">E-posta</h4>
                                <p className="text-slate-600 dark:text-slate-400 text-sm mb-1">Genel sorular ve önerileriniz için:</p>
                                <a href="mailto:info@irinsight.com" className="text-primary-600 hover:underline">info@irinsight.com</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm text-primary-600">
                                <MapPin className="h-6 w-6" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900 dark:text-slate-50">Konum</h4>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">
                                    Üniversite Mahallesi, Kampüs Caddesi<br />
                                    Teknopark Binası No: 123<br />
                                    İstanbul, Türkiye
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm text-primary-600">
                                <Phone className="h-6 w-6" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900 dark:text-slate-50">Telefon</h4>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">
                                    +90 (212) 555 0123
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
