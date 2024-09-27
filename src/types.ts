import { ReactNode } from 'react';

//ShowListMenu.tsx
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

export type endpointExercisesType = {
  bodyPart: string;
  equipment: string;
  targetMuscle: string;
  explore?: string;
  start?: string;
};

//-----/app/page.tsx----------------
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

export type GenreType = SearchParamsType['searchParams']['genre'];

//----ExerciseContextProvider.tsx-----
type ExerciseContextProviderPropType = {
  children: ReactNode;
};

type ExerciseDataContextType = {
  exerciseData: ExerciseDataType[];
  setExerciseData: (exerciseData: ExerciseDataType[]) => void;
};

//----ShowBannerImgSelected.tsx----------------

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

export type BannerOptionsType = {
  [key: string]: BannerKeyListType;
};
//---HeroBanner.tsx------------------------
type HeroBannerPropsType = { selectedKeyList: SelectedKeyListType };

//----------Card.tsx-----------------------------

export type CardPropsType = {
  exercise: ExerciseDataType;
  genre: GenreType;
  selectedName: string;
  cardOrder: number;
};
//------BannersDefinition.tsx----------
export type BannerKeyListType = {
  bodyPart: string;
  equipment: string;
  targetMuscle: string;
  explore?: string;
  start?: string;
};
//---------------------------------------

//---------------------------------------
