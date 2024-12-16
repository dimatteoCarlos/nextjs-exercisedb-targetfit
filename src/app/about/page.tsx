import Image from 'next/image';

export default function About() {
  return (
    <div
      className='about__container max-w-6xl p-3 mx-auto space-y-[1rem] 
    dark:bg-gray-800 dark:text-white h-full lg:h-lvh'
    >
      <h1 className='about__title text-2xl text-amber-600 font-semibold pt-4'>
        About Us
      </h1>
      <div
        className='flex flex-col items-center lg:flex-row lg:text-lg
      '
      >
        <div className='imgContainer relative flex-1 h-full'>
          <Image
            src='/images/banners/bannerExplorer.png'
            alt='about_img'
            width={650}
            height={650}
            priority
            style={{
              objectFit: 'cover', // cover, contain, none
            }}
          />
        </div>
        <div
          className=' dark:text-gray-200 flex-1 p-3 text-lg items-center
            flex flex-col flex-3/5
        min-w-[50%]
        max-md:justify-center max-md:items-center
        max-md:w-full max-md:p-0 max-md:text-[2rem]
        '
        >
          <p className='text-[1.5rem] text-center px-3 pt-5'>
            {' '}
            Welcome to our app for targeted muscle training!
          </p>
          <br></br>
          <p className='px-3 text-xl'>
            Our mission is to empower fitness enthusiasts at every level to
            maximize their workouts by focusing on the most effective exercises
            for specific muscle groups. <br></br>
            <br></br> Whether you&apos;re aiming to build strength, enhance
            endurance, or sculpt your physique, our guides are designed to help
            you achieve your fitness goals efficiently and safely.
          </p>
        </div>
      </div>
      {/* <p>
        We understand that proper form is essential for effective training,
        which is why our site is enriched with images and step-by-step
        instructions for each exercise. <br></br> <br></br>From gif images that
        illustrate correct posture to instructional videos highlighting common
        mistakes, we provide the resources you need to ensure each workout is
        performed flawlessly. Our intuitive layout allows you to easily navigate
        through various muscle groups, enabling you to select exercises that
        seamlessly fit into your routine.
      </p> */}
      <p>
        {' '}
        {/* Our vibrant community is here to support you, providing forums and resources for sharing experiences, tips, and encouragement with fellow fitness enthusiasts. Join us in transforming your training regimen and unlocking your full potential with the right exercises for every target muscle! */}
      </p>

      <p className='text-xl dark:text-gray-300 pt-5 px-5 lg:pl-0'>
        {' '}
        Thank you for stopping by! We appreciate your interest in optimizing
        your fitness journey with our platform. Your commitment to training and
        improving your health inspires us, and we are excited to support you
        every step of the way.
        {/* If you have any questions or feedback, feel free to reach out—we're here to help you succeed! */}
      </p>
    </div>
  );
}

// export default About;
