import Link from "next/link";

export default function ParentFooter() {
  return (
    <div>
      <h1 className='text-5xl uppercase md:text-7xl lg:text-9xl'>
        Let's talk about{" "}
        <span className='inline-block md:block'>the project </span>
      </h1>

      <div className='mt-12 flex flex-col md:mt-16 md:flex-row md:items-center md:justify-between'>
        <h2 className='text-5xl md:text-7xl'>
          GET IN <span className='block'>✺TOUCH</span>
        </h2>
        <div className='mt-8 flex flex-col space-y-2 text-2xl font-light underline underline-offset-4 md:mt-0 md:text-4xl'>
          <Link href='mailto:rhezagustam@gmail.com'>rhezagustam@gmail.com</Link>
          <Link href='https://wa.me/6285940476706'>Whatsapp</Link>
        </div>

        <div>
          <h2 className='mt-8 text-xl md:mt-0'>Social Links:</h2>
          <div className='mt-2 flex flex-col space-y-2 text-2xl font-light underline underline-offset-4'>
            <Link href='/'>Instagram</Link>
            <Link href='/'>Twitter</Link>
            <Link href='/'>Behance</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
