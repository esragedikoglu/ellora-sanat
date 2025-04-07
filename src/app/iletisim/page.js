import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Iletisim() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary mb-4">İletişim</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ellora Sanat Evi'ne ulaşmak, workshop ve özel dersler hakkında bilgi almak veya 
              ürünlerimiz hakkında sorularınız için bizimle iletişime geçebilirsiniz.
            </p>
          </div>
        </div>
      </section>
      
      {/* İletişim Bilgileri ve Form */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* İletişim Bilgileri */}
            <div>
              <h2 className="text-2xl font-semibold text-primary mb-6">İletişim Bilgilerimiz</h2>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="bg-primary bg-opacity-10 rounded-full h-10 w-10 flex items-center justify-center mt-1 mr-4">
                      <svg className="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-primary mb-1">Adres</h3>
                      <p className="text-gray-600">
                        Bağdat Caddesi, No: 123<br />
                        Kadıköy, İstanbul
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="bg-primary bg-opacity-10 rounded-full h-10 w-10 flex items-center justify-center mt-1 mr-4">
                      <svg className="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-primary mb-1">Telefon</h3>
                      <p className="text-gray-600">
                        <a href="tel:+905551234567" className="hover:text-primary">+90 555 123 4567</a>
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="bg-primary bg-opacity-10 rounded-full h-10 w-10 flex items-center justify-center mt-1 mr-4">
                      <svg className="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-primary mb-1">E-posta</h3>
                      <p className="text-gray-600">
                        <a href="mailto:info@ellorasanat.com" className="hover:text-primary">info@ellorasanat.com</a>
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="bg-primary bg-opacity-10 rounded-full h-10 w-10 flex items-center justify-center mt-1 mr-4">
                      <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-primary mb-1">Instagram</h3>
                      <p className="text-gray-600">
                        <a href="https://instagram.com/ellorasanat" target="_blank" rel="noopener noreferrer" className="hover:text-primary">@ellorasanat</a>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <h2 className="text-2xl font-semibold text-primary mb-6">Çalışma Saatlerimiz</h2>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="font-medium">Pazartesi - Cuma:</span>
                    <span>10:00 - 20:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Cumartesi:</span>
                    <span>10:00 - 18:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Pazar:</span>
                    <span>Kapalı</span>
                  </li>
                </ul>
                <p className="mt-4 text-sm text-gray-500">
                  * Workshop ve özel dersler için önceden rezervasyon yapılması gerekmektedir.
                </p>
              </div>
            </div>
            
            {/* İletişim Formu */}
            <div>
              <h2 className="text-2xl font-semibold text-primary mb-6">Bize Ulaşın</h2>
              
              <form className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Adınız Soyadınız</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Adınız Soyadınız"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">E-posta Adresiniz</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="E-posta Adresiniz"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Telefon Numaranız</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Telefon Numaranız"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Konu</label>
                  <select 
                    id="subject" 
                    name="subject" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  >
                    <option value="">Konu Seçiniz</option>
                    <option value="workshop">Workshop & Özel Ders</option>
                    <option value="products">Ürünler Hakkında</option>
                    <option value="partnership">İş Birliği</option>
                    <option value="other">Diğer</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Mesajınız</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Mesajınızı buraya yazınız..."
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full px-6 py-3 bg-primary text-white rounded-md hover:bg-opacity-90 transition duration-300"
                >
                  Gönder
                </button>
                
                <p className="mt-4 text-sm text-gray-500">
                  * Formunuz gönderildikten sonra en kısa sürede sizinle iletişime geçeceğiz.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Harita */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Bize Ulaşım</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Aşağıdaki haritayı kullanarak atölyemize kolayca ulaşabilirsiniz.
            </p>
          </div>
          
          <div className="bg-white p-3 rounded-lg shadow-md">
            <div className="relative w-full h-96 rounded-md overflow-hidden">
              {/* Gerçek bir harita entegrasyonu için Google Maps veya başka bir harita servisi kullanılabilir */}
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-600">Harita yükleniyor...</p>
                {/* Buraya harita entegrasyonu gelecek */}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* SSS */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Sıkça Sorulan Sorular</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Workshop ve özel derslerimiz hakkında sıkça sorulan sorular ve cevapları.
            </p>
          </div>
          
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-primary mb-2">Workshop için kayıt nasıl yaptırabilirim?</h3>
              <p className="text-gray-700">
                Workshop kayıtları için Instagram sayfamızdan, telefonla veya e-posta ile bize ulaşabilirsiniz. 
                Kontenjan dolmadan önce rezervasyon yapmanızı öneririz.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-primary mb-2">Workshop ve özel dersler için herhangi bir deneyim gerekiyor mu?</h3>
              <p className="text-gray-700">
                Hayır, workshoplarımız ve özel derslerimiz her seviyedeki katılımcıya uygundur. 
                Deneyiminiz olmasa bile temel tekniklerden başlayarak size rehberlik ediyoruz.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-primary mb-2">Workshop ücretlerine malzemeler dahil mi?</h3>
              <p className="text-gray-700">
                Evet, workshop ücretlerine tüm malzemeler dahildir. Yanınızda herhangi bir malzeme 
                getirmenize gerek yoktur.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-primary mb-2">Özel ders için nasıl programa dahil olabilirim?</h3>
              <p className="text-gray-700">
                Özel dersler için bizimle iletişime geçerek, size uygun bir program oluşturabiliriz. 
                Birebir veya küçük gruplar halinde derslerimiz mevcuttur.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 