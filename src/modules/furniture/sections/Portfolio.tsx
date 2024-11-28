import ImageSlideShow from "@/ui/ImageSlideShow";
import Image from "next/image";
import React from "react";

type PortfolioProps = {
  test?: string;
};

export default function Portfolio({ test }: PortfolioProps) {
  const portfolios = [
    {
      title: "Dapur Bu Rusli",
      description: "100x100m2 Lorem ipsum dolor sit amet.",
      images: [
        "/images/portfolio/dapur/bu_rusli/1.jpg",
        "/images/portfolio/dapur/bu_rusli/2.jpg",
        "/images/portfolio/dapur/bu_rusli/3.jpg",
        "/images/portfolio/dapur/bu_rusli/4.jpg",
        "/images/portfolio/dapur/bu_rusli/5.jpg",
      ],
    },
    {
      title: "Dapur Bu Dyan",
      description: "100x100m2 Lorem ipsum dolor sit amet.",
      images: [
        "/images/portfolio/dapur/bu_dyan/1.jpg",
        "/images/portfolio/dapur/bu_dyan/2.jpg",
        "/images/portfolio/dapur/bu_dyan/3.jpg",
        "/images/portfolio/dapur/bu_dyan/4.jpg",
        "/images/portfolio/dapur/bu_dyan/5.jpg",
        "/images/portfolio/dapur/bu_dyan/6.jpg",
        "/images/portfolio/dapur/bu_dyan/7.jpg",
        "/images/portfolio/dapur/bu_dyan/8.jpg",
      ],
    },
    {
      title: "Kamar Tidur Utama",
      description: "100x100m2 Lorem ipsum dolor sit amet.",
      images: [
        "/images/portfolio/kamar/master/1.jpg",
        "/images/portfolio/kamar/master/2.jpg",
        "/images/portfolio/kamar/master/3.jpg",
        "/images/portfolio/kamar/master/4.jpg",
      ],
    },
    {
      title: "Kamar Tidur Anak",
      description: "100x100m2 Lorem ipsum dolor sit amet.",
      images: [
        "/images/portfolio/kamar/anak/1.jpg",
        "/images/portfolio/kamar/anak/2.jpg",
        "/images/portfolio/kamar/anak/3.jpg",
        "/images/portfolio/kamar/anak/4.jpg",
        "/images/portfolio/kamar/anak/5.jpg",
      ],
    },
    {
      title: "Ruang Tamu",
      description: "100x100m2 Lorem ipsum dolor sit amet.",
      images: [
        "/images/portfolio/ruangtamu/1.jpg",
        "/images/portfolio/ruangtamu/2.jpg",
      ],
    },
  ];
  return (
    <div
      id='portfolio'
      className='w-full disable-user-actions select-none py-24 lg:pb-0'
      onContextMenu={(e) => e.preventDefault()}
    >
      <div className='px-20 lg:px-6 mb-8'>
        <h2 className='text-4xl font-semibold text-primary-dark '>Portfolio</h2>
        <p className='font-light'>
          Koleksi proyek kami yang telah sukses memuaskan klien
        </p>
      </div>

      <div className='w-full overflow-x-auto flex flex-row gap-4 flex-nowrap pl-20 lg:pl-6 pb-8 thin-scrollbar'>
        {portfolios.map((portfolio, ii) => {
          return (
            <div key={ii} className='w-[840px] lg:w-screen shrink-0'>
              <div className='relative'>
                <ImageSlideShow images={portfolio.images} />
                <Image
                  className='absolute bottom-12 right-8 w-16'
                  src={`/images/logo/arvit-logo-portrait.svg`}
                  width={100}
                  height={100}
                  alt='Arvit Watermark'
                />
              </div>
              <div>
                <p className='text-lg font-semibold'>{portfolio.title}</p>
                <p className='text-sm text-gray-500'>{portfolio.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
