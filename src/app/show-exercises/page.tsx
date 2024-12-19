'use client';

import { Suspense } from 'react';
import ShowExercises from './ShowExercises';

function ShowExercisesPage() {
  //--------------------------------------
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <ShowExercises />
    </Suspense>
  );
}

export default ShowExercisesPage;
