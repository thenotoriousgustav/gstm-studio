import { services } from "../../data";
import Image from "next/image";

export default function Services() {
  return (
    <>
      {services.map((service) => (
        <div className='mt-44 border-t-2 border-gray-300 pt-8'>
          <div
            key={service.id}
            className='flex flex-col md:flex-row md:justify-between md:space-x-14 '
          >
            <div key={service.id} className='w-4/12'>
              <span className='block text-lg'>0{service.id}.</span>
              <h1 className='mt-4 md:text-6xl'>{service.name}</h1>
            </div>

            <div className='w-full md:w-8/12'>
              <Image
                src={service.img}
                alt={service.name}
                className='my-6 h-96 w-full object-cover'
                height={0}
                width={0}
                sizes='100vw'
              ></Image>

              <ul>
                {service.category.map((category) => {
                  return (
                    <li key={category} className='text-lg font-light'>
                      {category}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
