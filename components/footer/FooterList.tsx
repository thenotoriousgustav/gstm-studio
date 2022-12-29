import Link from "next/link";

interface Props {
  title: string;
  href: string;
}

function FooterLink({ title, href }: Props) {
  return (
    <Link href={href} className='block cursor-pointer hover:underline'>
      {title}
    </Link>
  );
}

export default function FooterList() {
  return (
    <div className='text-xl font-light md:mt-8 md:flex md:justify-between'>
      <div className='mt-4'>
        <h2 className='mb-2 text-2xl text-black'>Office</h2>
        <p>Jakarta, Indonesia</p>
        <p>Monday - Thursday 9am to 6pm</p>
      </div>
      <div className='mt-4'>
        <h2 className='mb-2 text-2xl text-black'>Business Inquiries</h2>
        <FooterLink href='mailto:rhezagustam@gmail.com' title='Email' />
        <FooterLink href='https://wa.me/6285940476706' title='Whatsapp' />
      </div>
      <div className='mt-4'>
        <h2 className='mb-2 text-2xl text-black'>Discover</h2>
        <FooterLink href='/' title='Home' />
        <FooterLink href='/work' title='Work' />
        <FooterLink href='/Services' title='Services' />
        <FooterLink href='/about' title='About' />
      </div>
      <div className='mt-4'>
        <h2 className='mb-2 text-2xl text-black'>Follow Us</h2>
        <FooterLink href='/' title='Instagram' />
        <FooterLink href='/' title='Twitter' />
        <FooterLink href='/' title='Behance' />
      </div>
    </div>
  );
}
