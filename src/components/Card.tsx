'use client';

import Link from 'next/link';
import { ExerciseDataType } from './ShowListMenu';
import { GenreType } from '@/app/page';

type CardPropsType = {
  exercise: ExerciseDataType;
  genre?: GenreType;
  selectedName?: string;
  cardOrder: number;
};

export default function Card({
  exercise,
  // selectedName,
  // genre,
  cardOrder,
}: CardPropsType) {
  const {
    // id,
    bodyPart,
    gifUrl,
    name,
    target,
    secondaryMuscles,
    // equipment,
    // instructions,
  } = exercise;
  // console.log({ gifUrl });

  const secondaryTargets = secondaryMuscles.join(', ');

  // const detailRoute = `detail-exercise/${id}`;
  // const detailRoute = `detail-exercise/${id}?genre=${encodeURIComponent(genre)}`;
  // const query = `/genre=${genre}&selectedName=${selectedName}&id=${id}`;
  // console.log("🚀 ~ detailRoute:", detailRoute)

  return (
    // <div className='exercisesCard'>
    <div
      className='group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg border border-slate-400 m-3
      sm:m-2 transition-shadow duration-200 text-center sm:text-start'
    >
      <article
        //Link href={{ pathname: detailRoute }}
        className='block p-4 bg-gray-200 text-gray-700
           dark:bg-gray-700
           dark:text-gray-300  shadow-lg rounded-lg hover:shadow-xl transition-shadow border-none h-full w-full
           '
      >
        <div className='flex flex-col'>
          <p className='text-[0.75rem] text-right pr-1 dark:text-gray-300 rounded-full dark:border-gray-200 border-[0px]'>
            {String(cardOrder).padStart(3, '0')}
          </p>
          {gifUrl && (
            <img
              src={`${gifUrl}`}
              width={500}
              height={300}
              className='sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300 inline-block
              '
              alt={name}
              // loading='lazy'
            />
          )}
        </div>

        <div className='card__content p-2 '>
          {/* <p className='line-clamp-2 text-[0.875rem]  text-center font-bold text-shadow-md '>
              {name.toString().toUpperCase()}
            </p> */}
          <div className='flex space-x-3 mt-3'>
            <button className='ml-5 text-white bg-amber-700 text-sm rounded-full px-3 py-1 capitalize'>
              {bodyPart}
            </button>
            <button className='ml-5 text-white bg-green-700 text-sm rounded-full px-3 py-1 capitalize'>
              {target}
              {/* {selectedName} */}
            </button>
          </div>

          <h3 className='card__title ml-5 text-gray-800 dark:text-gray-300 font-bold mt-3 text-lg md:text-xl uppercase text-[] line-clamp-3'>
            {name}
          </h3>

          <h2 className='ml-5 text-gray-500 font-bold mt-3 text-lg md:text-xl capitalize dark:text-gray-400 '>
            Secondary targets:{' '}
            <span className='dark:text-gray-300 text-gray-600 text-center'>
              {' '}
              {secondaryTargets}
            </span>
          </h2>
        </div>
      </article>
    </div>
    // </div>
  );
}
