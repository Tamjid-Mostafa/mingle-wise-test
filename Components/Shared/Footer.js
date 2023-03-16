import Image from "next/image";
import React from "react";
import Logo from "../../public/assets/logo/mingle.png";
import AppleLogo from "../../public/assets/icons/apple.svg";
import GooglePlay from "../../public/assets/icons/google-play-icon.svg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#2A2D3B]">
      <div className="bg-[#2A2D3B] min-h-[35vh] flex items-center justify-center p-5">
        <div className="flex-wrap lg:flex items-center gap-14">
          <div className="flex flex-col items-center ">
            <Image className="w-14 h-14" src={Logo} alt="Logo" />
            <p className="text-white relative">
              <span className="text-4xl header-font-extra-light tracking-widest">
                MingleWise
              </span>
              <span className="absolute text-[10px] xl:text-xs min-w-[16px] min-h-[16px] xl:min-w-[18px] xl:min-h-[18px] text-center">
                TM
              </span>
            </p>
            <p className="text-white header-font-regular text-[10px] sm:tracking-widest mt-1">
              Dating | Networking | Events
            </p>
            <div className="md:flex gap-4 mt-6">
              <div className="flex gap-1 items-center bg-black px-4 py-1 rounded-xl">
                <Image className="w-8 h-8" src={AppleLogo} alt="Apple logo" />
                <div className="flex flex-col text-white">
                  <p className="text-xs -mb-1">Download on the</p>
                  <h5 className="text-sm">App Store</h5>
                </div>
              </div>
              <div className="flex gap-1 items-center bg-black px-4 py-1 rounded-xl mt-2 md:mt-auto">
                <Image className="w-8 h-8" src={GooglePlay} alt="Apple logo" />
                <div className="flex flex-col text-white">
                  <p className="text-xs -mb-1">Download on the</p>
                  <h5 className="text-sm">Google Play</h5>
                </div>
              </div>
            </div>
          </div>

          <ul className="roboto flex flex-col gap-3 mt-10 lg:mt-auto">
            <li className="text-lg text-white mb-2">Company</li>
            <li className="text-gray-400 font-medium">About Us</li>
            <li className="text-gray-400 font-medium">Features</li>
            <li className="text-gray-400 font-medium">Careers</li>
            <li className="text-gray-400 font-medium">Subscription Tires</li>
          </ul>
          <ul className="roboto flex flex-col gap-3 mt-5 lg:mt-auto">
            <li className="text-lg text-white mb-2">Community</li>
            <li className="text-gray-400 font-medium">Community Blog</li>
            <li className="text-gray-400 font-medium">Promo Codes</li>
            <li className="text-gray-400 font-medium">Support</li>
            <li className="text-gray-400 font-medium">Community Rules</li>
          </ul>
          <ul className="roboto flex flex-col gap-3 mt-5 lg:mt-auto">
            <li className="text-lg text-white mb-2">Legal</li>
            <li className="text-gray-400 font-medium">Terms of Use</li>
            <li className="text-gray-400 font-medium">Privacy Policy</li>
            <li className="text-gray-400 font-medium">Cookie Policy</li>
            <li className="text-gray-400 font-medium">Intellectual Property</li>
          </ul>
          <ul className="roboto flex flex-col gap-3 mt-5 lg:mt-auto">
            <li className="text-lg text-white mb-2">CONTACT</li>
            <li className="text-gray-400 font-medium">+44 7544802677</li>
            <li className="text-gray-400 font-medium">info@minglewise.com</li>
            <li className="text-gray-400 font-medium">London, UK</li>
            <li className="text-gray-400 font-medium">+91 9967067419</li>
          </ul>
        </div>
      </div>
      <div className="lg:flex justify-between items-center w-[60%] mx-auto border-t border-gray-600 pt-2 pb-5">
        <p className="text-gray-300">
          Copyright © 2021{" "}
          <a
            className="hover:text-orange-500 duration-200 ease-out"
            href="https://appsynergies.com/"
            target="_blank"
          >
            AppSynergies Ltd-
          </a>
          All Rights Reserved.
        </p>
        <div className="flex text-gray-500 gap-6 mt-2 lg:mt-auto">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedinIn />
          <FaPinterest />
        </div>
      </div>
    </div>
  );
};

export default Footer;
