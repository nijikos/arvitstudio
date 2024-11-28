import { whatsappLink } from "@/@data/contact";
import { ArrowUp, Whatsapp } from "iconsax-react";
import Link from "next/link";

import React, { useEffect, useState } from "react";

type WhatsappButtonProps = {
  test?: string;
};

export default function WhatsappButton({ test }: WhatsappButtonProps) {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const WhatsappButton = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling animation
    });
  };

  return (
    <Link
      target='_blank'
      href={whatsappLink.link}
      className={`fixed bottom-4 right-4 rounded-xl bg-primary-darker hover:bg-primary text-white w-12 h-12 grid place-items-center transition-all animate-bounce animation-count-2`}
      onClick={() => {
        WhatsappButton();
      }}
    >
      <Whatsapp />
    </Link>
  );
}
