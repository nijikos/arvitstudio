import Image from "next/image";
import React from "react";

type BenefitsProps = {
  test?: string;
};

export default function Benefits({ test }: BenefitsProps) {
  const questions = [
    "Pernah bangun rumah namun sering stress karena over budget?",
    "Sudah dapat tukang murah tapi susah diarahkan dan hasil desainnya tidak sesuai ekspektasi?",
    "Punya lahan sempit tapi ingin hunian yang mencukupi semua kebutuhan anggota keluarga?",
  ];
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
        {/* --------- QUESTIONS */}
        <div className='flex flex-col items-center justify-center gap-12 text-2xl lg:text-xl text-primary relative'>
          {questions.map((q, ii) => {
            return (
              <p className='text-center max-w-[720px] w-fit' key={ii}>
                {q}
              </p>
            );
          })}
        </div>
        {/* --------- SOLUTIONS */}
        <div className='grid grid-cols-2 gap-x-8 lg:place-items-center'>
          <div
            onContextMenu={(e) => e.preventDefault()}
            className='col-span-1 lg:col-span-2 h-fit relative disable-user-actions'
          >
            <Image
              className='disable-user-actions'
              src={`/images/furniture/benefit-2.png`}
              alt='Benefit Image'
              width={800}
              height={800}
            />
            <Image
              className='absolute bottom-12 right-8 w-16 disable-user-actions'
              src={`/images/logo/arvit-logo-portrait.svg`}
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
