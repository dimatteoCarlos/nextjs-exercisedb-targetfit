import Loading from '@/app/loading';
import Image from 'next/image';

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

console.log(exerciseVideos.slice(0, 10))

  if (!exerciseVideos.length)
    return (
      <>
        <Loading />{' '}
      </>
    );



  return (
    <section
      className='videos dark:bg-gray-700  dark:text-gray-300  bg-gray-100 text-gray-700 shadow-lg hover:shadow-xl transition-shadow   w-full flex-col lg:flex-row gap-[2rem] p-5 items-center'
    
    style={{height:'100lv'}}
    >
      <p className='title text-[2rem] xs:text-[1.25rem] font-bold  items-center text-center capitalize'></p>

      <div className='exercisesTitle '>
        <p className=' text-[1.25rem] text-center font-bold items-center p-3 capitalize'>
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
          exerciseVideos.slice(0, 10)?.map((video, ind) => (
            <div
              key={video.video.videoId}
              className={'mt-2'}
              // onClick={() => handleVideoClick(video.video.videoId)}
            >
              <img
                src={video.video.thumbnails[0].url}
                alt={video.video.title}
                width={500}
                height={500}
                className='sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300 inline-block rounded-tl'
                // priority
                style={{ objectFit: 'cover' }}
              />
              <div>
                <h3 className='text-lg lg:text-2xl font-semibold '>
                  {video.video.title}
                </h3>
                <p className='text-sm '>{video.video.channelName}</p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
export default ExerciseVideos;
