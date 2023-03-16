import React from "react";
import { REVIEW_DATA } from "@/Data/Home";
import Slider from "react-slick";
import { AiFillStar } from "react-icons/ai";

export default function Reviews() {
  const settings = {
    dots: true,
    speed: 500,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
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
    <div className="client-reviews py-10 min-h-[500px]">
      <div className="container mx-auto">
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
          See what users say about our app!
        </p>
        <div className="w-[95%] md:w-[80%] sm:w-[90%] mx-auto">
          <Slider {...settings}>
            {REVIEW_DATA.map((data, index) => (
              <div
                key={index}
                className="bg-white min-w-[95%] max-w-[95%] sm:min-w-[100%] sm:max-w-[100%] md:min-w-[95%] md:max-w-[95%] xl:min-w-[95%] xl:max-w-[95%] min-h-[260px] max-h-[100%] mx-2 rounded my-10 p-4"
              >
                <p className="text-2xl font-medium roboto">{data?.name}</p>
                <div className="flex gap-1 text-2xl text-[#FFB74D] my-2">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
                <p className="text-xl roboto text-[#4F4F4F]">{data?.info}</p>
                <p className="text-lg text-[#4F4F4F] mt-2">{data?.platform}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
