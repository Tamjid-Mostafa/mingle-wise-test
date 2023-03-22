import React from "react";
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { motion as m } from "framer-motion";
import Image from "next/image";

const WhatMakesUsLove = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:w-[70%] lg:w-auto xl:w-[85%] 2xl:w-[90%] mx-auto justify-center items-center py-10 xl:py-16">
        <div className="flex flex-col items-center gap-1">
          <Image
            className="w-40 mt-10 lg:mt-5 lg:w-52"
            width={100}
            height={100}
            src="/assets/what-makes-us-love/earth.svg"
            alt=""
          />
          <m.h1
            initial={{ y: -60 }}
            whileInView={{ y: 0 }}
            transition={{
              duration: 1,
              type: "tween",
              damping: 150,
              stiffness: 400,
            }}
            className="text-5xl lg:text-6xl xl:text-6xl font-bold flex mt-5 mb-2"
          >
            {counterOn && (
              <CountUp start={0} end={176} duration={5} delay={0} />
            )}
          </m.h1>
          <m.p
            initial={{ x: -30 }}
            whileInView={{ x: 0 }}
            transition={{
              duration: 1,
              type: "tween",
              damping: 150,
              stiffness: 400,
            }}
            className="text-center w-[95%] text-xl sm:text-2xl font-semibold text-gray-500"
          >
            Countries Live In
          </m.p>
        </div>
        <div className="flex flex-col items-center gap-1 mt-4 md:mt-auto">
          <Image
            className="w-40 mt-10 lg:mt-5 lg:w-52"
            width={100}
            height={100}
            src="/assets/what-makes-us-love/followers.svg"
            alt=""
          />
          <m.h1
            initial={{ y: -60 }}
            whileInView={{ y: 0 }}
            transition={{
              duration: 1,
              type: "tween",
              damping: 150,
              stiffness: 400,
            }}
            className="text-5xl lg:text-6xl xl:text-6xl font-bold flex mt-5 mb-2"
          >
            {counterOn && (
              <CountUp start={0} end={39576} duration={5} delay={0} />
            )}
          </m.h1>
          <m.p
            initial={{ y: 30 }}
            whileInView={{ y: 0 }}
            transition={{
              duration: 1,
              type: "tween",
              damping: 150,
              stiffness: 400,
            }}
            className="text-center w-[95%] text-xl sm:text-2xl font-semibold text-gray-500"
          >
            Number of followers on Social Media
          </m.p>
        </div>
        <div className="flex flex-col items-center gap-1 mt-4 md:mt-auto">
          <Image
            className="w-40 mt-10 lg:mt-5 lg:w-52"
            width={100}
            height={100}
            src="/assets/what-makes-us-love/stars.svg"
            alt=""
          />
          <m.h1
            initial={{ y: -60 }}
            whileInView={{ y: 0 }}
            transition={{
              duration: 1,
              type: "tween",
              damping: 150,
              stiffness: 400,
            }}
            className="text-5xl lg:text-6xl xl:text-6xl font-bold flex mt-5 mb-2"
          >
            {counterOn && (
              <CountUp start={0} end={4526} duration={5} delay={0} />
            )}
          </m.h1>
          <m.p
            initial={{ y: 30 }}
            whileInView={{ y: 0 }}
            transition={{
              duration: 1,
              type: "tween",
              damping: 150,
              stiffness: 400,
            }}
            className="text-center w-[95%] text-xl sm:text-2xl font-semibold text-gray-500"
          >
            5 star reviews
          </m.p>
        </div>
        <div className="flex flex-col items-center gap-1 mt-4 md:mt-auto">
          <Image
            className="w-40 mt-10 lg:mt-5 lg:w-52"
            width={100}
            height={100}
            src="/assets/what-makes-us-love/DOWNLAODS ILL.svg"
            alt=""
          />
          <m.h1
            initial={{ y: -60 }}
            whileInView={{ y: 0 }}
            transition={{
              duration: 1,
              type: "tween",
              damping: 150,
              stiffness: 400,
            }}
            className="text-5xl lg:text-6xl xl:text-6xl font-bold flex mt-5 mb-2"
          >
            {counterOn && (
              <CountUp start={0} end={130957} duration={5} delay={0} />
            )}
          </m.h1>
          <m.p
            initial={{ x: 30 }}
            whileInView={{ x: 0 }}
            transition={{
              duration: 1,
              type: "tween",
              damping: 150,
              stiffness: 400,
            }}
            className="text-center w-[95%] text-xl sm:text-2xl font-semibold text-gray-500"
          >
            Number of app downloads
          </m.p>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default WhatMakesUsLove;