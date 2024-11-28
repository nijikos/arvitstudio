import React from "react";
import Hero from "@/modules/furniture/sections/Hero";
import Benefits from "@/modules/shared/Benefits";
import Promo from "@/modules/shared/Promo";
import Testimonial from "@/modules/shared/Testimonial";
import Portfolio from "@/modules/furniture/sections/Portfolio";

type FurnitureProps = {
  test?: string;
};

export default function Furniture({ test }: FurnitureProps) {
  return (
    <div className='scroll-smooth'>
      <Hero />
      <Promo />
      <Benefits />
      <Testimonial videoSrc='/videos/testimoni/1.mp4' />
      <Portfolio />
    </div>
  );
}
