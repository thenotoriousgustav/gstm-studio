import ImgAbout from "./ImgAbout";

export default function Paragraph() {
  return (
    <section className='my-36 flex h-screen w-full items-center justify-center border-y-2 border-gray-300'>
      <div>
        <p className='text-center text-[2rem] font-light leading-[2rem] md:text-6xl lg:text-7xl'>
          <span className='inline-flex items-center'>
            GSTM IS A
            <ImgAbout src={"/assets/img/abstract.jpg"} styles={"w-28"} />
          </span>
          <span>DESIGN AND DEVELOPMENT </span>
          <span>DRIVEN STUDIO</span>
          <span className='inline-flex items-center'>
            <ImgAbout src={"/assets/img/abstract-1.jpg"} styles={"w-14"} />
            THAT CREATES
          </span>{" "}
          <span className='-mt-2 block md:mt-0 md:inline-block'>DIGITAL</span>
          <span className='inline-flex items-center'>
            EXPERIENCES.
            <ImgAbout src={"/assets/img/abstract-2.jpg"} styles={"w-28"} />
          </span>
          <span>WE LIKE TO HELP INTERESTING </span>
          <span className='inline-flex items-center'>
            BRANDS
            <ImgAbout src={"/assets/img/abstract-3.png"} styles={"w-32"} />
            TELL
          </span>
          <span className='inline-block md:block'>THEIR STORIES.</span>
        </p>
      </div>
    </section>
  );
}
