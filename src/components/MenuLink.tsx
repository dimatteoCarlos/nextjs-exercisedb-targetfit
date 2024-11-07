import Link from 'next/link';
import { IconType } from 'react-icons';
import { usePathname } from 'next/navigation';

type MenuLinkPropsType = {
  Icon: IconType;
  title?: string;
  route: string;
};

function MenuLink({ Icon, title, route }: MenuLinkPropsType) {
  const pathName = usePathname();

  const isActive = pathName === route;
  // console.log(pathName, route, isActive);

  return (
    <>
      <Link
        href={route}
        className={`${isActive && 'text-amber-500 font-semibold'}`}
      >
        <p className='menuLink__title uppercase hidden font-medium text-[0.875rem] text-sm  sm:inline hoverText'>
          {title}
        </p>
        <Icon className='menuLink__title sm:hidden text-2xl hoverText'></Icon>
      </Link>
    </>
  );
}

export default MenuLink;
