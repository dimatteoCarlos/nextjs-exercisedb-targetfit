'use server';
import HeroBanner from '@/components/HeroBanner';
import fetchData, { BASEURL_EXERCISEDB } from '@/utils/fetchData';
import {
  bodyPartList,
  bodyPartListGif,
  BodyPartListGifType,
} from './_data/bodyParts/BodyPartList';

import equipmentList from './_data/equipment/equipmentList.json';

import targetList from './_data/targets/targetList.json';

import exercisesBackup from './_data/exercises/exercises10.json';


import ShowListMenu from '@/components/ShowListMenu';


export type ListType = {
  ItemName: string;
  ItemImage: string;
};

export type BodyPartListType = {
  bodyPartName: string;
  bodyPartImage: string;
};

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
    genre: 'bodyPart' | 'equipment' | 'targetMuscle' | 'explore';
  };
};

const menBannersKeyList = {
  bodyPart: '/bannerMenBodyParts.png',
  equipment: '/bannerMenEquipment.png',
  targetMuscle: '/bannerExplore.png',
  explore: '/bannerMenTargetMuscle.png',
};
const womenBannersKeyList = {
  bodyPart: '/bannerWomenBodyParts.png',
  equipment: '/bannerWomenEquipment.png',
  explore: '/bannerExplorer.png',
  targetMuscle: '/bannerWomenTargetMuscle.png',
};

const BannersKeyList = {
  // bodyPart: '/bannerMenBodyPart.png',
  bodyPart: '/bannerWomanAndManBodyParts.png',
  equipment: '/bannerWomenBodyParts.png',
  explore: '/bannerMenTargetMuscle.png',
  targetMuscle: '/bannerWomenTargetMuscle.png',
};

const endpointLists = {
  bodyPart: '/exercises/bodyPartList',
  equipment: '/exercises/equipmentList',
  targetMuscle: '/exercises/targetList',
  explore: `/exercises?limit=20&offset=${Math.floor(
    Math.random() * (1324 - 20)
  )}`,
};

const listDataBackup = {
  bodyPart: bodyPartList,
  equipment: equipmentList,
  targetMuscle: targetList,
  explore: [],
};

export default async function Home({ searchParams }: SearchParamsType) {
  const genre = searchParams?.genre;
  const selectedKeyList = genre in BannersKeyList ? genre : 'explore';

  //Request of listData from api

  const url = `${BASEURL_EXERCISEDB}${endpointLists[selectedKeyList]}`;
  const backupDataList = listDataBackup[selectedKeyList];
  const list = await fetchData<string>(url, backupDataList);

  console.log('List:', list);

  //So far there'are only figures for body part list

  //---bodyParts--------/

  type BodyPartsArgType = {
    list: string[];
    bodyPartListGif: BodyPartListGifType; //pndte: volver a generar los data gif con estructura generica itemName and imageFileName
  };

  // function bodyParts ({list, bodyPartListGif}:BodyPartsArgType):BodyPartListType[]{

  function constructListMenu() {
    const listOfItems: BodyPartListType[] = Array.from(
      list!,
      (bodyPart: string) => {
        const obj = {
          bodyPartName: bodyPart,
          bodyPartImage:
            bodyPartListGif[bodyPart.split(' ').join('_')].img ??
            'not image found',
        };

        return { ...obj };
      }
    );
    return listOfItems;
  }
  //-----------------


  const listData = selectedKeyList === 'bodyPart' ? constructListMenu() : [];
  console.log({ selectedKeyList });

  console.log({ listData });

  //render
  return (
    <>
      <HeroBanner bannerImage={BannersKeyList[selectedKeyList]} />

      <div className='bodyPartListMenu '>

        {/* BodyPartListMenu */}



        {selectedKeyList == 'bodyPart' &&
        
        <ShowListMenu list={listData} selectedKeyList={selectedKeyList}   />
        
      
        
        }
      </div>

















    </>
  );
}
