import React from "react";

type VideoComponentProps = {
  test?: string;
};

export default function VideoComponent({ test }: VideoComponentProps) {
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
      <source src='/videos/promo/1.mp4' type='video/mp4' />
    </video>
  );
}
