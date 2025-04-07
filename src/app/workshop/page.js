import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Workshop() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary mb-4">Workshop & Özel Dersler</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ellora Sanat Evi'nde düzenlenen workshop ve özel dersler, sanatın farklı dallarını keşfetmek,
              yeteneklerinizi geliştirmek için harika bir fırsat sunuyor.
            </p>
          </div>
        </div>
      </section>
      
      {/* Carousel / Slider */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="relative overflow-hidden">
            {/* Bu kısım gerçek bir carousel component ile değiştirilebilir */}
            <div className="flex flex-nowrap overflow-x-auto pb-8 space-x-4 scrollbar-hide">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="flex-none w-full md:w-2/3 lg:w-1/2">
                  <div className="relative h-72 md:h-96 rounded-lg overflow-hidden">
                    <Image 
                      src={`/images/workshop-${item}.jpg`}
                      alt={`Workshop ${item}`}
                      fill
                      style={{objectFit: "cover"}}
                      className="rounded-lg"
                    />
                  </div>
                  <p className="text-center mt-4 text-gray-600 italic">
                    "Ellora Sanat Evi'nde {item}. workshopumuz"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Workshop Bilgileri */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Workshop Programları</h2>
              <p className="text-gray-700 mb-6">
                Ellora Sanat Evi'nde düzenlenen workshop programları, sanatın farklı dallarını keşfetmek için
                ideal bir başlangıç noktasıdır. Workshoplarımız deneyim seviyenize göre düzenlenir ve tüm
                malzemeler atölyemiz tarafından sağlanır.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-accent mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-medium">Hafta Sonu Workshopları</p>
                    <p className="text-gray-600">Cumartesi ve Pazar günleri, 3-4 saat süren workshop etkinlikleri</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-accent mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-medium">Akşam Workshopları</p>
                    <p className="text-gray-600">Hafta içi akşamları, iş çıkışı katılabileceğiniz 2-3 saatlik etkinlikler</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-accent mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-medium">Özel Grup Workshopları</p>
                    <p className="text-gray-600">Arkadaş grupları, kurumsal etkinlikler ve özel günler için özel workshoplar</p>
                  </div>
                </li>
              </ul>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://instagram.com/ellorasanat" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-primary text-white rounded-md hover:bg-opacity-90 transition duration-300"
                >
                  Program Detayları
                </a>
                <Link 
                  href="/iletisim"
                  className="px-6 py-3 border-2 border-primary text-primary rounded-md hover:bg-primary hover:text-white transition duration-300"
                >
                  İletişime Geçin
                </Link>
              </div>
            </div>
            <div>
              <div className="relative h-80 md:h-96 w-full rounded-md overflow-hidden shadow-lg">
                <Image 
                  src="/images/workshop-main.jpg"
                  alt="Workshop"
                  fill
                  style={{objectFit: "cover"}}
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Özel Dersler */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative h-80 md:h-96 w-full rounded-md overflow-hidden shadow-lg">
                <Image 
                  src="/images/ozel-ders.jpg"
                  alt="Özel Ders"
                  fill
                  style={{objectFit: "cover"}}
                  className="rounded-md"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-primary mb-6">Özel Dersler</h2>
              <p className="text-gray-700 mb-6">
                Sanat dallarımızda kendinizi daha derinlemesine geliştirmek istiyorsanız, özel ders programlarımız
                tam size göre. Deneyimli eğitmenlerimiz eşliğinde, kendi hızınızda ve seviyenize uygun bir 
                eğitim programı ile sanatın keyfini çıkarın.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-accent mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-medium">Birebir Özel Dersler</p>
                    <p className="text-gray-600">Size özel programlanmış, kendi hızınızda ilerleyebileceğiniz dersler</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-accent mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-medium">Küçük Grup Dersleri</p>
                    <p className="text-gray-600">En fazla 3-4 kişilik gruplar için özel programlanmış dersler</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-accent mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-medium">Esnek Ders Saatleri</p>
                    <p className="text-gray-600">Programınıza uygun şekilde ayarlanabilen ders saatleri</p>
                  </div>
                </li>
              </ul>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="tel:+905551234567"
                  className="px-6 py-3 bg-primary text-white rounded-md hover:bg-opacity-90 transition duration-300"
                >
                  Hemen Arayın
                </a>
                <Link 
                  href="/iletisim"
                  className="px-6 py-3 border-2 border-primary text-primary rounded-md hover:bg-primary hover:text-white transition duration-300"
                >
                  İletişime Geçin
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sanat Dalları */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Sanat Dallarımız</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ellora Sanat Evi'nde birbirinden farklı sanat dallarında workshop ve özel dersler düzenliyoruz.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
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
        </div>
      </section>
      
      {/* İletişim CTA */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-primary mb-4">Detaylı Bilgi Almak İster misiniz?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                Workshop ve özel derslerimiz hakkında detaylı bilgi almak, tarih ve saatler konusunda
                bilgilenmek için bizimle iletişime geçebilirsiniz.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="https://instagram.com/ellorasanat" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 bg-primary text-white rounded-md hover:bg-opacity-90 transition duration-300"
                >
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  Instagram
                </a>
                <a 
                  href="tel:+905551234567" 
                  className="flex items-center px-6 py-3 bg-accent text-white rounded-md hover:bg-opacity-90 transition duration-300"
                >
                  <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +90 555 123 4567
                </a>
                <Link 
                  href="/iletisim"
                  className="flex items-center px-6 py-3 border-2 border-primary text-primary rounded-md hover:bg-primary hover:text-white transition duration-300"
                >
                  <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  E-posta Gönder
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 