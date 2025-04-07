import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

// Sanat dalları verileri
const sanatDallari = {
  "seramik": {
    title: "Seramik",
    description: "Seramik, kil ve benzeri maddelerin şekillendirilip pişirilmesi ile elde edilen bir sanat dalıdır. Ellora Sanat Evi'nde çeşitli seramik teknikleri öğrenebilirsiniz.",
    longDescription: `
      Seramik sanatı insanlık tarihinin en eski el sanatlarından biridir. Kil ve benzeri maddelerin 
      şekillendirilip pişirilmesiyle oluşur. Ellora Sanat Evi'nde seramik atölyemizde, elle şekillendirme 
      tekniklerinden tornada çömlek yapmaya kadar geniş bir yelpazede seramik sanatını deneyimleme 
      imkanı bulabilirsiniz.
      
      Atölyemizde öğrenebileceğiniz teknikler arasında çimdik tekniği, fitil tekniği, plaka tekniği ve 
      torna bulunmaktadır. Ayrıca sırlama ve dekorlama teknikleri ile kendi eserlerinizi tamamlayabilirsiniz.
    `,
    image: "/images/seramik.jpg",
    galleryImages: [
      "/images/seramik-1.jpg",
      "/images/seramik-2.jpg",
      "/images/seramik-3.jpg",
      "/images/seramik-4.jpg",
    ],
    features: [
      "Çimdik Tekniği",
      "Fitil Tekniği",
      "Plaka Tekniği",
      "Torna",
      "Sırlama",
      "Dekorlama"
    ]
  },
  "punch-nakisi": {
    title: "Punch Nakışı",
    description: "Punch nakışı, özel bir iğne ve iplik kullanılarak kumaş üzerine desenler işleme sanatıdır. Bu teknikle dekoratif ürünler ve aksesuarlar yapabilirsiniz.",
    longDescription: `
      Punch nakışı, özel bir iğne (punch iğnesi) ve iplik kullanılarak kumaş üzerine desenler işleme 
      sanatıdır. Amerikan nakışı olarak da bilinen bu teknik, kumaşın arka tarafından yapılır ve öndeki 
      görüntüsü püsküllü bir görünüm oluşturur.
      
      Ellora Sanat Evi'nde punch nakışı atölyelerimizde, bu sanatın temel tekniklerini öğrenebilir, 
      kendi tasarımlarınızı yaratabilirsiniz. Dekoratif duvar panoları, yastıklar, çantalar ve daha 
      birçok ürün yapabilirsiniz.
    `,
    image: "/images/punch-nakisi.jpg",
    galleryImages: [
      "/images/punch-nakisi-1.jpg",
      "/images/punch-nakisi-2.jpg",
      "/images/punch-nakisi-3.jpg",
      "/images/punch-nakisi-4.jpg",
    ],
    features: [
      "Temel Punch Nakışı Teknikleri",
      "Desen Tasarımı",
      "Farklı İplik Türleri",
      "Çeşitli Kumaşlar Üzerine Uygulama",
      "Dekoratif Ürün Yapımı"
    ]
  },
  "bambu-sepet": {
    title: "Bambu Sepet Örgüsü",
    description: "Bambu sepet örgüsü, bambu şeritlerini çeşitli tekniklerle örerek sepet, saksı ve dekoratif ürünler yapma sanatıdır.",
    longDescription: `
      Bambu sepet örgüsü, doğal bambu şeritlerini çeşitli tekniklerle örerek sepet, saksı ve dekoratif 
      ürünler yapma sanatıdır. Doğal malzemeler kullanıldığı için çevre dostu bir el sanatıdır.
      
      Ellora Sanat Evi'nde bambu sepet örgüsü atölyelerimizde, bambu malzemeyi tanıyacak, temel örme 
      tekniklerini öğrenecek ve kendi sepetlerinizi, saksılarınızı ve dekoratif ürünlerinizi 
      yapabileceksiniz.
    `,
    image: "/images/bambu-sepet.jpg",
    galleryImages: [
      "/images/bambu-sepet-1.jpg",
      "/images/bambu-sepet-2.jpg",
      "/images/bambu-sepet-3.jpg",
      "/images/bambu-sepet-4.jpg",
    ],
    features: [
      "Bambu Malzeme Tanıtımı",
      "Temel Örme Teknikleri",
      "Sepet Yapımı",
      "Saksı Yapımı",
      "Dekoratif Ürün Tasarımı"
    ]
  },
  "ahsap-boyama": {
    title: "Dekoratif Ahşap Boyama",
    description: "Dekoratif ahşap boyama, ahşap malzemelerin özel boyalar ve tekniklerle dekore edilmesidir. Çeşitli dekoratif objeler, mobilyalar ve hediyeler yapabilirsiniz.",
    longDescription: `
      Dekoratif ahşap boyama, ahşap malzemelerin özel boyalar ve tekniklerle dekore edilmesi sanatıdır. 
      Bu sanat dalında, eski mobilyalarınızı yenileyebilir, çeşitli dekoratif objeler ve hediyeler 
      yapabilirsiniz.
      
      Ellora Sanat Evi'nde dekoratif ahşap boyama atölyelerimizde, ahşap üzerine astar uygulama, 
      boyama teknikleri, desen aktarma, eskitme teknikleri ve vernikleme gibi teknikleri öğreneceksiniz.
    `,
    image: "/images/ahsap-boyama.jpg",
    galleryImages: [
      "/images/ahsap-boyama-1.jpg",
      "/images/ahsap-boyama-2.jpg",
      "/images/ahsap-boyama-3.jpg",
      "/images/ahsap-boyama-4.jpg",
    ],
    features: [
      "Ahşap Hazırlama",
      "Astar Uygulama",
      "Boyama Teknikleri",
      "Desen Aktarma",
      "Eskitme Teknikleri",
      "Vernikleme"
    ]
  },
  "mozaik": {
    title: "Mozaik",
    description: "Mozaik, küçük renkli taş, cam veya seramik parçaların bir yüzey üzerine belirli bir desene göre yerleştirilmesi sanatıdır. Dekoratif panolar, aynalar ve objeler tasarlayabilirsiniz.",
    longDescription: `
      Mozaik, küçük renkli taş, cam veya seramik parçaların bir yüzey üzerine belirli bir desene göre 
      yerleştirilmesi sanatıdır. Antik çağlardan beri kullanılan bu sanat, günümüzde de popülerliğini 
      korumaktadır.
      
      Ellora Sanat Evi'nde mozaik atölyelerimizde, mozaik malzemelerini tanıyacak, temel teknikleri 
      öğrenecek ve kendi dekoratif panolarınızı, aynalarınızı ve objelerinizi tasarlayabileceksiniz.
    `,
    image: "/images/mozaik.jpg",
    galleryImages: [
      "/images/mozaik-1.jpg",
      "/images/mozaik-2.jpg",
      "/images/mozaik-3.jpg",
      "/images/mozaik-4.jpg",
    ],
    features: [
      "Mozaik Malzemeleri Tanıtımı",
      "Temel Teknikler",
      "Desen Tasarımı",
      "Dekoratif Pano Yapımı",
      "Ayna Yapımı",
      "Obje Tasarımı"
    ]
  }
};

export default function SanatDaliDetay({ params }) {
  const { slug } = params;
  
  // Eğer geçersiz bir slug varsa 404 sayfasına yönlendir
  if (!sanatDallari[slug]) {
    notFound();
  }
  
  const sanatDali = sanatDallari[slug];
  
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold text-primary mb-4">{sanatDali.title}</h1>
              <p className="text-lg text-gray-700 mb-6">{sanatDali.description}</p>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-700 whitespace-pre-line">{sanatDali.longDescription}</p>
              </div>
            </div>
            <div>
              <div className="relative h-80 md:h-96 w-full rounded-md overflow-hidden shadow-lg">
                <Image 
                  src={sanatDali.image}
                  alt={sanatDali.title}
                  fill
                  style={{objectFit: "cover"}}
                  className="rounded-md"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Özellikler */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-semibold text-primary mb-8 text-center">Öğrenebileceğiniz Teknikler</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {sanatDali.features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-center">
                  <svg className="h-6 w-6 text-accent mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-800 font-medium">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Galeri */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-semibold text-primary mb-8 text-center">Galeri</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sanatDali.galleryImages.map((image, index) => (
              <div key={index} className="bg-white p-3 rounded-lg shadow-md">
                <div className="relative h-48 md:h-64 w-full rounded-md overflow-hidden">
                  <Image 
                    src={image}
                    alt={`${sanatDali.title} ${index + 1}`}
                    fill
                    style={{objectFit: "cover"}}
                    className="rounded-md"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Workshop ve Özel Ders */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-primary mb-4">Workshop ve Özel Ders</h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                {sanatDali.title} sanatını öğrenmek ve deneyimlemek için workshop ve özel ders programlarımıza katılabilirsiniz.
                Detaylı bilgi için bizimle iletişime geçin.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/workshop" className="px-6 py-3 bg-primary text-white rounded-md hover:bg-opacity-90 transition duration-300">
                  Workshop Programı
                </Link>
                <Link href="/iletisim" className="px-6 py-3 border-2 border-primary text-primary rounded-md hover:bg-primary hover:text-white transition duration-300">
                  İletişime Geçin
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Diğer Sanat Dalları */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-semibold text-primary mb-8 text-center">Diğer Sanat Dallarımız</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Object.entries(sanatDallari)
              .filter(([key]) => key !== slug)
              .slice(0, 4)
              .map(([key, sanat]) => (
                <Link key={key} href={`/sanat-dallari/${key}`} className="group">
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                    <div className="relative h-36 overflow-hidden">
                      <Image 
                        src={sanat.image}
                        alt={sanat.title}
                        fill
                        style={{objectFit: "cover"}}
                        className="group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-primary">{sanat.title}</h3>
                    </div>
                  </div>
                </Link>
              ))
            }
          </div>
          <div className="text-center mt-10">
            <Link href="/sanat-dallari" className="px-6 py-3 border-2 border-primary text-primary rounded-md hover:bg-primary hover:text-white transition duration-300">
              Tüm Sanat Dallarını Gör
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 