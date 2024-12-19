'use client';

import Image from 'next/image';

function loading() {
  return (
    <div className='flex justify-center'>
      <Image
        src='/assets/loaders/Spin.svg'
        alt='Loading...'
        height={100}
        width={100}
      />
      {/* <img src='/assets/loaders/Spin.svg' alt='Loading...' /> */}
      {/* <img src='/assets/loaders/Gear.svg' alt='Loading...' /> */}
      {/* <img src='/assets/loaders/Infinity.svg' alt='Loading...' /> */}
      {/* <img src='/assets/loaders/weight-lifting.gif' alt='Loading...' /> */}
      {/* <img src='/assets/loaders/exercise-treadmill.gif' alt='Loading...' /> */}
    </div>
  );
}

export default loading;
