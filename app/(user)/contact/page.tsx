import Contact from "../../../components/contact/Contact";

export default function ContactPage() {
  return (
    <section className='container mx-auto px-4 md:px-8 lg:px-10'>
      <div>
        <h1 className='text-9xl'>WORK WITH US ✺</h1>
        <p className='mt-4 w-10/12 text-4xl'>
          Always good to see you. Drop us a note about a project, speaking
          event, or press inquiry.
        </p>
      </div>
      <hr className='my-36 border-t-2 border-gray-300' />
      <div>
        <h1 className='mb-6 w-6/12 text-3xl'>
          Whether you want to tell us about a project, join our team, or just
          say hi, write to us! We’d love to hear from you.
        </h1>
        <Contact />
      </div>
    </section>
  );
}
