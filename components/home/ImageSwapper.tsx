"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { images } from "../../data";

export default function ImageSwapper() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 2500);

    return () => clearInterval(intervalId);
  });

  return (
    <Image
      src={images[currentIndex]}
      alt='a web design'
      className='mx-auto mt-8 h-[400px] w-full rounded-lg object-cover md:mt-16 md:h-[580px]'
      width='0'
      height='0'
      sizes='100vw'
    ></Image>
  );
}
