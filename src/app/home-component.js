import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function HomeComponent() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section id="hakkimizda" className="relative bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Ellora Sanat Evi
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Sanatın farklı dallarıyla tanışabileceğiniz, kendi yaratıcılığınızı keşfedebileceğiniz
                ve özel tasarım ürünlere ulaşabileceğiniz bir sanat atölyesi.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/workshop" className="px-6 py-3 bg-primary text-white rounded-md hover:bg-opacity-90 transition duration-300">
                  Workshop & Özel Dersler
                </Link>
                <Link href="/dukkan" className="px-6 py-3 border-2 border-primary text-primary rounded-md hover:bg-primary hover:text-white transition duration-300">
                  Dükkanımızı Keşfedin
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative w-full h-80 md:h-96 lg:h-[500px] rounded-md overflow-hidden shadow-lg">
                <Image 
                  src="/images/genel/about.jpg" 
                  alt="Ellora Sanat Evi" 
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
      
      {/* Sanat Dalları Önizleme */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Sanat Dallarımız</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ellora Sanat Evi'nde birbirinden farklı sanat dallarında eğitimler alabilir, workshoplara katılabilirsiniz.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* Seramik */}
            <Link href="/sanat-dallari/seramik" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src="/images/seramik.jpg"
                    alt="Seramik"
                    fill
                    style={{objectFit: "cover"}}
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-primary">Seramik</h3>
                </div>
              </div>
            </Link>
            
            {/* Punch Nakışı */}
            <Link href="/sanat-dallari/punch-nakisi" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src="/images/punch-nakisi.jpg"
                    alt="Punch Nakışı"
                    fill
                    style={{objectFit: "cover"}}
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-primary">Punch Nakışı</h3>
                </div>
              </div>
            </Link>
            
            {/* Bambu Sepet Örgüsü */}
            <Link href="/sanat-dallari/bambu-sepet" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src="/images/bambu-sepet.jpg"
                    alt="Bambu Sepet Örgüsü"
                    fill
                    style={{objectFit: "cover"}}
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-primary">Bambu Sepet Örgüsü</h3>
                </div>
              </div>
            </Link>
            
            {/* Dekoratif Ahşap Boyama */}
            <Link href="/sanat-dallari/ahsap-boyama" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src="/images/ahsap-boyama.jpg"
                    alt="Dekoratif Ahşap Boyama"
                    fill
                    style={{objectFit: "cover"}}
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-primary">Dekoratif Ahşap Boyama</h3>
                </div>
              </div>
            </Link>
            
            {/* Mozaik */}
            <Link href="/sanat-dallari/mozaik" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src="/images/mozaik.jpg"
                    alt="Mozaik"
                    fill
                    style={{objectFit: "cover"}}
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-primary">Mozaik</h3>
                </div>
              </div>
            </Link>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/sanat-dallari" className="px-6 py-3 border-2 border-primary text-primary rounded-md hover:bg-primary hover:text-white transition duration-300">
              Tüm Sanat Dallarını Keşfedin
            </Link>
          </div>
        </div>
      </section>
      
      {/* Workshop/Özel Ders Önizleme */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Workshop & Özel Dersler</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Bireysel veya grup olarak katılabileceğiniz workshoplar ve özel dersler ile sanatla tanışın.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative h-72 md:h-96 rounded-md overflow-hidden">
                <Image 
                  src="/images/workshop.jpg"
                  alt="Workshop"
                  fill
                  style={{objectFit: "cover"}}
                  className="rounded-md"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-4">Sanata İlk Adım</h3>
                <p className="text-gray-600 mb-6">
                  Ellora Sanat Evi'nde düzenlenen workshop ve özel dersler, sanatın farklı dallarını keşfetmek, 
                  yeteneklerinizi geliştirmek için harika bir fırsat sunuyor. Deneyimli eğitmenlerimiz 
                  eşliğinde keyifli bir öğrenme deneyimi yaşayın.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-accent mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Bireysel ve grup dersleri</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-accent mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Her seviyeye uygun içerik</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-accent mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Tüm malzemeler dahil</span>
                  </li>
                </ul>
                <Link href="/workshop" className="px-6 py-3 bg-primary text-white rounded-md hover:bg-opacity-90 transition duration-300">
                  Detaylı Bilgi
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Dükkanımız Önizleme */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Dükkanımız</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ellora Sanat Evi'nin özel tasarım ürünlerini keşfedin.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-4">Özel Tasarım Ürünler</h3>
                <p className="text-gray-600 mb-6">
                  Ellora Sanat Evi'nin özel tasarım ürünlerini Shopier sayfamızdan satın alabilirsiniz. 
                  El yapımı, benzersiz ve özenle hazırlanmış ürünlerimiz evinize sanatsal bir dokunuş katacak.
                </p>
                <a href="https://shopier.com/ellorasanat" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-primary text-white rounded-md hover:bg-opacity-90 transition duration-300">
                  Dükkanı Ziyaret Et
                </a>
              </div>
              <div className="relative h-72 md:h-96 rounded-md overflow-hidden">
                <Image 
                  src="/images/dukkan.jpg"
                  alt="Dükkanımız"
                  fill
                  style={{objectFit: "cover"}}
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Instagram Feed Önizleme */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Sosyal Medya</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Bizi Instagram'da takip edin, son çalışmalarımızdan ve etkinliklerimizden haberdar olun.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Instagram görselleri buraya eklenecek */}
            {[1, 2, 3, 4].map((item) => (
              <a 
                key={item}
                href="https://instagram.com/ellorasanat" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative block h-48 md:h-64 rounded-md overflow-hidden group"
              >
                <Image 
                  src={`/images/instagram-${item}.jpg`}
                  alt={`Instagram ${item}`}
                  fill
                  style={{objectFit: "cover"}}
                  className="group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center transition-all duration-300">
                  <svg className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
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
              Instagram Sayfamızı Ziyaret Et
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 