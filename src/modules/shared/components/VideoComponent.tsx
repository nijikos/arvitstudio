import React from "react";

type VideoComponentProps = {
  test?: string;
};

export default function VideoComponent({ test }: VideoComponentProps) {
  return (
    <video width={396} height={700} controls preload='none' autoPlay muted loop>
      <source src='/videos/promo-video-1.mp4' type='video/mp4' />
    </video>
  );
}
