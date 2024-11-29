import React from "react";

type HookProps = {
  test?: string;
};

export default function Hook({ test }: HookProps) {
  const questions = [
    "- Sulit Menemukan Furnitur yang Pas Untuk Ruang Kecil atau Sudut Khusus?",
    "- Sulit menemukan desain interior yang pas dengan gaya dan kenyamanan rumah Anda?",
    "- atau bahkan anda Kesulitan Mencari Furnitur yang Tahan Lama dan Berkualitas?",
    <span key={4} className='!text-3xl font-semibold'>
      Solusi semua masalah anda{" "}
      <span className='font-bold text-error !text-3xl'>
        ada di Arvit Studio!
      </span>
    </span>,
    <span key={5} className='text-2xl lg:text-xl'>
      Arvit Studio merupakan penyedia jasa desain dan bangun arsitektur dan
      interior yang telah berdiri sejak tahun 2019. Dengan pengalaman pekerja
      profesional kami yang lebih dari 10 tahun, Tidak ada lagi furnitur dan
      desain yang tidak cocok, kami memberikan{" "}
      <span className='font-semibold text-primary text-2xl lg:text-xl'>
        solusi tepat untuk kebutuhan Anda.
      </span>
    </span>,
    <span key={6} className='text-2xl lg:text-xl'>
      Kami selalu merancang furnitur yang{" "}
      <span className='font-semibold text-primary text-2xl lg:text-xl'>
        kuat dan elegan.
      </span>{" "}
      Ubah ruang sempit Anda menjadi area yang{" "}
      <span className='font-semibold text-primary text-2xl lg:text-xl'>
        nyaman dan efisien!
      </span>
    </span>,
  ];
  return (
    <div
      id='benefits'
      className='w-full flex items-center justify-center py-24 px-32 lg:px-6 bg-accent-lightest/40'
    >
      <div className='flex-1 max-w-[1200px] flex flex-col items-center justify-center gap-8'>
        <div className='flex flex-col items-center justify-center gap-12 text-primary relative'>
          {questions.map((q, ii) => {
            return (
              <p
                className='text-left max-w-[760px] w-fit text-2xl lg:text-xl'
                key={ii}
              >
                {q}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
