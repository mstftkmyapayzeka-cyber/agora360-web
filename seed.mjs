import { createClient } from '@supabase/supabase-js';
import { randomUUID } from 'crypto';

const supabase = createClient(
  'https://ucqdymdybcfhsjqtavav.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjcWR5bWR5YmNmaHNqcXRhdmF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc2MjEzMTUsImV4cCI6MjA5MzE5NzMxNX0.2h1NAK8mq7J85Fe8jSE-qScdN37YSuhgD9nGI0x_aPE'
);

const id = () => randomUUID();

// ── ARTICLES ─────────────────────────────────────────────────────────────────
const articles = [
  // Portal / Manşet
  {
    id: id(), section: 'portal', year: 2026,
    title: 'Demokrasinin Sessiz Krizi: Gençlik Siyasetten Neden Uzaklaşıyor?',
    author: 'Ece Yıldırım', publication: 'Agora360',
    summary: 'Küresel ölçekte gençlerin siyasi katılım oranları her geçen seçimde düşüyor. Bu eğilimin ardında yalnızca hayal kırıklığı değil, sistemik bir güven bunalımı yatıyor.',
    tags: ['Demokrasi', 'Siyaset', 'Gençlik'],
    url: '', content: `<p>Dünya genelinde 18-30 yaş arası seçmenlerin sandığa gitme oranı son on yılda yüzde on dört oranında geriledi. Bu rakam tek başına bir alarm değil; daha derin bir kırılmanın habercisi. Gençler sisteme güvenmiyor; sisteme güvenmeyince katılmıyor; katılmayınca sistem onları daha az temsil ediyor. Kısır döngü böyle işliyor.</p>
<p>Peki bu kırılmanın kökünde ne var? Araştırmalar birkaç ortak faktöre işaret ediyor: kurumsal yolsuzluk algısı, seçilmişlerin söylemleri ile politikalar arasındaki uçurum ve dijital mecralarda doğruluk savaşlarından bunalan bir kuşağın "her şeyin yalan olduğu" kanaati.</p>
<h3>Güven Bunalımının Anatomisi</h3>
<p>Sosyolog Robert Putnam, sosyal sermayenin erimesiyle siyasi katılımın düşüşü arasında doğrudan bağ kuruyordu. Bugün bu tez daha da güçlü doğrulanıyor. TikTok'ta viral olan bir "politikacı rezaletleri" derlemesi, herhangi bir gazete haberinden onlarca kat daha fazla izleniyor ve izleyenin zihnine "neden oy vereyim ki?" sorusunu kazıyor.</p>
<p>Öte yandan "siyasi yorgunluk" kavramı yeni bir gerçekliği adlandırıyor: Sürekli kriz haberleri, acil çağrılar ve "bu seçim en kritik seçim" retoriğinin tekrarı, bir noktada immün yanıtı kapatıyor. Beyin tehditten kaçmak için ilgiyi kesiyor.</p>
<h3>Çözüm Var mı?</h3>
<p>Umut tamamen yok değil. Yerel katılım, sivil toplum gönüllülüğü ve dijital oy kullanma denemeleri bazı ülkelerde gençleri yeniden siyasetle buluşturuyor. Finlandiya'da 16 yaşında oy hakkı tanıyan pilot uygulama, uzun vadeli katılım oranlarını artırdığını gösterdi. Türkiye'de ise sivil toplum kuruluşlarının kampüs temelli siyaset eğitimleri dikkat çekici bir karşılık buluyor. Asıl mesele şu: Sistem gençlere alan açmadan onlardan sistem içinde kalmasını bekleyemez.</p>`
  },
  {
    id: id(), section: 'portal', year: 2026,
    title: 'Yapay Zekâ ve Uluslararası Düzen: Yeni Bir Güç Dengesi mi Kuruluyor?',
    author: 'Mert Aydoğan', publication: 'Agora360',
    summary: `Yapay zekânın askeri, ekonomik ve diplomatik alanlardaki yükselişi, Westfalya'dan bu yana şekillenmiş güç dengelerini köklü biçimde sarsıyor.`,
    tags: ['Yapay Zekâ', 'Uluslararası İlişkiler', 'Teknoloji'],
    url: '', content: `<p>Westfalya Barışı'nın 1648'de çizdiği egemenlik çerçevesi, devletlerin belirleyici aktörler olduğu bir uluslararası sistemi varsaydı. Bugün bu çerçeve, fiziksel sınırları tanımayan bir teknoloji devrimi tarafından zorlanıyor.</p>
<p>Yapay zekânın uluslararası ilişkilerdeki etkisi üç ayrı kanaldan akmaktadır: askeri kapasite, ekonomik rekabet ve dezenformasyon savaşları. Bu üçünü birlikte değerlendirdiğimizde ortaya çıkan tablo, tek kutuplu ya da çok kutuplu klasik sınıflandırmaların yetersiz kaldığını gösteriyor.</p>
<h3>Askeri Boyut</h3>
<p>Otonom silah sistemleri artık deneysel aşamayı geride bıraktı. İnsansız hava araçları sürü taktikleriyle görev yapabiliyor; karar alma hızı insan refleksinin çok ötesine geçiyor. Bu durum caydırıcılık hesaplamalarını altüst ediyor. Geleneksel nükleer denge, karşılıklı yok olma korkusuna dayanırdı; algoritmanın korkusu yoktur.</p>
<h3>Ekonomik Rekabet</h3>
<p>Büyük dil modelleri ve otomasyon teknolojilerinde liderliği kim elinde tutarsa, 21. yüzyılın "petrol şirketi" o olacak. ABD ile Çin arasındaki çip savaşı özünde bu stratejik üstünlük mücadelesidir. Avrupa Birliği ise teknolojik bağımlılığı kırmak adına yapay zekâ egemenliği kavramını gündemine taşıdı.</p>
<p>Tüm bu süreçte küçük ve orta gelirli devletler için tehlike büyük. Teknolojik yetkinlik ile siyasi özerklik arasındaki korelasyon güçlendikçe, dijital altyapısını dışarıya emanet eden ülkeler fiilen egemenlik kaybediyor.</p>`
  },
  {
    id: id(), section: 'portal', year: 2026,
    title: 'İklim Diplomasisi: Söz mü Eylem mi?',
    author: 'Selin Koç', publication: 'Agora360',
    summary: 'COP zirvelerinin ardı ardına gerçekleşmesi iklim diplomasisini normalleştirdi. Ancak taahhütler ile gerçekleşen emisyon azaltımları arasındaki makas kapanmıyor.',
    tags: ['İklim', 'Diplomasi', 'Çevre'],
    url: '', content: `<p>Paris Anlaşması'nın imzalandığı 2015'ten bu yana küresel karbondioksit salınımı azalmadı; aksine kısa bir pandemi kesintisi dışında artmaya devam etti. Bu tablo, iklim diplomasisinin performansını sert biçimde sorgulatıyor.</p>
<p>Eleştirmenler şunu soruyor: Kırk yılı aşkın süredir aynı tartışmayı yürütüyoruz, yüzlerce ülke taahhüt veriyor, ancak termometreler yükselmekten geri durmuyor. Problem niyet eksikliğinden mi, yoksa sistemin yapısından mı kaynaklanıyor?</p>
<h3>Yapısal Engeller</h3>
<p>Ulus-devlet sistemi, siyasetçileri kısa vadeli seçim döngüleriyle hareket etmeye zorluyor. Oysa iklim değişikliği on yıllık, hatta yüz yıllık ufukta düşünmeyi gerektiriyor. Bu zaman uyumsuzluğu, samimi politikaların bile seçim hesaplarıyla törpülenmesine yol açıyor.</p>
<p>Bunun yanında "ortak ama farklılaştırılmış sorumluluklar" ilkesi müzakere masasında kalıcı bir kilitlenmeye dönüşmüş durumda. Gelişmekte olan ülkeler, sanayileşmenin kirliliğini tarihsel olarak üretenin gelişmiş dünya olduğunu hatırlatıyor; gelişmiş ülkeler ise bugünün en büyük kirleten ülkesine bakarak sorumluluktan kaçmaya çalışıyor.</p>
<h3>Umut Veren Gelişmeler</h3>
<p>Bununla birlikte yenilenebilir enerjinin maliyetlerindeki dramatik düşüş, diplomatik taahhütlerden bağımsız olarak enerji dönüşümünü hızlandırıyor. Güneş enerjisi, on yılda yüzde doksan oranında ucuzladı. Piyasalar zaman zaman siyaset üreticilerinin önüne geçiyor. Belki de gerçek iklim devrimi anlaşma salonlarından değil, fabrika zeminlerinden ve çatılardan yükselecek.</p>`
  },

  // Siyaset
  {
    id: id(), section: 'siyaset', year: 2026,
    title: 'Popülist Dalgayla Mücadelede Muhalefet Stratejileri',
    author: 'Ahmet Demir', publication: 'Agora360',
    summary: `Avrupa'da ve ötesinde yükselen popülist hareketler karşısında ana akım siyasi partiler iki seçenekle yüz yüze: ya mesafeyi koruyacaklar ya da söylemi dönüştürecekler.`,
    tags: ['Popülizm', 'Muhalefet', 'Avrupa Siyaseti'],
    url: '', content: `<p>Fransa'dan Macaristan'a, İtalya'dan İsveç'e uzanan coğrafyada popülist partilerin oyları artmaya devam ediyor. Onlarca yıl siyasi merkezin kale saydığı seçmenler bu partilere yönelirken, geleneksel sol ve sağ partiler bir strateji bunalımı yaşıyor.</p>
<p>İki ana yaklaşım öne çıkıyor: "köprü kurma" (popülist söylemin bazı temalarını benimseyerek seçmenlere yaklaşma) ve "çizgi çekme" (demokratik normlarla bağdaşmayan talepleri kesinlikle reddetme). Her iki stratejinin de ciddi riskleri var.</p>
<h3>Köprü Kurarken Kimliği Yitirmek</h3>
<p>Hollanda'nın merkez-sol partisi PvdA'nın göçmen söylemine yaklaştıkça çekirdek seçmenini kaybetmesi, köprü kurmanın tuzağını özetliyor. Seçmen, orijinalini varken kopyayı neden tercih etsin? Öte yandan sosyal demokratların bazı ekonomik kaygıları popülistlerden önce gündemine taşıması Danimarka'da farklı bir tablo çizdi; orada merkez, kimliğini koruyarak söylem üstünlüğünü elde tutmayı başardı.</p>
<h3>Çizgi Çekmenin Bedeli</h3>
<p>Normatif sınırları net çizmek ise kısa vadede seçmen kaybına yol açabiliyor. Almanya'da AfD karşısında alınan "ateşkes yok" tutumu, partinin marjinalleşmesi yerine radikalleşmesine zemin hazırladığı tezleriyle eleştiriliyor. Ancak uzun vadede demokratik kurumların güvenilirliği açısından bu tutumun bedel öde değer olduğunu savunanlar da güçlü argümanlar sunuyor.</p>`
  },
  {
    id: id(), section: 'siyaset', year: 2026,
    title: 'Seçim Sistemleri ve Temsil Krizi: Orantısallık Tartışması',
    author: 'Neslihan Ak', publication: 'Agora360',
    summary: 'Çoğunlukçu seçim sistemleri milyonlarca seçmenin sesini parlamentoya taşıyamıyor. Bu yapısal sorun, siyasi temsil meselesini yeniden gündemin merkezine çekiyor.',
    tags: ['Seçim Sistemi', 'Temsil', 'Siyasi Sistem'],
    url: '', content: `<p>2024 İngiltere genel seçiminde İşçi Partisi oyların yüzde otuz üçünü alırken sandalyelerin yaklaşık üçte ikisini kazandı. Bu matematiğin arkasındaki "tek turlu çoğunluk" sistemi, kendi içinde mantıklı görünse de temsil adaletini ciddi biçimde zedeliyor.</p>
<p>Nispi temsil sistemleri bu sorunu çözüyor gibi görünse de koalisyon istikrarsızlığı ve küçük partilerin orantısız güç kazanması gibi yeni sorunlar üretiyor. Almanya, İsveç ve Hollanda deneyimleri, sistemin faydalarını kanıtlarken 2021 İsrail krizleri maliyetlerini gözler önüne serdi.</p>
<h3>Türkiye Bağlamı</h3>
<p>Türkiye'nin yüzde on seçim barajı, dünyada en yüksek eşiklerden biri olma özelliğini uzun yıllar korudu. Bu oran sayısız seçimde milyonlarca oyu temsil dışı bıraktı. 2022'de yapılan değişiklikle yüzde yediye indirilmesi tartışmayı tazelemedi değil, tam aksine farklı bir boyuta taşıdı: Düşük baraj ile parçalı meclis arasındaki dengeyi nasıl kuracağız?</p>
<p>Cevap kolay değil. Seçim sistemleri oy tercihlerinden değil, siyaset tercihlerinden bağımsız değil. Her sistem bir değer setine öncelik tanıyor: istikrar mı, temsil mi, katılım mı?</p>`
  },
  {
    id: id(), section: 'siyaset', year: 2026,
    title: 'Sosyal Medya ve Siyaset: Filtre Balonlarının Demokrasiye Maliyeti',
    author: 'Cansu Şahin', publication: 'Agora360',
    summary: 'Algoritmalar siyasi kutuplaşmayı derinleştiriyor mu yoksa mevcut ayrışmaları yalnızca görünür mü yapıyor? Araştırmalar şaşırtıcı bulgular sunuyor.',
    tags: ['Sosyal Medya', 'Demokrasi', 'Kutuplaşma'],
    url: '', content: `<p>Facebook, Twitter ve TikTok gibi platformların "filtre balonu" yarattığı ve bu durumun siyasi kutuplaşmayı beslediği tezi neredeyse kanıksanmış bir gerçek haline geldi. Ancak son dönemdeki akademik çalışmalar bu anlatıyı karmaşıklaştırıyor.</p>
<p>Meta'nın araştırmacılarıyla iş birliği içinde yürütülen bir çalışma, algoritmik içerik kısıtlamalarının kutuplaşmayı azaltmadığını ortaya koydu. Öte yandan NYU merkezli bir araştırma, sosyal medyanın kutuplaşmayı önce göstergeden sonra sorun ürettiğini savunuyor.</p>
<h3>Asıl Tehlike Nerede?</h3>
<p>Belki de asıl mesele içerik filtreleri değil, etkileşim metriğine dayalı iş modeli. Platformlar öfke, dehşet ve provokasyon içeriklerini ödüllendiriyor; çünkü bu duygular etkileşimi artırıyor, etkileşim reklam geliri getiriyor. Bu yapı değişmeden teknik düzenlemeler yalnızca semptomları tedavi ediyor.</p>
<p>Norveç ve Finlandiya'da uygulanan medya okuryazarlığı müfredatları alternatif bir yol sunuyor. Kullanıcıları pasif tüketici değil, eleştirel aktör olarak konumlandıran bu yaklaşım uzun vadeli bir umut taşıyor. Kısa vadede ise platform hesap verebilirliği için bağlayıcı yasal düzenlemeler kaçınılmaz görünüyor.</p>`
  },
  {
    id: id(), section: 'siyaset', year: 2026,
    title: 'Yerel Yönetimler ve Kentsel Siyaset: Ankara ve İstanbul Deneyimi',
    author: 'Barış Çelik', publication: 'Agora360',
    summary: 'Büyükşehir belediyelerinin artan siyasi ağırlığı, merkezi yönetim ile yereller arasındaki gerilimi yeni bir boyuta taşıyor.',
    tags: ['Yerel Yönetim', 'Kentsel Siyaset', 'Türkiye'],
    url: '', content: `<p>Küresel ölçekte büyük şehirler giderek artan bir siyasi özerklik talep ediyor. New York'tan Londra'ya, Lagos'tan İstanbul'a uzanan bu eğilim, ulusal siyasetle yerel yönetişim arasındaki sınırları tartışmalı hale getiriyor.</p>
<p>Türkiye'de bu tartışma özellikle yoğun. 2019 yerel seçimlerinin ardından İstanbul ve Ankara Büyükşehir Belediyeleri'nin merkezi hükümetle ilişkisi, Türk siyasetinin önemli bir fay hattı haline geldi. Mali kaynakların aktarımı, büyük altyapı projelerinde yetki sınırları ve kriz dönemlerinde koordinasyon mekanizmaları sürtüşmenin odak noktaları oldu.</p>
<h3>Merkezi-Yerel Gerilim Kuramı</h3>
<p>Siyaset bilimciler bu durumu "asimetrik federalizm" kavramıyla açıklıyor: Anayasal çerçeve üniter devlet modelini öngürse de pratik kaynak dağılımı ve siyasi dinamikler fiili bir özerklik alanı yaratıyor. Bu alan hem yaratıcı yönetişim deneyleri için bir laboratuvar hem de siyasi rekabetin sahnesi işlevi görüyor.</p>
<p>Karşılaştırmalı perspektiften bakıldığında İspanya'nın Barselona, Fransa'nın Paris deneyimi benzer gerilimler yaşatıyor. Ancak Türkiye bağlamının kendine özgü boyutu var: Siyasi kutuplaşmanın derinliği, yerel yönetim meselesini teknik olmaktan çıkarıp ideolojik savaş alanına çekiyor.</p>`
  },

  // UI (Uluslararası İlişkiler)
  {
    id: id(), section: 'ui', year: 2026,
    title: `NATO'nun Doğu Kanadı: Genişleme Stratejisi ve Rusya ile Yeni Denge`,
    author: 'Serdar Kaya', publication: 'Agora360',
    summary: `Finlandiya ve İsveç'in ittifaka katılması NATO'nun stratejik haritasını yeniden çizdi. Peki bu genişleme Rusya'yı caydırıyor mu yoksa tahrik mi ediyor?`,
    tags: ['NATO', 'Rusya', 'Güvenlik', 'Avrupa'],
    url: '', content: `<p>Soğuk Savaş döneminde NATO'nun doğu sınırı Elbe Nehri'nde çiziliydi. Bugün bu sınır binlerce kilometre doğuya kaymış durumda. Finlandiya'nın 2023'te, İsveç'in 2024'te ittifaka katılmasıyla Baltık Denizi neredeyse tamamen NATO suları haline geldi.</p>
<p>Bu genişleme iki farklı yoruma konu oluyor. Batılı savunma analistleri, genişlemenin caydırıcılığı güçlendirdiğini ve Rusya'nın hesaplamalarını daha temkinli kılacağını öngörüyor. Rusya yanlısı yorumlar ise NATO sınırının yaklaşmasının Moskova'yı daha savunmacı ve dolayısıyla daha öngörülemez kıldığını ileri sürüyor.</p>
<h3>İttifakın İçindeki Gerilim</h3>
<p>Genişlemenin yarattığı başka bir sorun da ittifak içi uyumu zorlaştırması. Üye sayısı otuz ikiye çıktıkça konsensüs sağlamak güçleşiyor. Macaristan'ın Ukrayna meselesindeki tutumu, Türkiye'nin askeri teknik işbirlikleri konusundaki özgün pozisyonu ve Fransa'nın stratejik özerklik ısrarı, ittifakın tek sesli bir aktör olmaktan uzaklaştığını gösteriyor.</p>
<p>Yine de NATO'nun temel caydırıcılık işlevi hâlâ geçerli görünüyor. Ortak savunma maddesi (Madde 5) sembolik bir taahhütten fazlasını ifade ediyor; potansiyel saldırgan için maliyet hesabını temelden değiştiriyor.</p>`
  },
  {
    id: id(), section: 'ui', year: 2026,
    title: `Küresel Güney'in Yükselişi: Yeni Bölgeselcilik ve Çok Kutupluluk`,
    author: 'Zeynep Arslan', publication: 'Agora360',
    summary: `G77 ülkelerinin artan ekonomik ağırlığı ve BRICS'in genişlemesi, Batı merkezli uluslararası düzeni dönüştürüyor. Bu dönüşüm kaotik mi yoksa yeni bir denge mi?`,
    tags: ['Küresel Güney', 'BRICS', 'Çok Kutupluluk'],
    url: '', content: `<p>2001'de Goldman Sachs'ın BRIC raporuyla akademik gündemin köşesine sıkışan "yükselen güçler" kavramı, bugün uluslararası ilişkilerin ana gündemi haline geldi. BRICS'in 2024'te Etiyopya, İran, Mısır ve BAE'yi bünyesine katmasıyla ittifakın ekonomik ağırlığı daha da arttı.</p>
<p>Ancak bu büyümenin örgütsel bir birliğe işaret edip etmediği tartışmalı. BRICS üyelerinin jeopolitik çıkarları, ticaret politikaları ve siyasi sistemleri arasındaki derin farklılıklar, grubun tutarlı bir blok olarak davranmasını güçleştiriyor. Rusya ile Hindistan'ın Ukrayna meselesindeki karşıt pozisyonları bunun somut örneği.</p>
<h3>Alternatif Kurumlar ve Doların Geleceği</h3>
<p>Küresel Güney'in en somut hamlesi belki de dolar hegemonyasına yönelik. BRICS ülkelerinin kendi para birimi ya da ödeme sistemi kurma arayışı, uluslararası finans mimarisi açısından uzun vadeli bir tehdit taşıyor. Kısa vadede bu adım gerçekçi görünmese de Yuan'ın ticaret anlaşmalarında giderek daha geniş yer bulması küçük ama anlamlı bir kayma işaret ediyor.</p>`
  },
  {
    id: id(), section: 'ui', year: 2026,
    title: `Ortadoğu'da Normalleşme Dalgası: Abraham Anlaşmaları'nın Mirası`,
    author: 'Hüseyin Öztürk', publication: 'Agora360',
    summary: `2020'de başlayan Arap-İsrail normalleşme süreci kısmi bir ivme kazandı. Ancak Filistin meselesi çözümsüz kaldıkça kalıcı barışın temeli ne kadar sağlam?`,
    tags: ['Ortadoğu', 'Diplomasi', 'İsrail', 'Normalleşme'],
    url: '', content: `<p>Abraham Anlaşmaları, on yıllardır "önce Filistin meselesi" ilkesine dayanan Arap dünyasının İsrail politikasında köklü bir kırılmayı simgeliyordu. BAE, Bahreyn, Fas ve Sudan'ın peş peşe normalleşme adımları atması, bölgesel jeopolitiğin ekonomik rasyonalite ve İran tehdidi ekseninde yeniden şekillendiğini gösterdi.</p>
<p>Ancak bu sürecin sürdürülebilirliği, özellikle 2023 Gazze savaşının ardından sorgulanır hale geldi. Anlaşmaların halk nezdinde ne kadar meşruiyet taşıdığı belirsizliğini koruyor. Resmi diplomatik ilişkiler, tabanın sempati düzeyiyle örtüşmüyor.</p>
<h3>Suudi Arabistan Faktörü</h3>
<p>Sürecin en önemli belirsizliği Suudi Arabistan'ın tutumu. Riyad'ın İsrail ile normalleşmesi bölgesel güç dengesini köklü biçimde değiştirecek. ABD'nin bu süreçte arabulucu rolünü sürdürmesi ise iç siyasi baskılar altında zorlaşıyor. Filistin meselesinde kalıcı ve adil bir çözüm üretilmeksizin kurulan normalleşme köprüleri kum üzerine inşa edilmiş görünüyor.</p>`
  },
  {
    id: id(), section: 'ui', year: 2026,
    title: 'Siber Savaş ve Uluslararası Hukuk: Düzenleme Boşluğu',
    author: 'Duygu Polat', publication: 'Agora360',
    summary: 'Devlet destekli siber saldırılar artarken uluslararası hukukta bu eylemleri düzenleyen bağlayıcı bir çerçeve henüz mevcut değil.',
    tags: ['Siber Güvenlik', 'Uluslararası Hukuk', 'Teknoloji'],
    url: '', content: `<p>2007'de Estonya'ya yönelik siber saldırılar, dijital altyapının modern devletlerin ne kadar kritik bir zafiyeti olduğunu dünyaya gösterdi. O tarihten bu yana devlet destekli siber operasyonlar hem sayıca hem nitelikçe büyüdü. Stuxnet'ten SolarWinds saldırısına, Colonial Pipeline'dan kritik altyapı saldırılarına uzanan bu tırmanma uluslararası sistemin yanıt kapasitesini aşıyor.</p>
<p>Uluslararası hukukun temel sorunlarından biri "atıf" (attribution) güçlüğü: Bir siber saldırının hangi devlete atfedileceği teknik ve siyasi açıdan son derece karmaşık. Atıf olmadan sorumluluk mekanizmaları işleyemiyor.</p>
<h3>Tallinn El Kitabı ve Sınırları</h3>
<p>NATO'nun desteklediği "Tallinn El Kitabı" projesi mevcut uluslararası hukukun siber alana nasıl uygulanacağını tartışıyor. Ancak bu çalışma bağlayıcı değil; akademik bir girişim. BM çerçevesinde yürütülen Hükümet Uzmanları Grubu (GGE) süreçleri ise büyük güçler arasındaki çıkar farklılıkları nedeniyle bağlayıcı bir sözleşmeye dönüşemedi. Siber uzay hukuki boşluğunu doldurmak aciliyet kazanıyor.</p>`
  },

  // Sanat Köşesi
  {
    id: id(), section: 'sanat_kosesi', year: 2026,
    title: 'Yeni Türk Sinemasında Siyasi Dil: Sansür, Metafor ve Özgürlük',
    author: 'Gül Yıldız', publication: 'Agora360',
    summary: 'Son on yılda Türk bağımsız sineması, doğrudan söyleyemediğini metafor, alegori ve suskunlukla anlatmanın ustalığını geliştirdi.',
    tags: ['Türk Sineması', 'Sansür', 'Sanat', 'Siyaset'],
    url: '', content: `<p>Sinema tarihinde sansür ile yaratıcılık arasındaki paradoksal ilişki iyi belgelenmiş. Doğrudan söylemenin yasak olduğu dönemlerde sanatçılar dili adeta yeniden icat ediyor; kısıtlama derinliği zorluyor. Türk sinemasının son on yılı bu tarihsel örüntüyü bir kez daha doğruladı.</p>
<p>Nuri Bilge Ceylan'ın uzun planları, Reha Erdem'in doğa alegorileri ya da genç yönetmenlerin kasabaya, taşraya, sınıra yönelen kameraları; hepsi sessizlik içinde çok şey söylüyor. Eleştirmenler bu eğilimi "taşra modernizmi" olarak adlandırıyor: Büyük siyasi sorular küçük mekânlara, sıradan ilişkilere sıkıştırılıyor.</p>
<h3>Uluslararası Sahnede Türk Filmi</h3>
<p>Cannes, Berlin ve Venedik'te alınan ödüller yalnızca sanatsal başarıyı değil, uluslararası eleştirmenler için bir bağlam işlevi görüyor. Batılı izleyici için bu filmler "Türkiye'yi anlamak" için bir pencere. Bu durum filmlere Türkiye'de kazanamayacakları bir seslenme kapasitesi tanıyor.</p>
<p>Gelecek on yılın sorusu şu: Dijital dağıtım platformlarının yarattığı yeni görünürlük fırsatları, yaratıcı kısıtlamaları azaltacak mı yoksa yeni sansür dinamikleri üretecek mi?</p>`
  },
  {
    id: id(), section: 'sanat_kosesi', year: 2026,
    title: 'Edebiyatta Hafıza ve Kimlik: Tanıklık Yazınının Yükselişi',
    author: 'Tuba Keskin', publication: 'Agora360',
    summary: '21. yüzyılın edebiyatı giderek daha fazla kişisel tanıklık üzerine inşa ediliyor. Bu dönüşüm edebiyatın sınırlarını mı genişletiyor, yoksa kurgu geleneğini mi törpülüyor?',
    tags: ['Edebiyat', 'Hafıza', 'Kimlik', 'Tanıklık'],
    url: '', content: `<p>Son yirmi yılın en belirgin edebi eğilimlerinden biri otobiyografik kurgunun ve tanıklık yazınının yükselmesi. Karl Ove Knausgård'ın altı ciltlik "Kavgam"ından Annie Ernaux'nun Nobel ödüllü kişisel-toplumsal kesişim anlatılarına, Orhan Pamuk'un İstanbul hafızasını arşivleyen denemelerine kadar uzanan bu akım, geleneksel kurgu-gerçek sınırını muğlaklaştırıyor.</p>
<p>Eleştirmenler ikiye bölünmüş. Bir kesim bu eğilimi kurgunun "özgürleşmesi" olarak yorumluyor: Birinci şahsın yaşadığı, düşündüğü, hissettiği bir anlatı, kurgusal bir karakterin yapay deneyiminden daha sahici bir rezonans yaratabiliyor. Diğer kesim ise tehlikeli bir öznel kapalılığa işaret ediyor: Büyük edebiyat daima kişisel olanı aşarak evrensel bir hakikat inşa ederdi; "ben" edebiyatı bu kapasiteyi törpülüyor.</p>
<h3>Türk Edebiyatında Tanıklık</h3>
<p>Türk edebiyatı bu açıdan zengin bir malzeme sunuyor. Leyla Erbil, Adalet Ağaoğlu, Latife Tekin — her biri toplumsal travmayı kurgusal biçimlerle işledi. Bugünün yazarları ise daha doğrudan, daha kişisel bir dil arıyor. Bu arayışın hem estetik hem siyasi boyutları var.</p>`
  },
  {
    id: id(), section: 'sanat_kosesi', year: 2026,
    title: 'Müzik ve Direniş: Protesto Şarkılarının Siyasi Ekonomisi',
    author: 'Emre Kılıç', publication: 'Agora360',
    summary: 'Spotify algoritmaları ve streaming platformları direniş müziğini hem yayıyor hem de ehlileştiriyor. Piyasa koşullarında özgün bir protesto estetiği mümkün mü?',
    tags: ['Müzik', 'Direniş', 'Kültür Endüstrisi'],
    url: '', content: `<p>Bob Dylan Nobel ödülü aldığında bazı eleştirmenler şiirin küçümsendiğini düşündü, bazıları ise edebiyatın nihayet günlük hayatla buluştuğunu kutladı. Bu tartışmanın arka planında daha köklü bir soru yatıyor: Sanatın devrimci kapasitesi, onu serbest piyasanın dolaşım ağlarına bırakmakla korunabilir mi?</p>
<p>Streaming ekonomisi protesto müziğine paradoksal bir alan açtı. Bir yanda Filistin dayanışma şarkıları TikTok'ta milyonlara ulaşabiliyor; öte yanda algoritma bu şarkıları bir sonraki "önerilen" içerikle aynı sıraya koyuyor. Radikal mesaj, bağlamından koparılmış bir tüketim nesnesi haline geliyor.</p>
<h3>Türkiye'de Protest Müzik</h3>
<p>Türkiye'de Zülfü Livaneli, Grup Yorum ve daha genç kuşak bağımsız müzisyenlerin deneyimi bu tartışmaya özgün boyutlar katıyor. Konser yasakları, albüm toplatmaları ve sahne sansürü protest müziği yalnızca estetik değil varoluşsal bir tercih haline getirdi. Bu baskı altında üretilen müziğin sahiciliğini piyasa koşullarına taşımanın bedeli ne? Cevap henüz belirsiz.</p>`
  },
];

// ── ANALYSES ─────────────────────────────────────────────────────────────────
const analyses = [
  {
    id: id(), section: 'siyaset', category: 'Siyaset Analizi',
    author: 'Prof. Dr. Kemal Özgür', readTime: '8 dk',
    title: 'Türk Siyasetinde Koalisyon Aritmetiği: Seçim Sonrası Denklem',
    summary: '2028 seçimleri yaklaşırken muhalefet bloğunun yeniden inşa süreci, Türk siyasetinin ittifak matematiğini yeni bir denkleme sokuyor.',
    tags: ['Türk Siyaseti', 'Seçim', 'Koalisyon'],
    date: '2026-03-15',
    content: `<p>Türkiye'nin siyasi haritası 2023 cumhurbaşkanlığı seçimlerinin ardından yeniden çizilmeye başladı. Altılı Masa'nın dağılması ve muhalefet partilerinin ayrı yollar izlemesi, 2028 seçimleri için yeni bir birleşme arayışını zorunlu kılıyor.</p>
<p>Mevcut koşullarda üç senaryo öne çıkıyor. Birincisi, CHP önderliğinde geniş bir demokratik cephe; ikincisi, sol-sosyal demokrat eksenin daha dar ama daha tutarlı bir ittifak kurması; üçüncüsü ise HDP/HEDEP'in yasal konumunu pekiştirerek belirleyici bir denge unsuru haline gelmesi.</p>
<p>Her senaryonun seçim aritmetiği ve meşruiyet boyutları birbirinden farklı. Türk siyasetinin tarihsel örüntüsü büyük ittifakların içsel gerilimler nedeniyle seçim sonrasında çözüldüğünü gösteriyor. Bu sorunu aşacak kurumsal güvenceler olmadan büyük koalisyon kurma denemeleri seçmenler nezdinde de inandırıcılık sorunu yaratıyor.</p>`
  },
  {
    id: id(), section: 'siyaset', category: 'Derinlemesine İnceleme',
    author: 'Doç. Dr. Elif Sarıkaya', readTime: '10 dk',
    title: 'Yargı Bağımsızlığı ve Hukuk Devleti: Avrupa Kıstasları ile Türkiye Karşılaştırması',
    summary: `Venedik Komisyonu'nun süregelen eleştirilerine rağmen yargı reformu süreci tıkandı. Bu durumun AB üyelik süreci ve iç hukuk güvencesi üzerindeki etkileri tartışılıyor.`,
    tags: ['Hukuk', 'Yargı Bağımsızlığı', 'AB', 'Reform'],
    date: '2026-04-02',
    content: `<p>Venedik Komisyonu Türkiye'nin yargı sistemine ilişkin son raporunda on yedi "ciddi endişe" noktası belirledi. Bu endişelerin odağında HSK (Hâkimler ve Savcılar Kurulu) yapısı, olağanüstü hal kararname yetkilerinin kalıcı mevzuata dönüşmesi ve savcılık bağımsızlığı sorunları yer alıyor.</p>
<p>Karşılaştırmalı bir perspektiften bakıldığında Polonya ve Macaristan'ın AB içinde benzer tartışmaları yaşaması önemli bir bağlam sunuyor. AB'nin bu ülkelere uyguladığı 7. Madde prosedürü, yaptırım mekanizmalarının ne denli sınırlı olduğunu gözler önüne serdi. Türkiye için üyelik müzakerelerinin fiilen donmuş olması bu kaldıracı daha da zayıflatıyor.</p>
<p>İç hukuk perspektifinden değerlendirildiğinde hukuk güvencesinin zayıflaması yalnızca bireysel hakları değil yatırım ortamını ve kurumsal güveni de etkiliyor. OECD'nin yönetişim raporları bu ilişkiyi tutarlı biçimde belgeliyor.</p>`
  },
  {
    id: id(), section: 'ui', category: 'Stratejik Analiz',
    author: 'Dr. İrem Yılmaz', readTime: '9 dk',
    title: `Türkiye'nin Stratejik Özerkliği: NATO Üyeliği ile Bağımsız Dış Politika Arasında`,
    summary: `Türkiye'nin hem NATO müttefiki hem de farklı güç merkezleriyle özgün ilişkiler yürüten bir aktör olma stratejisi, 2020'lerin jeopolitik kargaşasında ne kadar sürdürülebilir?`,
    tags: ['Türk Dış Politikası', 'NATO', 'Stratejik Özerklik'],
    date: '2026-02-20',
    content: `<p>Türk dış politikası son on yılda "stratejik özerklik" kavramını fiilen hayata geçirmeye çalışıyor. Bu kavram; Batı ittifakından kopmadan farklı güç merkezleriyle özgün ilişkiler kurabilme kapasitesini ifade ediyor. S-400 alımı, Rusya ile enerji işbirliği ve Ukrayna savaşında arabuluculuk girişimleri bu stratejinin somut örnekleri.</p>
<p>Eleştirmenler bu stratejinin NATO'nun kolektif savunma dayanışmasını zayıflattığını ileri sürüyor. Savunucular ise Türkiye'nin coğrafi ve demografik ağırlığına yakışır bir aktif dış politika izlediğini söylüyor. Her iki değerlendirmenin de haklılık payı var.</p>
<p>Stratejik özerklik politikasının asıl sınavı kriz anlarında veriliyor. Ukrayna savaşı bu sınavın en kritiklerinden biri oldu. Tahıl Koridoru Anlaşması Türk arabuluculuğunun uluslararası sistemde somut bir değer ürettiğini gösterirken, F-35 krizinin uzun vadeli savunma sanayii etkileri hâlâ tartışılıyor.</p>`
  },
  {
    id: id(), section: 'ui', category: 'Bölgesel Analiz',
    author: 'Engin Yurt', readTime: '7 dk',
    title: `Enerji Jeopolitiği: Doğu Akdeniz'de Sınır Anlaşmazlıkları ve Çözüm Perspektifleri`,
    summary: `Doğalgaz keşifleri ve münhasır ekonomik bölge (MEB) anlaşmazlıkları Doğu Akdeniz'i bölgesel gerilimin merkezi haline getirdi.`,
    tags: ['Enerji', 'Doğu Akdeniz', 'MEB', 'Jeopolitik'],
    date: '2026-01-10',
    content: `<p>Kıbrıs, Yunanistan, Türkiye, İsrail, Mısır ve Libya'nın iç içe geçen deniz yetki alanı talepleri Doğu Akdeniz'i hukuki, diplomatik ve zaman zaman askeri açıdan karmaşık bir arenaya dönüştürdü. Bölgedeki doğalgaz keşiflerinin bu gerilimi nasıl etkilediği ise çift yönlü bir analizi gerektiriyor: Kaynak varlığı hem iş birliği teşviki hem de rekabet artışı doğuruyor.</p>
<p>Hukuki boyutta UNCLOS'un (BM Deniz Hukuku Sözleşmesi) yorumu kritik önem taşıyor. Türkiye söz konusu sözleşmeyi imzalamadı; bu durum yasal tartışmayı siyasi düzeye taşıyor. Kıta sahanlığı hakları ile Münhasır Ekonomik Bölge talepleri arasındaki teknik ayrım diplomatik söylemlerde sıklıkla muğlaklaştırılıyor.</p>
<p>Uzlaşma için en gerçekçi yol ortak geliştirme (joint development) mekanizmaları. Norveç-İngiltere Kuzey Denizi modeli bu konuda tarihsel referans noktası sunuyor. Ancak söz konusu model siyasi irade gerektiriyor; bu irade ise bugün için Doğu Akdeniz aktörlerinde yeterince mevcut değil.</p>`
  },
  {
    id: id(), section: 'sanat_kosesi', category: 'Kültür Eleştirisi',
    author: 'Arzu Demirtaş', readTime: '6 dk',
    title: 'Müze Siyaseti: Kültürel Miras Kimin için Korunuyor?',
    summary: 'Dünyanın dört bir yanındaki büyük müzelerdeki "kolonyal koleksiyonlar" tartışması, kültürel mirasın sahipliğini yeniden tanımlamayı zorluyor.',
    tags: ['Müze', 'Kültürel Miras', 'Dekolonizasyon'],
    date: '2026-03-08',
    content: `<p>British Museum'daki Parthenon Mermerlerinden Paris'teki Benin Bronzları'na, Berlin'deki Nefertiti büstünden pek çok Anadolu eserine kadar Avrupa müzelerinin büyük koleksiyonlarının hatırı sayılır kısmı sömürgecilik dönemi çıkarmalarından oluşuyor. Bu gerçeklik, müze kurumunun nasıl tanımlandığı sorusunu köklü biçimde yeniden açıyor.</p>
<p>"İade" taleplerini savunanlar kültürel mirasın üretildiği coğrafya ve toplulukla bağını korumasının hem tarihsel adalet hem de akademik bütünlük açısından zorunlu olduğunu ileri sürüyor. Karşı görüş ise Avrupa müzelerinin bu eserleri küresel erişime açtığını ve mevcut bulundukları ülkelerdeki koruma kapasitesinin sorgulanması gerektiğini savunuyor.</p>
<p>Türkiye bu tartışmaya taraf olarak yer alıyor. Birçok Anadolu eseri için sürdürülen iade talepleri bazı başarılarla sonuçlandı, ancak büyük kurumlarla diyalog çoğu zaman tıkandı. Meselenin hukuki boyutu yeterli olmayabilir; kültürel diplomasi ve kamuoyu baskısı önemli bir araç olmaya devam ediyor.</p>`
  },
  {
    id: id(), section: 'sanat_kosesi', category: 'Mimarlık & Şehir',
    author: 'Can Özgür', readTime: '8 dk',
    title: `Kentsel Dönüşüm ve Mimari Bellek: İstanbul'u Kim İnşa Ediyor?`,
    summary: 'Büyük şehirlerdeki kentsel dönüşüm projeleri yalnızca beton ve çelik değil; yaşam biçimlerini, hafızayı ve kimliği de dönüştürüyor.',
    tags: ['Mimarlık', 'İstanbul', 'Kentsel Dönüşüm', 'Bellek'],
    date: '2026-04-20',
    content: `<p>İstanbul son yirmi yılda ölçeği emsalsiz bir dönüşüm geçirdi. Tarihi yarımadanın silüetini etkileyen yüksek yapılar, Boğaz kıyılarının yeniden şekillendirilmesi, gecekondu mahallelerinin lüks sitelere dönüştürülmesi —bu değişimler hem mimari hem toplumsal tartışmanın odağında.</p>
<p>Mimarlık tarihçileri "hafıza mimarisi" kavramını kullanıyor: Belirli yapılar, mekânlar ve kentsel dokular kolektif hafızanın fiziksel taşıyıcısı işlevi görüyor. Bu yapıların yıkılması yalnızca taş ve harç kaybı değil; içinde yaşayan insanların kimliğinin ve tarihinin silinmesi anlamına geliyor.</p>
<p>Tarlabaşı, Sulukule, Fikirtepe ve benzer mahallelerdeki dönüşümler bu bedelini en net biçimde gösteren örnekler. Kentsel tasarım kararları güç ilişkilerinin ürünü; "kimin için şehir" sorusu planlamacıların masasında değil, karar alma süreçlerindeki temsil biçimlerinde yanıt buluyor.</p>`
  },
];

// ── NEWS ITEMS ────────────────────────────────────────────────────────────────
const newsItems = [
  {
    id: id(), section: 'siyaset', category: 'Siyaset',
    title: 'TBMM Anayasa Komisyonu Yargı Reform Paketi İçin Toplantıya Çağrıldı',
    description: 'TBMM Anayasa Komisyonu, hükümetin uzun süredir gündemde olan yargı reform paketini değerlendirmek üzere olağanüstü toplantıya çağrıldı. Muhalefet partileri reform taleplerini ayrı bir basın toplantısıyla açıkladı.',
    region: 'Küresel', tags: ['Türkiye', 'Yargı', 'TBMM'],
    date: '2026-05-20', relatedAnalysisId: null
  },
  {
    id: id(), section: 'siyaset', category: 'Siyaset',
    title: 'Avrupa Seçimlerinde Aşırı Sağ Oyları Rekor Seviyede',
    description: 'Son kamuoyu araştırmaları Avrupa genelinde yaklaşan seçimlerde aşırı sağ partilerin tarihinin en yüksek oy oranlarını alacağına işaret ediyor. Merkez partiler ittifak arayışına girdi.',
    region: 'Avrupa', tags: ['Avrupa', 'Seçim', 'Aşırı Sağ'],
    date: '2026-05-18', relatedAnalysisId: null
  },
  {
    id: id(), section: 'siyaset', category: 'Ekonomi',
    title: 'TCMB Faiz Kararını Açıkladı: Enflasyonla Mücadelede Yeni Dönem',
    description: 'Merkez Bankası Para Politikası Kurulu politika faizini sabit tutarak piyasalara enflasyonla mücadelede kararlılık mesajı verdi. Ekonomistler kararı farklı yorumluyor.',
    region: 'Küresel', tags: ['Türkiye', 'Ekonomi', 'Faiz'],
    date: '2026-05-15', relatedAnalysisId: null
  },
  {
    id: id(), section: 'ui', category: 'Diplomasi',
    title: 'BM Güvenlik Konseyi Gazze İçin Olağanüstü Toplantı Düzenledi',
    description: 'BM Güvenlik Konseyi insancıl yardım koridorlarının güvence altına alınması ve kalıcı ateşkes için olağanüstü toplantıya çağrıldı. Veto mekanizması yeniden gündemin odağında.',
    region: 'Orta Doğu', tags: ['BM', 'Gazze', 'Diplomasi'],
    date: '2026-05-21', relatedAnalysisId: null
  },
  {
    id: id(), section: 'ui', category: 'Teknoloji',
    title: 'G7 Yapay Zekâ Düzenlemesi İçin Ortak Çerçeve Kararı Aldı',
    description: 'G7 ülkeleri Hiroshima Yapay Zekâ Sürecini bir adım ileriye taşıyan ortak düzenleme çerçevesi üzerinde anlaştı. Çin bu sürecin dışında.',
    region: 'Küresel', tags: ['G7', 'Yapay Zekâ', 'Teknoloji'],
    date: '2026-05-19', relatedAnalysisId: null
  },
  {
    id: id(), section: 'ui', category: 'Güvenlik',
    title: 'NATO Genişlemiş Caydırıcılık Tatbikatı Başladı',
    description: `NATO\'nın en büyük soğuk savaş sonrası tatbikatı "Steadfast Defender 2026" başladı. 32 üye ülkeden 90 bin asker katılıyor.`,
    region: 'Avrupa', tags: ['NATO', 'Savunma', 'Tatbikat'],
    date: '2026-05-10', relatedAnalysisId: null
  },
  {
    id: id(), section: 'sanat_kosesi', category: 'Kültür',
    title: `Türk Yönetmen Cannes'da İkinci Büyük Ödülü Kazandı`,
    description: `Türk sinemasının genç sesi bir kez daha Cannes Film Festivali'nde büyük ödüle layık görüldü. Film, taşra yaşamını anlatan mistik gerçekçi bir yapım.`,
    region: 'Avrupa', tags: ['Türk Sineması', 'Cannes', 'Ödül'],
    date: '2026-05-22', relatedAnalysisId: null
  },
  {
    id: id(), section: 'sanat_kosesi', category: 'Kültür',
    title: 'İstanbul Modern Müzesi Yeni Sergiyle Kapılarını Açıyor',
    description: 'İstanbul Modern, "Bellek ve İz" başlıklı uluslararası çağdaş sanat sergisini izleyicilerle buluşturuyor. Sergide 20 ülkeden 45 sanatçı yer alıyor.',
    region: 'Küresel', tags: ['İstanbul', 'Müze', 'Sanat'],
    date: '2026-05-17', relatedAnalysisId: null
  },
];

// ── CONCEPTS ─────────────────────────────────────────────────────────────────
const concepts = [
  {
    id: id(), section: 'ui',
    term: 'Caydırıcılık (Deterrence)',
    definition: 'Olası bir saldırganı saldırıdan vazgeçirmeyi amaçlayan strateji. Nükleer caydırıcılık, "karşılıklı yok olma güvencesi" (MAD) ilkesine dayanır: Her iki taraf da savaşın kendi yıkımıyla sonuçlanacağını bildiğinden saldırı rasyonel bir seçenek olmaktan çıkar.'
  },
  {
    id: id(), section: 'ui',
    term: 'Soft Power (Yumuşak Güç)',
    definition: `Joseph Nye tarafından kavramsallaştırılan, bir devletin diğer aktörleri zorlama ya da ödeme olmaksızın kültürel çekicilik, siyasi değerler ve dış politika meşruiyeti yoluyla etkileme kapasitesi. Hard power\'ın (askeri ve ekonomik güç) karşıtı olarak tanımlanır.`
  },
  {
    id: id(), section: 'ui',
    term: 'Güç Dengesi (Balance of Power)',
    definition: 'Uluslararası sistemde hiçbir devletin mutlak üstünlük kazanamaması için güçlerin dengede tutulması ilkesi. Devletlerin bu dengeyi korumak için ittifak kurma, silahlanma ya da karşı-ittifak oluşturma yollarına başvurduğu varsayılır.'
  },
  {
    id: id(), section: 'siyaset',
    term: 'Popülizm',
    definition: 'Toplumu "saf halk" ile "yolsuz seçkinler" olarak ikiye bölen ve kendisini halkın tek gerçek temsilcisi ilan eden siyasi söylem biçimi. Hem solda hem sağda görülen bir ideolojik stratejidir; demokrasiyle hem uyumlu hem de gerilim halinde olabilir.'
  },
  {
    id: id(), section: 'siyaset',
    term: 'Çoğulculuk (Pluralism)',
    definition: 'Siyasi gücün toplumun farklı kesimleri arasında dağıldığını ve bu dağılımın demokratik rekabeti mümkün kıldığını savunan teori. Tek bir grubun kalıcı bir egemenlik kuramayacağını, bunun yerine çıkarların pazarlık yoluyla dengeleneceğini öngörür.'
  },
  {
    id: id(), section: 'sanat_kosesi',
    term: 'Kültürel Hegemonya (Cultural Hegemony)',
    definition: `Antonio Gramsci\'nin geliştirdiği kavram: Egemen sınıfın zor kullanmak yerine kültürel değerler, normlar ve inançlar aracılığıyla toplumsal rızayı üretmesi ve siyasi iktidarını sürdürmesi. Okul, medya ve sanat bu hegemonyanın aktarım mekanizmaları arasında sayılır.`
  },
];

// ── TICKER ITEMS ─────────────────────────────────────────────────────────────
const tickerItems = [
  { id: id(), content: 'G7 yapay zekâ düzenlemesi için tarihî çerçeve anlaşması imzaladı' },
  { id: id(), content: 'Türkiye 2026 büyüme tahminini yukarı revize etti' },
  { id: id(), content: 'BM İklim Raporu: Son 12 ay rekor sıcaklıkla geçti' },
  { id: id(), content: 'NATO Steadfast Defender tatbikatı başladı — 90 bin asker katılıyor' },
  { id: id(), content: 'Avrupa Parlamentosu yapay zekâ yasasının ikinci aşamasını onayladı' },
  { id: id(), content: 'Türk yönetmen Cannes\'da büyük ödüle layık görüldü' },
  { id: id(), content: 'TCMB politika faizini sabit tuttu' },
  { id: id(), content: 'Suriye normalleşme sürecinde yeni adımlar: Bölgesel liderler Ankara\'da' },
];

// ── ON THIS DAY ───────────────────────────────────────────────────────────────
const onThisDay = [
  { id: id(), year: 1648, event: 'Vestfalya Barışı imzalandı; Otuz Yıl Savaşları sona erdi ve modern ulus-devlet sisteminin temelleri atıldı.' },
  { id: id(), year: 1945, event: 'BM Şartı San Francisco\'da imzalandı; İkinci Dünya Savaşı\'nın ardından uluslararası barış düzeni için yeni bir çerçeve oluşturuldu.' },
  { id: id(), year: 1961, event: 'Sovyetler Birliği\'nin Gagarin ile insanlı uzay uçuşunu gerçekleştirmesi, uzay yarışında kritik bir dönüm noktası oldu.' },
  { id: id(), year: 1989, event: 'Tiananmen Meydanı protestoları; Çin\'in siyasi değişim ve ekonomik reform arasındaki gerilimini tüm dünyaya yansıttı.' },
  { id: id(), year: 1999, event: 'NATO, Sırbistan\'ı bombardıman etti; insancıl müdahale kavramı ve egemenlik ilkesi arasındaki gerilim uluslararası hukukta kalıcı bir iz bıraktı.' },
  { id: id(), year: 2011, event: 'Arap Baharı\'nın Suriye\'ye sıçraması; bölgesel dönüşüm beklentilerini ve insancıl krizi başlattı.' },
  { id: id(), year: 2022, event: 'Rusya\'nın Ukrayna\'yı işgali; Soğuk Savaş sonrası Avrupa güvenlik düzenini kökten sarstı.' },
];

// ── LEARNING MODULES ─────────────────────────────────────────────────────────
const learningModules = [
  {
    id: id(), section: 'ui',
    title: 'Uluslararası İlişkiler Teorileri: Realizm, Liberalizm ve Konstrüktivizm',
    description: 'Uluslararası ilişkilerin üç ana teorik yaklaşımını karşılaştırmalı biçimde ele alan bu modül, teoriden pratiğe köprüler kurar.',
    objectives: ['Realizm ve Neo-Realizmi tanımlamak', 'Liberal kurumsalcılık ile demokratik barış teorisini açıklamak', 'Konstrüktivizmin kimlik ve norm vurgusunu kavramak', 'Teorilerin gerçek vakalara uygulanmasını değerlendirmek'],
    concepts: ['Güç dengesi', 'Kolektif güvenlik', 'Uluslararası normlar', 'Kimlik politikası'],
    readings: ['Morgenthau - Uluslar Arası Politika', 'Keohane & Nye - Karmaşık Bağımlılık', 'Wendt - Uluslararası Politikanın Sosyal Teorisi'],
    content: `<p>Uluslararası ilişkiler teorisi, devletlerin neden savaştığını, neden iş birliği kurduğunu ve uluslararası düzenin nasıl şekillendiğini açıklamaya çalışır. Bu büyük soruya üç ana teorik akım farklı yanıtlar veriyor.</p>
<h3>Realizm</h3>
<p>Realistler devletlerin anarşik bir uluslararası sistemde güvenliklerini ve güçlerini maksimize etmeye çalıştığını savunur. Hans Morgenthau'nun "Politika İçinde Uluslar Arası" adlı çalışması bu geleneğin temel referansı. Neo-realistler (Waltz) bireylerin değil, sistemin yapısının devlet davranışını belirlediğini öne sürer.</p>
<h3>Liberalizm</h3>
<p>Liberaller ekonomik karşılıklı bağımlılık, uluslararası kurumlar ve demokrasinin yayılmasının savaş olasılığını düşüreceğini savunur. "Demokratik Barış Teorisi" (iki demokratik devletin birbirleriyle savaşmadığı gözlemi) bu geleneğin önemli bir argümanı.</p>
<h3>Konstrüktivizm</h3>
<p>Konstrüktivistler kimlik, normlar ve fikirlerin devlet çıkarlarını ve davranışlarını şekillendirdiğini ileri sürer. Alexander Wendt'in "Anarşi Devletlerin Yarattığı Bir Şeydir" tezi, yapının nesnel değil yorumsal olduğunu vurgular. Bu yaklaşım Soğuk Savaş'ın barışçıl sona erişini realizmin öngöremediğini hatırlatır.</p>`
  },
  {
    id: id(), section: 'ui',
    title: 'Uluslararası Örgütler ve Çok Taraflılık: BM, NATO ve AB',
    description: 'Küresel ve bölgesel uluslararası örgütlerin yapısını, işleyişini ve sınırlılıklarını inceleyen kapsamlı bir giriş modülü.',
    objectives: ['BM sistem yapısını ve Güvenlik Konseyi işleyişini kavramak', 'NATO\'nun savunma ve kolektif güvenlik işlevini değerlendirmek', 'AB\'nin bütünleşme sürecini ve kurumsal mimarisini açıklamak', 'Çok taraflılığın günümüzdeki krizlerini tartışmak'],
    concepts: ['Kolektif güvenlik', 'Egemenlik devri', 'Supranasyonalizm', 'Veto mekanizması'],
    readings: ['BM Şartı metni', 'Keohane - Uluslararası Kurumların Rolü', 'Haas - Avrupa\'da Süper Devletin Ötesi'],
    content: `<p>Modern uluslararası sistem yalnızca devletlerden oluşmuyor; çok sayıda uluslararası örgüt, rejim ve kurum devletler arasındaki ilişkileri düzenliyor, kolaylaştırıyor ya da kısıtlıyor.</p>
<h3>Birleşmiş Milletler</h3>
<p>BM 1945'te kurulduğunda 51 üye devleti vardı; bugün 193. Güvenlik Konseyi'nin beş daimi üyesi (ABD, Rusya, Çin, İngiltere, Fransa) veto hakkına sahip. Bu yapı sistemin hem gücünü hem de en büyük kısıtını oluşturuyor: Büyük güçlerin çıkarları çatıştığında Güvenlik Konseyi etkisizleşiyor.</p>
<h3>NATO</h3>
<p>Kuzey Atlantik İttifakı'nın 5. Maddesi kolektif savunma ilkesini tanımlıyor: Üye devletlerden birine yapılan saldırı tümüne yapılmış sayılır. Bu mekanizma, teorik olarak güçlü bir caydırıcılık sağlıyor.</p>
<h3>Avrupa Birliği</h3>
<p>AB, tarihte benzeri olmayan bir egemenlik devri deneyimi. Üye devletler belirli alanlarda karar alma yetkisini Brüksel'e devretti. Bu "supranasyonalizm" hem AB'nin başarısını hem de Brexit gibi geri çekilme dinamiklerini anlamak için kritik.</p>`
  },
];

// ── RESOURCES ────────────────────────────────────────────────────────────────
const resources = [
  {
    id: id(), section: 'ui', type: 'Kitap', category: 'Uluslararası İlişkiler',
    name: 'Siyasi Realizm ve Güç Politikası',
    description: `Hans Morgenthau\'nun klasik eseri, devletlerin güç maksimizasyonu davranışını ve uluslararası politikanın ahlak ötesi doğasını ele alır.`,
    url: ''
  },
  {
    id: id(), section: 'ui', type: 'Kitap', category: 'Güvenlik',
    name: 'Nükleer Stratejide Caydırıcılık Teorisi',
    description: `Lawrence Freedman\'ın kapsamlı tarihsel incelemesi, nükleer silahların ortaya çıkışından günümüze caydırıcılık doktrininin evrimini belgeler.`,
    url: ''
  },
  {
    id: id(), section: 'siyaset', type: 'Kitap', category: 'Siyaset Teorisi',
    name: 'Popülist Kırılma — Liberal Demokrasilerde Yeni Tehdit',
    description: `Jan-Werner Müller\'in popülizm üzerine yazdığı kısa ama etkili eser, kavramı titizlikle tanımlar ve demokratik rejimler için yarattığı tehlikeyi analiz eder.`,
    url: ''
  },
  {
    id: id(), section: 'sanat_kosesi', type: 'Kitap', category: 'Kültür Teorisi',
    name: 'Mimesis: Batı Edebiyatında Gerçekliğin Temsili',
    description: `Erich Auerbach\'ın Homeros\'tan Woolf\'a uzanan edebiyat tarihini gerçekçilik perspektifinden inceleyen başyapıtı.`,
    url: ''
  },
  {
    id: id(), section: 'ui', type: 'Düşünür', category: 'Uluslararası İlişkiler',
    name: 'Kenneth Waltz',
    description: 'Neo-realizmin kurucusu. "İnsan, Devlet ve Savaş" ile "Uluslararası Politika Teorisi" adlı eserleriyle yapısal realizmi biçimlendirdi. Uluslararası anarşinin devlet davranışını nasıl şekillendirdiğini sistematik biçimde açıkladı.',
    url: ''
  },
  {
    id: id(), section: 'siyaset', type: 'Düşünür', category: 'Demokrasi Teorisi',
    name: 'Hannah Arendt',
    description: 'Totalitarizm, otorite ve siyasi eylem üzerine dönüm noktası niteliğindeki çalışmalarıyla siyaset felsefesine yön verdi. "Totalitarizmin Kökenleri" ve "İnsanlık Durumu" başlıca eserleri arasında.',
    url: ''
  },
];

// ── SIDEBAR STORIES ───────────────────────────────────────────────────────────
const sidebarStories = [
  { id: id(), section: 'sanat_kosesi', category: 'Film', title: `Nuri Bilge Ceylan\'ın Yeni Filmi: Karanlıkta Uzun Bir Yürüyüş`, order: 1 },
  { id: id(), section: 'sanat_kosesi', category: 'Film', title: `Cannes\'dan Dönen Türk Filmleri Nisan\'da Gösterimde`, order: 2 },
  { id: id(), section: 'sanat_kosesi', category: 'Film', title: `İspanyol Auteur Cinema\'nın Keşfedilmemiş İsimleri`, order: 3 },
  { id: id(), section: 'sanat_kosesi', category: 'Sergi', title: `İstanbul Modern: "Bellek ve İz" Sergisi Mayıs\'a Kadar`, order: 4 },
  { id: id(), section: 'sanat_kosesi', category: 'Edebiyat', title: `Türk Edebiyatında Çeviri Patlama: 2026\'nın En İyi Romanları`, order: 5 },
  { id: id(), section: 'siyaset', category: 'Gündem', title: `Avrupa\'da Koalisyon Krizleri: Üç Ülkede Anlık Tablo`, order: 1 },
  { id: id(), section: 'ui', category: 'Diplomasi', title: `Tahıl Koridoru 2.0: Karadeniz\'de Yeni Enerji Dengesi`, order: 1 },
];

// ── SETTINGS ─────────────────────────────────────────────────────────────────
const settings = [
  {
    key: 'quoteOfDay',
    value: { text: 'Özgür düşünce yalnızca bir bireyin değil, toplumun zenginliğidir.', attr: 'Agora360 Yayın Kurulu' }
  },
  {
    key: 'infoOfDay',
    value: { text: 'Türkiye, 1952 yılında NATO\'ya üye olmuştur.', attr: 'Agora360 Araştırma Grubu' }
  }
];

// ── INSERT ALL ────────────────────────────────────────────────────────────────
async function insertBatch(table, rows, label) {
  if (!rows.length) return;
  console.log(`\n→ ${label} (${rows.length} kayıt) ekleniyor...`);
  const { data, error } = await supabase.from(table).insert(rows);
  if (error) {
    console.error(`  ✗ HATA [${table}]:`, error.message);
  } else {
    console.log(`  ✓ ${label} başarıyla eklendi.`);
  }
}

async function main() {
  console.log('Supabase seed başlıyor...\n');

  // Önce mevcut test verisini temizleyelim
  console.log('→ Eski test verisi temizleniyor...');
  await supabase.from('Article').delete().eq('id', '8b2bce03-9046-4aeb-b215-63db6343f36f');

  await insertBatch('Article', articles, 'Köşe Yazıları');
  await insertBatch('Analysis', analyses, 'Analizler');
  await insertBatch('NewsItem', newsItems, 'Haberler');
  await insertBatch('Concept', concepts, 'Kavramlar');
  await insertBatch('TickerItem', tickerItems, 'Ticker Gündem');
  await insertBatch('OnThisDay', onThisDay, 'Tarihte Bugün');
  await insertBatch('LearningModule', learningModules, 'Öğrenme Modülleri');
  await insertBatch('Resource', resources, 'Kaynaklar');
  await insertBatch('SidebarStory', sidebarStories, 'Kenar Panel Hikayeleri');

  // Settings upsert
  console.log('\n→ Site ayarları güncelleniyor...');
  for (const s of settings) {
    const { error } = await supabase.from('Setting').upsert(s, { onConflict: 'key' });
    if (error) console.error('  ✗ Setting:', error.message);
    else console.log(`  ✓ Setting [${s.key}] kaydedildi.`);
  }

  console.log('\n✅ Seed işlemi tamamlandı!');
}

main().catch(console.error);
