import React from 'react';

export const BASEURL_EXERCISEDB = 'https://exercisedb.p.rapidapi.com';

const API_KEY_EXERCISE = process.env.NEXT_PUBLIC_API_KEY_EXERCISExx;
const apiHost_exercisedb = 'exercisedb.p.rapidapi.com';

export const exerciseOptions = {
  method: 'GET',
  headers: {
    'x-RapidAPI-Key': API_KEY_EXERCISE as string,
    'x-RapidAPI-Host': apiHost_exercisedb as string,
  },
};

//---------------
// export const youtubeOptions = {
// method: 'GET',
// headers: {
//   'x-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
//   'x-RapidAPI-Key': 'API_KEY_EXERCISE as string',
// 'x-RapidAPI-Key': API_KEY_EXERCISE as string,
// },
// };
//-------------------

export async function fetchData<D>(url: string, backupData: D[]): Promise<D[]> {
  //Promise<D[] | []>
  try {
    console.log(API_KEY_EXERCISE);
    console.log({ url });

    const res: Response = await fetch(url, exerciseOptions);
    // const data = await res.json();
    const data = res.ok ? await res.json() : backupData; //?? [];

    if (!res.ok && data) {
      console.log('Failed to fetch data so backup data is shown');
    }

    if (!res.ok && !data) {
      console.log('Failed to fetch data');
      throw new Error(`Error: ${res.status} ${res.statusText}`);
    }

    return data;
  } catch (error: unknown) {
    console.error('Fetch error:', error);
    return backupData; //?? [];
  }
}

export default fetchData;
