export type BannerKeyListType = {
  bodyPart: string;
  equipment: string;
  targetMuscle: string;
  explore?: string;
  start?: string;
};

//-------------------
export const bannerOptionsName = {
  bannersKeyList: 'bannersKeyList',
  womenBannersKeyList: 'womenBannersKeyList',
  menBannersKeyList: 'menBannersKeyList',
  bannersKeyExercises: 'bannersKeyExercises',
  otherBannersKeyList: 'otherBannersKeyList',
};

//--------set of banners---------------------------
export const menBannersKeyList: BannerKeyListType = {
  bodyPart: '/images/banners/bannerManBodyParts.png',
  equipment: '/images/banners/bannerEquipment1.png',
  targetMuscle: '/images/banners/bannerMenTargetMuscle.png',
  explore: '/images/banners/bannerExplorer.png',
  start: '/images/banners/bannerMenEquipment.png',
};

export const womenBannersKeyList: BannerKeyListType = {
  bodyPart: '/images/banners/bannerWomenBodyParts.png',
  equipment: '/images/banners/bannerEquipment2.png',
  explore: '/images/banners/bannerWomenEquipment.png',
  targetMuscle: '/images/banners/bannerWomenTargetMuscle.png',
  start: '/images/banners/bannerExplorer.png',
};

export const bannersKeyList: BannerKeyListType = {
  // bodyPart: '/images/banners/bannerMenBodyPart.png',
  bodyPart: '/images/banners/bannerWomanAndManBodyParts.png',
  // bodyPart: '/images/banners/bannerHumanBodyParts_2.png',
  // bodyPart: '/images/banners/bannerMenTargetMuscle.png',
  equipment: '/images/banners/bannerWomanAndMenEquipment.png',
  // equipment: '/images/banners/bannerEquipment4.png',
  // equipment: '/images/banners/bannerEquipment3.png',
  explore: '/images/banners/bannerWomenBodyParts.png',
  targetMuscle: '/images/banners/bannerMenTargetMuscle.png',
  // targetMuscle: '/images/banners/bannerWomenEquipment.png',
  start: '/images/banners/bannerWomanAndManBodyParts.png',
};

export const bannersKeyExercises: BannerKeyListType = {
  // bodyPart: '/images/banners/bannerMenBodyPart.png',
  // bodyPart: '/images/banners/bannerWomanAndManBodyParts.png',
  // bodyPart: '/images/banners/bannerHumanBodyParts_2.png',
  bodyPart: '/images/banners/bannerHumanBodyParts.png',
  // equipment: '/images/banners/bannerEquipment4.png',
  equipment: '/images/banners/bannerWomenEquipment.png',
  explore: '/images/banners/bannerExplorer.png',
  targetMuscle: '/images/banners/bannerExplorer.png',

  start: '/images/banners/bannerWomanAndManBodyParts.png',
};

export const otherBannersKeyList: BannerKeyListType = {
  bodyPart: '/images/banners/bannerWomanAndManBodyParts.png',
  equipment: '/images/banners/bannerWomenEquipment.png',
  targetMuscle: '/images/banners/bannerMenBodyParts.png',
  explore: '/images/banners/bannerExplorer.png',
};

//---------------------------------------
