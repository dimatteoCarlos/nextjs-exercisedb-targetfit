import React from 'react';

export const BASEURL_EXERCISEDB = 'https://exercisedb.p.rapidapi.com';

const API_KEY_EXERCISE = process.env.API_KEY_EXERCISE1;
// const API_KEY_EXERCISE = process.env.NEXT_PUBLIC_API_KEY_EXERCISE;
const apiHost_exercisedb = 'exercisedb.p.rapidapi.com';

export const exerciseOptions = {
  method: 'GET',
  headers: {
    'x-RapidAPI-Key': API_KEY_EXERCISE as string,
    'x-RapidAPI-Host': apiHost_exercisedb as string,
  },
};

//---------------
export const youtubeOptions = {
  method: 'GET',
  headers: {
    'x-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'x-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
  },
};
//-------------------

export async function fetchData<D>(
  url: string,
  backupData?: D[] | null
): Promise<D[] | undefined> {
  try {
    const res: Response = await fetch(url, exerciseOptions);
    // const data = await res.json();
    const data = res.ok ? await res.json() : (backupData as D[]);

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
  }
}

export default fetchData;
