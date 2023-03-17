import Image from "next/image";
import React from "react";
import Logo from "../../public/assets/logo/mingle.png";
import AppleLogo from "../../public/assets/icons/apple.svg";
import GooglePlay from "../../public/assets/icons/google-play-icon.svg";
import { MdEmail, MdLocationPin, MdWhatsapp } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import Link from "next/link";
import { motion as m } from "framer-motion";

const Footer = () => {
  return (
    <div className="bg-[#2A2D3B]">
      <div className="bg-[#2A2D3B] min-h-[35vh] flex items-center justify-center p-5">
        <div className="flex-wrap lg:flex justify-between items-center gap-14">
          <div className="flex flex-col items-center ">
            <m.div
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
                  <span className="text-4xl header-font-extra-light tracking-widest">
                    MingleWise
                  </span>
                  <span className="absolute text-[10px] xl:text-xs min-w-[16px] min-h-[16px] xl:min-w-[18px] xl:min-h-[18px] text-center">
                    TM
                  </span>
                </p>
              </Link>
              <p className="text-white header-font-regular text-[10px] sm:tracking-widest mt-1">
                Dating | Networking | Events
              </p>
            </m.div>
            <div className="md:flex gap-4 mt-6">
              <m.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  type: "tween",
                  damping: 150,
                  stiffness: 400,
                }}
                className="flex gap-1 items-center bg-black px-4 py-1 rounded-xl"
              >
                <Image className="w-8 h-8" src={AppleLogo} alt="Apple logo" />
                <div className="flex flex-col text-white">
                  <p className="text-xs -mb-1">Download on the</p>
                  <h5 className="text-sm">App Store</h5>
                </div>
              </m.div>
              <m.div
                initial={{ opacity: 0, x: 20, scaleX: 1.1 }}
                whileInView={{ opacity: 1, x: 0, scaleX: 1 }}
                transition={{
                  duration: 0.5,
                  type: "tween",
                  damping: 150,
                  stiffness: 400,
                }}
                className="flex gap-1 items-center bg-black px-4 py-1 rounded-xl mt-2 md:mt-auto"
              >
                <Image className="w-8 h-8" src={GooglePlay} alt="Apple logo" />
                <div className="flex flex-col text-white">
                  <p className="text-xs -mb-1">Download on the</p>
                  <h5 className="text-sm">Google Play</h5>
                </div>
              </m.div>
            </div>
          </div>

          <div className="roboto flex flex-col gap-3 mt-10 lg:mt-auto">
            <p className="text-lg text-white mb-2">Company</p>
            <Link
              href="/QuickLinks/AboutUs"
              className="text-gray-400 font-medium hover:text-white duration-75 ease-in"
            >
              About Us
            </Link>
            <Link
              href="/QuickLinks/Features"
              className="text-gray-400 font-medium hover:text-white duration-75 ease-in"
            >
              Features
            </Link>
            <Link
              href="/QuickLinks/Careers"
              className="text-gray-400 font-medium hover:text-white duration-75 ease-in"
            >
              Careers
            </Link>
            <Link
              href="/QuickLinks/SubscriptionTires"
              className="text-gray-400 font-medium hover:text-white duration-75 ease-in"
            >
              Subscription Tires
            </Link>
          </div>
          <div className="roboto flex flex-col gap-3 mt-5 lg:mt-auto">
            <p className="text-lg text-white mb-2">Community</p>
            <Link
              href="/QuickLinks/CommunityBlog"
              className="text-gray-400 font-medium hover:text-white duration-75 ease-in"
            >
              Community Blog
            </Link>
            <Link
              href="/QuickLinks/PromoCodes"
              className="text-gray-400 font-medium hover:text-white duration-75 ease-in"
            >
              Promo Codes
            </Link>
            <Link
              href="/QuickLinks/Support"
              className="text-gray-400 font-medium hover:text-white duration-75 ease-in"
            >
              Support
            </Link>
            <Link
              href="/QuickLinks/CommunityRules"
              className="text-gray-400 font-medium hover:text-white duration-75 ease-in"
            >
              Community Rules
            </Link>
          </div>
          <div className="roboto flex flex-col gap-3 mt-5 lg:mt-auto">
            <p className="text-lg text-white mb-2">Legal</p>
            <Link
              href="/QuickLinks/TermsOfUse"
              className="text-gray-400 font-medium hover:text-white duration-75 ease-in"
            >
              Terms of Use
            </Link>
            <Link
              href="/QuickLinks/PrivacyPolicy"
              className="text-gray-400 font-medium hover:text-white duration-75 ease-in"
            >
              Privacy Policy
            </Link>
            <Link
              href="/QuickLinks/CookiePolicy"
              className="text-gray-400 font-medium hover:text-white duration-75 ease-in"
            >
              Cookie Policy
            </Link>
            <Link
              href="/QuickLinks/IntellectualProperty"
              className="text-gray-400 font-medium hover:text-white duration-75 ease-in"
            >
              Intellectual Property
            </Link>
          </div>
          <div className="roboto flex flex-col gap-3 mt-5 lg:mt-auto">
            <p className="text-lg text-white mb-2">CONTACT</p>
            <a
              href="tel:+44 7544802677"
              className="text-gray-400 font-medium flex gap-2 items-center hover:text-[#A77962] duration-75 ease-in"
            >
              <FaPhoneAlt /> +44 7544802677
            </a>
            <a
              href="mailto: info@minglewise.com"
              className="text-gray-400 font-medium flex gap-2 items-center hover:text-[#A77962] duration-75 ease-in"
            >
              <MdEmail /> info@minglewise.com
            </a>
            <a className="text-gray-400 font-medium flex gap-2 items-center hover:text-[#A77962] duration-75 ease-in">
              <MdLocationPin /> London, UK
            </a>
            <a
              href="whatsapp://send?text=Hello World!&phone=+91 9967067419"
              className="text-gray-400 font-medium flex gap-2 items-center hover:text-[#A77962] duration-75 ease-in"
            >
              <IoLogoWhatsapp /> +91 9967067419
            </a>
          </div>
        </div>
      </div>
      <div className="lg:flex justify-between items-center w-[60%] mx-auto border-t border-gray-600 pt-2 pb-5">
        <p className="text-gray-300">
          Copyright © 2021
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
          <Link
            className="hover:text-[#C57962] duration-75 ease-in"
            href="https://www.facebook.com/minglewise/"
            target="_blank"
          >
            <FaFacebookF />
          </Link>
          <Link
            className="hover:text-[#C57962] duration-75 ease-in"
            href="https://twitter.com/minglewise"
            target="_blank"
          >
            <FaTwitter />
          </Link>
          <Link
            className="hover:text-[#C57962] duration-75 ease-in"
            href="https://www.instagram.com/mingle.wise/"
            target="_blank"
          >
            <FaInstagram />
          </Link>
          <Link
            className="hover:text-[#C57962] duration-75 ease-in"
            href="https://www.linkedin.com/company/minglewise/"
            target="_blank"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            className="hover:text-[#C57962] duration-75 ease-in"
            href="https://www.pinterest.com/minglewise/"
            target="_blank"
          >
            <FaPinterest />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
