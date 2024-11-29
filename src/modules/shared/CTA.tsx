import { whatsappLink } from "@/@data/contact";
import Link from "next/link";
import React from "react";

type CTAProps = {
  test?: string;
};

export default function CTA({ test }: CTAProps) {
  return (
    <div
      id='contactus'
      className='w-full bg-accent-lightest/60 px-32 md:px-6 py-40 flex flex-col gap-8 items-center text-center'
    >
      <p className='max-w-[800px] text-xl md:text-lg'>
        Lebih dari 50 proyek sukses telah kami wujudkan, dengan ratusan klien
        puas yang merekomendasikan layanan kami. Saatnya kamu bergabung dan jadi
        bagian dari kisah sukses ini!
      </p>
      <p className='max-w-[800px] text-6xl md:text-3xl font-semibold text-primary'>
        50+ Pelanggan Puas
      </p>
      <p className='max-w-[800px] text-xl md:text-lg'>
        Jadilah salah satu dari 10 klien pertama di bulan ini dan dapatkan
        konsultasi desain gratis
      </p>
      <Link
        target='_blank'
        href={whatsappLink.link}
        className='button-xl lg:button-md lg:text-sm button-contain-primary'
      >
        Konsultasi Sekarang
      </Link>
    </div>
  );
}
