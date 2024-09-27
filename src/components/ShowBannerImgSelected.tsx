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

export type SelectedKeyListType = SearchParamsType['searchParams']['genre'];

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
  // console.log(
  //   'SBIS:',
  //   bannerOptions[selectedBannerGroup][selectedKeyList],
  //   selectedKeyList,
  //   selectedBannerGroup
  // );

  const selectedBannerAddress =
    bannerOptions[selectedBannerGroup][selectedKeyList];

  // console.log({ selectedBannerAddress });

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
