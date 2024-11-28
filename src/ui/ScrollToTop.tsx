import { ArrowUp } from "iconsax-react";

import React, { useEffect, useState } from "react";

type ScrollToTopProps = {
  test?: string;
};

export default function ScrollToTop({ test }: ScrollToTopProps) {
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling animation
    });
  };

  return (
    <button
      data-show={scrolled}
      className={`fixed bottom-20 right-4 rounded-lg bg-primary-darker hover:bg-primary text-white w-12 h-12 data-[show=false]:hidden data-[show=true]:grid place-items-center `}
      onClick={() => {
        scrollToTop();
      }}
    >
      <ArrowUp />
    </button>
  );
}
