'use client';

import React, { useEffect, useState } from 'react';

function useStates() {
  const appNames = [
    'TargetfiT',
    'muscleTune',
    'CoreFitment',
    'MuscleScope',
    'TargetFlexion',
    'fitAlign',
    'FitMuscleXercise',
    'TargetfleX',
    'TargetFleXrcise',
    'muscleXercise',
    'TargetXercise',
  ];
  const appName = appNames[Math.floor(Math.random() * (appNames.length - 1))];

  const [titleApp, setTitleApp] = useState(appName);


  return {titleApp, setTitleApp};
}

export default useStates;


