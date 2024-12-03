import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { whatsappLink } from "@/@data/contact";

type CTAProps = {
  test?: string;
};

export default function CTA({ test }: CTAProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const images = [
    { id: 1, path: "/images/client/1.png" },
    { id: 2, path: "/images/client/2.png" },
    { id: 3, path: "/images/client/3.png" },
    { id: 4, path: "/images/client/4.png" },
    { id: 5, path: "/images/client/5.png" },
    { id: 6, path: "/images/client/6.png" },
  ];

  return (
    <div id='contactus' className='w-full py-40'>
      <div className='px-32 md:px-6 flex flex-col gap-8 items-center text-center mb-12'>
        <p className='max-w-[800px] text-xl md:text-lg'>
          Lebih dari 50 proyek sukses telah kami wujudkan, dengan ratusan klien
          puas yang merekomendasikan layanan kami. Saatnya kamu bergabung dan
          jadi bagian dari kisah sukses ini!
        </p>
        <p className='max-w-[800px] text-6xl md:text-3xl font-semibold text-primary'>
          50+ Pelanggan Puas
        </p>
        <p className='cta-bubble max-w-[800px] !text-2xl md:text-lg text-white px-4 py-6 rounded-2xl border-b-8 border-error animate-cbounce relative font-semibold'>
          Jadilah salah satu dari 10 klien pertama di bulan ini dan dapatkan
          konsultasi desain{" "}
          <span className='!text-4xl text-yellow-300 uppercase'>gratis!!!</span>
          <Image
            className='w-20 h-20 lg:w-16 lg:h-16 absolute bottom-0 left-0'
            src={"/images/cta/megaphone.png"}
            width={500}
            height={500}
            alt='megaphone'
          />
        </p>
        <Link
          href={whatsappLink.anchor}
          className='button-xl lg:button-md button-contain-error'
        >
          Konsultasi Sekarang
        </Link>
      </div>

      <div className='flex flex-row gap-8 sm:gap-2 flex-wrap justify-center'>
        {images?.map((img, ii) => {
          return (
            <Image
              key={ii}
              className='max-w-[180px] h-[240px] object-cover disable-user-actions hover:scale-102 transition-all'
              src={img.path}
              width={1000}
              height={1000}
              alt='Pricelist Image'
              onContextMenu={(e) => e.preventDefault()}
              onClick={() => setSelectedImage(img.path)}
            />
          );
        })}
      </div>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80'
          onClick={() => setSelectedImage(null)} // Close modal on click
        >
          <Image
            onContextMenu={(e) => e.preventDefault()}
            className='max-h-screen object-cover disable-user-actions'
            src={selectedImage}
            width={768}
            height={1024}
            alt='Fullscreen Image'
          />
        </div>
      )}
    </div>
  );
}
