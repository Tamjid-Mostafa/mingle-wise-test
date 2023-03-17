import React from "react";
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { motion as m } from "framer-motion";

const Counter = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className="md:flex md:gap-2 lg:gap-5 xl:gap-10 justify-center items-center py-10 xl:py-16">
        <div className="flex flex-col items-center gap-1">
          <m.h1
            initial={{ y: -60 }}
            whileInView={{ y: 0 }}
            transition={{
              duration: 1,
              type: "tween",
              damping: 150,
              stiffness: 400,
            }}
            className="text-5xl lg:text-6xl xl:text-6xl font-bold barlow flex"
          >
            {counterOn && (
              <CountUp start={0} end={190957} duration={5} delay={0} />
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
            className="text-center text-xl text-gray-500 barlow"
          >
            Number of App Downloads!
          </m.p>
        </div>
        <div className="flex flex-col items-center gap-1 mt-4 md:mt-auto">
          <m.h1
            initial={{ y: -60 }}
            whileInView={{ y: 0 }}
            transition={{
              duration: 1,
              type: "tween",
              damping: 150,
              stiffness: 400,
            }}
            className="text-5xl lg:text-6xl xl:text-6xl font-bold barlow flex"
          >
            {counterOn && (
              <CountUp start={0} end={49576} duration={5} delay={0} />
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
            className="text-center text-xl text-gray-500 barlow"
          >
            Number of followers on Social Media!
          </m.p>
        </div>
        <div className="flex flex-col items-center gap-1 mt-4 md:mt-auto">
          <m.h1
            initial={{ y: -60 }}
            whileInView={{ y: 0 }}
            transition={{
              duration: 1,
              type: "tween",
              damping: 150,
              stiffness: 400,
            }}
            className="text-5xl lg:text-6xl xl:text-6xl font-bold barlow flex"
          >
            {counterOn && (
              <CountUp start={0} end={6526} duration={5} delay={0} />
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
            className="text-center text-xl text-gray-500 barlow"
          >
            Number of 5 star reviews
          </m.p>
        </div>
        <div className="flex flex-col items-center gap-1 mt-4 md:mt-auto">
          <m.h1
            initial={{ y: -60 }}
            whileInView={{ y: 0 }}
            transition={{
              duration: 1,
              type: "tween",
              damping: 150,
              stiffness: 400,
            }}
            className="text-5xl lg:text-6xl xl:text-6xl font-bold barlow flex"
          >
            {counterOn && (
              <CountUp start={0} end={176} duration={5} delay={0} />
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
            className="text-center text-xl text-gray-500 barlow"
          >
            Number of countries were we are Live!
          </m.p>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default Counter;
