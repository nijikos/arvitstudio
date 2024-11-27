import React from "react";
import Hero from "@/modules/furniture/sections/Hero";
import Benefits from "@/modules/shared/Benefits";

type FurnitureProps = {
  test?: string;
};

export default function Furniture({ test }: FurnitureProps) {
  return (
    <div className='scroll-smooth'>
      <Hero />
      <Benefits />
    </div>
  );
}
