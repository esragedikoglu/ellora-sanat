# Ellora Sanat Evi - Görsel Kılavuzu

Bu doküman, Ellora Sanat Evi web sitesi için gerekli görsellerin listesini ve teknik özelliklerini içermektedir.

## Görsel Formatı Önerileri

- **Önerilen Format**: WebP ve JPEG formatlarını öncelikli olarak kullanınız. WebP modern tarayıcılarda daha iyi performans sağlar.
- **Alternatif Format**: PNG formatı, özellikle şeffaflık (transparency) gerektiren görseller için uygundur.
- **Boyut Optimizasyonu**: Görselleri web için optimize ediniz (TinyPNG, ImageOptim gibi araçlar kullanılabilir).
- **Çözünürlük**: Görseller retina ekranlar için yeterli çözünürlükte olmalıdır (genelde 2x).

## Klasör Yapısı

```
public/images/
│
├── logo/                 # Logo dosyaları
│   ├── logo.webp         # Ana logo
│   ├── logo-white.webp   # Beyaz renkli logo (footer için)
│   └── favicon.ico       # Favicon (site simgesi)
│
├── slider/               # Ana sayfa slider görselleri
│   ├── slide-1.webp      # Ana slider 1
│   ├── slide-2.webp      # Ana slider 2
│   └── slide-3.webp      # Ana slider 3
│
├── sanat-dallari/        # Sanat dalları görselleri
│   ├── seramik.webp      # Seramik sanat dalı
│   ├── punch-nakisi.webp # Punch nakışı sanat dalı
│   ├── bambu-sepet.webp  # Bambu sepet örgüsü sanat dalı
│   ├── ahsap-boyama.webp # Dekoratif ahşap boyama sanat dalı
│   └── mozaik.webp       # Mozaik sanat dalı
│
├── workshop/             # Workshop ve özel dersler görselleri
│   ├── workshop-1.webp   # Workshop görseli 1
│   ├── workshop-2.webp   # Workshop görseli 2
│   ├── workshop-3.webp   # Workshop görseli 3
│   └── ozel-ders.webp    # Özel ders görseli
│
├── dukkan/               # Dükkan ürün görselleri
│   ├── urun-1.webp       # Ürün görseli 1
│   ├── urun-2.webp       # Ürün görseli 2
│   ├── urun-3.webp       # Ürün görseli 3
│   └── urun-4.webp       # Ürün görseli 4
│
├── instagram/            # Instagram paylaşım görselleri
│   ├── insta-1.webp      # Instagram görseli 1
│   ├── insta-2.webp      # Instagram görseli 2
│   ├── insta-3.webp      # Instagram görseli 3
│   ├── insta-4.webp      # Instagram görseli 4
│   ├── insta-5.webp      # Instagram görseli 5
│   └── insta-6.webp      # Instagram görseli 6
│
└── genel/                # Genel görseller
    ├── about.webp        # Hakkımızda görseli
    ├── contact.webp      # İletişim görseli
    └── background.webp   # Arka plan görseli
```

## Önerilen Görsel Boyutları

### Logo
- **Ana Logo**: 200 x 70 px (en yüksek kalitede)
- **Favicon**: 32 x 32 px

### Slider Görselleri
- **Ana Slider**: 1920 x 800 px

### Sanat Dalları
- **Sanat Dalı Görselleri**: 800 x 600 px

### Workshop/Özel Ders
- **Workshop Görselleri**: 800 x 600 px

### Dükkan Ürünleri
- **Ürün Görselleri**: 600 x 600 px (kare formatta)

### Instagram Paylaşımları
- **Instagram Görselleri**: 600 x 600 px (kare formatta)

### Genel Görseller
- **Hakkımızda ve İletişim**: 1200 x 800 px
- **Arka Plan**: 1920 x 1080 px

## Görsellerde Dikkat Edilmesi Gerekenler

1. **Kalite**: Görseller yüksek kalitede ve net olmalıdır.
2. **Renk Uyumu**: Görseller site renkleriyle uyumlu olmalıdır.
3. **İçerik**: Görseller sanat atölyesi konseptiyle ilgili ve profesyonel görünümlü olmalıdır.
4. **Telif Hakkı**: Kullanılan tüm görsellerin telif hakları kontrol edilmelidir.
5. **Dosya Boyutu**: Web performansı için görseller optimize edilmelidir (ideal olarak 200-300 KB altında).

## Görsel Yükleme Talimatları

1. Görselleri yukarıda belirtilen klasör yapısına uygun şekilde yerleştiriniz.
2. Dosya adlarını Türkçe karakter içermeyecek şekilde, küçük harflerle ve tire (-) kullanarak oluşturunuz.
3. Tüm görsel dosyalarını ilgili klasörlere yükledikten sonra, değişiklikleri git ile commit edip push ediniz.

---

Not: Eğer WebP formatını kullanamıyorsanız, tüm görseller için JPEG (fotoğraflar) ve PNG (logolar, ikonlar) formatlarını tercih ediniz. Bu durumda dosya uzantılarını .webp yerine .jpg veya .png olarak değiştiriniz. 