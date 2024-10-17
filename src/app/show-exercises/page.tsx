'use client';
// import { useSearchParams } from 'next/navigation';
import { SearchParamsType } from '@/app/page';
import { useExerciseData } from '@/context/ExercisesContextProvider';
import { ExerciseDataType } from '@/components/ShowListMenu';
import Card from '@/components/Card';
import { GenreType } from '@/app/page';
import { useRouter } from 'next/navigation';

type ShowExercisesPropType = {
  searchParams: {
    genre: SearchParamsType['searchParams']['genre'];
    name: string;
  };
};

function ShowExercises({ searchParams }: ShowExercisesPropType) {
  const router = useRouter();
  const genre = searchParams?.genre;
  const name = searchParams?.name;
  const { exerciseData } = useExerciseData();

  if (!exerciseData) {
    return <p>Loading Exercises from local data...</p>; // Mensaje de carga
  }
  const numberOfExercisesFound = exerciseData.length;
  console.log(
    '🚀 ~ ShowExercises ~ numberOfExercisesFound:',
    numberOfExercisesFound
  );

  const filteredDataExercises =
    exerciseData?.filter(
      (exercise: ExerciseDataType) => exercise?.gifUrl !== undefined
    ) || []; //should get the backup exercises

  const numberOfExercisesWithImg = filteredDataExercises.length;
  console.log(
    '🚀 ~ ShowExercises ~ numberOfExercisesWithImg:',
    numberOfExercisesWithImg
  );

  const exercisesToRender = filteredDataExercises.slice(0, 1325);
  // console.log('🚀 ~ ShowExercises ~ exercisesToRender:', exercisesToRender);

  //const genreTitlesKey:Record<GenreType, string>
  const genreTitlesKey: { [key in GenreType]: string } = {
    bodyPart: 'Body Part',
    targetMuscle: 'Target Muscle',
    equipment: 'Equipment',
  };

  const convertGenreToTitleGenre = (genre: GenreType): string | null => {
    // return genreTitlesKey[genre] || null;

    if (genre in genreTitlesKey) {
      return genreTitlesKey[genre];
    } else {
      return null;
    }
  };

  const titleGenre = convertGenreToTitleGenre(genre);
  

  //---------------------
  const handleCardClick = (id: string) => {
    // Navegar a la página de detalles con el id del elemento
    router.push(`detail-exercise/${id}?genre=${genre}`);

  };

  //--------------------------------------
  return (
    <section className='exercises dark:text-gray-200 dark:bg-gray-800 min-h-lvh'>
      <div className='exercisesTitle '>
        <p className=' text-[1.25rem] text-center font-bold items-center p-3 capitalize'>
          {`${titleGenre} : `}{' '}
          <span className='text-amber-600 font-semibold'> {name}</span>
        </p>
        <p className='text-center mx-auto font-normal text-[1rem] '>
          {numberOfExercisesFound} exercises found
        </p>
      </div>

      <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 max-w-6xl mx-auto py-4'>
        {!exercisesToRender ||
          (exercisesToRender.length === 0 && 'No Data found')}

        {!!exercisesToRender &&
          exercisesToRender.length > 0 &&
          exercisesToRender?.map((exercise, ind) => (
            <div key={exercise.id} 
            onClick={() => handleCardClick(exercise.id)}
            >
              <Card
                // key={exercise.id}
                genre={genre}
                selectedName={name}
                exercise={exercise}
                cardOrder={ind + 1}
              />
            </div>
          ))}
      </div>
    </section>
  );
}

export default ShowExercises;
