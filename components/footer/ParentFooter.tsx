import Link from "next/link";

export default function ParentFooter() {
  return (
    <div>
      <h1 className='text-6xl uppercase md:text-7xl lg:text-9xl'>
        Let's talk about{" "}
        <span className='inline-block md:block'>the project </span>
      </h1>

      <div className='mt-16 flex flex-col md:flex-row md:items-center md:justify-between'>
        <h2 className='text-7xl'>
          GET IN <span className='block'>✺TOUCH</span>
        </h2>
        <div className='mt-8 flex flex-col space-y-2 text-3xl font-light underline underline-offset-4 md:mt-0 md:text-4xl'>
          <Link href='mailto:rhezagustam@gmail.com'>rhezagustam@gmail.com</Link>
          <Link href='https://wa.me/6285940476706'>Whatsapp</Link>
        </div>

        <div>
          <h4 className='mt-8 text-xl md:mt-0'>Social Links:</h4>
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
