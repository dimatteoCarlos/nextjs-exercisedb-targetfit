'use server';
import HeroBanner from '@/components/HeroBanner';
import fetchData, { BASEURL_EXERCISEDB } from '@/utils/fetchData';
import { bodyPartList, targetList, equipmentList } from './_data/dataList';

import {
  bodyPartListImg,
  targetListImg,
  equipmentListImg,
} from './_data/imageList';

import exercisesBackup from './_data/exercises/exercises10.json';

import ShowListMenu from '@/components/ShowListMenu';

//---------------------
export type ListItemType = {
  name: string;
  img: string;
};

export type ListImgType = {
  [key: string]: { img: string };
};
// export type ListImgType = {
//   [key: string]: { name: string; img: string } | {}[];
// };

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

export type SearchParamsType = {
  searchParams: {
    genre: 'bodyPart' | 'equipment' | 'targetMuscle';
    //  | 'explore' | 'start';
  };
};

//-------------------------------c
const menBannersKeyList = {
  bodyPart: '/images/banners/bannerManBodyParts.png',
  equipment: '/images/banners/bannerMenEquipment.png',
  targetMuscle: '/images/banners/bannerExplore.png',
  explore: '/images/banners/bannerMenTargetMuscle.png',
  start: '/images/banners/bannerMenTargetMuscle.png',
};
const womenBannersKeyList = {
  bodyPart: '/images/banners/bannerWomenBodyParts.png',
  equipment: '/images/banners/bannerWomenEquipment.png',
  explore: '/images/banners/bannerExplorer.png',
  targetMuscle: '/images/banners/bannerWomenTargetMuscle.png',
  start: 'bannerWomanBodyParts.png',
};

const BannersKeyList = {
  // bodyPart: '/images/banners/bannerMenBodyPart.png',
  // bodyPart: '/images/banners/bannerWomanAndManBodyParts.png',
  // bodyPart: '/images/banners/bannerHumanBodyParts_2.png',
  bodyPart: '/images/banners/bannerMenTargetMuscle.png',
  equipment: '/images/banners/bannerWomenBodyParts.png',
  explore: '/images/banners/bannerWomenBodyParts.png',
  targetMuscle: '/images/banners/bannerWomenTargetMuscle.png',
  start: '/images/banners/bannerWomanAndManBodyParts.png',
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
};

const listDataBackup = {
  bodyPart: bodyPartList,
  equipment: equipmentList,
  targetMuscle: targetList,
  // explore: {},
  // start: {},
};

export type ListImgBackupType = {
  bodyPart: ListImgType;
  targetMuscle: ListImgType;
  equipment: ListImgType;
  // explore: ListImgType;
  // start: ListImgType;
};
const listImgBackup = {
  bodyPart: bodyPartListImg,
  equipment: equipmentListImg,
  targetMuscle: targetListImg,
  // explore: {},
  // start: {},
};

//--------------------c
export default async function Home({ searchParams }: SearchParamsType) {
  const genre = searchParams?.genre;
  const selectedKeyList = genre in BannersKeyList ? genre : 'bodyPart';

  //Request of listData from api

  const url = `${BASEURL_EXERCISEDB}${endpointLists[selectedKeyList]}`;
  const backupDataList = listDataBackup[selectedKeyList];
  const list = await fetchData<string>(url, backupDataList);

  console.log('List:', list);

  //So far there'are only figures for body part list

  //---bodyParts--------/

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

  //render
  return (
    <>
      <HeroBanner bannerImage={BannersKeyList[selectedKeyList]} />

      <div className='listMenu '>
        {/* ListMenu */}

        <ShowListMenu list={listData} selectedKeyList={selectedKeyList} />

        {/* {selectedKeyList == 'bodyPart' && (
        )} */}
      </div>
    </>
  );
}
