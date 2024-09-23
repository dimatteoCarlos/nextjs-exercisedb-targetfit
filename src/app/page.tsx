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

import { exerciseOptions } from '@/utils/fetchData';
import ShowListMenu from '@/components/ShowListMenu';

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

type SearchParamsType = {
  searchParams: {
    genre: 'bodyPart' | 'equipment' | 'targetMuscle' | 'explore';
  };
};

const menBanners = {
  bodyPart: '/bannerMenBodyParts.png',
  equipment: '/bannerMenEquipment.png',
  targetMuscle: '/bannerExplore.png',
  explore: '/bannerMenTargetMuscle.png',
};
const womenBanners = {
  bodyPart: '/bannerWomenBodyParts.png',
  equipment: '/bannerWomenEquipment.png',
  explore: '/bannerExplorer.png',
  targetMuscle: '/bannerWomenTargetMuscle.png',
};
const banners = {
  bodyPart: '/bannerMenBodyPart.png',
  equipment: '/bannerWomenBodyParts.png',
  explore: '/bannerMenTargetMuscle.png',
  targetMuscle: '/bannerWomenTargetMuscle.png',
};

const endpointLists = {
  bodyPart: '/exercises/bodyPartList',
  equipment: '/exercises/equipmentList',
  targetMuscle: '/exercises/targetList',
  explore: `/exercises?limit=1&offset=${Math.floor(
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

  // const selectedKey = genre in banners ? genre : 'explore';
  const selectedKey = genre in womenBanners ? genre : 'explore';

  const url = `${BASEURL_EXERCISEDB}${endpointLists[selectedKey]}`;
  const backupDataList = listDataBackup[selectedKey];

  const list = await fetchData<string>(url, backupDataList);

  console.log('results:', list);

  //So far there'are only figures for body part list

  //---bodyParts--------/

  type BodyPartsArgType = {
    list: string[];
    bodyPartListGif: BodyPartListGifType;
  };

  // function bodyParts ({list, bodyPartListGif}:BodyPartsArgType):BodyPartListType[]{

  function bodyParts() {
    const bodyParts: BodyPartListType[] = Array.from(
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
    return bodyParts;
  }

  const bodyPartListData = selectedKey === 'bodyPart' ? bodyParts() : [];
  console.log({ selectedKey });

  console.log({ bodyPartListData });

  //render
  return (
    <>
      <HeroBanner bannerImage={banners[selectedKey]} />

      <div
        className='   '
      >
        {/* BodyPartListMenu */}

        {selectedKey == 'bodyPart' && <ShowListMenu data={bodyPartListData} />}
      </div>
    </>
  );
}
