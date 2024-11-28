import React, { lazy, Suspense } from "react";
import VideoComponent from "./components/VideoComponent";
import Link from "next/link";
import { whatsappLink } from "@/@data/contact";

type PromoProps = {
  test?: string;
};

export default function Promo({ test }: PromoProps) {
  return (
    <div id='promo' className='flex items-center justify-center py-24'>
      <div className='flex flex-row lg:flex-col-reverse lg:items-center gap-8'>
        {/* ----------- VIDEO LEFT */}
        <Suspense
          fallback={
            <div className='w-[396px] h-[700px] bg-gray-200 animate-pulse'></div>
          }
        >
          <VideoComponent />
        </Suspense>
        {/* ----------- TEXT RIGHT */}
        <div className='w-[480px] md:w-full flex flex-col gap-8 lg:px-4 items-center pt-12 lg:pt-0'>
          <h2 className='text-4xl font-semibold text-primary-dark text-center'>
            Promo Terbaru
          </h2>
          <div>
            <p className='text-xl font-semibold text-accent text-center'>
              CUSTOM KABINET
            </p>
            <p className='text-xl font-semibold text-primary text-center'>
              GA PERLU RIBET
            </p>
          </div>
          <div className='bg-primary rounded-2xl flex flex-row gap-6 lg:gap-2 max-w-[448px]'>
            <div className='flex flex-col gap-4 text-primary-dark px-10 py-6 bg-white font-semibold shadow-lg rounded-2xl scale-105'>
              <p className='text-2xl lg:text-lg'>Mulai:</p>
              <p className='text-2xl lg:text-lg'>Dari:</p>
            </div>
            <div className='flex flex-col gap-4 text-white px-8 py-6 lg:px-4'>
              <p className='text-2xl lg:text-lg line-through decoration-red-500 decoration-2'>
                Rp 2.400.000/m
                <span className='text-xs relative bottom-2.5 mb-3'>2</span>
              </p>
              <p className='text-2xl lg:text-lg'>
                Rp 2.300.000/m
                <span className='text-xs relative bottom-2.5 mb-3'>2</span>
              </p>
            </div>
          </div>

          <Link
            target='_blank'
            href={whatsappLink.link}
            className='button-lg w-80 lg:button-md lg:text-sm button-contain-accent'
          >
            Konsultasi Sekarang
          </Link>
        </div>
      </div>
    </div>
  );
}
