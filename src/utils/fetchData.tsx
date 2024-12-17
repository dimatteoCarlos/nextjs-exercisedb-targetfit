// const API_KEY_EXERCISE = process.env.NEXT_PUBLIC_API_KEY_EXERCISE;
// const apiHost_exercisedb = 'exercisedb.p.rapidapi.com';

// export const BASEURL_EXERCISEDB = 'https://exercisedb.p.rapidapiX.com';
// export const exerciseOptions = {
//   method: 'GET',
//   headers: {
//     'x-RapidAPI-Key': API_KEY_EXERCISE as string,
//     'x-RapidAPI-Host': apiHost_exercisedb as string,
//   },
// };

//---------------
// export const youtubeOptions = {
// method: 'GET',
// headers: {
//   'x-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
//   'x-RapidAPI-Key': 'API_KEY_EXERCISE as string',
// },
// };
//-------------------

export type FetchOptions = {
  method: string;
  headers: { [key: string]: string };
};

export async function fetchData<D>(
  url: string,
  options: FetchOptions,
  backupData?: D[] | D
): Promise<D[] | D> {
  try {
    // console.log({ url }, "bu:",backupData);

    const res: Response = await fetch(url, options);

    // const data = res.ok ? await res.json() : backupData ? backupData : [];
    if (!res.ok) {
      if (res.status === 422) {
        console.error(
          'Error 422: Unprocessable Entity. The request was well-formed but unable to be processed.'
        );
      }

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
      console.log('Failed to fetch data so backup data is shown');
      return backupData;
    } else {
      return {} as D;
    }
  }
}

export default fetchData;
