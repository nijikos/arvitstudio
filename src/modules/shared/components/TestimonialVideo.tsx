import React from "react";

type TestimonialVideoProps = {
  videoSrc: string;
};

export default function TestimonialVideo({ videoSrc }: TestimonialVideoProps) {
  return (
    <video
      onContextMenu={(e) => e.preventDefault()}
      className='w-[500px] h-[78vh] lg:w-full object-cover disable-user-actions'
      width={500}
      height={1000}
      controls
      preload='none'
      autoPlay
      muted
      loop
      disablePictureInPicture
      controlsList='nofullscreen'
    >
      <source src={videoSrc} type='video/mp4' />
    </video>
  );
}
