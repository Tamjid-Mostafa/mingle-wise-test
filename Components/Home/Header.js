import { HOME_CAROUSEL_DATA } from "@/Data/Home";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Slider from "react-slick";

export default function HomeCarousel() {
  const router = useRouter();
  const settings = {
    dots: true,
    fade: true,
    speed: 800,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <div className="home">
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
                  <h1 className="md:max-w-[80%] text-[30px] lg:text-[40px] xl:text-[45px] 2xl:text-[50px] font-bold leading-tight poppins-text">
                    {data.heading}
                  </h1>
                  <p className="md:max-w-[700px] md:text-lg font-normal poppins-text">
                    {data.subHeading}
                  </p>
                  <button
                    onClick={() => router.push("?estimate=true")}
                    className="bg-transparent text-white font-semibold w-44 h-10 relative
                    before:w-full before:h-full before:scale-x-[1.04] before:scale-y-[1.1]  before:absolute before:top-[50%] before:left-[50%]
                    before:-z-10 before:translate-x-[-50%] before:translate-y-[-50%] 
                    before:from-[#7B00D6] before:to-[#FB695B] before:bg-gradient-to-br
                    before:rounded-md
                    hover:bg-white hover:text-black transition-all duration-300 px-4 rounded py-2 poppins-text"
                  >
                    Download Now
                  </button>
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
