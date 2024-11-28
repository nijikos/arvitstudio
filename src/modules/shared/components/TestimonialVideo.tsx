import React from "react";

type TestimonialVideoProps = {
  videoSrc: string;
};

export default function TestimonialVideo({ videoSrc }: TestimonialVideoProps) {
  return (
    <div className='w-[680px] h-[540px] lg:w-full lg:h-auto overflow-hidden relative'>
      <video
        className='w-full h-full object-cover'
        width={680}
        height={540}
        controls
        preload='none'
        autoPlay
        muted
        loop
      >
        <source src={videoSrc} type='video/mp4' />
      </video>
    </div>
  );
}
