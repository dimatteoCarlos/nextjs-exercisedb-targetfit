'use client'
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react';

type NavbarLinkPropsType = {
  param: string;
  title: string;
};
function NavbarLink({ param, title }: NavbarLinkPropsType) {
  const params = useSearchParams();
  const genre = params.get('genre');
  const route = `/?genre=${param}`;

        //  hoverText dark:text-gray-200 

  return (
    <div>
      <Link
        href={route}
        className={`
        capitalize font-semibold hoverText

        ${
          genre === param
            ? 'underline underline-offset-8 decoration-4 decoration-amber-600 rounded-lg'
            : ''
        }
        `}
      >
        {title}
      </Link>
    </div>
  );
}

export default NavbarLink;
