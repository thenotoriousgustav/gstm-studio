import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <section>
      <div className='flex flex-col justify-between md:flex-row md:items-end'>
        <h1 className='text-7xl '>ABOUT US</h1>
        <Link
          href='/about'
          className='hidden underline decoration-gray-400 decoration-4 underline-offset-4 md:inline-block'
        >
          Learn More About GSTM STUDIO
        </Link>
      </div>

      <p className='mt-6 text-xl lowercase md:mt-8 md:w-4/12'>
        We don’t strive to be the best digital studio in the world — but the
        best one for the world.
      </p>
      <Link
        href='/about'
        className='mt-6 inline-block underline decoration-gray-400 decoration-4 underline-offset-4 md:mt-0 md:hidden'
      >
        Learn More About GSTM STUDIO
      </Link>

      <div className='mt-4 flex flex-col md:flex-row md:space-x-6 lg:mt-6'>
        <div className='mt-4 md:mt-0 md:w-2/6'>
          <Image
            src='/assets/img/office.jpg'
            alt='about'
            className='h-full w-full object-cover md:h-[550px]'
            width={0}
            height={0}
            sizes='100vw'
          ></Image>
          <div className='mt-3 font-medium'>
            <p>OUR TOWER</p>
            <p>(SCBD OFFICE)</p>
          </div>
        </div>
        <div className='mt-8 md:mt-0 md:w-4/6'>
          <Image
            src='/assets/img/office1.jpg'
            alt='about'
            className='h-full w-full object-cover md:h-[550px]'
            width='0'
            height='0'
            sizes='100vw'
          ></Image>
          <div className='mt-3 font-medium'>
            <p>OUR OFFICE</p>
            <p>(SCBD OFFICE)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
