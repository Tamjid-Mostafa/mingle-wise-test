import useScrollPosition from "@/Hooks/useScroll";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import Logo from "../../public/assets/logo/mingle.png";
import AppleLogo from "../../public/assets/icons/apple.svg";
import GooglePlay from "../../public/assets/icons/google-play-icon.svg";
import { motion as m } from "framer-motion";

const NavBar = () => {
  const scroll = useScrollPosition();

  const StickyValue = scroll >= 125;
  console.log(StickyValue);
  return (
    <m.div
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{
        duration: 1,
        type: "tween",
        damping: 150,
        stiffness: 400,
      }}
      className={`fixed w-full ${
        StickyValue
          ? "bg-purple-400 bg-opacity-50 backdrop-blur-md shadow-md"
          : "bg-transparent"
      } z-50 duration-150 ease-in`}
    >
      <div className="container mx-auto items-center px-3 md:px-auto pb-5 flex justify-between">
        <div className="flex flex-col items-center">
          <div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              type: "tween",
              damping: 150,
              stiffness: 400,
            }}
          >
            <Link href="/">
              <Image className="w-14 h-14" src={Logo} alt="Logo" />{" "}
            </Link>
            <Link href="/">
              <p className="text-white relative">
                <span className="text-2xl header-font-extra-light tracking-widest">
                  MingleWise
                </span>
                <span className="absolute text-[7px] min-w-[16px] min-h-[16px] xl:min-w-[18px] xl:min-h-[18px] text-center">
                  TM
                </span>
              </p>
            </Link>
            <p className="text-white header-font-regular text-[8px] sm:tracking-widest mt-1">
              Dating | Networking | Events
            </p>
          </div>
        </div>
        <div className="flex gap-5">
          <Image className="w-10 h-10" src={AppleLogo} alt="Apple Logo" />
          <Image className="w-10 h-10" src={GooglePlay} alt="Play Store Logo" />
        </div>
      </div>
    </m.div>
  );
};

export default NavBar;
