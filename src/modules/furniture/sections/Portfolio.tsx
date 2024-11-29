import ImageSlideShow from "@/ui/ImageSlideShow";
import { Location } from "iconsax-react";
import Image from "next/image";
import React from "react";

type PortfolioProps = {
  test?: string;
};

export default function Portfolio({ test }: PortfolioProps) {
  const portfolios = [
    {
      title: "Dapur Bu Dyan",
      description: "100x100m2 Lorem ipsum dolor sit amet.",
      klien: "Bu Dyan",
      lokasi: "Pasar Rebo",
      ukuran: "6 x 4 meter",
      style: "Minimalis Tropis",
      images: [
        "/images/furniture/portfolio/dapur/bu_dyan/1.jpg",
        "/images/furniture/portfolio/dapur/bu_dyan/2.jpg",
        "/images/furniture/portfolio/dapur/bu_dyan/3.jpg",
        "/images/furniture/portfolio/dapur/bu_dyan/4.jpg",
        "/images/furniture/portfolio/dapur/bu_dyan/5.jpg",
        "/images/furniture/portfolio/dapur/bu_dyan/6.jpg",
      ],
    },
    {
      title: "Dapur Bu Dina",
      description: "100x100m2 Lorem ipsum dolor sit amet.",
      klien: "Bu Dina",
      lokasi: "Ancol",
      ukuran: "4 meter",
      square: true,
      style: "Minimalis Japandi",
      images: [
        "/images/furniture/portfolio/dapur/dina/1.jpg",
        "/images/furniture/portfolio/dapur/dina/2.jpg",
        "/images/furniture/portfolio/dapur/dina/3.jpg",
        "/images/furniture/portfolio/dapur/dina/4.jpg",
      ],
    },
    {
      title: "Kamar Tidur Utama",
      description: "100x100m2 Lorem ipsum dolor sit amet.",
      klien: "Bu Dyan",
      lokasi: "Pasar Rebo",
      ukuran: "5x5 meter",
      style: "Minimalis Japandi",
      images: [
        "/images/furniture/portfolio/kamar/master/1.jpg",
        "/images/furniture/portfolio/kamar/master/2.jpg",
        "/images/furniture/portfolio/kamar/master/3.jpg",
        "/images/furniture/portfolio/kamar/master/4.jpg",
      ],
    },
    {
      title: "Kamar Tidur Anak",
      description: "100x100m2 Lorem ipsum dolor sit amet.",
      klien: "Bu Dyan",
      lokasi: "Pasar Rebo",
      ukuran: "4x4 meter",
      style: "Minimalis",
      images: [
        "/images/furniture/portfolio/kamar/anak/1.jpg",
        "/images/furniture/portfolio/kamar/anak/2.jpg",
        "/images/furniture/portfolio/kamar/anak/3.jpg",
        "/images/furniture/portfolio/kamar/anak/4.jpg",
        "/images/furniture/portfolio/kamar/anak/5.jpg",
      ],
    },
    {
      title: "Kabinet TV",
      description: "100x100m2 Lorem ipsum dolor sit amet.",
      klien: "Bu Rusli",
      lokasi: "Bekasi",
      ukuran: "300 x 300 x 40 cm",
      style: "Minimalis Tropis",
      images: [
        "/images/furniture/portfolio/tv/1.jpg",
        "/images/furniture/portfolio/tv/2.jpg",
        "/images/furniture/portfolio/tv/3.jpg",
        "/images/furniture/portfolio/tv/4.jpg",
      ],
    },
  ];
  return (
    <div
      id='portfolio'
      className='w-full disable-user-actions select-none py-24 lg:pb-0'
      onContextMenu={(e) => e.preventDefault()}
    >
      <div className='px-32 lg:px-6 mb-8'>
        <h2 className='text-5xl md:text-4xl font-semibold text-primary-dark '>
          Portfolio
        </h2>
        <p className='font-light'>
          Koleksi proyek kami yang telah sukses memuaskan klien
        </p>
      </div>

      <div className='w-full overflow-x-auto flex flex-row gap-20 flex-nowrap px-32 lg:pl-6 thin-scrollbar'>
        {portfolios.map((portfolio, ii) => {
          return (
            <div
              key={ii}
              className='w-[680px] lg:w-[95vw] shrink-0 bg-gray-100'
            >
              {/* ------------ IMAGE THUMBNAIL */}
              <div className='relative'>
                <ImageSlideShow images={portfolio.images} />
                <Image
                  className='absolute bottom-12 right-8 w-16'
                  src={`/images/logo/arvit-text-logo-landscape.svg`}
                  width={100}
                  height={100}
                  alt='Arvit Watermark'
                />
              </div>
              {/* ------------ DESCRIPTION */}
              <div className='py-8 px-6 flex flex-col gap-2'>
                <p className='text-lg font-semibold text-primary'>
                  {portfolio.title}
                </p>
                <p className='text-sm flex flex-row items-center gap-2'>
                  <Location size={12} /> {portfolio.lokasi}
                </p>
                <p className='text-sm text-gray-500'>
                  Ukuran : {portfolio.ukuran}{" "}
                  {portfolio?.square && (
                    <span className='text-xs relative bottom-1'>2</span>
                  )}
                </p>
                <p className='text-sm text-gray-500'>
                  Klien : {portfolio.klien}
                </p>
                <p className='text-sm px-3 py-1 rounded-full bg-accent w-fit'>
                  {portfolio.style}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
