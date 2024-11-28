import React from "react";
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
      className='flex items-center justify-center py-24 px-32 lg:px-6 bg-gray-50'
    >
      <div className='flex-1 flex flex-row lg:flex-col lg:items-center justify-center gap-8'>
        {/* ----------- TEXT LEFT */}
        <div className='shrink-0 w-[360px] pt-12 lg:pt-0 lg:w-full flex flex-col gap-8 lg:px-4 items-end lg:items-center'>
          <h2 className='text-4xl font-semibold text-primary-dark'>
            Testimonial
          </h2>

          <div className='flex flex-row items-center gap-2 text-accent-dark'>
            <VideoSquare />
            <p>Tanggapan Klien</p>
          </div>

          <div className='flex flex-col items-end text-primary'>
            <QuoteUp variant='Bold' size={36} />
            <p className='text-4xl leading-relaxed text-right'>
              Jasa interior yang proaktif yang menawarkan berbagai hal di luar
              ekspektasi saya.
            </p>
            <QuoteDown variant='Bold' size={36} />
          </div>

          <Link
            href={"#furniture-hero"}
            className='button-lg w-72 lg:button-md lg:text-sm button-outline-primary'
          >
            Lihat Testimoni Lainnya
          </Link>
        </div>
        {/* ----------- VIDEO RIGHT */}
        <div className='flex justify-end'>
          <TestimonialVideo videoSrc={videoSrc} />
        </div>
      </div>
    </div>
  );
}
