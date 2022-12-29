import Link from "next/link";
import FooterList from "./FooterList";
import ParentFooter from "./ParentFooter";

export default function Footer() {
  return (
    <main className='mt-36'>
      <section className='relative z-10 mt-24 min-h-[100vh] w-screen border-t border-black bg-primary px-4 pt-8 md:px-10 lg:px-14'>
        <ParentFooter />
      </section>

      <footer className='sticky bottom-0 left-0 w-screen bg-tersier px-4 py-8 text-secondary md:px-10 lg:px-14'>
        <FooterList />

        <div className='mt-20 flex items-center justify-start border-t border-secondary pt-4 md:justify-between'>
          <h3>Copyright © 2022 GSTM STUDIO® | Jakarta</h3>
          <a href='#header' className='hidden md:inline-block'>
            Back to top
          </a>
        </div>
      </footer>
    </main>
  );
}
