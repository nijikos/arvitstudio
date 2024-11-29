import { Teacher } from "iconsax-react";
import Image from "next/image";
import React from "react";
import TimProfilePicture from "./components/TimProfilePicture";

type TeamProps = {
  test?: string;
};

export default function Team({ test }: TeamProps) {
  return (
    <div id='team' className='w-full pt-20 sm:pt-12'>
      <div className='w-full flex items-center justify-center pt-10 pb-24 px-32 md:px-6 bg-primary-white'>
        <div className='flex-1 max-w-[1200px] flex flex-col lg:items-center lg:justify-center gap-20 md:gap-12'>
          {/* ------------- CONTENT */}
          <div className='w-full grid grid-cols-2 gap-8 place-items-end'>
            {/* ----------- TEXT LEFT */}
            <div className='col-span-1 lg:col-span-2 flex flex-col gap-6 text-xl md:items-center'>
              {/* ------------- SECTION TITLE */}
              <div className=''>
                <h2 className='text-4xl md:text-3xl font-semibold text-primary-dark '>
                  Yuk, kenalan dengan tim kami!
                </h2>
                <p className='font-light md:text-lg'>
                  Bersama kami, rumah impianmu jadi kenyataan – mudah, cepat,
                  dan pastinya memuaskan!
                </p>
              </div>
              {/* ----------- Tim Profile Picture LEFT */}
              <div className='hidden lg:inline-grid lg:place-items-center'>
                <TimProfilePicture className='w-96 sm:w-full' />
              </div>
              {/* ------------- GREETINGS */}
              <div className='border-l-4 border-accent pl-6'>
                <p className='mb-6 font-semibold text-primary-light'>
                  Hallo, saya Jaila, arsitek profesional yang akan membantu
                  mewujudkan hunianmu.
                </p>
                <p className=''>
                  Tak perlu ragu bekerja sama dengan kami karena kami memiliki
                  tenaga arsitek, sipil dan tim tukang yang terpercaya dan
                  berpengalaman mulai dari residensial hingga komersil.
                </p>
              </div>

              <div className='flex flex-row items-center gap-4 sm:gap-2 bg-accent text-primary-dark w-fit px-8 sm:px-4 py-4 sm:py-3 rounded-full text-sm sm:text-xs'>
                <Teacher size={16} />
                <p>Arsitek Interior - Universitas Indonesia{`'`} 2012</p>
              </div>
            </div>
            {/* ----------- Tim Profile Picture LEFT */}
            <TimProfilePicture className='lg:hidden' />
          </div>
        </div>
      </div>
    </div>
  );
}
