import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <section>
      <div className='flex flex-col justify-between md:flex-row md:items-end'>
        <h1 className='text-7xl md:text-8xl'>ABOUT GSTM</h1>
        <Link
          href='/about'
          className='inline-block underline decoration-gray-400 decoration-4 underline-offset-4'
        >
          Learn More About GSTM STUDIO
        </Link>
      </div>

      <p className='mt-4 text-2xl lowercase md:mt-8 md:w-4/12'>
        We don’t strive to be the best design studio in the world — but the best
        one for the world.
      </p>

      <div className='mt-4 flex flex-col md:flex-row md:space-x-6 lg:mt-6'>
        <div className='mt-4 md:mt-0 md:w-2/6'>
          <Image
            src='/assets/img/abstract.jpg'
            alt='about'
            className='h-full w-full object-cover md:h-[550px]'
            width={0}
            height={0}
            sizes='100vw'
          ></Image>
          <div className='mt-3 font-medium'>
            <p>WISMA BNI 46</p>
            <p>(GSTM STUDIO JAKARTA)</p>
          </div>
        </div>
        <div className='mt-8 md:mt-0 md:w-4/6'>
          <Image
            src='/assets/img/abstract-1.jpg'
            alt='about'
            className='h-full w-full object-cover md:h-[550px]'
            width='0'
            height='0'
            sizes='100vw'
          ></Image>
          <div className='mt-3 font-medium'>
            <p>WISMA BNI 46</p>
            <p>(GSTM STUDIO JAKARTA)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
