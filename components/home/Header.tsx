import ImageSwapper from "./ImageSwapper";
import Text from "./Text";

export default function Header() {
  return (
    <section className='mt-10 md:mt-8' id='header'>
      <h1 className='text-[14vw] font-medium leading-none md:font-normal'>
        GSTM.STUDIO
      </h1>
      <div className='mt-8 flex flex-col font-light text-secondary md:mt-14 md:flex-row md:space-x-12'>
        <p className='text-2xl md:w-6/12 md:text-3xl'>
          We design disruptive brands for organizations that aspire to have a
          positive social and environmental impact.
        </p>
        <p className='mt-4 text-2xl md:mt-0 md:w-5/12 md:text-3xl'>
          We're an digital studio that makes unexpected stories for you.
        </p>
      </div>

      <div className='group relative'>
        <a
          href='#services'
          className='absolute -top-4 right-0 flex h-24 w-24 cursor-pointer items-center justify-center rounded-full bg-black md:h-36 md:w-36 lg:-top-2'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='stroke-width-2 h-12 w-12 transform text-white transition-all duration-500 ease-in-out group-hover:rotate-[135deg] md:h-20 md:w-20 '
          >
            <path
              fillRule='evenodd'
              d='M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z'
              clipRule='evenodd'
            />
          </svg>
        </a>
      </div>
      <div>
        <ImageSwapper />
      </div>
      <Text />
    </section>
  );
}
