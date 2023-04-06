import Image from "next/image";
import React from "react";
import { MdEmail, MdLocationPin, MdWhatsapp } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const Footer = () => {
  return (
    <AnimatePresence>
      <div className="bg-[#2A2D3B] overflow-hidden relative">
        <div className="container mx-auto flex">
          <div className="lg:w-[70%]">
            <div className="bg-[#2A2D3B] min-h-[35vh] flex items-center p-5">
              <div className="md:flex justify-start items-center gap-14">
                <div className="flex flex-col gap-3 mt-10 lg:mt-auto md:min-h-[200px]">
                  <p className="text-lg text-white mb-2">Company</p>
                  <Link
                    href="/QuickLinks/AboutUs"
                    className="text-gray-400 font-medium hover:text-white duration-75 ease-in poppins-text"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/QuickLinks/Features"
                    className="text-gray-400 font-medium hover:text-white duration-75 ease-in poppins-text"
                  >
                    Features
                  </Link>
                  <Link
                    href="/QuickLinks/SubscriptionTires"
                    className="text-gray-400 font-medium hover:text-white duration-75 ease-in poppins-text"
                  >
                    Subscription Tires
                  </Link>
                  <Link
                    href="/QuickLinks/Support"
                    className="text-gray-400 font-medium hover:text-white duration-75 ease-in poppins-text"
                  >
                    Support
                  </Link>
                  <Link
                    href="/QuickLinks/ContactUs"
                    className="text-gray-400 font-medium hover:text-white duration-75 ease-in poppins-text"
                  >
                    Contact Us
                  </Link>
                </div>
                <div className="flex flex-col gap-3 mt-5 lg:mt-auto md:min-h-[200px]">
                  <p className="text-lg text-white mb-2">Legal</p>
                  <Link
                    href="/QuickLinks/TermsOfUse"
                    className="text-gray-400 font-medium hover:text-white duration-75 ease-in poppins-text"
                  >
                    Terms of Use
                  </Link>
                  <Link
                    href="/QuickLinks/PrivacyPolicy"
                    className="text-gray-400 font-medium hover:text-white duration-75 ease-in poppins-text"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/QuickLinks/CookiePolicy"
                    className="text-gray-400 font-medium hover:text-white duration-75 ease-in poppins-text"
                  >
                    Cookie Policy
                  </Link>
                  <Link
                    href="/QuickLinks/CommunityRules"
                    className="text-gray-400 font-medium hover:text-white duration-75 ease-in poppins-text"
                  >
                    Community Rules
                  </Link>
                  <Link
                    href="/QuickLinks/IntellectualProperty"
                    className="text-gray-400 font-medium hover:text-white duration-75 ease-in poppins-text"
                  >
                    Intellectual Property
                  </Link>
                </div>
                <div className="roboto flex flex-col gap-3 mt-5 lg:mt-auto md:min-h-[200px]">
                  <p className="text-lg text-white mb-2 poppins-text">
                    CONTACT
                  </p>
                  <a
                    href="tel:+44 7544802677"
                    className="text-gray-400 font-medium flex gap-2 items-center hover:text-[#A77962] duration-75 ease-in poppins-text"
                  >
                    <FaPhoneAlt /> +44 7544802677
                  </a>
                  <a
                    href="mailto: info@minglewise.com"
                    className="text-gray-400 font-medium flex gap-2 items-center hover:text-[#A77962] duration-75 ease-in poppins-text"
                  >
                    <MdEmail /> info@minglewise.com
                  </a>
                  <a className="text-gray-400 font-medium flex gap-2 items-center hover:text-[#A77962] duration-75 ease-in poppins-text">
                    <MdLocationPin /> London, UK
                  </a>
                  <a
                    href="whatsapp://send?text=Hello World!&phone=+91 9967067419"
                    className="text-gray-400 font-medium flex gap-2 items-center hover:text-[#A77962] duration-75 ease-in poppins-text"
                  >
                    <IoLogoWhatsapp /> +91 9967067419
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:flex justify-between items-center border-t border-gray-600 pt-2 pb-5">
              <div className="lg:flex gap-8 items-center px-5 md:px-1">
                <p className="text-[22px] font-semibold text-white poppins-text">
                  Download the app{" "}
                </p>
                <div className="flex gap-2">
                  <a
                    href="https://apps.apple.com/in/app/minglewise-dating-pro-events/id1574084760"
                    target="_blank"
                  >
                    <Image
                      height={50}
                      width={50}
                      src="/assets/social-media/App Store.svg"
                      alt=""
                    />
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.appsynergies.minglewise"
                    target="_blank"
                  >
                    <Image
                      height={50}
                      width={50}
                      src="/assets/social-media/Google Play.svg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="flex text-gray-500 gap-6 mt-2 lg:mt-auto items-center px-5 md:px-1">
                <Link
                  className="hover:text-[#C57962] duration-75 ease-in"
                  href="https://www.instagram.com/mingle.wise/"
                  target="_blank"
                >
                  <motion.div
                    initial={{ scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{
                      duration: 1,
                      ease: [0, 0.71, 0.2, 1.01],
                      scale: {
                        type: "spring",
                        damping: 15,
                        stiffness: 70,
                        restDelta: 0.001,
                      },
                    }}
                  >
                    <Image
                      height={50}
                      width={50}
                      className="w-12 h-12"
                      src="/assets/social-media/Instagram.svg"
                      alt="Facebook"
                    />
                  </motion.div>
                </Link>
                <Link
                  className="hover:text-[#C57962] duration-75 ease-in"
                  href="https://www.facebook.com/minglewise/"
                  target="_blank"
                >
                  <motion.div
                    initial={{ x: "-100%", opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.02,
                      duration: 1.2,
                      ease: [0, 0.71, 0.2, 1.01],
                      scale: {
                        type: "spring",
                        damping: 15,
                        stiffness: 70,
                        restDelta: 0.001,
                      },
                    }}
                  >
                    <Image
                      height={50}
                      width={50}
                      className="w-12 h-12"
                      src="/assets/social-media/Facebook F.svg"
                      alt="Facebook"
                    />
                  </motion.div>
                </Link>
                <Link
                  className="hover:text-[#C57962] duration-75 ease-in"
                  href="https://www.linkedin.com/company/minglewise/"
                  target="_blank"
                >
                  <motion.div
                    initial={{ x: "-100%", opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.04,
                      duration: 1.4,
                      ease: [0, 0.71, 0.2, 1.01],
                      scale: {
                        type: "spring",
                        damping: 15,
                        stiffness: 70,
                        restDelta: 0.001,
                      },
                    }}
                  >
                    <Image
                      height={50}
                      width={50}
                      className="w-12 h-12"
                      src="/assets/social-media/LinkedIn 2.svg"
                      alt="Facebook"
                    />
                  </motion.div>
                </Link>
                <Link
                  className="hover:text-[#C57962] duration-75 ease-in"
                  href="https://twitter.com/minglewise"
                  target="_blank"
                >
                  <motion.div
                    initial={{ x: "-100%", opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.06,
                      duration: 1.6,
                      ease: [0, 0.71, 0.2, 1.01],
                      scale: {
                        type: "spring",
                        damping: 15,
                        stiffness: 70,
                        restDelta: 0.001,
                      },
                    }}
                  >
                    <Image
                      height={50}
                      width={50}
                      className="w-12 h-12"
                      src="/assets/social-media/Twitter.svg"
                      alt="Facebook"
                    />
                  </motion.div>
                </Link>
              </div>
            </div>
          </div>
          <div className=" ml-auto w-[30%] hidden lg:block">
            <div className="footer-bg"></div>
            <div className="rotate-90 absolute top-36 right-[-60px]">
              <p className="header-font-extra-light md:text-4xl tracking-[5px] relative text-white">
                MingleWise
                <span className="text-[8px] roboto tracking-tight absolute top-[-5px] md:top-[-12px]">
                  TM
                </span>
              </p>
              <p className="header-font-extra-light text-white text-[12px] ml-8">
                Dating | Networking | Events
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Footer;
