import Image from "next/image";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FEATURES_BOTTOM_CARD, FEATURES_DATA } from "@/Data/QuickLink";

const Features = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.1,
          scale: {
            type: "spring",
            damping: 50,
            stiffness: 200,
            restDelta: 0.001,
          },
        }}
        className="overflow-hidden"
      >
        <div className="bg-[#FCFCFC]">
          <div className="w-[95%] md:w-[90%] lg:w-[70%] mx-auto flex flex-col justify-center items-center min-h-[70vh] sm:min-h-[50vh]">
            <motion.p
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 14,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
              className="poppins-text text-2xl md:text-3xl font-semibold mb-6 text-center"
            >
              Some feature heading
            </motion.p>
            <motion.p
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 14,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
              className="poppins-text 2xl:w-[70%] text-center"
            >
              We offer exciting features for dating, professional networking &
              events with an extra level of safety and peace of mind so no more
              catfishing, just real people looking for real connections. Our
              Mission is to bring people together, be a part of their daily
              lives by helping them build lasting relationships in an
              environment of trust & respect and create life-long memories along
              the way.
            </motion.p>
          </div>
        </div>
        <div>
          <p className="text-2xl md:text-3xl text-center py-14 font-semibold">
            Features
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 w-[90%] md:w-[90%] lg:w-[95%] xl:w-[70%] 2xl:w-[65%] mx-auto">
            {FEATURES_DATA.map((profile, index) => (
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: index * 0.3,
                  ease: [0, 0.71, 0.2, 1.01],
                  scale: {
                    type: "spring",
                    damping: 10,
                    stiffness: 100,
                    restDelta: 0.001,
                  },
                }}
                key={index}
                className="p-10 mb-5"
              >
                <motion.div
                  initial={{ scale: 1, opacity: 1, rotate: -90 }}
                  whileInView={{ rotate: 0 }}
                  whileHover={{ scale: 1.03, opacity: 1, rotate: 5 }}
                  whileTap={{ scale: 1.2 }}
                  transition={{
                    duration: 0.7,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                      type: "spring",
                      damping: 50,
                      stiffness: 100,
                      restDelta: 0.001,
                    },
                  }}
                >
                  <Image
                    className="w-20 h-20"
                    height={30}
                    width={30}
                    src={profile?.img}
                    alt={profile?.title}
                  />
                </motion.div>
                <div className="mt-3">
                  <p className="text-[18px] font-semibold poppins-text">
                    {profile?.title}
                  </p>
                  <p className="text-justify mt-1 lato">{profile?.info}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center pb-10">
            <button
              className="bg-transparent text-white font-semibold w-28 h-12 relative
            before:w-full before:h-full before:scale-x-[1.05] before:scale-y-[1.1]  before:absolute before:top-[50%] before:left-[50%]
            before:-z-10 before:translate-x-[-50%] before:translate-y-[-50%] 
            before:from-[#7B00D6] before:to-[#FB695B] before:bg-gradient-to-br
            before:rounded-full
            hover:bg-white hover:text-black transition-all duration-200 px-4 rounded-full py-2 poppins-text"
            >
              See Less
            </button>
          </div>
        </div>
        <div className="py-16 bg-[#FCFCFC]">
          <div className="flex justify-center">
            <Image
              height={100}
              width={100}
              src="/assets/features/gold.svg"
              alt="Coin picture"
            />
          </div>
          <div className="w-[90%] sm:w-[70%] md:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto pt-14">
            <div className=" poppins-text">
              <p className="text-xl font-semibold">What are MCoins?</p>
              <p>
                MCoins are MingleWise currency used to buy gifts and premium
                features
              </p>
            </div>
            <div className="mt-5 poppins-text">
              <p className="text-xl font-semibold">What do I do with MCoins?</p>
              <p>You can buy gifts and other in-app features</p>
            </div>
          </div>
          <div className="mx-auto grid grid-cols-1 md:grid-cols-2 w-[98%] md:w-[95%] lg:w-[80%] xl:w-[65%] 2xl:w-[60%] gap-2 mt-14">
            {FEATURES_BOTTOM_CARD.map((data, index) => (
              <motion.div
                initial={{ scale: 0.5, opacity: 1, rotate: 10 }}
                whileInView={{ rotate: 0, scale: 1 }}
                whileHover={{ scale: 1.03 }}
                transition={{
                  duration: 0.8,
                  ease: [0, 0.71, 0.2, 1.01],
                  scale: {
                    type: "spring",
                    damping: 14,
                    stiffness: 100,
                    restDelta: 0.001,
                  },
                }}
                key={index}
                className="mx-auto"
              >
                <Image
                  src={data?.image}
                  alt="Card Image"
                  height={300}
                  width={100}
                  className="w-auto"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Features;
