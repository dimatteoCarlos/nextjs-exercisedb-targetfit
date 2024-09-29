import { replaceText } from '@/utils/detailTextSynonyms';
import { ExerciseDataType } from './ShowListMenu';

type DetailPropType = {
  detail: ExerciseDataType;
};
function Detail({ detail }: DetailPropType) {
  const { bodyPart, gifUrl, name, target, equipment, instructions } = detail;

  return (
    <>
      <div
        className='card__detail flex justify-between  border-solid border-[0px] border-amber-600
        dark:bg-gray-700  dark:text-gray-300  bg-gray-200 text-gray-700
          shadow-lg hover:shadow-xl transition-shadow  h-full w-full
        flex-col lg:flex-row gap-[32px] p-5 items-center
          '
      >
        <div className='img__content shrink-0'>
          <img
            className='rounded-lg w-full h-full md:min-h-[550px]'
            src={gifUrl}
            alt={name}
            loading='lazy'
          />
        </div>

        <div className='exercise__detail--content flex flex-col gap-3 flex-50% border-solid border-[0px] border-amber-600 sx:text-center'>
          <h1
            className='text-[2rem] xs:text-[1.25rem] font-bold capitalize items-center text-center
          dark:text-amber-500
          '
          >
            {name}
          </h1>

          <p className='dark:text-gray-200 text-[1.25rem] xs:text-[18px]'>
            {`${replaceText('exercises')} ${replaceText(
              'keeps you'
            )} ${replaceText('strong')}.`}
            <span className='capitalize'>{name}</span>{' '}
            {`is ${replaceText('one')} of ${replaceText('the best')}
            ${replaceText('exercises')} ${replaceText(
              'to target'
            )} ${replaceText('your')} ${target}. It ${replaceText(
              'will help'
            )} you ${replaceText('improve')} your
            ${replaceText('mood')} and ${replaceText('gain energy')}`}
            .
          </p>

          <div className=''>
            <div className='flex flex-row gap-[32px] items-center justify-center'>
              <span className='capitalize text-[1.5rem] xs:text-[20px]'>
                {bodyPart}
              </span>
              <span className='capitalize text-[1.5rem] xs:text-[20px]'>
                {target}
              </span>
              <span className='capitalize text-[1.5rem] xs:text-[20px]'>
                {equipment}
              </span>
            </div>
            <p className='mt-2'>
              <span className='dark:text-amber-500 font-semibold text-[1rem]  text-gray-800'>
                Instructions:{' '}
              </span>
              {instructions}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
