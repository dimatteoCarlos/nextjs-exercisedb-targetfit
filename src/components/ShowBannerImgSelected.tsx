'use client';
import {
  menBannersKeyList,
  womenBannersKeyList,
  bannersKeyExercises,
  otherBannersKeyList,
  bannersKeyList,
  BannerKeyListType,
} from '@/utils/bannersDefinition';

import { SearchParamsType } from '@/app/page';

// export type BannerKeyListType = {
//   bodyPart: string;
//   equipment: string;
//   targetMuscle: string;
//   explore?: string;
//   start?: string;
// };

export type SelectedKeyListType = SearchParamsType['searchParams']['genre'];
// 'bodyPart' | 'equipment' | 'targetMuscle';
//  | 'explore' | 'start';

export type BannerSelectionPropType = {
  selectedKeyList: SelectedKeyListType;
  selectedBannerGroup:
    | 'menBannersKeyList'
    | 'womenBannersKeyList'
    | 'bannersKeyList'
    | 'bannersKeyExercises'
    | 'otherBannersKeyList';
};

//---------------------------------------
// const menBannersKeyList: BannerKeyListType = {
//   bodyPart: '/images/banners/bannerManBodyParts.png',
//   equipment: '/images/banners/bannerMenEquipment.png',
//   targetMuscle: '/images/banners/bannerExplorer.png',
//   explore: '/images/banners/bannerMenTargetMuscle.png',
//   start: '/images/banners/bannerMenTargetMuscle.png',
// };

// const womenBannersKeyList: BannerKeyListType = {
//   bodyPart: '/images/banners/bannerWomenBodyParts.png',
//   equipment: '/images/banners/bannerWomenEquipment.png',
//   explore: '/images/banners/bannerExplorer.png',
//   targetMuscle: '/images/banners/bannerWomenTargetMuscle.png',
//   start: '/images/banners/bannerWomanBodyParts.png',
// };

// const bannersKeyList: BannerKeyListType = {
//   // bodyPart: '/images/banners/bannerMenBodyPart.png',
//   // bodyPart: '/images/banners/bannerWomanAndManBodyParts.png',
//   // bodyPart: '/images/banners/bannerHumanBodyParts_2.png',
//   bodyPart: '/images/banners/bannerMenTargetMuscle.png',
//   equipment: '/images/banners/bannerWomenBodyParts.png',
//   explore: '/images/banners/bannerWomenBodyParts.png',
//   targetMuscle: '/images/banners/bannerWomenTargetMuscle.png',
//   start: '/images/banners/bannerWomanAndManBodyParts.png',
// };

// const bannersKeyExercises: BannerKeyListType = {
//   // bodyPart: '/images/banners/bannerMenBodyPart.png',
//   // bodyPart: '/images/banners/bannerWomanAndManBodyParts.png',
//   // bodyPart: '/images/banners/bannerHumanBodyParts_2.png',
//   bodyPart: '/images/banners/bannerHumanBodyParts.png',
//   equipment: '/images/banners/bannerMenEquipment.png',
//   explore: '/images/banners/bannerExplorer.png',
//   targetMuscle: '/images/banners/bannerMenTargetMuscle.png',
//   // start: '/images/banners/bannerWomenEquipment.png',
// };
// const otherBannersKeyList: BannerKeyListType = {
//   bodyPart: '/images/banners/bannerWomanAndManBodyParts.png',
//   equipment: '/images/banners/bannerWomenEquipment.png',
//   targetMuscle: '/images/banners/bannerMenBodyParts.png',
//   explore: '/images/banners/bannerExplorer.png',
// };

//---------------------------------------
export type BannerOptionsType = {
  [key: string]: BannerKeyListType;
};

export const bannerOptions: BannerOptionsType = {
  bannersKeyList,
  womenBannersKeyList,
  menBannersKeyList,
  bannersKeyExercises,
  otherBannersKeyList,
};

//----------------------------
function ShowBannerImgSelected({
  selectedKeyList,
  selectedBannerGroup,
}: BannerSelectionPropType) {
  //------show banner hero image-------c

  const selectedBannerAddress =
    bannerOptions[selectedBannerGroup][selectedKeyList];
  console.log({ selectedBannerAddress });

  return (
    <>
      <img
        src={`${selectedBannerAddress}`}
        alt='hero-banner'
        className='object-cover 
            h-full w-full max-w-full
             md:rounded-bl-[12%]        
            '
      />
    </>
  );
}

export default ShowBannerImgSelected;
