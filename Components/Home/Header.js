import { HOME_CAROUSEL_DATA } from "@/Data/Home";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { StateContext } from "@/pages/_app";

export default function HomeCarousel() {
  const { osName } = useContext(StateContext);
  // console.log(osName);
  const router = useRouter();
  const settings = {
    dots: true,
    speed: 800,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <div className="home overflow-hidden">
      <Slider
        pauseOnHover={false}
        pauseOnFocus={false}
        pauseOnDotsHover={false}
        {...settings}
      >
        {HOME_CAROUSEL_DATA?.map((data, index) => (
          <div key={index} className="relative w-screen h-screen">
            <span className="bg-black/60 absolute top-0 bottom-0 right-0 left-0 z-[1]">
              <div className="h-full grid justify-start items-center p-6 md:p-40">
                <div className="flex flex-col gap-6 text-white">
                  <motion.h1
                    initial={{ x: "50%", opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 1,
                      ease: [0, 0.71, 0.2, 1.01],
                      scale: {
                        type: "spring",
                        damping: 10,
                        stiffness: 100,
                        restDelta: 0.001,
                      },
                    }}
                    className="sm:max-w-[80%] text-[20px] md:text-[30px] lg:text-[36px] xl:text-[40px] 2xl:text-[45px] font-bold leading-tight poppins-text"
                  >
                    {data.heading}
                  </motion.h1>
                  <motion.p
                    initial={{ x: "50%", scale: 0.8, opacity: 0 }}
                    whileInView={{ x: 0, scale: 1, opacity: 1 }}
                    transition={{
                      duration: 1,
                      ease: [0, 0.71, 0.2, 1.01],
                      scale: {
                        type: "spring",
                        damping: 10,
                        stiffness: 100,
                        restDelta: 0.001,
                      },
                    }}
                    className="md:text-lg font-normal poppins-text w-[80%]"
                  >
                    {data.subHeading}
                  </motion.p>
                  <a
                    href={
                      osName == "Android" || osName == "Windows"
                        ? "https://play.google.com/store/apps/details?id=com.appsynergies.minglewise"
                        : osName == "iOS" ||
                          osName == "Apple" ||
                          osName == "OS X"
                        ? "https://apps.apple.com/in/app/minglewise-dating-pro-events/id1574084760"
                        : "https://play.google.com/store/apps/details?id=com.appsynergies.minglewise"
                    }
                    target="_blank"
                  >
                    <button
                      className="bg-transparent text-white font-semibold w-44 h-10 relative
                    before:w-full before:h-full before:scale-x-[1.04] before:scale-y-[1.1]  before:absolute before:top-[50%] before:left-[50%]
                    before:-z-10 before:translate-x-[-50%] before:translate-y-[-50%]
                    before:from-[#7B00D6] before:to-[#FB695B] before:bg-gradient-to-br
                    before:rounded-md
                    hover:bg-white hover:text-black duration-300 px-4 rounded py-2 poppins-text"
                    >
                      Download Now
                    </button>
                  </a>
                </div>
              </div>
            </span>
            <Image layout="fill" src={data.src} alt="hero" objectFit="cover" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
