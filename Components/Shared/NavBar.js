import Link from "next/link";
import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import { useRouter } from "next/router";
import Logo from "./Logo";
import WhiteBackgroundLogo from "./WhiteBackgroundLogo";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import Image from "next/image";

export default function NavBar() {
  const [windowHeight, setWindowHeight] = useState("");
  const router = useRouter();
  const navigation = [
    { name: "Features", href: "/QuickLinks/Features" },
    { name: "Subscription", href: "/QuickLinks/SubscriptionTires" },
    { name: "About", href: "/QuickLinks/AboutUs" },
  ];
  const handleScroll = () => {
    setWindowHeight(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [menu, setMenu] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: "-100%" }}
        whileInView={{ y: 0 }}
        transition={{
          duration: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 10,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
        className={`flex w-full justify-between items-center px-5 lg:px-10 py-5 top-0 z-[101] fixed font-medium drop-shadow ${
          windowHeight >= 100
            ? "bg-white text-black"
            : "bg-transparent text-white"
        } transition-five`}
      >
        <Link href="/">
          <div className="flex items-center gap-4">
            <div className={`text-xl font-semibold cursor-pointer`}>
              {windowHeight >= 100 ? <Logo /> : <WhiteBackgroundLogo />}
            </div>
            <div className="hidden sm:block">
              <p className="header-font-extra-light font-bold md:text-2xl tracking-[5px] relative text-transparent bg-clip-text bg-gradient-to-r from-[#F94969] to-[#7328D2]">
                MingleWise
                <span className="text-[8px] tracking-tight absolute top-[-5px] md:top-[-12px] poppins-text">
                  TM
                </span>
              </p>
              <p className="header-font-extra-light text-[12px] font-bold text-center text-[#C56183]">
                Dating | Networking | Events
              </p>
            </div>
          </div>
        </Link>
        <Navigation windowHeight={windowHeight} />
        {menu ? (
          ""
        ) : (
          <span
            onClick={() => setMenu(true)}
            className="cursor-pointer flex lg:hidden"
          >
            {windowHeight >= 100 ? (
              <GiHamburgerMenu className="text-3xl" />
            ) : (
              <GiHamburgerMenu className="text-3xl" />
            )}
          </span>
        )}
      </motion.header>
      {menu ? (
        <main
          className={`fixed z-[9999] top-0 bottom-0 right-0 left-0 flex items-center justify-end lg:hidden `}
        >
          <motion.div
            initial={{ x: "100%" }}
            whileInView={{ x: 0 }}
            transition={{
              duration: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 10,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
            className="relative bg-white z-20 w-[100vw] h-[100vh] flex flex-col"
          >
            <div className="flex p-10 justify-between w-full">
              <span
                onClick={() => setMenu(false)}
                className="pt-1 cursor-pointer"
              >
                <IoMdClose className="text-3xl" />
              </span>
            </div>
            <div className="text-container items-center">
              <div className="flex flex-col items-center mb-5">
                <Image
                  height={90}
                  width={90}
                  src="/assets/logo/mingle.png"
                  alt="Company logo"
                />
              </div>
              <ul className="text-base font-semibold flex flex-col items-center gap-10">
                {navigation?.map((nav, index) => (
                  <li
                    className={`hover:bg-[#F3FAFF] w-[200px] flex items-center justify-center ${
                      router.pathname == nav.href ? "bg-[#F3FAFF]" : ""
                    }`}
                    key={index}
                  >
                    <Link href={nav.href}>
                      <span className="poppins-text">{nav.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text text-center mt-8">
              All Rights Reserved AppSynergies © Copyright2022
            </p>
          </motion.div>
          <span
            onClick={() => setMenu(false)}
            className={`absolute z-10 top-0 bottom-0  right-0 left-0 bg-black/70 cursor-pointer`}
          ></span>
        </main>
      ) : (
        ""
      )}
    </>
  );
}
