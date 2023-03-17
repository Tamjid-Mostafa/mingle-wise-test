import Image from "next/image";
import React from "react";
import Logo from "../../public/assets/logo/mingle.png";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import GooglePlayStore from "../../public/assets/icons/google-play-icon.svg";
import AppleIcon from "../../public/assets/icons/apple.svg";
import Link from "next/link";
import { motion as m } from "framer-motion";

const Header = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      className="header-bg flex flex-col items-center relative"
    >
      <Image src={Logo} alt="Logo" className="w-28 h-28" />
      <div className="text-center text-white">
        <p className="text-white relative">
          <span className="text-4xl md:text-5xl xl:text-7xl header-font-extra-light tracking-widest">
            MingleWise
          </span>
          <span className="absolute text-[10px] xl:text-xs rounded-full border min-w-[16px] min-h-[16px] xl:min-w-[18px] xl:min-h-[18px] text-center">
            R
          </span>
        </p>
        <p className="text-white header-font-regular text-base md:text-xl sm:tracking-widest mt-4">
          Dating | Networking | Events
        </p>
        <p className="uppercase ubuntu text-base sm:text-xl md:text-2xl xl:text-3xl mt-8">
          Find, Meet, & Develop Meaningful Connection
        </p>
        <p className="text-base md:text-xl xl:text-2xl mt-14 ubuntu">
          World&#39;s first all-in-one AI driven app for dating, networking &
          events
        </p>
        <button className="ubuntu md:text-xl bg-white rounded-full px-6 py-2 text-black mt-14 hover:bg-[#804d40] hover:text-white duration-200 ease-out active:bg-[#693f34]">
          Download
        </button>
        <div className="w-[60vw] mx-5 mt-10 mb-5">
          <div className="flex gap-4 text-4xl">
            <Link
              data-aos="fade-right"
              data-aos-duration="600"
              href="https://twitter.com/minglewise"
              target="_blank"
            >
              <BsTwitter className="hover:text-[#C57962] ease-in duration-75" />
            </Link>
            <Link
              data-aos="fade-right"
              data-aos-duration="500"
              href="https://www.instagram.com/mingle.wise/"
              target="_blank"
            >
              <BsInstagram className="hover:text-[#C57962] ease-in duration-75" />
            </Link>
            <Link
              data-aos="fade-right"
              data-aos-duration="400"
              href="https://www.linkedin.com/company/minglewise/"
              target="_blank"
            >
              <FaLinkedinIn className="hover:text-[#C57962] ease-in duration-75" />
            </Link>
            <Link
              data-aos="fade-right"
              data-aos-duration="300"
              href="https://www.facebook.com/minglewise/"
              target="_blank"
            >
              <FaFacebookF className="hover:text-[#C57962] ease-in duration-75" />
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute right-4 sm:right-12 md:right-24 lg:right-48 xl:right-60 top-5">
        <div className="flex gap-5">
          <Image
            className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10"
            src={GooglePlayStore}
            alt="Google Play Store"
          />
          <Image
            className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10"
            src={AppleIcon}
            alt="Apple Icon"
          />
        </div>
      </div>
    </m.div>
  );
};

export default Header;
