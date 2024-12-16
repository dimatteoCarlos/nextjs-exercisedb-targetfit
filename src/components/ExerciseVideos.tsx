import Loading from '@/app/loading';
// import Image from 'next/image';
import Link from 'next/link';

type ExerciseVideoType = {
  video: {
    videoId: string;
    title: string;
    channelName: string;
    thumbnails: Array<{ url: string }>;
  };
};

type ExerciseVideosPropType = {
  exerciseVideos: ExerciseVideoType[];
  exerciseName: string;
};

function ExerciseVideos({
  exerciseVideos,
  exerciseName,
}: ExerciseVideosPropType) {
  // console.log(exerciseVideos.slice(0, 10));

  if (!exerciseVideos.length)
    return (
      <>
        <Loading />{' '}
      </>
    );

  return (
    <article
      className='videos dark:bg-gray-700  dark:text-gray-300  bg-gray-100 text-gray-700 shadow-lg hover:shadow-xl transition-shadow w-full flex-col lg:flex-row gap-[2rem] p-5 items-center border-t-amber-500 border-t-solid border-t-2'
      style={{ height: '100lv' }}
    >
      {/* {Videos} */}
      <div className='exercisesTitle '>
        <p className=' text-[2rem] text-center font-bold items-center p-3 capitalize'>
          Watch{' '}
          <span
            className='
          dark:text-amber-500 capitalize'
          >
            {exerciseName} exercise videos
          </span>
        </p>
        <p className='text-center mx-auto font-normal text-[1rem] '>
          {exerciseVideos.length} videos found - maximum of 10 shown
        </p>
      </div>

      <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 max-w-6xl mx-auto gap-3  py-4'>
        {!exerciseVideos || (exerciseVideos.length === 0 && 'No Data found')}

        {!!exerciseVideos &&
          exerciseVideos.length > 0 &&
          exerciseVideos?.map((video, ind) => (
            // exerciseVideos.slice(0, 20)?.map((video, ind) => (
            <Link
              href={`https://www.youtube.com/watch?v=${video.video.videoId}`}
              key={video.video.videoId}
              target='_blank'
              rel='noreferrer'
            >
              <div className={'mt-2 py-4 '}>
                <img
                  src={video.video.thumbnails[0].url}
                  alt={video.video.title}
                  width={500}
                  height={500}
                  className='sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300 inline-block rounded-t '
                  // priority
                  style={{ objectFit: 'cover' }}
                />
                <div>
                  <h3 className='text-lg  pt-2 font-semibold '>
                    {video.video.title}
                  </h3>
                  <p className='text-sm '>
                    {ind}
                    {video.video.channelName}
                  </p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </article>
  );
}
export default ExerciseVideos;
