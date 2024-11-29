import { ArrowUp } from "iconsax-react";
import { useRouter } from "next/router";

import React, { useEffect, useState } from "react";

type ScrollToTopProps = {
  test?: string;
};

export default function ScrollToTop({ test }: ScrollToTopProps) {
  const router = useRouter();
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

    const pathWithoutHash = router.asPath.split("#")[0];

    // If the URL contains a hash and it's not the current path, update the URL
    if (router.asPath !== pathWithoutHash) {
      router.push(pathWithoutHash, undefined, { shallow: true });
    }
  };

  return (
    <button
      data-show={scrolled}
      className={`fixed bottom-20 right-4 rounded-lg bg-primary-darker active:bg-primary-darkest hover:scale-102 active:scale-105 text-white w-12 h-12 data-[show=false]:hidden data-[show=true]:grid place-items-center `}
      onClick={() => {
        scrollToTop();
      }}
    >
      <ArrowUp />
    </button>
  );
}
