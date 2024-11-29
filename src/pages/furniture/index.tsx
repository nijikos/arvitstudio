import React from "react";
import Hero from "@/modules/furniture/sections/Hero";
import Benefits from "@/modules/shared/Benefits";
import Promo from "@/modules/shared/Promo";
import Testimonial from "@/modules/shared/Testimonial";
import Portfolio from "@/modules/furniture/sections/Portfolio";
import WhyArvit from "@/modules/shared/WhyArvit";
import Workflow from "@/modules/shared/Workflow";
import Team from "@/modules/shared/Team";
import Footer from "@/modules/shared/Footer";
import Price from "@/modules/furniture/sections/Price";
import CTA from "@/modules/shared/CTA";
import Hook from "@/modules/furniture/sections/Hook";

type FurnitureProps = {
  test?: string;
};

export default function Furniture({ test }: FurnitureProps) {
  return (
    <div className='scroll-smooth'>
      <Hero />
      <Promo />
      <Hook />
      <Portfolio />
      <Benefits />
      <Testimonial videoSrc='/videos/testimoni/1.mp4' />
      <WhyArvit />
      <Price />
      <Workflow />
      <CTA />
      <Team />
      <Footer />
    </div>
  );
}
