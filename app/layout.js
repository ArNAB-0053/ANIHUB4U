import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/Components/Header'
import NextTopLoader from 'nextjs-toploader';
import Footer from '@/Components/Footer';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ANIHUB4U',
  description: 'A anime reviewing platform',
}

export default function RootLayout({ children }) {
  console.clear();
  return (
    <html lang="en">
      <body className={`bg-[#f4f4f4] dark:bg-[#1d1d1f] ${inter.className} `}>
        <NextTopLoader color="#ff0000" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
