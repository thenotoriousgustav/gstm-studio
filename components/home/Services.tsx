import Link from "next/link";
import ServicesList from "./ServicesList";
import { services } from "../../data";

export default function Services() {
  const data = { services };

  return (
    <section>
      <div className='flex flex-col justify-between md:flex-row md:items-end'>
        <h1 className='text-7xl md:text-8xl'>WHAT WE DO</h1>
        <Link
          href='/services'
          className='inline-block underline decoration-gray-400 decoration-4 underline-offset-4'
        >
          See more services
        </Link>
      </div>
      <p className='mt-3 w-full text-secondary md:w-6/12'>
        The focus of the service we provide is more on UI animated illustration
        websites. But we are not limited to that, because there are other
        services.
      </p>

      <div className='mt-12'>
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
