import Image from "next/image";
import { dataTeam } from "../../data";

export default function OurTeam() {
  return (
    <section className='mt-52 border-t-2 border-gray-300'>
      <div className='pt-10 md:flex md:items-start md:space-x-10'>
        <div className='md:w-4/12'>
          <h2 className='text-6xl md:text-7xl'>OUR TEAM</h2>
          <p className='mt-4 text-2xl font-light text-secondary md:mt-4 '>
            Gstm Studio was founded by Gustam Rheza, a designer and developer.
            He's been working in the digital space for over 2 years, and has
            worked with a variety of clients, from startups to large
            corporations.
          </p>
        </div>

        <div className='hide-scroll-bar mt-8 flex snap-x snap-proximity overflow-x-scroll md:mt-0 md:w-8/12'>
          <div className='flex snap-center flex-nowrap space-x-5'>
            {dataTeam.map((item) => (
              <div key={item.id}>
                <Image
                  src={item.img}
                  alt={item.name}
                  className='h-[28rem] w-96 max-w-xs rounded-md object-cover md:max-w-lg'
                  width={0}
                  height={0}
                  sizes='100vw'
                ></Image>
                <div className='mt-4 text-xl'>
                  <p className='font-medium'>{item.name}</p>
                  <p className='text-secondary'>{item.role}</p>
                  <p className='text-secondary'>{item.job}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
