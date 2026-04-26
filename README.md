# IR Insight - Uluslararası İlişkiler Portalı

Modern, profesyonel ve akademik bir Uluslararası İlişkiler (Uİ) web portalı.

## Özellikler

- **Günün Makaleleri**: Seçilmiş akademik makaleler.
- **Güncel Gelişmeler**: Bölgesel ve kategorik haber akışı.
- **Analizler**: Derinlemesine konu analizleri.
- **Uİ Öğren**: Teoriler ve kavramlar için eğitim modülleri.
- **Podcastler**: Video ve sesli içerikler.
- **Kaynaklar**: Kitaplar, düşünürler ve dijital araçlar.
- **Arama**: Tüm içeriklerde arama yapma imkanı.
- **Karanlık Mod**: Göz yormayan okuma deneyimi için.

## Teknolojiler

- **Frontend**: React, TypeScript, Vite
- **Stil**: Tailwind CSS
- **Yönlendirme**: React Router DOM
- **İkonlar**: Lucide React

## Kurulum

Projeyi yerel ortamınızda çalıştırmak için:

1. Bağımlılıkları yükleyin:
   ```bash
   npm install
   ```

2. Geliştirme sunucusunu başlatın:
   ```bash
   npm run dev
   ```

3. Tarayıcıda `http://localhost:5173` adresine gidin.

## İçerik Güncelleme

Veriler `src/data` klasörü altındaki TypeScript dosyalarında tutulmaktadır. Yeni içerik eklemek için ilgili dosyayı düzenleyebilirsiniz:

- Makaleler: `src/data/articles.ts`
- Haberler: `src/data/news.ts`
- Analizler: `src/data/analyses.ts`
- Modüller: `src/data/learningModules.ts`
- Podcastler: `src/data/podcasts.ts`
- Kaynaklar: `src/data/resources.ts`
- Kavramlar: `src/data/concepts.ts`

## Lisans

Bu proje eğitim amaçlı hazırlanmıştır.
