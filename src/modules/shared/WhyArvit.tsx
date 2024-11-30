import {
  Award,
  Buildings,
  CalendarTick,
  Crown,
  MessageFavorite,
  TaskSquare,
  Verify,
  WalletCheck,
} from "iconsax-react";
import React from "react";

type WhyArvitProps = {
  test?: string;
};

export default function WhyArvit({ test }: WhyArvitProps) {
  const lists = [
    {
      title: "50+ Proyek Sukses Terbangun",
      description: "Bukti nyata pengalaman kami dalam mewujudkan rumah impian.",
      icon: <Buildings className='w-8 h-8 md:w-7 md:h-7' />,
    },
    {
      title: "Proses Mudah & Cepat",
      description:
        "Proses yang simpel, tanpa ribet, dan selalu transparan, dari awal hingga akhir.",
      icon: <CalendarTick className='w-8 h-8 md:w-7 md:h-7' />,
    },
    {
      title: "Terpercaya Se-Jabodetabek",
      description:
        "Ribuan klien puas di Jabodetabek membuktikan kualitas kami,",
      icon: <Verify className='w-8 h-8 md:w-7 md:h-7' />,
    },
    {
      title: "Cara Kerja Jelas",
      description:
        "Setiap langkah kami jelaskan dengan rinci, jadi kamu tahu persis apa yang diharapkan.",
      icon: <TaskSquare className='w-8 h-8 md:w-7 md:h-7' />,
    },
    {
      title: "Konsultasi Gratis",
      description:
        "Dapatkan inspirasi desain dan solusi terbaik tanpa biaya, hanya ide-ide segar untuk rumahmu.",
      icon: <MessageFavorite className='w-8 h-8 md:w-7 md:h-7' />,
    },
    {
      title: "Anggaran Jelas",
      description:
        "Kami hargai kepercayaanmu dengan anggaran yang transparan dan tanpa biaya tambahan.",
      icon: <WalletCheck className='w-8 h-8 md:w-7 md:h-7' />,
    },
    {
      title: "Desain Sesuai Gaya Hidup",
      description:
        "Desain yang mencerminkan gaya hidup dan kebutuhan unik keluargamu.",
      icon: <Crown className='w-8 h-8 md:w-7 md:h-7' />,
    },
    {
      title: "Manajemen Proyek Profesional",
      description:
        "Kami pastikan proyek selesai tepat waktu, sesuai anggaran, dan dengan kualitas terbaik.",
      icon: <Award size={32} />,
    },
  ];
  return (
    <div
      id='whyarvit'
      className='w-full flex items-center justify-center py-24 px-32 lg:px-6 bg-accent-lightest/60'
    >
      <div className='flex-1 max-w-[1200px] flex flex-col lg:items-center lg:justify-center gap-20'>
        {/* ------------- SECTION TITLE */}
        <div className=''>
          <h2 className='text-5xl md:text-4xl font-semibold text-primary-dark '>
            Why Arvit?
          </h2>
          <p className='font-light'>
            Bersama kami, rumah impianmu jadi kenyataan – mudah, cepat, dan
            pastinya memuaskan!
          </p>
        </div>
        {/* ------------- LISTS */}
        <div className='grid grid-cols-2 gap-x-20 gap-y-10 md:gap-y-4'>
          {lists.map((item, ii) => {
            return (
              <div
                key={ii}
                className='col-span-1 lg:col-span-2 md:flex md:flex-row md:items-start md:gap-5'
              >
                <div className='relative mb-4'>
                  <div className='relative z-10'>{item.icon}</div>
                  <div className='w-9 h-9 md:w-6 md:h-6 bg-accent-lighter rounded-full absolute top-2 left-2 md:top-3 md:left-3'></div>
                </div>
                <div>
                  <p className='text-2xl md:text-base font-semibold text-primary'>
                    {item.title}
                  </p>
                  <p className='max-w-[400px] md:text-base'>
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
