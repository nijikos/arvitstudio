import React from "react";
import NavigationBar from "@/ui/NavigationBar";
import { Location } from "iconsax-react";
import Link from "next/link";
import { whatsappLink } from "@/@data/contact";
import Image from "next/image";

type HeroProps = {
  test?: string;
};

export default function Hero({ test }: HeroProps) {
  const contact = {};
  return (
    <div
      id='furniture-hero'
      className='h-[90vh] lg:h-[700px] bg-primary relative lg:py-28 lg:flex flex-col items-center'
    >
      {/* --------- Navigation Bar */}
      <NavigationBar />
      {/* --------- HERO IMAGE */}
      <Image
        alt='hero furniture image'
        src={`/images/furniture/hero-furniture-3.png`}
        width={1024}
        height={1024}
        className='w-[60vw] h-[640px] lg:h-[600px] md:w-full absolute right-0 bottom-0 object-cover rounded-tl-[120px] md:rounded-none'
      />
      {/* --------- HERO TEXT */}
      <div className='z-10 absolute left-0 bottom-0 flex flex-col gap-4 text-white pl-40 3xl:pl-20 lg:px-6 pb-12'>
        <p className='w-[640px] lg:w-fit font-semibold text-7xl lg:text-4xl drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]'>
          Furniture Design & Build
        </p>
        <div>
          <p className='font-light lg:text-sm lg:w-fit'>
            Hemat waktu, biaya, dan energi.
          </p>
          <p className='font-light lg:text-sm lg:w-fit'>
            Arvit Studio mewujudkan hunian impian Anda secara TEPAT, EFISIEN,
            ESTETIK
          </p>
        </div>
        <div className='flex flex-row gap-2 items-center text-accent lg:text-accent-dark'>
          <Location className='lg:w-5' />
          <p className='lg:text-xs '>Jabodetabek</p>
        </div>
        <div className='flex flex-row lg:flex-col gap-6 items-center lg:items-start lg:gap-2 text-accent'>
          <Link
            target='_blank'
            href={whatsappLink.link}
            className='button-lg lg:button-md lg:text-sm button-contain-accent'
          >
            Konsultasi Sekarang
          </Link>
          <Link
            href='#portfolio'
            className='button-lg lg:button-md lg:text-sm button-outline-white'
          >
            Lihat Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
