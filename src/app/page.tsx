'use server';
import HeroBanner from '@/components/HeroBanner';
import fetchData, { BASEURL_EXERCISEDB } from '@/utils/fetchData';

import ShowListMenu from '@/components/ShowListMenu';
import ExerciseContextProvider from '@/context/ExercisesContextProvider';

//----------backup data ------------
import { bodyPartList, targetList, equipmentList } from './_data/dataList';
import {
  bodyPartListImg,
  targetListImg,
  equipmentListImg,
} from './_data/imageList';
import exercisesBackup from './_data/exercises/exercises10.json';

//---------------------
export type ListItemType = {
  name: string;
  img: string;
};

export type ListImgType = {
  [key: string]: { img: string };
};

export type ListImgBackupType = {
  bodyPart: ListImgType;
  targetMuscle: ListImgType;
  equipment: ListImgType;
  // explore: ListImgType;
  // start: ListImgType;
};

export type SearchParamsType = {
  searchParams: {
    genre: 'bodyPart' | 'equipment' | 'targetMuscle';
    //  | 'explore' | 'start';
  };
};

//--------------------

const listDataBackup = {
  bodyPart: bodyPartList,
  equipment: equipmentList,
  targetMuscle: targetList,
  // explore: {},
  // start: {},
};

const listImgBackup = {
  bodyPart: bodyPartListImg,
  equipment: equipmentListImg,
  targetMuscle: targetListImg,
  // explore: {},
  // start: {},
};
//----------------------
const endpointLists = {
  bodyPart: '/exercises/bodyPartList',
  equipment: '/exercises/equipmentList',
  targetMuscle: '/exercises/targetList',
  // explore: `/exercises?limit=20&offset=${Math.floor(
  //   Math.random() * (1324 - 20)
  // )}`,
  // start: '',
  //search
};

//--------------------c
export default async function Home({ searchParams }: SearchParamsType) {
  const genre = searchParams?.genre;
  const selectedKeyList = genre ? genre : 'bodyPart';

  //Request of listData from api

  const url = `${BASEURL_EXERCISEDB}${endpointLists[selectedKeyList]}`;
  const backupDataList = listDataBackup[selectedKeyList];
  const list = await fetchData<string>(url, backupDataList);

  console.log('List:', list);

  //So far there'are only figures for body part list and target list

  //---build menu list with images from local files--------/

  function constructListMenu(listName: string[], listImg: ListImgType) {
    const listOfItems: ListItemType[] = Array.from(listName, (item: string) => {
      const obj = {
        name: item,
        img:
          listImg[item.split(' ').join('_')].img ?? '/images/notFoundImg.png',
      };

      console.log({ obj });
      return { ...obj };
    });
    console.log('listOfItems:', listOfItems);
    return listOfItems;
  }
  //-----------------
  const listData =
    selectedKeyList in listImgBackup && Array.isArray(list)
      ? constructListMenu(list, listImgBackup[selectedKeyList])
      : [];

  console.log({ selectedKeyList });

  console.log({ listData });

  //-------------------------------------
  //render

  return (
    <>
      <HeroBanner selectedKeyList={selectedKeyList} />

      <div className='listMenu '>
        {/* ListMenu */}
        <ExerciseContextProvider>
          <ShowListMenu list={listData} selectedKeyList={selectedKeyList} />
        </ExerciseContextProvider>
      </div>
    </>
  );
}
