import React from "react";
import { REVIEW_DATA } from "@/Data/Home";
import Slider from "react-slick";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export default function FolksLovesUs() {
  const settings = {
    speed: 500,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 882,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <AnimatePresence>
      <div
        id="folk-love"
        className="client-reviews py-10 min-h-[500px] overflow-hidden"
      >
        <div className="container mx-auto">
          <motion.p
            initial={{
              x: "80%",
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1.5,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 15,
                stiffness: 70,
                restDelta: 0.001,
              },
            }}
            className="text-2xl md:text-3xl font-semibold poppins-text text-center mb-14"
          >
            Folks Love Us
          </motion.p>
          <motion.div
            initial={{
              scale: 0.7,
              pathLength: 0,
              fill: "rgba(255, 255, 255, 0)",
            }}
            whileInView={{
              scale: 1,
              pathLength: 1,
              fill: "rgba(255, 255, 255, 1)",
            }}
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
            className="w-[70%] sm:w-[70%] md:w-[80%] mx-auto"
          >
            <Slider {...settings}>
              {REVIEW_DATA.map((data, index) => (
                <div
                  key={index}
                  className="bg-white flex justify-center items-center min-w-[95%] max-w-[95%] sm:min-w-[100%] sm:max-w-[100%] md:min-w-[95%] md:max-w-[95%] xl:min-w-[95%] xl:max-w-[95%] min-h-[400px] max-h-[100%] mx-1 sm:mx-0 md:mx-2 lg:mx-2  rounded-md my-10 px-2 sm:px-10 py-14 custom-shadow"
                >
                  <div className="flex justify-center">
                    <Image
                      style={{ objectFit: "cover" }}
                      src={data?.image}
                      alt="User image"
                      height={90}
                      width={90}
                      className="h-32 w-32 rounded-full"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <p className="mt-5 text-justify poppins-text">
                      {data?.info}
                    </p>
                  </div>
                  <p className="text-[15px] font-medium text-right mt-5 poppins-text">
                    {data?.name}
                  </p>
                </div>
              ))}
            </Slider>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
