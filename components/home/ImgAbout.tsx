import Image from "next/image";

interface Props {
  src: string;
  styles: string;
}

export default function ImgAbout({ src, styles }: Props) {
  return (
    <Image
      src={src}
      alt='p'
      className={`mx-2 h-10 rounded-full object-cover lg:mx-3 lg:h-14 ${styles}`}
      width='0'
      height='0'
      sizes='100vw'
    ></Image>
  );
}
