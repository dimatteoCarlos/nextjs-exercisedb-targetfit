//-------API info -------------
const API_KEY_EXERCISE = process.env.NEXT_PUBLIC_API_KEY_EXERCISE;
//rapidApi: exdercisedb

const apiHost_exercisedb = 'exercisedb.p.rapidapi.com';
export const BASEURL_EXERCISEDB = 'https://exercisedb.p.rapidapi.com';

export const exerciseOptions = {
  method: 'GET',
  headers: {
    'x-RapidAPI-Key': API_KEY_EXERCISE as string,
    'x-RapidAPI-Host': apiHost_exercisedb as string,
  },
};

//-----exercisedb endpoints to get list of genre------
export const endpointList = {
  bodyPart: '/exercises/bodyPartList',
  equipment: '/exercises/equipmentList',
  targetMuscle: '/exercises/targetList',
  // explore: `/exercises?limit=20&offset=${Math.floor(
  //   Math.random() * (1324 - 20)
  // )}`,
  // start: '',
  //search
};

//--------endpoint for detail exercisedb-----------
export const endpointDetail = '/exercises/exercise';
//**************************************************/
//rapidApi: Youtube Search and Download

const apiHost_youtubeSearch = 'youtube-search-and-download.p.rapidapi.com';

export const BASEURL_youtubeSearch =
  'https://youtube-search-and-download.p.rapidapi.com';

export const youtubeSearchOptions = {
  method: 'GET',
  headers: {
    'x-RapidAPI-Key': API_KEY_EXERCISE as string,
    'x-RapidAPI-Host': apiHost_youtubeSearch as string,
  },
};

//-------endpoint for detail youtube-search-and-download-----
export const endpointYTSD = (exerciseName: string | undefined) =>
  `/search?query=${exerciseName} exercise`;
//****************************************/
