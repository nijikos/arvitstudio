import { Teacher } from "iconsax-react";
import Image from "next/image";
import React from "react";

type TeamProps = {
  test?: string;
};

export default function Team({ test }: TeamProps) {
  return (
    <div
      id='team'
      className='w-full flex items-center justify-center py-24 px-32 lg:px-6 bg-primary-white'
    >
      <div className='flex-1 max-w-[1200px] flex flex-col lg:items-center lg:justify-center gap-20 md:gap-12'>
        {/* ------------- SECTION TITLE */}
        <div className=''>
          <h2 className='text-4xl font-semibold text-primary-dark '>
            Yuk, kenalan dengan tim kami!
          </h2>
          <p className='font-light'>
            Bersama kami, rumah impianmu jadi kenyataan – mudah, cepat, dan
            pastinya memuaskan!
          </p>
        </div>
        {/* ------------- CONTENT */}
        <div className='w-full grid grid-cols-2 gap-8'>
          {/* ----------- TEXT LEFT */}
          <div className='col-span-1 md:col-span-2 flex flex-col gap-6 text-xl sm:text-center md:items-center'>
            <p>
              Hallo, saya Jaila, arsitek profesional yang akan membantu
              mewujudkan hunianmu.
            </p>
            <p>
              Tak perlu ragu bekerja sama dengan kami karena kami memiliki
              tenaga arsitek, sipil dan tim tukang yang terpercaya dan
              berpengalaman mulai dari residensial hingga komersil.
            </p>
            <div className='flex flex-row items-center gap-4 sm:gap-2 bg-accent text-primary-dark w-fit px-8 sm:px-4 py-4 sm:py-3 rounded-full text-sm sm:text-xs'>
              <Teacher size={16} />
              <p>Arsitek Interior - Universitas Indonesia{`'`} 2012</p>
            </div>
          </div>
          {/* ----------- FOTO RIGHT */}
          <div data-aos='fade-up' className='col-span-1 md:col-span-2 relative'>
            <Image
              onContextMenu={(e) => e.preventDefault()}
              className='max-w-full h-[480px] object-cover disable-user-actions'
              src={"/images/tim/profile.png"}
              width={1024}
              height={1024}
              placeholder='blur'
              alt='Portfolio Image'
              blurDataURL='/images/defaultimg.jpg'
            />
            <div className='bg-primary-darker text-white pl-20 pr-8 sm:pl-8 py-6 w-fit absolute bottom-0 right-0 rounded-tl-3xl border-t-4  border-accent'>
              <p className='text-xl font-semibold'>Jaila Muhardila S.Ars</p>
              <p className=''>(founder Arvit Studio)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
