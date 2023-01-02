import Image from "next/image";
import { clients } from "../../data";

export default function RecentClients() {
  return (
    <section className='mt-52'>
      <div>
        <h1 className='text-7xl md:text-8xl'>RECENT CLIENTS</h1>
        <p></p>
      </div>
      <div className='hide-scroll-bar mt-16 flex snap-x snap-proximity overflow-x-scroll md:mt-20'>
        <div className='flex flex-nowrap space-x-4 md:space-x-24'>
          {clients.map((client) => (
            <div key={client.id} className='w-72'>
              <Image
                src={client.img}
                alt={client.name}
                className='h-24 w-32 max-w-xs '
                width='0'
                height='0'
                sizes='100vw'
              ></Image>

              <div className='mt-4 text-xl'>
                <p>{client.name}</p>
                <p className='mt-3 font-light text-secondary'>{client.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
