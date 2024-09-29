'use client';
// import RightArrowIcon from '../../public/assets/icons/right-arrow.png';
// import LeftArrowIcon from '../../public/assets/icons/left-arrow.png';
import { ListItemType, SearchParamsType } from '@/app/page';
import fetchData, { BASEURL_EXERCISEDB } from '@/utils/fetchData';

//backup data for exercises
import exercisesBodyPartDataBackup from '../app/_data/bodyParts/exercises/backExercises.json';
import exercisesEquipmentDataBackup from '../app/_data/equipment/equipmentExercisesData.json';
import exercisesTargetDataBackup from '../app/_data/targets/exerciseTarget_target.json';
import exerciseExploreDataBackup from '../app/_data/exercises/exerciseId.json';

import { useRouter } from 'next/navigation';
import { useExerciseData } from '@/context/ExercisesContextProvider';
import { useState } from 'react';

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
  bodyPart: exercisesBodyPartDataBackup,
  equipment: exercisesEquipmentDataBackup,
  targetMuscle: exercisesTargetDataBackup,
  // explore: exerciseExploreDataBackup,
};

// console.log({ exercisesDataBackupKey });
//----------------------------------------
function ShowListMenu({
  list,
  selectedKeyList,
}: ShowListMenuPropType): React.JSX.Element {
  const [selectedListItem, setSelectedListItem] = useState<string | null>(null);
  const { setExerciseData } = useExerciseData();
  const router = useRouter();

  //-----get name from item list menu to fetch exercises------
  const handleSelectedItem = async (name: string) => {
    // console.log({ name }, list);

    if (list.some((item) => item.name == name)) {
      setSelectedListItem(name);

      // console.log(
      //   list.some((item) => item.name == name),
      //   { selectedListItem }
      // );

      //------endpoint construction-------------
      const urlQuery = `?limit=1325&offset=0`;

      //placeholder for explore and start
      // selectedKeyList == 'explore'
      //   ? ''
      //   : `?limit=10&offset=${Math.floor(Math.random() * 11)}}`;

      const url = `${BASEURL_EXERCISEDB}${endpointExercises[selectedKeyList]}${name}${urlQuery}`;

      const backupExercisesData = exercisesDataBackupKey[selectedKeyList];

      // console.log({ selectedListItem }, { urlQuery });

      // console.log({ BASEURL_EXERCISEDB }, endpointExercises[selectedKeyList]);

      // console.log({ url });

      //----request to api--------------

      const exercisesData = await fetchData<ExerciseDataType>(
        url,
        backupExercisesData
      );
      try {
        // Solicitar los datos de ejercicios
        const exercisesData = (await fetchData<ExerciseDataType[]>(
          url,
          backupExercisesData
        )) as ExerciseDataType[];

        if (Array.isArray(exercisesData)) {
          setExerciseData(exercisesData);
        } else {
          console.error('Expected exercises data to be an array');
        }

        router.push(`/show-exercises/?genre=${selectedKeyList}&name=${name}`);
      } catch (error) {
        console.error('Error fetching exercises data:', error);
      }
    }
  };

  //========================

  return (
    <>
      {/* List Menu */}
      <div
        className={`listMenu ${
          list.length > 12 ? '' : 'scroll-menu-wrapper'
        } text-[0.9rem] lg:text-[1.0rem] md:text-[0.89rem]
           font-semibold text-[#3A1212] capitalize 
          grid gap-5  grid-cols-2 lg:grid-cols-6  md:grid-cols-4 sm:grid-cols-3
          py-8 px-3 w-full overflow-x-auto
          dark:bg-gray-800 dark:text-gray-300 `}
      >
        {list.map((item, indx) => {
          const imgUrl =
            item.img !== '' || !item.img ? item.img : '/images/notFoundImg.png';

          return (
            <div
              className={`listItem
            flex flex-col justify-center items-center  gap-3 
            cursor-pointer text-center 
            group sm:hover:shadow-slate-400 sm:shadow-md 
            transition-shadow duration-200 p-3 

             ${
               selectedListItem === item.name
                 ? ' border-[1px]  border-solid border-amber-600 rounded-lg z-1'
                 : ''
             }
            `}
              key={indx}
              id={item.name}
              onClick={() => handleSelectedItem(item.name)}
            >
              {item.name}

              <img
                src={imgUrl}
                className='w-[7.5rem] h-[7.5rem] border-solid border-l-[8px] border-t-[12px] border-r-[2px] border-b-[1px] border-amber-600 rounded-full flex-shrink-0 min-w-[7.5rem]
                group-hover:opacity-75 duration-300'
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
