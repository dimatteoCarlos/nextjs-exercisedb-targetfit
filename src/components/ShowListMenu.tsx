'use client';
import React, { useState } from 'react';
import RightArrowIcon from '../../public/assets/icons/right-arrow.png';
import LeftArrowIcon from '../../public/assets/icons/left-arrow.png';
import { ListItemType, SearchParamsType } from '@/app/page';
import fetchData, { BASEURL_EXERCISEDB } from '@/utils/fetchData';

import { backExercises } from '../app/_data/bodyParts/exercises/backExercises';
// import exercisesBodyPartDataBackup from '../app/_data/bodyParts/BackExercises';
import exerciseExploreDataBackup from '../app/_data/exercises/exerciseId.json';
import exercisesEquipmentDataBackup from '../app/_data/equipment/EquipmentExercisesData.json';
import exercisesTargetDataBackup from '../app/_data/targets/exerciseTarget_target.json';

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
export type ExerciseDataType1 = {
  [key: string]: string | string[];
};
type endpointExercisesType = {
  bodyPart: string;
  equipment: string;
  targetMuscle: string;
  explore?: string;
  start?: string;
};

type ShowListMenuPropType = {
  list: ListItemType[];
  selectedKeyList: SearchParamsType['searchParams']['genre'];
};

//---------------------------------
const endpointExercises: endpointExercisesType = {
  bodyPart: '/exercises/bodyPart/',
  equipment: '/exercises/equipment/',
  targetMuscle: '/exercises/target/',
  explore: `/exercises/exercise/`,
  start: `/exercises/exercise/`,
};

const exercisesDataBackupKey = {
  bodyPart: 'backExercises', //exercisesBodyPartDataBackup,
  // equipment: exercisesEquipmentDataBackup,
  // targetMuscle: exercisesTargetDataBackup,
  // explore: exerciseExploreDataBackup,
};

console.log({ exercisesDataBackupKey });
//----------------------------------------
function ShowListMenu({
  list,
  selectedKeyList,
}: ShowListMenuPropType): React.JSX.Element {
  const [selectedListItem, setSelectedListItem] = useState<string | null>(null);
  // const [ExerciseData, setExerciseData] = useState(null);

  const handleSelectedItem = async (name: string) => {
    console.log(name);
    if (list.some((item) => item.name === name)) {
      setSelectedListItem(name);
      //------endpoint construction-------------
      const urlQuery = `?limit=20&offset=${Math.floor(
        Math.random() * (21 * 0)
      )}`;

      //placeholder for explore and start
      // selectedKeyList == 'explore'
      //   ? ''
      //   : `?limit=20&offset=${Math.floor(Math.random() * (21 * 0))}`;

      const url = `${BASEURL_EXERCISEDB}${endpointExercises[selectedKeyList]}${selectedListItem}${urlQuery}`;

      //CONFUSION EN MANEJO DE DATOA
      const backupExercisesData = exercisesDataBackupArray[selectedKeyList];

      const exercisesData = await fetchData<ExerciseDataType>(
        url,
        backupExercisesData
      );

      console.log('ExercisesData:', exercisesData);
    }
    //hacer el fetcha para obtener la data
    //setExerciseData(data)
  };

  return (
    <>
      {/* Horizonal List Menu */}
      <div
        className=' scroll-menu-wrapper text-[0.9rem] lg:text-[1.0rem] md:text-[0.89rem]
           font-semibold text-[#3A1212] capitalize 
          grid  grid-cols-2 lg:grid-cols-6  md:grid-cols-4 sm:grid-cols-3
          py-8 w-full overflow-x-auto
              dark:bg-gray-800 dark:text-gray-300 
           
              '
      >
        {list.map((item, indx) => {
          const imgUrl =
            item.img !== '' || !item.img ? item.img : '/images/notFoundImg.png';

          return (
            <div
              className={`listItem
            flex flex-col justify-center items-center  gap-2 
            cursor-pointer p-1 mx-2 text-center 
            group sm:hover:shadow-slate-400 sm:shadow-md 
            transition-shadow duration-200 

             ${
               selectedListItem === item.name
                 ? ' border-[1px]  border-solid border-amber-600 rounded-lg z-1'
                 : ''
             }

            `}
              key={indx}
              id={item.name}
              // onClick={() => handleSelectedItem(item.name)}
              // style={{ boxShadow: selectedListItem === item.name ? 'overline' : 'none' }}
            >
              {item.name}

              <img
                src={imgUrl}
                className='w-[6.0rem] h-[6.0rem] border-solid border-l-[8px] border-t-[12px] border-r-[2px] border-b-[1px] border-amber-600 rounded-full 
                    flex-shrink-0 min-w-[6.0rem]

                group-hover:opacity-75 duration-300
                    '
                alt={`body_part_${item.name}`}
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
