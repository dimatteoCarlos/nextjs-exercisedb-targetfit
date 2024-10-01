'use client';

import Detail from '@/components/Detail';
import { ExerciseDataType } from '@/components/ShowListMenu';
import fetchData, { BASEURL_EXERCISEDB } from '@/utils/fetchData';
import { useEffect, useState } from 'react';

type Props = {
  params: {
    id: string; // o número, dependiendo de cómo uses el id
  };
};

function DetailExercise({ params }: Props) {
  const { id } = params;
  const [exerciseDetailData, setExerciseDetailData] =
    useState<ExerciseDataType | null>(null);

  //---build url----
  const url = `${BASEURL_EXERCISEDB}/exercises/exercise/${id}`;

  //Request from api
  useEffect(() => {
    async function getDetailData() {
      try {
        const data = await fetchData<ExerciseDataType>(url);
        // console.log(data);

        if (Array.isArray(data)) {
          if (data.length > 0) {
            setExerciseDetailData(data[0]);
          } else {
            setExerciseDetailData(null);
          }
        } else {
          setExerciseDetailData(data);
        }
      } catch (error) {
        console.error('Error fetching exercise detail:', error);
        setExerciseDetailData(null);
      }
    }

    getDetailData();
  }, [id, url]);

  if (!exerciseDetailData) return <div>No data found</div>;

  return (
    <>
      <Detail detail={exerciseDetailData} />
    </>
  );
}

export default DetailExercise;
