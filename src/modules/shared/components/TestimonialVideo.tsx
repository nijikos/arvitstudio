import React from "react";

type TestimonialVideoProps = {
  videoSrc: string;
};

export default function TestimonialVideo({ videoSrc }: TestimonialVideoProps) {
  return (
    <video
      className='w-[500px] h-[80vh] lg:w-full object-cover'
      width={500}
      height={1000}
      controls
      preload='none'
      autoPlay
      muted
      loop
    >
      <source src={videoSrc} type='video/mp4' />
    </video>
  );
}
