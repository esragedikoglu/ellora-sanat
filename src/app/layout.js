import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Ellora Sanat Evi',
  description: 'Ellora Sanat Evi resmi web sitesi - Seramik, punch nakışı, bambu sepet örgüsü, dekoratif ahşap boyama ve mozaik sanat dallarında workshop ve özel dersler.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
} 