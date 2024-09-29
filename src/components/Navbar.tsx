
import NavbarLink from './NavbarLink';

function Navbar() {
  return (
    <div
      className='flex justify-center gap-6
   bg-amber-100 p-3.5 dark:bg-gray-600 '
    >
      <NavbarLink param='bodyPart' title='Body Part'></NavbarLink>
      <NavbarLink param='equipment' title='Equipment'></NavbarLink>
      <NavbarLink param='targetMuscle' title='Target Muscle'></NavbarLink>
    </div>
  );
}

export default Navbar;
