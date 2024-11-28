import React, { Suspense } from "react";
import TestimonialVideo from "./components/TestimonialVideo";
import Link from "next/link";
import { QuoteDown, QuoteUp, VideoSquare } from "iconsax-react";

type TestimonialProps = {
  videoSrc: string;
};

export default function Testimonial({ videoSrc }: TestimonialProps) {
  return (
    <div
      id='testimonials'
      className='flex items-center justify-center py-24 lg:pb-0'
    >
      <div className='flex flex-row lg:flex-col flex-wrap lg:items-center justify-center gap-8'>
        {/* ----------- TEXT RIGHT */}
        <div className='w-[400px] lg:w-full flex flex-col gap-8 lg:px-4 lg:items-center'>
          <h2 className='text-4xl font-semibold text-primary-dark '>
            Testimonial
          </h2>

          <div className='flex flex-row items-center gap-2 text-accent-dark'>
            <VideoSquare />
            <p>Tanggapan Klien</p>
          </div>

          <div className='flex flex-col items-start text-primary'>
            <QuoteUp variant='Bold' size={36} />
            <p className='text-4xl leading-relaxed max-w-[448px]'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. At,
              facere.
            </p>
            <QuoteDown variant='Bold' size={36} />
          </div>

          <Link
            href={"/"}
            className='button-lg w-72 lg:button-md lg:text-sm button-outline-primary'
          >
            Lihat Testimoni Lainnya
          </Link>
        </div>
        {/* ----------- VIDEO LEFT */}
        <Suspense
          fallback={
            <div className='w-[680px] h-[540px] bg-gray-200 animate-pulse'></div>
          }
        >
          <TestimonialVideo videoSrc={videoSrc} />
        </Suspense>
      </div>
    </div>
  );
}
