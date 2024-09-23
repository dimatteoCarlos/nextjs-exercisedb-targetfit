import React from 'react';
import { BodyPartListType } from '../app/page';
import RightArrowIcon from '../../public/assets/icons/right-arrow.png';
import LeftArrowIcon from '../../public/assets/icons/left-arrow.png';
type HzPropType = {
  data: BodyPartListType[];
};

function ShowListMenu({ data }: HzPropType) {
  return (
    <>
      {/* <div className='overflow-hidden'> */}
        <div
          className=' scroll-menu-wrapper text-[0.9rem] lg:text-[1.0rem] md:text-[0.89rem]
           font-semibold text-[#3A1212] capitalize4 
          grid lg:col-auto md:col-5 sm:col-3
          py-3 w-full overflow-x-auto
              dark:bg-gray-800 dark:text-gray-300 
              '
        >
          {data.map((part, indx) => {
            const imgUrl =
              part.bodyPartImage !== ''
                ? `/bodyPartImages/gif/${part.bodyPartImage}`
                : `/bodyPartImages/jpg/${part.bodyPartName}.jpg`;
            if (indx <= 9) {
              return (
                <div
                  className='
            flex flex-col justify-center items-center
            gap-2 cursor-pointer p-1 mx-2 text-center
            '
                  key={indx}
                  id={part.bodyPartName}
                >
                  {part.bodyPartName}

                  <img
                    src={imgUrl}
                    className='w-[6.5rem] h-[6.5rem] border-solid border-l-[8px] border-t-[12px] border-r-[2px] border-b-[1px] border-amber-600 rounded-full 
                    flex-shrink-0 min-w-[6.5rem]
                    '
                    alt={`body_part_${part.bodyPartName}`}
                  />
                </div>
              );
            }
            return null;
          })}
        </div>
      {/* </div> */}
    </>
  );
}

export default ShowListMenu;
