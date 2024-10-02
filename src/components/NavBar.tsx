import React from 'react';
import { GoPlus } from 'react-icons/go';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="flex items-center justify-start py-2">
      <Link to={'/createMusic'} className='p-2 rounded-md border-solid border-[1px] border-gray-400 flex items-center justify-start gap-1'>
        <GoPlus />
        Create Music
      </Link>
    </div>
  );
};

export default NavBar;
