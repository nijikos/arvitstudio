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
      className={twMerge("col-span-1 md:col-span-2 relative", className)}
    >
      <Image
        onContextMenu={(e) => e.preventDefault()}
        className='max-w-full h-[480px] object-cover disable-user-actions'
        src={"/images/tim/profile-nobg-cropped.png"}
        width={1024}
        height={1024}
        placeholder='blur'
        alt='Portfolio Image'
        blurDataURL='/images/defaultimg.jpg'
      />
      <div className='bg-primary-darker text-white pl-20 pr-8 sm:pl-8 py-6 w-fit absolute bottom-0 right-0 rounded-tl-3xl border-t-4 border-accent text-right'>
        <p className='text-xl sm:text-lg font-semibold'>
          Jaila Muhardila S.Ars
        </p>
        <p className='sm:text-base'>(founder Arvit Studio)</p>
      </div>
    </div>
  );
}
