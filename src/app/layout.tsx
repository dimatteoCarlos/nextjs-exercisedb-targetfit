
import type { Metadata } from 'next';
import './globals.css';
import { Josefin_Sans } from 'next/font/google';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import SearchBox from '@/components/SearchBox';
import './globals.css';
import ThemeContextProvider from '@/context/ThemeContextProvider';
import Header from '@/components/Header';
const font = Josefin_Sans({ subsets: ['latin'] });


const appNames=['TargetfiT',
  'muscleTune', 'CoreFitment', 'MuscleScope','TargetFlexion','fitAlign','FitMuscleXercise','targetflEx','TargetFleXrcise','muscleXercise','TargetXercise' ]
  const titleApp=appNames[Math.floor(Math.random()*(appNames.length-1))]

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
      </Head>
      <body className={`${font.className} antialiased`}>
        <ThemeContextProvider>
          <Header titleApp={titleApp}/>
          <Navbar />
          <SearchBox />
          {children}
        </ThemeContextProvider>
      </body>
    </html>
  );
}
