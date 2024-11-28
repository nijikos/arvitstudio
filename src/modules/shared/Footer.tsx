import { whatsappLink } from "@/@data/contact";
import { ExportSquare, Location, Sms } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type FooterProps = {
  test?: string;
};

export default function Footer({ test }: FooterProps) {
  const socials = [
    { href: whatsappLink.link, icon: "/images/socials/whatsapp-3.svg" },
    {
      href: "https://www.instagram.com/arvit_studio",
      icon: "/images/socials/instagram-3.svg",
    },
    {
      href: "https://www.youtube.com/channel/UCHn5vbIGNMlHbb0jphWV0eA",
      icon: "/images/socials/youtube-3.svg",
    },
    {
      href: "https://www.tiktok.com/@arvit_studio",
      icon: "/images/socials/tiktok-3.svg",
    },
    {
      href: "https://www.facebook.com/profile.php?id=100080283284224",
      icon: "/images/socials/facebook-3.svg",
    },
  ];
  return (
    <footer className='w-full bg-primary px-32 lg:px-6 py-32 lg:py-20 grid grid-cols-3'>
      <div className='col-span-1 lg:col-span-3'>
        <Link href='/furniture'>
          <Image
            className='min-w-32 w-32 hover:scale-[101%] transition-all'
            src='/images/logo/arvit-logo-gold-landscape.svg'
            height={520}
            width={2011}
            alt='arvit logo'
          />
        </Link>
        <div className='flex flex-row items-center gap-4 py-8 flex-wrap'>
          {socials.map((social, ii) => {
            return (
              <Link
                key={ii}
                target='_blank'
                href={social.href}
                className='w-12 h-12 rounded-full grid place-items-center hover:scale-[101%] transition-all border border-accent'
              >
                <Image
                  className='w-6 h-6'
                  src={social.icon}
                  height={24}
                  width={24}
                  alt='arvit logo'
                />
              </Link>
            );
          })}
        </div>
      </div>
      <div className='col-span-2 lg:col-span-3 pl-8 lg:pl-0 lg:pt-8 border-l lg:border-t lg:border-l-0 border-accent text-white font-extralight'>
        <p className='text-4xl font-semibold'>
          Wujudkan Rumahmu, Mulai dari Sini
        </p>
        <p className='max-w-[620px]'>
          Dapatkan konsultasi gratis, desain sesuai kebutuhan, dan proses mudah
          untuk mewujudkan rumah impianmu tanpa stres
        </p>
        <div className='flex flex-col gap-6 mt-12'>
          <div className='flex flex-row items-center gap-4'>
            <Sms className='shrink-0' />
            <p>arvitstudio@gmail.com</p>
          </div>
          <div className='flex flex-row items-center gap-4'>
            <Sms className='shrink-0' />
            <p>arvitstudioadmiinn@gmail.com</p>
          </div>
          <div className='flex flex-row items-start gap-4'>
            <Location className='relative top-2 shrink-0' />
            <div>
              <p className='text-2xl font-normal'>Arvit Studio Office</p>
              <p>
                Malaka Pratama No.13 A Rt 11/05, Rorotan, Cilincing, Jakut 14140
              </p>
              <Link
                href='https://maps.app.goo.gl/GPuRr5gdki7m2R7M6'
                target='_blank'
                className='button-md button-outline-accent mt-4 w-fit'
              >
                google maps
                <ExportSquare size={12} />
              </Link>
            </div>
          </div>
          <div className='flex flex-row items-start gap-4'>
            <Location className='relative top-2 shrink-0' />
            <div>
              <p className='text-2xl font-normal'>Workshop Furnitur</p>
              <p>Malaka Jaya No.61 Rt 1, Rorotan, Cilincing, Jakut 14140</p>
              <Link
                href='https://maps.app.goo.gl/Swbp1MAjHjNjGpNY7'
                target='_blank'
                className='button-md button-outline-accent mt-4 w-fit'
              >
                google maps
                <ExportSquare size={12} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
