import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function SosyalMedya() {
  // Instagram gönderileri (bu veriler gerçekte Instagram API'den çekilebilir)
  const instagramPosts = [
    {
      id: 1,
      image: "/images/instagram-1.jpg",
      caption: "Seramik atölyemizden harika bir çalışma daha. #ellorasanat #seramik",
      likes: 78,
      date: "2 gün önce"
    },
    {
      id: 2,
      image: "/images/instagram-2.jpg",
      caption: "Bugünkü punch nakışı workshopumuzdan kareler. Harika çalışmalar ortaya çıktı! #ellorasanat #punchnakışı",
      likes: 124,
      date: "4 gün önce"
    },
    {
      id: 3,
      image: "/images/instagram-3.jpg",
      caption: "Yeni mozaik çalışmamız. Sizce nasıl olmuş? #ellorasanat #mozaik #sanat",
      likes: 156,
      date: "1 hafta önce"
    },
    {
      id: 4,
      image: "/images/instagram-4.jpg",
      caption: "Bambu sepet örgüsü atölyemizde harika işler çıkıyor. Doğal malzemelerle sanat... #ellorasanat #bambu #sepet",
      likes: 92,
      date: "1 hafta önce"
    },
    {
      id: 5,
      image: "/images/instagram-5.jpg",
      caption: "Dekoratif ahşap boyama workshopumuzdan muhteşem eserler! #ellorasanat #ahşapboyama",
      likes: 112,
      date: "2 hafta önce"
    },
    {
      id: 6,
      image: "/images/instagram-6.jpg",
      caption: "Yeni ürünlerimiz Shopier sayfamızda satışta! Profilimizdeki linkten ulaşabilirsiniz. #ellorasanat #elyapımı",
      likes: 145,
      date: "2 hafta önce"
    },
    {
      id: 7,
      image: "/images/instagram-7.jpg",
      caption: "Bu haftasonu workshoplarımıza kayıt olmayı unutmayın! #ellorasanat #workshop #sanat",
      likes: 88,
      date: "3 hafta önce"
    },
    {
      id: 8,
      image: "/images/instagram-8.jpg",
      caption: "Öğrencilerimizin muhteşem seramik çalışmaları. Hepsini tek tek tebrik ediyoruz! #ellorasanat #seramik #workshop",
      likes: 134,
      date: "3 hafta önce"
    },
    {
      id: 9,
      image: "/images/instagram-9.jpg",
      caption: "Yeni çalışma alanımız artık hazır! Daha geniş ve ferah bir ortamda sanat yapmaya devam. #ellorasanat #atölye",
      likes: 202,
      date: "1 ay önce"
    }
  ];
  
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary mb-4">Sosyal Medya</h1>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Ellora Sanat Evi'nin sosyal medya paylaşımlarına buradan ulaşabilirsiniz. Etkinliklerimizi, 
              workshoplarımızı ve ürünlerimizi takip etmek için bizi Instagram'da da takip edin!
            </p>
            <a 
              href="https://instagram.com/ellorasanat" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-md hover:bg-opacity-90 transition duration-300 mx-auto w-fit"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              @ellorasanat
            </a>
          </div>
        </div>
      </section>
      
      {/* Instagram Feed */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {instagramPosts.map((post) => (
              <a 
                key={post.id}
                href="https://instagram.com/ellorasanat" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image 
                    src={post.image}
                    alt={`Instagram post ${post.id}`}
                    fill
                    style={{objectFit: "cover"}}
                    className="hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <div className="relative h-8 w-8 rounded-full overflow-hidden mr-2">
                        <Image 
                          src="/images/logo.png"
                          alt="Ellora Sanat Evi"
                          fill
                          style={{objectFit: "cover"}}
                        />
                      </div>
                      <span className="font-medium">ellorasanat</span>
                    </div>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <p className="text-gray-700 text-sm mb-3 line-clamp-3">{post.caption}</p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <svg className="h-4 w-4 mr-1 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    <span>{post.likes} beğenme</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://instagram.com/ellorasanat" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-primary text-primary rounded-md hover:bg-primary hover:text-white transition duration-300"
            >
              Daha Fazla Gönderi Gör
            </a>
          </div>
        </div>
      </section>
      
      {/* Sosyal Medya Takip Et */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Bizi Takip Edin</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Sanat atölyemizin güncel etkinlikleri, workshopları ve yeni ürünleri hakkında bilgi almak için 
              sosyal medya hesaplarımızı takip edin.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-4">Neden Bizi Takip Etmelisiniz?</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-accent mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">Güncel Workshop Haberleri</p>
                      <p className="text-gray-600">Yeni açılan workshoplarımızdan ilk siz haberdar olun.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-accent mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">Yeni Ürünler ve Koleksiyonlar</p>
                      <p className="text-gray-600">Özel tasarım ürünlerimiz ve yeni koleksiyonlarımız hakkında bilgi alın.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-accent mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">İlham Verici İçerikler</p>
                      <p className="text-gray-600">Sanat dünyasından ilham verici içerikler ve öneriler.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-accent mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">Özel Kampanyalar</p>
                      <p className="text-gray-600">Takipçilerimize özel indirimler ve fırsatlar.</p>
                    </div>
                  </li>
                </ul>
                <a 
                  href="https://instagram.com/ellorasanat" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-primary text-white rounded-md hover:bg-opacity-90 transition duration-300"
                >
                  Hemen Takip Et
                </a>
              </div>
              <div>
                <div className="relative h-96 w-full rounded-md overflow-hidden shadow-lg">
                  <Image 
                    src="/images/sosyal-medya.jpg"
                    alt="Sosyal Medya"
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
      
      {/* Hashtag Bölümü */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Siz de Paylaşın</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ellora Sanat Evi'nde yaptığınız çalışmaları veya satın aldığınız ürünlerimizi 
              #ellorasanat hashtagi ile paylaşın, sayfamızda yer alın!
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center">
            <h3 className="text-5xl font-bold text-accent mb-6">#ellorasanat</h3>
            <p className="text-gray-600 mb-8">
              Instagram'da bu hashtag ile paylaşım yapın, çalışmalarınızı ve ürünlerimizle ilgili deneyimlerinizi 
              tüm takipçilerimizle paylaşalım.
            </p>
            <a 
              href="https://instagram.com/explore/tags/ellorasanat/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-accent text-white rounded-md hover:bg-opacity-90 transition duration-300"
            >
              #ellorasanat Paylaşımlarını Görüntüle
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 