'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';


type NavbarLinkPropsType = {
  param: string;
  title: string;
};

function NavbarLink({ param, title }: NavbarLinkPropsType) {
  const params = useSearchParams();
  const genre = params.get('genre');
  const route = `/?genre=${param}`;

  const isActive = genre === param;

  //-----------------------
  // const router = useRouter();
  // const { pathname } = router;
  // const isActive = (link:string) => pathname.startsWith(link);
  // console.log("🚀 ~ NavbarLink ~ isActive:", isActive)

  return (
    <div>
      <Link
        href={route}
        className={`
        capitalize font-semibold hoverText

        ${
          genre === param || isActive
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
