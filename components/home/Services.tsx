import Link from "next/link";
import ServicesList from "./ServicesList";
import { services } from "../../data";

export default function Services() {
  const data = { services };

  return (
    <section>
      <div className='flex flex-col justify-between md:flex-row md:items-end'>
        <h1 className='text-7xl md:text-8xl'>WHAT WE BUILD</h1>
        <Link
          href='/services'
          className='hidden underline decoration-gray-400 decoration-4 underline-offset-4 md:inline-block'
        >
          See more services
        </Link>
      </div>
      <p className='mt-6 w-full text-secondary md:mt-4 md:w-6/12'>
        The focus of the service we provide is more on UI animated illustration
        websites. But we are not limited to that, because there are other
        services.
      </p>
      <Link
        href='/services'
        className='mt-6 inline-block underline decoration-gray-400 decoration-4 underline-offset-4 md:mt-0 md:hidden'
      >
        See more services
      </Link>

      <div className='mt-8'>
        <div className='divide-y-2 divide-black overflow-hidden border-b-2 border-black'>
          {services.map((service) => (
            <div key={service.id}>
              <ServicesList
                service={service.name}
                desc={service.desc}
                category={service.category}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
