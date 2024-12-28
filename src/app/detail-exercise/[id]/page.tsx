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

import { useEffect, useMemo, useState } from 'react';
import ExerciseVideos from '@/components/ExerciseVideos';
import { SearchParamsType } from '../../page';
import { usePathname, useSearchParams } from 'next/navigation';
import { GenreType } from '@/types';

type Props = {
  params: {
    id: string;
  };
  searchParams: SearchParamsType['searchParams'];
};

const audioUrl = {
  bodyPart: 'bgMusicBP.mp3',
  equipment: 'bgMusicEQ.mp3',
  targetMuscle: 'bgMusicTM.mp3',
};
//-------------------------------------------------

function DetailExercise({ params }: Props) {
  const { id } = params;
  const searchParamsAwaited = useSearchParams();
  const name = searchParamsAwaited.get('name');
  const genre = searchParamsAwaited.get('genre') as GenreType;

  const pathname = usePathname();
  const exerciseName = name ?? 'back';

  //states
  const [exerciseDetailData, setExerciseDetailData] =
    useState<ExerciseDataType | null>(null);
  const [exerciseVideos, setExerciseVideos] = useState<[] | null>([]);
  
  const [isMuted, setIsMuted] = useState(false);
  const audio = useMemo(
    () => new Audio(`/assets/audio/${audioUrl[genre]}`),
    [genre]
  );
  audio.loop = true;


  //***************************************** */
  //---build exercise detail url---
  const exerciseUrl = `${BASEURL_EXERCISEDB}${endpointDetail}/${id}`;
  //Request from exercisedb api

  useEffect(() => {
    function handleExerciseDetailData(
      data: ExerciseDataType | ExerciseDataType[]
    ) {
      if (Array.isArray(data)) {
        //setExerciseDetailData(data[0]||null)
        if (data.length > 0) {
          setExerciseDetailData(data[0]);
        } else {
          setExerciseDetailData(null);
        }
      } else {
        const isEmpty = Object.keys(data).length === 0;

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
        handleExerciseDetailData(data);
      } catch (error) {
        console.error('Error fetching exercise detail:', error);
        setExerciseDetailData(null);
      }
    }

    getDetailData();
  }, [exerciseUrl]);

  //---------------------
  // console.log('🚀 ~ DetailExercise ~ exerciseDetailData:', exerciseDetailData);
  //******************************************/
  //---build youtubevideos url---
  //---youtubeSearchOptions,

  const videosUrl = `${BASEURL_youtubeSearch}${endpointYTSD(exerciseName)}`;
  // console.log('🚀 ~ DetailExercise ~ videosUrl:', videosUrl);

  useEffect(() => {
    async function getVideosData() {
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const data = await fetchData<any>(videosUrl, youtubeSearchOptions);
        if (typeof data == 'object') {
          // console.log(data.next, 'NEXT');
          setExerciseVideos(data!.contents);
        }
      } catch (error) {
        console.error('Error fetching videos:', error);
        setExerciseVideos(null);
      }
    }

    getVideosData();
  }, [videosUrl]);

  //Route change and audio handler

  async function routeChangeHandler(pathname: string) {
    if (pathname.includes('detail-exercise')) {
      if (audio.paused && !isMuted) {
        await audio.play().catch((error) => {
          console.error('Error playing audio:', error);
        });
      }
    } else {
      if (!audio.paused) {
        audio.pause();
        audio.currentTime = 0;
      }
    }
  }

  function visibilityChangeHandler() {
    console.log('visibility', document.visibilityState);
    if (document.hidden) {
      audio.pause();
    } else {
      routeChangeHandler(pathname);
    }
  }

  useEffect(() => {
    routeChangeHandler(pathname);
    document.addEventListener('visibilitychange', visibilityChangeHandler);

    return () => {
      document.removeEventListener('visibilitychange', visibilityChangeHandler);
      audio.pause();
      audio.currentTime = 0;
    };
  }, [pathname, audio, isMuted]);

  //--------------------------------------------------
  return (
    <section className='text-gray-800 dark:text-gray-200 dark:bg-gray-800'>
      {exerciseDetailData && (
        <Detail
          detail={exerciseDetailData}
          isMuted={isMuted}
          setIsMuted={setIsMuted}
          audio={audio}
        />
      )}

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
