"use client";
import { useState } from "react";

interface Props {
  service: string;
  desc: string;
  category: string[];
}

export default function ServicesList({ service, desc }: Props) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className='relative overflow-hidden'>
      <div className='w-full py-4 md:py-8'>
        <button
          className='w-full cursor-pointer text-start text-3xl md:text-5xl'
          onClick={handleClick}
        >
          {service}
        </button>
      </div>

      <div className='absolute top-8 right-5 rotate-0 transition-transform duration-500 active:-rotate-90 md:top-12'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M15 19l-7-7 7-7'
          />
        </svg>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className='flex border-t p-2 md:p-4'>
          <div className='w-full md:w-7/12'>
            <p className='text-xl font-light md:text-2xl'>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
