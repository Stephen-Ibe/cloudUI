import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => setNav(!nav);

  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed '>
      <div className='container mx-auto px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <h6 className='text-2xl font-bold uppercase sm:text-2xl ml-4'>
            leverage.
          </h6>
        </div>
        <ul className='hidden md:flex'>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>Products</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
        <div className='hidden md:flex pr-4'>
          <button className='bg-transparent text-indigo-600 mr-4 px-6 py-2 hover:bg-indigo-600 hover:text-white'>
            Sign In
          </button>
          <button className='px-6 py-2'>Sign Up</button>
        </div>
        <div className='md:hidden mr-4' onClick={toggleNav}>
          {nav ? <XIcon className='w-5' /> : <MenuIcon className='w-5' />}
        </div>
      </div>
      <ul
        className={
          nav
            ? 'absolute w-full bg-zinc-200 px-8 text-sm font-normal'
            : 'hidden'
        }
      >
        <li className='border-b-2 border-zinc-300 w-full'>
          <a href='#'>Home</a>
        </li>
        <li className='border-b-2 border-zinc-300 w-full'>
          <a href='#'>Products</a>
        </li>
        <li className='border-b-2 border-zinc-300 w-full'>
          <a href='#'>About</a>
        </li>
        <li className='border-b-2 border-zinc-300 w-full'>
          <a href='#'>Contact</a>
        </li>
        <div className='flex flex-col my-4'>
          <button className='bg-transparent text-indigo-600 px-8 py-2 mb-4'>
            Sign In
          </button>
          <button className='px-8 py-2'>Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default NavBar;
