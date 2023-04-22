"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <>
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center bg-transparent ${
          sticky
            ? "!fixed !z-[9999] !bg-black !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition dark:!bg-black dark:!bg-opacity-20"
            : "absolute"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-24 ml-16 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`flex flex-row header-logo justify-center items-center w-full ${
                  sticky ? "py-5 lg:py-2" : "py-8"
                } `}
              >
                <Image
                  src="/images/logo/crow.png"
                  alt="logo"
                  width={1024}
                  height={1024}
                  className="w-full dark:hidden"
                />
                <Image
                  src="/images/logo/crow.png"
                  alt="logo"
                  width={140}
                  height={30}
                  className="hidden w-full dark:block"
                />
                <h1 className="text-4xl text-white font-bold hidden md:block">Scavenger</h1>
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                
              </div>
              <div className="flex items-center justify-end pr-16 lg:pr-0">
                <button
                onClick={() => {
                  const element = document.getElementById("signupform");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="ease-in-up hidden rounded-md bg-black px-8 py-3 text-base font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9 hover:bg-white hover:text-black"
                >
                  Sign Up
                </button>
                <div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
