import { format } from 'date-fns';
import React from 'react';

const Navbar = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-3'>
      <img src='https://i.postimg.cc/J0FvgGzg/logo.png' alt="Logo" />
      <p className='text-[#706F6F]'>Journalism Without Fear or Favour</p>
      <p>Sunday, November 27, 2025</p>
      <p>{format(new Date(), "EEEE,MMMM d, yyyy - h:m:s bbb OOOO")}</p>
    </div>
  );
};

export default Navbar;
