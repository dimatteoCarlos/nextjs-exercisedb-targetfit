'use client';
import {
  menBannersKeyList,
  womenBannersKeyList,
  bannersKeyExercises,
  otherBannersKeyList,
  bannersKeyList,
  BannerKeyListType,
  onlyWomenBannersKeyList
} from '@/utils/bannersDefinition';

import { SearchParamsType } from '@/app/page';
import Image from 'next/image';

export type SelectedKeyListType = SearchParamsType['searchParams']['genre'];

export type BannerSelectionPropType = {
  selectedKeyList: SelectedKeyListType;
  selectedBannerGroup:
    | 'menBannersKeyList'
    | 'womenBannersKeyList'
    | 'bannersKeyList'
    | 'bannersKeyExercises'
    | 'otherBannersKeyList'
    | 'onlyWomenBannersKeyList';
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
  onlyWomenBannersKeyList
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
      <Image
        src={`${selectedBannerAddress}`}
        alt='hero-banner'
        className='object-cover 
            h-full w-full max-w-full
             md:rounded-bl-[12%]        
            '
            width={1024}
            height={1024}
      />
    </>
  );
}

export default ShowBannerImgSelected;
