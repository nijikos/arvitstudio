import { CloseCircle, HambergerMenu } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type NavigationBarProps = {
  test?: string;
};

export default function NavigationBar({ test }: NavigationBarProps) {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  // Detect scroll position
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

  const navItems = [
    { label: "Promo", href: "#promo" },
    { label: "Solusi", href: "#solusi" },
    { label: "Testimoni", href: "#testimonials" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Why Arvit?", href: "#whyarvit" },
    { label: "Alur Kerja", href: "#workflow" },
    { label: "Tim", href: "#team" },
    { label: "Pricelist", href: "#prices" },
    { label: "Hubungi Kami", href: "#contactus" },
  ];
  return (
    <div
      className={`z-50 fixed top-0 left-0 right-0 flex flex-row justify-between items-center px-20 xl:px-10 md:px-6 py-6 transition-all ${
        scrolled ? "bg-primary shadow-lg" : "bg-transparent"
      }`}
    >
      <Link href='/furniture'>
        <Image
          className='min-w-48 w-48 md:min-w-36 md:w-36 hover:scale-[101%] transition-all'
          src='/images/logo/arvit-logo-gold-landscape.svg'
          height={520}
          width={2011}
          alt='arvit logo'
        />
      </Link>

      {/* ------------- Horizontal Menu */}
      <nav className='flex flex-row items-center gap-8 xl:hidden'>
        {navItems.map((nav, ii) => {
          return (
            <a
              key={ii}
              className='text-base font-light text-white hover:text-accent hover:underline underline-offset-8 transition-all'
              href={nav.href}
            >
              {nav.label}
            </a>
          );
        })}
      </nav>
      {/* ------------- Vertical Menu */}
      <div className='hidden xl:inline-block relative'>
        <button
          className='text-white hidden xl:inline-block'
          onClick={() => {
            setShowMenu(true);
          }}
        >
          <HambergerMenu />
        </button>
        <nav
          data-show={showMenu}
          className='data-[show=false]:translate-x-full data-[show=true]:translate-x-0 flex flex-col items-end bg-white fixed top-0 right-0 w-[60vw] sm:w-screen h-screen transition-all ease-in-out duration-300 border-l-4 border-primary-dark'
        >
          <button
            className='text-primary hidden xl:inline-block pr-6 py-6'
            onClick={() => {
              setShowMenu(false);
            }}
          >
            <CloseCircle />
          </button>
          {navItems.map((nav, ii) => {
            return (
              <a
                key={ii}
                className='text-xl font-light text-black hover:text-accent hover:underline underline-offset-8 transition-all py-4 px-4 w-full text-end'
                href={nav.href}
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                {nav.label}
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
