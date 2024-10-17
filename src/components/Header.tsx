'use client';

import React, { useEffect, useState } from 'react';
import { BsFillInfoCircleFill } from 'react-icons/bs';

import Logo from './Logo';
import MenuLink from './MenuLink';
import ThemeModeSwitch from './ThemeModeSwitch';
// import { useTitleApp } from '@/context/ThemeContextProvider';

function Header({ titleApp }: { titleApp: string }) {
  // const [titleAppHeader, setTitleAppHeader] = useState<string>(titleApp);

  // useEffect(() => {
  //   console.log('app title state:', titleAppHeader);
  //   setTitleAppHeader(titleApp);
  // }, [titleApp]);

  return (
    <header className='flex justify-between items-center w-full max-w-6xl mx-auto h-[4rem] px-3 py-5 gap-3 bg-transparent dark:text-gray-200 dark:bg-gray-700 '>
      <Logo title={titleApp} logo={'/images/logoImg.png'} route={'/'}></Logo>

      <ThemeModeSwitch />

      <MenuLink
        title={'about'}
        Icon={BsFillInfoCircleFill}
        route={'/about'}
      ></MenuLink>
    </header>
  );
}

export default Header;
