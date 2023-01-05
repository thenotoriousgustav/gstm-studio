import Image from "next/image";
import OurTeam from "../../../components/about/OurTeam";
import { PageWrapper } from "../../../components/PageWrapper";
export default function AboutPage() {
  return (
    <PageWrapper>
      <section className='container mx-auto mt-28 max-w-full px-4 md:px-8 lg:px-10'>
        <div className='mx-auto w-full md:w-10/12'>
          <h1 className='text-center text-5xl uppercase md:text-7xl'>
            We’re an Development studio that makes @*#$£°! stories for you.
          </h1>
        </div>

        <div className='mt-24 '>
          <div>
            <Image
              src='/assets/img/abstract-1.jpg'
              alt='about'
              className='h-full w-full object-cover md:h-[550px]'
              width={0}
              height={0}
              sizes='100vw'
            ></Image>
            <p className='mt-6 w-full text-2xl font-light md:w-9/12'>
              Plastic is a strategic design agency focused on providing
              high-quality digital services for global companies. Our team
              consists of a superb blend of thinkers, strategists, designers,
              researchers, developers and organisers. Not too big, not too
              small, quite sensible and completely independent.
            </p>
          </div>
        </div>

        <hr className='my-36 border-t-2 border-gray-300' />

        <div className='flex flex-col md:flex-row md:justify-between'>
          <div>
            <h4 className='font-semibold'>
              ABOUT <span className='block'>GSTM STUDIO</span>
            </h4>
          </div>
          <div className='mt-8 w-full md:mt-0 md:w-7/12'>
            <h2 className='text-3xl md:text-4xl'>
              We are a web design and development agency. Starting as a duo,
              Tinloof now boasts a remote team helping businesses worldwide.
            </h2>
            <p className='mt-6 text-lg text-secondary md:mt-2'>
              Established in 2015, Visualsgang is software house who have built
              hundreds of projects. Visualsgang team consists of creative people
              that dedicate themselves to each and every client. Founded by
              digital folks from several tech companies in Germany, whose
              products are now big in Indonesia.
            </p>
          </div>
        </div>
        <OurTeam />
      </section>
    </PageWrapper>
  );
}
