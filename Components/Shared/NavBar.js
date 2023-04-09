import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import Navigation from "./Navigation";
import { useRouter } from "next/router";
import Logo from "./Logo";
import WhiteBackgroundLogo from "./WhiteBackgroundLogo";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import Image from "next/image";
import { StateContext } from "@/pages/_app";

export default function NavBar() {
  const { osName } = useContext(StateContext);
  const [windowHeight, setWindowHeight] = useState("");
  const router = useRouter();
  const navigation = [
    { name: "Features", href: "/QuickLinks/Features" },
    { name: "Subscriptions", href: "/QuickLinks/SubscriptionTires" },
    { name: "About", href: "/QuickLinks/AboutUs" },
    { name: "Contact Us", href: "/QuickLinks/ContactUs" },
  ];
  const handleNavigateHome = () => {
    router.push("/");
    setMenu(false);
  };
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
          windowHeight >= 110
            ? "bg-white text-black"
            : "bg-transparent text-white"
        } transition-five`}
      >
        <div
          onClick={() => router.push("/")}
          className="flex items-center gap-4 cursor-pointer"
        >
          <div className={`text-xl font-semibold cursor-pointer`}>
            {windowHeight >= 110 ? <Logo /> : <WhiteBackgroundLogo />}
          </div>
          <div className="hidden sm:block">
            <p
              className={`header-font-extra-light font-bold md:text-2xl tracking-[5px] relative ${
                router.pathname === "/" && windowHeight <= 100
                  ? "text-white"
                  : "text-transparent bg-clip-text bg-gradient-to-r from-[#F94969] to-[#7328D2]"
              } `}
            >
              MingleWise
              <span
                className={`text-[8px] tracking-tight absolute top-[-5px] md:top-[-12px] poppins-text ${
                  router.pathname === "/" && windowHeight <= 100
                    ? "text-white"
                    : "text-transparent bg-clip-text bg-gradient-to-r from-[#F94969] to-[#7328D2]"
                }`}
              >
                TM
              </span>
            </p>
            <p
              className={`header-font-extra-light text-[12px] font-bold text-center ${
                router.pathname === "/" && windowHeight <= 100
                  ? "text-white"
                  : "text-[#C56183]"
              } ${router.pathname === "/" && "border-bottom-grad"} `}
            >
              Dating | Networking | Events
            </p>
          </div>
        </div>
        <Navigation windowHeight={windowHeight} />
        {menu ? (
          ""
        ) : (
          <span
            onClick={() => setMenu(true)}
            className="cursor-pointer flex lg:hidden"
          >
            <GiHamburgerMenu
              className={`text-3xl ${router.pathname !== "/" && "text-black"}`}
            />
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
            <div className="flex p-5 sm:p-10 justify-between w-full">
              <span
                onClick={() => setMenu(false)}
                className="pt-1 cursor-pointer"
              >
                <IoMdClose className="text-3xl" />
              </span>
            </div>
            <div className="text-container items-center">
              <div
                onClick={handleNavigateHome}
                className="flex flex-col items-center sm:mb-8"
              >
                <Image
                  height={90}
                  width={90}
                  src="/assets/logo/mingle.png"
                  alt="Company logo"
                />
              </div>
              <div className="block sm:hidden text-center mb-7">
                <p
                  className={`header-font-extra-light font-bold text-xl tracking-[5px] relative text-transparent bg-clip-text bg-gradient-to-r from-[#F94969] to-[#7328D2]`}
                >
                  MingleWise
                  <span
                    className={`text-[8px] tracking-tight absolute top-[-5px] md:top-[-12px] poppins-text text-transparent bg-clip-text bg-gradient-to-r from-[#F94969] to-[#7328D2]`}
                  >
                    TM
                  </span>
                </p>
                <p
                  className={`header-font-extra-light text-[12px] font-bold text-center text-[#C56183]`}
                >
                  Dating | Networking | Events
                </p>
              </div>
              <ul className="text-base font-semibold flex flex-col items-center gap-6 sm:gap-10">
                <p onClick={handleNavigateHome} className="poppins-text">
                  Home
                </p>
                {navigation?.map((nav, index) => (
                  <li
                    key={index}
                    className={`hover:bg-[#F3FAFF] w-[200px] flex items-center justify-center ${
                      router.pathname == nav.href ? "bg-[#F3FAFF]" : ""
                    }`}
                  >
                    <Link onClick={() => setMenu(false)} href={nav.href}>
                      <span className="poppins-text">{nav.name}</span>
                    </Link>
                  </li>
                ))}
                <a
                  href={
                    osName == "Android" || osName == "Windows"
                      ? "https://play.google.com/store/apps/details?id=com.appsynergies.minglewise"
                      : osName == "iOS" || osName == "Apple"
                      ? "https://apps.apple.com/in/app/minglewise-dating-pro-events/id1574084760"
                      : "https://play.google.com/store/apps/details?id=com.appsynergies.minglewise"
                  }
                  target="_blank"
                >
                  <button
                    onClick={() => setMenu(false)}
                    className={`bg-transparent text-white font-bold w-28 h-10 relative
            before:w-full before:h-full before:scale-x-[1.05] before:scale-y-[1.1]  before:absolute before:top-[50%] before:left-[50%]
            before:-z-10 before:translate-x-[-50%] before:translate-y-[-50%]
            before:from-[#7B00D6] before:to-[#FB695B] before:bg-gradient-to-br
            before:rounded-md
            hover:bg-white hover:text-black transition-all duration-300 px-4 rounded py-2 poppins-text`}
                  >
                    Download
                  </button>
                </a>
              </ul>
            </div>
            <p className="text text-center mt-8">
              All Rights Reserved AppSynergies <br /> © Copyright2022
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
