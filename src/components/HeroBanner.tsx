'use client';
import React, { useEffect } from 'react';


type HeroBannerPropsType = { bannerImage: string };

const HeroBanner = ({ bannerImage }: HeroBannerPropsType) => {
  return (
    <>
      <div
        className='banner
         flex lg:h-[580px]
         justify-between h-full  w-full pl-3 pb-0
         max-md:flex-col max-md:justify-center max-md:items-center max-md:p-0
         dark:text-gray-200 dark:bg-gray-700 
             lg:relative
      '
      >
        <div
          className='banner-L 
        flex flex-col flex-3/5
        min-w-[50%]
        max-md:justify-center max-md:items-center
        max-md:w-full max-md:p-0 max-md:text-[2rem]
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
          max-md:text-center
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
               md:absolute lg:top-[65%] 
          '
          >
            Exercise
          </h1>
        </div>

        <div
          className='banner-R  flex-2/5
          max-w-[50%]
          md:min-h-[31.6rem]
          max-md:min-w-full 
        '
        >
          <img
            src={`${bannerImage}`}
            alt='hero-banner'
            className='object-cover 
            h-full w-full max-w-full
             md:rounded-bl-[12%]        
            '
          />
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
