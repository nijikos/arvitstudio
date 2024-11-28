import React from "react";
import Hero from "@/modules/furniture/sections/Hero";
import Benefits from "@/modules/shared/Benefits";
import Promo from "@/modules/shared/Promo";
import Testimonial from "@/modules/shared/Testimonial";

type FurnitureProps = {
  test?: string;
};

export default function Furniture({ test }: FurnitureProps) {
  return (
    <div className='scroll-smooth'>
      <Hero />
      <Promo />
      <Benefits />
      <Testimonial videoSrc='/videos/promo-video-1.mp4' />
    </div>
  );
}
