'use client';

import React, { useState, createContext, useContext, ReactNode } from 'react';

import { ExerciseDataType } from '../components/ShowListMenu';

type ExerciseContextProviderPropType = {
  children: ReactNode;
};

type ExerciseDataContextType = {
  exerciseData: ExerciseDataType[];
  setExerciseData: (exerciseData: ExerciseDataType[]) => void;
};

const ExerciseDataContext = createContext<ExerciseDataContextType | undefined>(
  undefined
);

function ExerciseContextProvider({
  children,
}: ExerciseContextProviderPropType) {
  const [exerciseData, setExerciseData] = useState<ExerciseDataType[]>([]);

  return (
    <ExerciseDataContext.Provider value={{ exerciseData, setExerciseData }}>
      {children}
    </ExerciseDataContext.Provider>
  );
}

export default ExerciseContextProvider;

// useHook useExerciseData

export const useExerciseData = () => {
  const context = useContext(ExerciseDataContext);
  if (!context) {
    throw new Error('useExerciseData must be used within an ExerciseProvider');
  }

  return context;
};
