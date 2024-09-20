import React from 'react';
import NavbarLink from './NavbarLink';

function Navbar() {
  return (
    <div
      className='flex justify-center gap-6
   bg-amber-100 p-3.5 dark:bg-gray-600 '
    >
      <NavbarLink param='fetchBodyPart' title='Body Part'></NavbarLink>
      <NavbarLink param='fetchEquipment' title='Equipment'></NavbarLink>
      <NavbarLink param='fetchTarget' title='Target Muscle'></NavbarLink>
    </div>
  );
}

export default Navbar;
