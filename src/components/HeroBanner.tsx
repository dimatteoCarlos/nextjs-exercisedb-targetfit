'use client';
import React, { useEffect } from 'react';
// import { useTitleApp } from '@/context/ThemeContextProvider';

const HeroBanner = () => {
  const banners = [
    '/banner.jpg',
    '/banner_1.png',
    '/banner_2.png',
    '/banner_3.png',
  ];

  const randomBannerImage = banners[Math.floor(Math.random() * banners.length)];

  const bannerImage = randomBannerImage;

  return (
    <>
      <div
        className='banner
         flex
         justify-between h-full  w-full pl-3
         max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:p-1
         dark:text-gray-200 dark:bg-gray-700 
      '
      >
        <div
          className='banner-L 
        flex flex-col flex-3/5
        min-w-[50%]
        max-sm:justify-center max-sm:items-center
        max-sm:w-full max-sm:p-1 max-sm:text-[2rem]
        '
        >
          <h1
            className='text-[1.5rem]
          text-amber-600 font-semibold py-2 '
          >
            {'Training Helper app'}
          </h1>

          <h2
            className='font-bold
           text-[30px] 
          lg:text-[35px] 
          mt-[30px] mb-[23px]
          max-[355px]:text-center
          '
          >
            <span>Set Target, Train Wisely </span> <br /> and{' '}
            <span className='text-amber-600'>Succeed</span>
          </h2>

          <p
            className='
          text-[1.375rem] 
          leading-[35px]
          max-sm:text-center
          '
          >
            Fit the right muscle with the right exercise routine
          </p>

          <div
            className='banner-l__btn
          max-w-[10rem]
          text-center text-[0.875rem]  p-2 px-2  
          
          rounded-md inline-block mt-[1.5rem] mb-[1rem]  
          cursor-pointer bg-amber-600 hover:bg-amber-700 

          lg:relative
          '
          >
            <a
              href='#exercises'
              className='text-white 
            '
            >
              Explore Exercises
            </a>
          </div>

          <h1
            className='hidden lg:block font-bold text-[10rem] text-red-400 opacity-15 dark:text-white
               md:absolute lg:bottom-[26%] 
          '
          >
            Exercise
          </h1>
        </div>

        <div
          className='banner-R  flex-2/5
          max-w-[50%]
          sm:min-h-[31.6rem]
          max-sm:min-w-full 
            
        '
        >
          <img
            // src={bannerImage}
            src={`${bannerImage}`}
            alt='hero-banner'
            className='object-cover 
            h-full w-full max-w-full
          
           sm:rounded-bl-[30%]
           max-sm:rounded-lg
         
           
            '
          />
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
