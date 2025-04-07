"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container-custom mx-auto">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="flex items-center">
                <Image 
                  src="/images/logo.png" 
                  alt="Ellora Sanat Evi Logo" 
                  width={150} 
                  height={50} 
                  className="h-12 w-auto" 
                />
              </div>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary focus:outline-none"
            >
              <svg 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isOpen ? (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                ) : (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                )}
              </svg>
            </button>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/#hakkimizda" className="text-gray-700 hover:text-primary px-2 py-1 rounded-md text-sm font-medium">
              Hakkımızda
            </Link>
            <Link href="/sanat-dallari" className="text-gray-700 hover:text-primary px-2 py-1 rounded-md text-sm font-medium">
              Sanat Dallarımız
            </Link>
            <Link href="/workshop" className="text-gray-700 hover:text-primary px-2 py-1 rounded-md text-sm font-medium">
              Workshop/Özel Ders
            </Link>
            <Link href="/dukkan" className="text-gray-700 hover:text-primary px-2 py-1 rounded-md text-sm font-medium">
              Dükkanımız
            </Link>
            <Link href="/sosyal-medya" className="text-gray-700 hover:text-primary px-2 py-1 rounded-md text-sm font-medium">
              Sosyal Medya
            </Link>
            <Link href="/iletisim" className="text-gray-700 hover:text-primary px-2 py-1 rounded-md text-sm font-medium">
              İletişim
            </Link>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/#hakkimizda" className="block text-gray-700 hover:text-primary px-3 py-2 rounded-md text-base font-medium">
                Hakkımızda
              </Link>
              <Link href="/sanat-dallari" className="block text-gray-700 hover:text-primary px-3 py-2 rounded-md text-base font-medium">
                Sanat Dallarımız
              </Link>
              <Link href="/workshop" className="block text-gray-700 hover:text-primary px-3 py-2 rounded-md text-base font-medium">
                Workshop/Özel Ders
              </Link>
              <Link href="/dukkan" className="block text-gray-700 hover:text-primary px-3 py-2 rounded-md text-base font-medium">
                Dükkanımız
              </Link>
              <Link href="/sosyal-medya" className="block text-gray-700 hover:text-primary px-3 py-2 rounded-md text-base font-medium">
                Sosyal Medya
              </Link>
              <Link href="/iletisim" className="block text-gray-700 hover:text-primary px-3 py-2 rounded-md text-base font-medium">
                İletişim
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 