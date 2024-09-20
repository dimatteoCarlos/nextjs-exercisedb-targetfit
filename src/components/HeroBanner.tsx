'use client';
import React, { useEffect } from 'react';
// import { useTitleApp } from '@/context/ThemeContextProvider';

const HeroBanner = ({ titleApp }: { titleApp: string }) => {
  // const {titleApp, setTitleApp} = useTitleApp();

  // useEffect(()=>{
  //   setTitleApp(titleApp)
  // }, [titleApp])

  return (
    <>
      <div className='flex justify-between max-h-[650px] w-full pl-3 dark:text-gray-200 dark:bg-gray-700'>
        <div className='w-3/5'>
          <h1 className='text-amber-600 font-semibold text-[26px]'>
            {titleApp}
          </h1>

          <h2 className='font-bold text-[30px] lg:text-[35px] mt-[30px] mb-[23px]'>
            <span>Set Target, Train Wisely </span> <br /> and{' '}
            <span className='text-amber-600'>Succeed</span>
          </h2>

          <p className='text-[22px] font-alegreya leading-[35px]'>
            Fit the right muscle with the right exercise routine
          </p>

          <div className='mt-[45px]'>
            <a
              href='#exercises'
              className='block w-[200px] text-center bg-amber-600 text-white text-[22px] py-[14px] rounded-[4px] hover:bg-amber-700'
            >
              Explore Exercises
            </a>
          </div>
          <h1 className='hidden lg:block font-bold text-[200px] text-amber-700 opacity-10'>
            Exercise
          </h1>
        </div>
        <div className='aspect-w-16 aspect-h-9 w-2/5'>
          <img
            src={'/banner.jpg'}
            alt='hero-banner'
            className='object-cover h-full rounded-bl-[10%]'
          />
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
