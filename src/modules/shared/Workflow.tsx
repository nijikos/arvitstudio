import { whatsappLink } from "@/@data/contact";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type WorkflowProps = {
  test?: string;
};

export default function Workflow({ test }: WorkflowProps) {
  return (
    <div
      id='workflow'
      className='w-full flex items-center justify-center py-24 px-32 lg:px-6'
    >
      <div className='flex-1 max-w-[1200px] flex flex-col lg:items-center lg:justify-center gap-20'>
        {/* ------------- SECTION TITLE */}
        <div className=''>
          <h2 className='text-5xl md:text-4xl font-semibold text-primary-dark '>
            Alur Kerja
          </h2>
          <p className='font-light'>
            Proses mudah, transparan, dan terstruktur untuk mewujudkan rumah
            impianmu tanpa ribet
          </p>
        </div>
        {/* ------------- DIAGRAM */}
        <Image
          onContextMenu={(e) => e.preventDefault()}
          className='h-fit md:hidden object-cover disable-user-actions'
          src={"/images/furniture/workflow-grid-2-c.png"}
          width={2400}
          height={2000}
          placeholder='blur'
          alt='Portfolio Image'
          blurDataURL='/images/defaultimg.jpg'
        />
        <Image
          onContextMenu={(e) => e.preventDefault()}
          className='h-fit hidden md:inline-block object-cover disable-user-actions'
          src={"/images/furniture/workflow-grid-1-e.png"}
          width={2400}
          height={2000}
          placeholder='blur'
          alt='Portfolio Image'
          blurDataURL='/images/defaultimg.jpg'
        />
        <Link
          target='_blank'
          href={whatsappLink.link}
          className='button-xl w-80 button-contain-error mx-auto'
        >
          Konsultasi Sekarang
        </Link>
      </div>
    </div>
  );
}
