import { PageWrapper } from "../../../components/PageWrapper";
import Services from "../../../components/services/Services";

export default function ServicesPage() {
  return (
    <PageWrapper>
      <section
        className='container mx-auto max-w-full px-4 md:px-8 lg:px-10'
        id='services'
      >
        <header className='mt-2'>
          <div>
            <h1 className='text-7xl md:text-9xl'>WHAT WE DO ✺</h1>
            <p className='mt-6 w-full text-3xl md:w-10/12 md:text-4xl'>
              We transform ideas into digital outcomes to elevate the connection
              between the brand and their users.
            </p>
          </div>
        </header>

        <section>
          <Services />
        </section>
      </section>
    </PageWrapper>
  );
}
