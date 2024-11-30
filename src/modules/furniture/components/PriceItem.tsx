import { whatsappLink } from "@/@data/contact";
import { ArrowSquareDown } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type Rincian = {
  label: string;
  price: string;
};

type PriceItem = {
  image: string;
  title: string;
  total: string;
  rincian: Rincian[];
};

type PriceItemProps = {
  price: PriceItem;
};

export default function PriceItem({ price }: PriceItemProps) {
  const [showRincian, setShowRincian] = useState<boolean>(false);
  return (
    <div className='w-[400px] lg:w-[90vw] shrink-0 bg-accent-lightest/40 overflow-hidden h-fit'>
      {/* ------------ IMAGE THUMBNAIL */}
      <div className=''>
        <Image
          className='w-full h-[360px] object-cover'
          src={price.image}
          width={1000}
          height={1000}
          alt='Pricelist Image'
        />
      </div>
      {/* ------------ DESCRIPTION */}
      <div className='py-8 px-6 flex flex-col gap-4'>
        <div>
          <p className='text-primary-lighter md:text-lg'>{price.title}</p>
          <p className='text-4xl md:text-2xl font-semibold text-primary'>
            {price.total}
          </p>
          <div className='flex flex-row items-center justify-between border-t border-accent pt-2 mt-2'>
            <span className='!text-sm text-primary-dark'>rincian harga</span>
            <button
              className='text-primary-dark focus:outline-none'
              onClick={() => {
                setShowRincian(!showRincian);
              }}
            >
              <ArrowSquareDown
                data-up={showRincian}
                className='data-[up=false]:rotate-0 data-[up=true]:rotate-180 transition-all'
              />
            </button>
          </div>
        </div>
        <div
          data-show={showRincian}
          className='flex flex-col gap-3 text-sm py-4 overflow-hidden data-[show=true]:max-h-fit data-[show=false]:max-h-0 data-[show=false]:py-0 transition-all'
        >
          {price.rincian.map((rinci, ii) => {
            return (
              <div key={ii} className='grid grid-cols-2 gap-4'>
                <p className='col-span-1 font-medium'>{rinci.label}</p>
                <p className='col-span-1 text-right text-primary-lighter'>
                  {rinci.price}
                </p>
              </div>
            );
          })}
        </div>
        <Link
          target='_blank'
          href={whatsappLink.link}
          className='button-xl lg:button-md button-contain-error'
        >
          Konsultasi Sekarang
        </Link>
      </div>
    </div>
  );
}
