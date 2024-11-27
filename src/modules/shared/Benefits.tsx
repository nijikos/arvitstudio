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
    <div id='benefits' className='px-20 lg:px-6 py-28'>
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
      {/* --------- */}
      <div className='py-20'>
        <p className='text-4xl font-semibold text-center mb-8'>
          Di Arvit Studio
        </p>
        <div className='flex flex-row lg:flex-col gap-12 items-start lg:items-center justify-center'>
          <Image
            className='object-cover w-[480px] h-[500px]'
            src={`/images/furniture/benefit-1.jpg`}
            alt='Benefit Image'
            width={566}
            height={848}
          />
          <div className='flex flex-col gap-12'>
            {benefits.map((b, ii) => {
              return (
                <div key={ii} className='max-w-[580px] w-fit'>
                  <p className='font-semibold text-2xl mb-4'>{b.title}</p>
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
