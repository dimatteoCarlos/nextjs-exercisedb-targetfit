import Link from 'next/link';
import { IconType } from 'react-icons';

type MenuLinkPropsType = {
  Icon: IconType;
  title?: string;
  route: string;
};

function MenuLink({ Icon, title, route }: MenuLinkPropsType) {
  return (
    <>
      <Link href={route}>
        <p className='menuLink__title uppercase hidden font-medium text-[0.875rem] text-sm  sm:inline hoverText'>
          {title}
        </p>
        <Icon className='menuLink__title sm:hidden text-2xl hoverText'></Icon>
      </Link>
    </>
  );
}

export default MenuLink;
