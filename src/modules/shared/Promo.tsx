import React, { lazy, Suspense } from "react";
import VideoComponent from "./components/VideoComponent";
import Link from "next/link";
import { whatsappLink } from "@/@data/contact";

type PromoProps = {
  test?: string;
};

export default function Promo({ test }: PromoProps) {
  return (
    <div
      id='promo'
      className='flex items-center justify-center py-24 px-32 lg:px-6'
    >
      <div className='flex-1 flex flex-row lg:flex-col lg:items-center justify-center gap-8'>
        {/* ----------- TEXT LEFT */}
        <div className='shrink-0 w-[360px] pt-12 lg:pt-0 lg:w-full flex flex-col gap-8 lg:px-4 items-end lg:items-center'>
          <h2 className='text-5xl md:text-4xl font-semibold text-primary-dark'>
            Promo
          </h2>

          <div>
            <p className='text-2xl font-semibold text-accent'>CUSTOM KABINET</p>
            <p className='text-2xl font-semibold text-primary'>
              GA PERLU RIBET
            </p>
          </div>

          <div className='bg-primary rounded-2xl flex flex-row'>
            <div className='flex flex-col gap-4 text-primary-dark xl:px-6 px-10 py-6 bg-white font-semibold shadow-lg rounded-2xl scale-105'>
              <p className='text-lg lg:text-base'>Mulai</p>
              <p className='text-lg lg:text-base'>Dari:</p>
            </div>
            <div className='flex flex-col gap-4 text-white px-8 py-6 lg:px-4 italic'>
              <p className='text-lg lg:text-base line-through decoration-red-500'>
                Rp 35.000.000
              </p>
              <p className='text-lg lg:text-base'>Rp 25.000.000</p>
            </div>
          </div>

          <Link
            target='_blank'
            href={whatsappLink.link}
            className='button-xl w-80 lg:button-md button-contain-error'
          >
            Konsultasi Sekarang
          </Link>
        </div>
        {/* ----------- VIDEO RIGHT */}
        <div data-aos='fade-up' className='flex justify-end '>
          <VideoComponent />
        </div>
      </div>
    </div>
  );
}
