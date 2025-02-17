import Image from 'next/image';
import Link from 'next/link';

type LogoPropsType = {
  title: string;
  route: string;
  logo: string;
};

function Logo({ title, logo, route }: LogoPropsType) {
  return (
    <>
      <Link
        href={route}
        className='flex items-center justify-start gap-2 flex-auto'
      >
        <Image
          src={logo}
          width={60}
          height={60}
          className=' rounded-[50%] hover:opacity-75 transition-opacity duration-300 inline-block'
          alt={logo}
        />

        <p className='menuLink__title visible font-semibold text-[1.5rem] sm:inline hoverText'>
          {title}
        </p>
      </Link>
    </>
  );
}

export default Logo;
