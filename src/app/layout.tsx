import type { Metadata } from 'next';
import Head from 'next/head';
import './globals.css';
import { Josefin_Sans } from 'next/font/google';
import Navbar from '@/components/Navbar';
import SearchBox from '@/components/SearchBox';
import ThemeContextProvider from '@/context/ThemeContextProvider';
import Header from '@/components/Header';
import ExerciseContextProvider from '@/context/ExercisesContextProvider';
const font = Josefin_Sans({ subsets: ['latin'] });

const titleApp = 'TargetfiT';

export const metadata: Metadata = {
  title: `${titleApp}: fit the right muscle with the right exercise routine`,
  description: 'ExerciseDb rapidapi using next js typescript and tailwind css',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <Head>
        <meta name='author' content='CADR' />
        <meta
          property='og:CADR'
          content='Coding Architecture for Dynamic Results'
        />
      </Head>
      <body className={`${font.className} antialiased`}>
        <ThemeContextProvider>
          <ExerciseContextProvider>
            <Header titleApp={titleApp} />
            <Navbar />
            {/* <SearchBox /> */}
            {children}
          </ExerciseContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
