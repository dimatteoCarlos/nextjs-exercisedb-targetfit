'use server';

import fetchData from '@/utils/fetchData';
import {
  BASEURL_EXERCISEDB,
  exerciseOptions,
  endpointList,
} from '@/utils/fetchConstants';
import HeroBanner from '@/components/HeroBanner';
import ShowListMenu from '@/components/ShowListMenu';

//----------backup data ------------
//exercises:
import { bodyPartList, targetList, equipmentList } from './_data/dataList'; //list names by genre
import {
  bodyPartListImg,
  targetListImg,
  equipmentListImg,
} from './_data/imageList'; //list of img addresses by genre
// import exercisesBackup from './_data/exercises/exercises10.json';

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
    name?: string;
  };
};

export type GenreType = SearchParamsType['searchParams']['genre'];

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

//--------------------
export default async function Home({ searchParams }: SearchParamsType) {
  const spAw = await searchParams;
  const genre = spAw?.genre;
  const selectedKeyList = genre ? genre : 'bodyPart'; //start
  //-------API info -------------
  //------exercisedb endpoints -------
  //---build url----
  const url = `${BASEURL_EXERCISEDB}${endpointList[selectedKeyList]}`;
  const backupDataList = listDataBackup[selectedKeyList];

  //-------------------------------------------------------------------
  //Request of listData from api

  const list = await fetchData<string>(url, exerciseOptions, backupDataList);

  // console.log('List:', list);

  //---build menu list with images from local files----/
  function constructListMenu(listName: string[], listImg: ListImgType) {
    const listOfItems: ListItemType[] = Array.from(listName, (item: string) => {
      const obj = {
        name: item,
        img:
          listImg[item.split(' ').join('_')].img ?? '/images/notFoundImg.png',
      };

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

  //-------------------------------------
  //render

  return (
    <>
      <HeroBanner selectedKeyList={selectedKeyList} />

      <ShowListMenu list={listData} selectedKeyList={selectedKeyList} />
    </>
  );
}
