import { whatsappLink } from "@/@data/contact";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import PriceItem from "../components/PriceItem";

type PriceProps = {
  test?: string;
};

export default function Price({ test }: PriceProps) {
  const prices = [
    {
      image: "/images/pricelist/kamar-1.jpg",
      title: "Kamar tidur",
      total: "Rp 26.500.000",
      rincian: [
        { label: "Divan kasur", price: "Rp 6.700.000" },
        { label: "Lemari", price: "Rp 14.400.000" },
        { label: "Backdrop TV", price: "Rp 2.400.000" },
        { label: "Meja Rias", price: "Rp 2.200.000" },
        { label: "Nakas", price: "Rp 800.000" },
      ],
    },
    {
      image: "/images/pricelist/tamu-x.jpg",
      title: "Ruang Tamu",
      total: "Rp 7.000.000",
      rincian: [
        { label: "Sofa 3 seater", price: "Rp 5.000.000" },
        { label: "Meja tamu", price: "Rp 2.000.000" },
      ],
    },
    {
      image: "/images/pricelist/kerja-2.jpg",
      title: "Ruang Kerja",
      total: "Rp 6.100.000",
      rincian: [
        { label: "Meja Kerja", price: "Rp 1.400.000" },
        { label: "Kursi kerja", price: "Rp 1.200.000" },
        { label: "Lemari buku", price: "Rp 3.500.000" },
      ],
    },
    {
      image: "/images/pricelist/tv-1.jpg",
      title: "Ruang TV",
      total: "Rp 18.300.000",
      rincian: [
        { label: "Backdrop TV", price: "Rp 2.600.000" },
        { label: "Kabinet Pajangan", price: "Rp 6.000.000" },
      ],
    },
    {
      image: "/images/pricelist/dapur-1.jpg",
      title: "Dapur (3x3 meter)",
      total: "Rp 28.700.000",
      rincian: [
        { label: "Kabinet atas", price: "Rp 9.700.000" },
        { label: "Kabinet bawah", price: "Rp 9.700.000" },
        { label: "Top table", price: "Rp 9.300.000" },
      ],
    },
    {
      image: "/images/pricelist/makan-1.jpg",
      title: "Ruang makan",
      total: "Rp 9.800.000",
      rincian: [
        { label: "Meja makan", price: "Rp 6.000.000" },
        { label: "Kursi makan", price: "Rp 3.800.000" },
      ],
    },
    {
      image: "/images/pricelist/mandi-1.png",
      title: "Kamar mandi",
      total: "Rp 5.900.000",
      rincian: [
        { label: "Wastefel kabinet", price: "Rp 2.800.000" },
        { label: "Top table", price: "Rp 2.200.000" },
        { label: "Cermin", price: "Rp 900.000" },
      ],
    },
    {
      image: "/images/pricelist/laundry-1.jpg",
      title: "Ruang laundry",
      total: "Rp 6.800.000",
      rincian: [
        { label: "Kabinet mesin", price: "Rp 2.800.000" },
        { label: "Rak sabun", price: "Rp 4.000.000" },
      ],
    },
    {
      image: "/images/pricelist/tangga-1.jpg",
      title: "Ruang Bawah Tangga",
      total: "Rp 9.000.000",
      rincian: [{ label: "Kabinet Bawah Tangga", price: "Rp 9.000.000" }],
    },
  ];

  return (
    <div
      id='prices'
      className='w-full disable-user-actions select-none py-24 lg:pb-0'
      onContextMenu={(e) => e.preventDefault()}
    >
      <div className='px-32 lg:px-6 mb-8'>
        <h2 className='text-4xl font-semibold text-primary-dark '>
          Estimasi Biaya
        </h2>
        <p className='font-light'>
          Estimasi biaya pembuatan furnitur berdasarkan ukuran ruangan
        </p>
      </div>

      <div className='w-full overflow-x-auto flex flex-row gap-10 flex-nowrap px-32 lg:pl-6 thin-scrollbar'>
        {prices.map((price, ii) => {
          return <PriceItem key={ii} price={price} />;
        })}
      </div>

      <div className='w-full px-32 md:px-6 py-12 flex flex-col gap-8 items-center text-center mt-10 bg-accent-lightest/60'>
        <p className='max-w-[800px] text-xl md:text-lg'>
          Masih Bingung? Ingin Rincian Harga yang Lebih Custom?
        </p>
        <Link
          target='_blank'
          href={whatsappLink.link}
          className='button-xl lg:button-md lg:text-sm button-contain-primary'
        >
          Konsultasikan biaya pembangunan
        </Link>
        <p className='max-w-[800px] text-xl md:text-lg'>
          yang sesuai dengan kebutuhanmu bersama kami.
        </p>
      </div>
    </div>
  );
}
