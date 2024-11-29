import { Teacher } from "iconsax-react";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

type TimProfilePictureProps = {
  className?: string;
};

export default function TimProfilePicture({
  className,
}: TimProfilePictureProps) {
  return (
    <div
      data-aos='fade-up'
      className={twMerge("col-span-1 md:col-span-2", className)}
    >
      <Image
        onContextMenu={(e) => e.preventDefault()}
        className='max-w-full h-[500px] object-cover object-top disable-user-actions'
        src={"/images/tim/profile-nobg-cropped-4.png"}
        width={1024}
        height={1024}
        placeholder='blur'
        alt='Portfolio Image'
        blurDataURL='/images/defaultimg.jpg'
      />
      <div className='bg-primary-darker text-white px-8 sm:px-4 py-6 w-fit absolute bottom-4 right-0 border-t-4 border-accent flex flex-col gap-2 items-end'>
        <p className='text-xl sm:text-lg font-semibold'>
          Jaila Muhardila S.Ars
        </p>
        <p className='sm:text-base'>(founder Arvit Studio)</p>
        <div className='flex flex-row items-center gap-4 sm:gap-2 bg-accent text-primary-dark w-fit px-3 py-2 rounded-full text-xs'>
          <Teacher size={16} />
          <p>Arsitek Interior - Universitas Indonesia{`'`} 2012</p>
        </div>
      </div>
    </div>
  );
}
