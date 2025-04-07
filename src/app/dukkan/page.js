import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Dukkan() {
  // Örnek ürünler (gerçek durumda bunlar veritabanından veya API'den gelebilir)
  const urunler = [
    {
      id: 1,
      isim: "El Yapımı Seramik Kase",
      kategori: "Seramik",
      fiyat: 250,
      resim: "/images/urun-seramik-1.jpg"
    },
    {
      id: 2,
      isim: "Dekoratif Punch Nakışı Pano",
      kategori: "Punch Nakışı",
      fiyat: 350,
      resim: "/images/urun-punch-1.jpg"
    },
    {
      id: 3,
      isim: "Bambu Sepet",
      kategori: "Bambu Sepet Örgüsü",
      fiyat: 180,
      resim: "/images/urun-bambu-1.jpg"
    },
    {
      id: 4,
      isim: "Dekoratif Ahşap Kutu",
      kategori: "Ahşap Boyama",
      fiyat: 220,
      resim: "/images/urun-ahsap-1.jpg"
    },
    {
      id: 5,
      isim: "Mozaik Ayna",
      kategori: "Mozaik",
      fiyat: 450,
      resim: "/images/urun-mozaik-1.jpg"
    },
    {
      id: 6,
      isim: "Seramik Vazo",
      kategori: "Seramik",
      fiyat: 320,
      resim: "/images/urun-seramik-2.jpg"
    }
  ];
  
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary mb-4">Dükkanımız</h1>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Ellora Sanat Evi'nin özel tasarım ürünlerini keşfedin ve Shopier üzerinden satın alın.
            </p>
            <a 
              href="https://shopier.com/ellorasanat" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-primary text-white rounded-md hover:bg-opacity-90 transition duration-300 text-lg"
            >
              Shopier Mağazamızı Ziyaret Et
            </a>
          </div>
        </div>
      </section>
      
      {/* Ürün Vitrini */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Öne Çıkan Ürünlerimiz</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {urunler.map((urun) => (
              <div key={urun.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={urun.resim}
                    alt={urun.isim}
                    fill
                    style={{objectFit: "cover"}}
                    className="hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-accent font-medium mb-1">{urun.kategori}</p>
                  <h3 className="text-xl font-semibold text-primary mb-2">{urun.isim}</h3>
                  <p className="text-lg font-bold mb-4">{urun.fiyat} ₺</p>
                  <a 
                    href="https://shopier.com/ellorasanat" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full text-center px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-90 transition duration-300"
                  >
                    Satın Al
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://shopier.com/ellorasanat" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-primary text-primary rounded-md hover:bg-primary hover:text-white transition duration-300"
            >
              Tüm Ürünleri Gör
            </a>
          </div>
        </div>
      </section>
      
      {/* Özel Tasarım Ürünler */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Özel Tasarım Ürünler</h2>
              <p className="text-gray-700 mb-6">
                Ellora Sanat Evi'nin özel tasarım ürünleri, sanatçılarımızın özgün tasarımları ve el işçiliği ile
                üretilmektedir. Her bir ürün benzersizdir ve evinize sanatsal bir dokunuş katacaktır.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-accent mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-medium">El Yapımı</p>
                    <p className="text-gray-600">Tüm ürünlerimiz sanatçılarımız tarafından el ile üretilmektedir.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-accent mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-medium">Benzersiz Tasarımlar</p>
                    <p className="text-gray-600">Her ürün özgün ve benzersizdir, seri üretim değildir.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-accent mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-medium">Kaliteli Malzemeler</p>
                    <p className="text-gray-600">Ürünlerimizde yüksek kaliteli, seçkin malzemeler kullanılmaktadır.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <div className="relative h-80 md:h-96 w-full rounded-md overflow-hidden shadow-lg">
                <Image 
                  src="/images/ozel-tasarim.jpg"
                  alt="Özel Tasarım Ürünler"
                  fill
                  style={{objectFit: "cover"}}
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sipariş ve Teslimat */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-semibold text-primary mb-4">Sipariş ve Teslimat</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Ürünlerimizi Shopier üzerinden güvenle satın alabilirsiniz. Tüm siparişleriniz özenle paketlenerek adresinize gönderilir.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary bg-opacity-10 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Güvenli Alışveriş</h3>
                <p className="text-gray-600">
                  Shopier altyapısı ile güvenli bir şekilde ödeme yapabilirsiniz.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary bg-opacity-10 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Özenli Paketleme</h3>
                <p className="text-gray-600">
                  Tüm ürünlerimiz özenle paketlenerek kargoya verilir.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary bg-opacity-10 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Hızlı Teslimat</h3>
                <p className="text-gray-600">
                  Siparişiniz en kısa sürede hazırlanıp kargoya verilir.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <a 
                href="https://shopier.com/ellorasanat" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary text-white rounded-md hover:bg-opacity-90 transition duration-300"
              >
                Shopier Mağazamızı Ziyaret Et
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Özel Sipariş */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Özel Sipariş</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              İsteklerinize özel tasarım ürünler için bizimle iletişime geçebilirsiniz.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-4">Sizin İçin Tasarlayalım</h3>
                <p className="text-gray-700 mb-6">
                  Özel günleriniz, hediyeleriniz veya eviniz için özel tasarım ürünler istiyorsanız,
                  bizimle iletişime geçebilirsiniz. İsteklerinize uygun, size özel tasarımlar yapıyoruz.
                </p>
                <Link 
                  href="/iletisim"
                  className="px-6 py-3 bg-primary text-white rounded-md hover:bg-opacity-90 transition duration-300"
                >
                  İletişime Geçin
                </Link>
              </div>
              <div>
                <div className="relative h-72 md:h-80 w-full rounded-md overflow-hidden">
                  <Image 
                    src="/images/ozel-siparis.jpg"
                    alt="Özel Sipariş"
                    fill
                    style={{objectFit: "cover"}}
                    className="rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 