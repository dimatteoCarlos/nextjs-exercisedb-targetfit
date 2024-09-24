'use client';
import React, { useState } from 'react';
import RightArrowIcon from '../../public/assets/icons/right-arrow.png';
import LeftArrowIcon from '../../public/assets/icons/left-arrow.png';
import { BodyPartListType, SearchParamsType } from '@/app/page';
import fetchData, { BASEURL_EXERCISEDB } from '@/utils/fetchData';

// import exercisesBackup from './_data/exercises/exercises10.json';

import exercisesBodyPartBackup from '../app/_data/bodyParts/BackExercises.json';
import exercisesEquipmentBackup from '../app/_data/equipment/EquipmentExercisesData.json';
import exercisesTargetBackup from '../app/_data/targets/exerciseTarget_target.json';

export type ExerciseDataType = {
  id: string;
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  name: string;
  target: string;
  secondaryMuscles: string[];
  instructions: string[];
};

type ShowListMenuPropType = {
  list: BodyPartListType[];
  selectedKeyList: SearchParamsType['searchParams']['genre'];
};

function ShowListMenu({ list, selectedKeyList }: ShowListMenuPropType) {
  const [selectedListItem, setSelectedListItem] = useState<string | null>(null);
  // const [ExerciseData, setExerciseData] = useState(null);

  const handleSelectedItem = (name: string) => {
    console.log(name);
    if (list.some((part) => part.bodyPartName === name)) {
      setSelectedListItem(name);

    const exerciseData = fetchData<> (url, backupExercise)
    }
    //hacer el fetcha para obtener la data
    //setExerciseData(data)
  };

  return (
    <>
      {/* <div className='overflow-hidden'> */}
      <div
        className=' scroll-menu-wrapper text-[0.9rem] lg:text-[1.0rem] md:text-[0.89rem]
           font-semibold text-[#3A1212] capitalize 
          grid  grid-cols-2 lg:grid-cols-6  md:grid-cols-4 sm:grid-cols-3
          py-3 w-full overflow-x-auto
              dark:bg-gray-800 dark:text-gray-300 
           
              '
      >
        {list.map((part, indx) => {
          const imgUrl =
            part.bodyPartImage !== ''
              ? `/bodyPartImages/gif/${part.bodyPartImage}`
              : `/bodyPartImages/jpg/${part.bodyPartName}.jpg`;

          return (
            <div
              className={`listItem
            flex flex-col justify-center items-center  gap-2 
            cursor-pointer p-1 mx-2 text-center 
            group sm:hover:shadow-slate-400 sm:shadow-md 
            transition-shadow duration-200  

             ${
               selectedListItem === part.bodyPartName
                 ? ' border-[1px]  border-solid border-amber-600 rounded-lg z-1'
                 : ''
             }

            `}
              key={indx}
              id={part.bodyPartName}
              onClick={() => handleSelectedItem(part.bodyPartName)}
              // style={{ boxShadow: selectedListItem === part.bodyPartName ? 'overline' : 'none' }}
            >
              {part.bodyPartName}

              <img
                src={imgUrl}
                className='w-[6.0rem] h-[6.0rem] border-solid border-l-[8px] border-t-[12px] border-r-[2px] border-b-[1px] border-amber-600 rounded-full 
                    flex-shrink-0 min-w-[6.0rem]

                group-hover:opacity-75 duration-300
                    '
                alt={`body_part_${part.bodyPartName}`}
              />
            </div>
          );
        })}
      </div>
      {/* </div> */}
    </>
  );
}

export default ShowListMenu;
