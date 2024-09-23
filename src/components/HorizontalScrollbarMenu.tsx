'use client';
import React, { useContext } from 'react';
import {
  ScrollMenu,
  VisibilityContext,
  publicApiType,
} from 'react-horizontal-scrolling-menu';
import { BodyPartListType } from '../app/page';
import RightArrowIcon from '../../public/assets/icons/right-arrow.png';
import LeftArrowIcon from '../../public/assets/icons/left-arrow.png';
type HzPropType = {
  data: BodyPartListType[];
};

function onWheel(apiObj: publicApiType, ev: React.WheelEvent): void {
  // NOTE: no good standart way to distinguish touchpad scrolling gestures
  // but can assume that gesture will affect X axis, mouse scroll only Y axis
  // of if deltaY too small probably is it touchpad
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else {
    apiObj.scrollPrev();
  }
}


const LeftArrow = () => {
  const visibility = useContext<publicApiType>(VisibilityContext);
  const isFirstItemVisible = visibility.useIsVisible('first', true);

  const { scrollPrev } = useContext<publicApiType>(VisibilityContext) as {
    scrollPrev: () => void;
  };

  return (
    <div onClick={() => scrollPrev()} className='cursor-pointer'>
      <img src={LeftArrowIcon.src} alt='left-arrow' className='w-6 h-6' />
    </div>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext<publicApiType>(VisibilityContext) as {
    scrollNext: () => void;
  };


  return (
    <div onClick={() => scrollNext()} className='cursor-pointer'>
      <img src={RightArrowIcon.src} alt='right-arrow' className='w-6 h-6' />
    </div>
  );
};

function HorizontalScrollbarMenu({ data }: HzPropType) {

  return (
    <>
    <div className='overflow-hidden'>
      <div
        className=' scroll-menu-wrapper text-[1.25rem] font-bold text-[#3A1212] capitalize flex items-center justify-center py-1 w-full border-1 border-solid border-red-700
              dark:bg-gray-800 dark:text-gray-300 
              '
      >
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}   onWheel={onWheel}>
          {data.map((part, indx) => {
            const imgUrl =
              part.bodyPartImage !== ''
                ? `/bodyPartImages/gif/${part.bodyPartImage}`
                : `/bodyPartImages/jpg/${part.bodyPartName}.jpg`;
            return (
              <div
                className='
            flex flex-col justify-center items-center
            gap-3 cursor-pointer p-1 mx-2
            '
                key={indx}
                id={part.bodyPartName}
              >
                {part.bodyPartName}
                <img
                  src={imgUrl}
                  className='w-[9rem] h-[9rem] border-solid border-l-[8px] border-t-[12px] border-r-[2px] border-b-[1px] border-amber-500 rounded-full '
                  alt='body part image'
                />
              </div>
            );
          })}
        </ScrollMenu>
      </div>
      </div>
    </>
  );
}

export default HorizontalScrollbarMenu;
