export const BASEURL_EXERCISEDB = 'https://exercisedb.p.rapidapi.com';

const API_KEY_EXERCISE = process.env.NEXT_PUBLIC_API_KEY_EXERCISE;
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
// },
// };
//-------------------

export async function fetchData<D>(
  url: string,
  backupData?: D[] | D
): Promise<D[] | D> {
  try {
    // console.log({ url });

    const res: Response = await fetch(url, exerciseOptions);

    // const data = res.ok ? await res.json() : backupData ? backupData : [];
    if (!res.ok) {
      console.log('Failed to fetch data');
      if (backupData) {
        console.log('Failed to fetch data so backup data is shown');
        return backupData;
      }
      throw new Error(`!Error: ${res.status} ${res.statusText}`);
    }

    const data: D | D[] = await res.json();

    return data;
  } catch (error: unknown) {
    console.error(
      'Fetch error:',
      error instanceof Error ? error.message : error
    );

    if (Array.isArray(backupData)) {
      return [];
    } else {
      return {} as D;
    }
  }
}

export default fetchData;
