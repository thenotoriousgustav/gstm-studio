"use client";
import { useState } from "react";

import Link from "next/link";
import NavList from "./NavList";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <nav className='flex items-center justify-between py-8 px-4 md:px-10 lg:px-14'>
        <Link href='/' className='text-xl font-medium'>
          GSTM
        </Link>

        <ul className='hidden items-center space-x-12 text-lg md:flex'>
          <NavList />
        </ul>

        <Link
          href='/contact'
          className='hidden text-lg underline decoration-gray-400 decoration-4 underline-offset-4 md:block'
        >
          Work with us
        </Link>

        <button
          onClick={handleNav}
          className='z-40 block cursor-pointer text-xl md:hidden'
        >
          menu
        </button>
      </nav>

      {/* Mobile Nav */}
      <div
        className={`fixed top-0 z-30 h-screen w-full bg-primary transition-all duration-700 ${
          nav ? "left-0" : "-left-full"
        }`}
      >
        <ul
          className='flex h-screen flex-col items-center justify-center space-y-4 overflow-y-hidden text-lg md:hidden'
          onClick={handleNav}
        >
          <NavList />
          <Link
            href='/contact'
            className='text-lg underline decoration-gray-400 decoration-4 underline-offset-4 '
          >
            Work with us
          </Link>
        </ul>
      </div>
    </>
  );
}
