# Ellora Sanat Evi Web Sitesi

Bu proje, Ellora Sanat Evi için Next.js ve Tailwind CSS kullanılarak geliştirilen modern bir web sitesi projesidir.

## Proje Hakkında

Ellora Sanat Evi, çeşitli sanat dallarında workshop ve özel dersler sunan, aynı zamanda el yapımı sanat ürünleri satan bir sanat atölyesidir. Bu web sitesi, atölyenin online varlığını güçlendirmek ve müşterilere kolay erişim sağlamak amacıyla tasarlanmıştır.

## Teknolojiler

- [Next.js](https://nextjs.org/) - React framework
- [React](https://reactjs.org/) - JavaScript kütüphanesi
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Responsive Design](https://en.wikipedia.org/wiki/Responsive_web_design) - Tüm cihazlara uyumlu tasarım

## Özellikler

- Modern ve kullanıcı dostu arayüz
- Mobil uyumlu responsive tasarım
- SEO optimizasyonu
- Farklı sanat dalları için detay sayfaları
- Workshop ve özel dersler bilgileri
- Dükkan ve ürün tanıtımları
- Sosyal medya entegrasyonu
- İletişim formu

## Proje Yapısı

```
ellora-sanat/
├── public/           # Statik dosyalar (görseller vb.)
├── src/              # Kaynak kodları
│   ├── app/          # Sayfa yapıları ve route'lar
│   │   ├── sanat-dallari/   # Sanat dalları sayfaları
│   │   ├── workshop/        # Workshop sayfası
│   │   ├── dukkan/          # Dükkan sayfası
│   │   ├── sosyal-medya/    # Sosyal medya sayfası
│   │   ├── iletisim/        # İletişim sayfası
│   │   ├── home-component.js  # Ana sayfa componenti
│   │   ├── layout.js          # Temel sayfa yapısı
│   │   ├── page.js            # Ana sayfa
│   │   └── globals.css        # Global CSS
│   └── components/   # Yeniden kullanılabilir bileşenler
│       ├── Navbar.js          # Navigasyon çubuğu
│       └── Footer.js          # Alt bilgi
├── .gitignore        # Git tarafından göz ardı edilecek dosyalar
├── package.json      # Proje bağımlılıkları
├── tailwind.config.js # Tailwind CSS yapılandırması
└── README.md         # Proje dokümantasyonu
```

## Görseller ve Medya

Web sitesi görselleri `public/images/` klasöründen sağlanır. Geliştirme aşamasında görseller için yer tutucu kullanılmıştır ve canlı projede bu görseller gerçek görseller ile değiştirilmelidir.

## Proje Durumu

### Tamamlanan Sayfalar:

- ✅ Ana Sayfa (/)
- ✅ Sanat Dallarımız (/sanat-dallari)
- ✅ Sanat Dalları Detay Sayfaları (/sanat-dallari/[slug])
- ✅ Workshop/Özel Ders (/workshop)
- ✅ Dükkanımız (/dukkan)
- ✅ Sosyal Medya (/sosyal-medya)
- ✅ İletişim (/iletisim)

### Tamamlanan Bileşenler:

- ✅ Navbar
- ✅ Footer
- ✅ Ana Sayfa Bileşenleri
- ✅ Ürün Kartları
- ✅ Sanat Dalları Kartları

### Bekleyen İşler:

- 🔄 Gerçek görsellerin entegrasyonu
- 🔄 Form işlevselliğinin backend'e bağlanması
- 🔄 Google Haritalar entegrasyonu
- 🔄 SEO optimizasyonu
- 🔄 Performans optimizasyonu
- 🔄 Shopier entegrasyonu
- 🔄 Instagram Feed API entegrasyonu

## Nasıl Çalıştırılır

Projeyi yerel ortamınızda çalıştırmak için:

1. Projeyi klonlayın:
```bash
git clone [repo-url]
cd ellora-sanat
```

2. Bağımlılıkları yükleyin:
```bash
npm install
# veya
yarn install
```

3. Geliştirme sunucusunu başlatın:
```bash
npm run dev
# veya
yarn dev
```

4. Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

## Katkıda Bulunma

1. Bu depoyu fork edin
2. Feature branch'i oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some amazing feature'`)
4. Branch'inize push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## Lisans

Bu proje özel lisans altında dağıtılmaktadır. Tüm hakları saklıdır. 