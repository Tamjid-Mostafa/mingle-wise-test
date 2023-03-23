import React from "react";
import { REVIEW_DATA } from "@/Data/Home";
import Slider from "react-slick";
import { AiFillStar } from "react-icons/ai";
import { motion as m } from "framer-motion";
import Image from "next/image";

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
    <div className="client-reviews py-10 min-h-[500px] overflow-hidden">
      <div className="container mx-auto">
        <p className="text-2xl sm:text-[36px] text-center font-semibold">
          Folks love us
        </p>
        <m.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            type: "tween",
            damping: 150,
            stiffness: 400,
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
                  <p className="text-xl roboto text-[#4F4F4F] mt-5 text-justify">
                    {data?.info}
                  </p>
                </div>
                <p className="text-base font-medium roboto text-right mt-5">
                  {data?.name}
                </p>
              </div>
            ))}
          </Slider>
        </m.div>
      </div>
    </div>
  );
}
