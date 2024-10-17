import type { Metadata } from 'next';
import Head from 'next/head';
import './globals.css';
import { Josefin_Sans } from 'next/font/google';
import Navbar from '@/components/Navbar';
import ThemeContextProvider from '@/context/ThemeContextProvider';
import Header from '@/components/Header';
import ExerciseContextProvider from '@/context/ExercisesContextProvider';
const font = Josefin_Sans({ subsets: ['latin'] });
// import SearchBox from '@/components/SearchBox';

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
        <link
          rel='preload'
          href='/_next/static/css/app/layout.css?v=1727798135398'
          as='style'
        />

        <link rel='preload' href='/assets/loaders/Spin.svg' as='image' />

        <noscript>
          <link
            rel='stylesheet'
            href='/_next/static/css/app/layout.css?v=1727798135398'
          />
        </noscript>
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
