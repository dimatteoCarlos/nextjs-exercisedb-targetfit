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

//----------------------
