import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const revalidate = 30;

const inter = Inter({ subsets: ['latin'] });

const url = new URL('https://www.schleidens.dev/');

export const metadata: Metadata = {
  icons: {
    icon: ['/public/favicon.ico'],
    apple: ['/public/apple-touch-icon.png?v=4'],
    shortcut: ['/public/apple-touch-icon.png'],
  },
  title: 'Alectine Schleidens - Fullstack Software Developer',
  description:
    'I am a software developer specializing in building user-friendly web-apps. Problem solver, calm under pressure, quick learner with the goal of customer satisfaction.',
  metadataBase: url,
  openGraph: {
    title: 'Alectine Schleidens - Fullstack Software Developer',
    description:
      'I am a software developer specializing in building user-friendly web-apps. Problem solver, calm under pressure, quick learner with the goal of customer satisfaction.',
    siteName: 'Alectine Schleidens - Fullstack Software Developer',
    url: url,
    type: 'website',
    images: 'https://www.schleidens.dev/Alectine_Schleidens.jpg',
  },
  keywords:
    'Schleidens, Schleiden, Schlei, Dens, Schlei Dens, Alectine, Alextine, Alec, Alex, Tchway, Try',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
