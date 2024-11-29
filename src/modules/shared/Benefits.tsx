import Image from "next/image";
import React from "react";

type BenefitsProps = {
  test?: string;
};

export default function Benefits({ test }: BenefitsProps) {
  const benefits = [
    {
      title: "Anggaran Terkendali",
      text: "Kami bantu atur setiap detail, supaya proyek rumah kamu tetap sesuai budget, tanpa kejutan biaya tak terduga.",
    },
    {
      title: "Desain Sesuai Keinginan",
      text: "Kami bekerja dengan tukang berpengalaman yang paham visi kamu, memastikan desain rumah sesuai dengan harapanmu, tanpa kompromi.",
    },
    {
      title: "Ruang Terbatas, Solusi Maksimal",
      text: "Meski lahan sempit, kami siap desain hunian yang fungsional dan nyaman untuk seluruh keluarga, tanpa mengorbankan kualitas.",
    },
  ];
  return (
    <div
      id='benefits'
      className='w-full flex items-center justify-center py-24 px-32 lg:px-6'
    >
      <div className='flex-1 max-w-[1200px] flex flex-col items-center justify-center gap-8'>
        {/* --------- SOLUTIONS */}
        <div className='grid grid-cols-2 gap-x-8 lg:place-items-center'>
          <div
            data-aos='fade-up'
            onContextMenu={(e) => e.preventDefault()}
            className='col-span-1 lg:col-span-2 h-fit relative disable-user-actions'
          >
            <Image
              className='disable-user-actions'
              src={`/images/furniture/benefit-3.jpg`}
              alt='Benefit Image'
              width={800}
              height={800}
            />
            <Image
              className='absolute bottom-8 right-8 w-16 disable-user-actions'
              src={`/images/logo/arvit-text-logo-landscape.svg`}
              width={100}
              height={100}
              alt='Arvit Watermark'
            />
          </div>
          <div className='col-span-1 lg:col-span-2 pt-12 flex flex-col gap-4'>
            {benefits.map((b, ii) => {
              return (
                <div key={ii} className='w-fit'>
                  <p className='font-semibold text-2xl mb-4 text-primary-dark'>
                    {b.title}
                  </p>
                  <p className=''>{b.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
