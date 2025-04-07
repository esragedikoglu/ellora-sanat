"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/">
              <div>
                <Image 
                  src="/images/logo-white.png" 
                  alt="Ellora Sanat Evi Logo" 
                  width={150} 
                  height={50} 
                  className="h-12 w-auto mb-4" 
                />
              </div>
            </Link>
            <p className="text-sm mt-4">
              Ellora Sanat Evi, çeşitli sanat dallarında özel tasarım ürünler ve sanat eğitimleri sunan bir sanat atölyesidir.
            </p>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Sanat Dallarımız</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sanat-dallari/seramik" className="text-gray-300 hover:text-white text-sm">
                  Seramik
                </Link>
              </li>
              <li>
                <Link href="/sanat-dallari/punch-nakisi" className="text-gray-300 hover:text-white text-sm">
                  Punch Nakışı
                </Link>
              </li>
              <li>
                <Link href="/sanat-dallari/bambu-sepet" className="text-gray-300 hover:text-white text-sm">
                  Bambu Sepet Örgüsü
                </Link>
              </li>
              <li>
                <Link href="/sanat-dallari/ahsap-boyama" className="text-gray-300 hover:text-white text-sm">
                  Dekoratif Ahşap Boyama
                </Link>
              </li>
              <li>
                <Link href="/sanat-dallari/mozaik" className="text-gray-300 hover:text-white text-sm">
                  Mozaik
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Hızlı Erişim</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#hakkimizda" className="text-gray-300 hover:text-white text-sm">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/workshop" className="text-gray-300 hover:text-white text-sm">
                  Workshop/Özel Ders
                </Link>
              </li>
              <li>
                <Link href="/dukkan" className="text-gray-300 hover:text-white text-sm">
                  Dükkanımız
                </Link>
              </li>
              <li>
                <Link href="/sosyal-medya" className="text-gray-300 hover:text-white text-sm">
                  Sosyal Medya
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-gray-300 hover:text-white text-sm">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm">İstanbul, Türkiye</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm">info@ellorasanat.com</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm">+90 555 123 4567</span>
              </li>
              <li className="flex items-start mt-4">
                <div className="flex space-x-4">
                  <a href="https://instagram.com/ellorasanat" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Ellora Sanat Evi. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
} 