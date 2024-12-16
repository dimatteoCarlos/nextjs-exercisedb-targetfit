'use client';

import { ExerciseDataType } from '@/components/ShowListMenu';
import fetchData from '@/utils/fetchData';
import Detail from '@/components/Detail';
import {
  BASEURL_EXERCISEDB,
  exerciseOptions,
  endpointDetail,
} from '@/utils/fetchConstants';

import {
  BASEURL_youtubeSearch,
  youtubeSearchOptions,
  endpointYTSD,
} from '@/utils/fetchConstants';

import { useEffect, useState } from 'react';
import { SearchParamsType } from '../../page';
import ExerciseVideos from '@/components/ExerciseVideos';
import { useSearchParams } from 'next/navigation';

type Props = {
  params: {
    id: string;
  };
  searchParams: SearchParamsType['searchParams'];
};
//-------------------------------------------------
 function DetailExercise() {
  const searchParamsAwaited=useSearchParams()
  const id = searchParamsAwaited.get('id')
  // const genre =searchParamsAwaited.get('genre'); 
  const name= searchParamsAwaited.get('name'); 
  console.log('params:',searchParamsAwaited);

  const exerciseName = name ?? 'back';

  const [exerciseDetailData, setExerciseDetailData] =
    useState<ExerciseDataType | null>(null);

  const [exerciseVideos, setExerciseVideos] = useState<[] | null>([]);

  //***************************************** */
  //---build exercise detail url---
  const exerciseUrl = `${BASEURL_EXERCISEDB}${endpointDetail}/${id}`;
  //Request from exercisedb api

  useEffect(() => {
    function handleExerciseDetailData(
      data: ExerciseDataType | ExerciseDataType[]
    ) {
      if (Array.isArray(data)) {
        if (data.length > 0) {
          // console.log('1', data);
          setExerciseDetailData(data[0]);
        } else {
          // console.log('2', data);
          setExerciseDetailData(null);
        }
      } else {
        const isEmpty = Object.keys(data).length === 0;
        // console.log('3', data);

        setExerciseDetailData(isEmpty ? null : data);
      }
    }
    //-----
    async function getDetailData() {
      try {
        const data = await fetchData<ExerciseDataType>(
          exerciseUrl,
          exerciseOptions
        );
        // console.log(data);
        handleExerciseDetailData(data);
      } catch (error) {
        console.error('Error fetching exercise detail:', error);
        setExerciseDetailData(null);
      }
    }

    getDetailData();
  }, [id]);

  // console.log('🚀 ~ DetailExercise ~ exerciseDetailData:', exerciseDetailData);

  //******************************************/
  //---build youtubevideos url---
  // youtubeSearchOptions,

  const videosUrl = `${BASEURL_youtubeSearch}${endpointYTSD(exerciseName)}`;

  // console.log('🚀 ~ DetailExercise ~ videosUrl:', videosUrl);

  useEffect(() => {
    async function getVideosData() {
      try {
        const data = await fetchData<any>(videosUrl, youtubeSearchOptions);
        // console.log(data.next, 'NEXT');
        setExerciseVideos(data.contents);
      } catch (error) {
        console.error('Error fetching videos:', error);
        setExerciseVideos(null);
      }
    }

    getVideosData();
  }, [exerciseName]);

  //--------------------------------------------------
  return (
    <section className='text-gray-800 dark:text-gray-200 dark:bg-gray-800'>
      {exerciseDetailData && <Detail detail={exerciseDetailData} />}

      {exerciseVideos && (
        <ExerciseVideos
          exerciseVideos={exerciseVideos}
          exerciseName={exerciseName}
        />
      )}
    </section>
  );
}

export default DetailExercise;
