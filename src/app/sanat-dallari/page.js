import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const sanatDallari = [
  {
    id: "seramik",
    title: "Seramik",
    description: "Seramik, kil ve benzeri maddelerin şekillendirilip pişirilmesi ile elde edilen bir sanat dalıdır. Ellora Sanat Evi'nde çeşitli seramik teknikleri öğrenebilirsiniz.",
    image: "/images/seramik.jpg",
  },
  {
    id: "punch-nakisi",
    title: "Punch Nakışı",
    description: "Punch nakışı, özel bir iğne ve iplik kullanılarak kumaş üzerine desenler işleme sanatıdır. Bu teknikle dekoratif ürünler ve aksesuarlar yapabilirsiniz.",
    image: "/images/punch-nakisi.jpg",
  },
  {
    id: "bambu-sepet",
    title: "Bambu Sepet Örgüsü",
    description: "Bambu sepet örgüsü, bambu şeritlerini çeşitli tekniklerle örerek sepet, saksı ve dekoratif ürünler yapma sanatıdır.",
    image: "/images/bambu-sepet.jpg",
  },
  {
    id: "ahsap-boyama",
    title: "Dekoratif Ahşap Boyama",
    description: "Dekoratif ahşap boyama, ahşap malzemelerin özel boyalar ve tekniklerle dekore edilmesidir. Çeşitli dekoratif objeler, mobilyalar ve hediyeler yapabilirsiniz.",
    image: "/images/ahsap-boyama.jpg",
  },
  {
    id: "mozaik",
    title: "Mozaik",
    description: "Mozaik, küçük renkli taş, cam veya seramik parçaların bir yüzey üzerine belirli bir desene göre yerleştirilmesi sanatıdır. Dekoratif panolar, aynalar ve objeler tasarlayabilirsiniz.",
    image: "/images/mozaik.jpg",
  }
];

export default function SanatDallari() {
  return (
    <main>
      <Navbar />
      
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">Sanat Dallarımız</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ellora Sanat Evi'nde deneyimleyebileceğiniz sanat dalları ve atölyelerimiz hakkında bilgi alın.
            </p>
          </div>
          
          <div className="space-y-12">
            {sanatDallari.map((sanat, index) => (
              <div key={sanat.id} className={`bg-white p-6 rounded-lg shadow-md ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} flex flex-col md:flex-row gap-8`}>
                <div className="md:w-1/2">
                  <div className="relative h-64 md:h-80 w-full rounded-md overflow-hidden">
                    <Image 
                      src={sanat.image}
                      alt={sanat.title}
                      fill
                      style={{objectFit: "cover"}}
                      className="rounded-md"
                    />
                  </div>
                </div>
                <div className="md:w-1/2 flex flex-col justify-center">
                  <h2 className="text-2xl font-semibold text-primary mb-4">{sanat.title}</h2>
                  <p className="text-gray-700 mb-6">{sanat.description}</p>
                  <Link 
                    href={`/sanat-dallari/${sanat.id}`}
                    className="px-6 py-3 bg-primary text-white rounded-md hover:bg-opacity-90 transition duration-300 w-fit"
                  >
                    Detaylı Bilgi
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-primary mb-4">Özel Ders ve Workshop Talepleri</h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                Sanat dallarımız hakkında daha detaylı bilgi almak, özel ders veya workshop
                programlarımıza katılmak için bizimle iletişime geçebilirsiniz.
              </p>
              <Link 
                href="/iletisim"
                className="px-6 py-3 bg-primary text-white rounded-md hover:bg-opacity-90 transition duration-300"
              >
                İletişime Geçin
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 