import React from "react";
import { REVIEW_DATA } from "@/Data/Home";
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  FreeMode,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import cn from "clsx";
import s from "../../styles/FolksLovesUs.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import LeftQuote from "../icons/LeftQuote";
import RightQuote from "../icons/RightQuote";

export default function FolksLovesUs() {
  const settings = {};
  return (
    <AnimatePresence>
      <div
        id="folk-love"
        className={cn(
          s.root,
          "client-reviews py-10 min-h-[500px] overflow-hidden"
        )}
      >
        <div className="container mx-auto my-20">
          <motion.p
            // initial={{
            //   x: "80%",
            //   opacity: 0,
            // }}
            // whileInView={{
            //   x: 0,
            //   opacity: 1,
            // }}
            // transition={{
            //   duration: 1.5,
            //   ease: [0, 0.71, 0.2, 1.01],
            //   scale: {
            //     type: "spring",
            //     damping: 15,
            //     stiffness: 70,
            //     restDelta: 0.001,
            //   },
            // }}
            className="text-2xl md:text-3xl font-semibold poppins-text text-center"
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
            className="relative"
          >
            <div className={cn(s.rectangle, "")} />
            <Swiper
              // install Swiper modules
              modules={[ Pagination, A11y, Autoplay, FreeMode]}
              spaceBetween={10}
              loop={true}
              slidesPerView={1}
              autoplay={{
                delay: 500,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
            >
              {REVIEW_DATA.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <motion.div
                      initial={{  opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{
                        duration: 1,
                        ease: [0, 0.71, 0.2, 1.01],
                        scale: {
                          type: "spring",
                          damping: 14,
                          stiffness: 100,
                          restDelta: 0.001,
                        },
                      }}
                      className={cn(s.card)}
                    >
                      <div className={cn(s.content, "")}>
                        <div className={cn(s.avatar, "")}>
                          <Image
                            width={64}
                            height={64}
                            src={item?.image}
                            alt={item?.name}
                            className={cn("rounded-full")}
                          />
                          <div>
                            <div className={cn(s.name, "")}>{item?.name}</div>
                            <div className={cn(s.title, "")}>{item?.title}</div>
                          </div>
                        </div>
                        <div className="my-5">
                          <LeftQuote className=" float-left mr-5" />
                          <span className={cn(s.reviews, "")}>
                            {item?.info}
                            <RightQuote className="absolute -right-10 bottom-0" />
                          </span>
                        </div>

                        <div className="flex flex-col space-y-3 ">
                          <hr />
                        </div>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                );
              })}
              {/* {REVIEW_DATA.map((data, index) => (
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
              ))} */}
            </Swiper>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
