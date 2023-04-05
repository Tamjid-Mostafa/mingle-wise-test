import Image from "next/image";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FEATURES_BOTTOM_CARD, FEATURES_DATA } from "@/Data/QuickLink";
import Head from "@/Head";

const Features = () => {
  return (
    <>
      <Head title={"Features"} />
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
          <div className=" py-24">
            <div className="w-[95%] md:w-[90%] lg:w-[70%] xl:w-[60%] mx-auto flex flex-col justify-center items-center">
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
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C029A8] to-[#F65667]">
                  Features
                </span>
              </motion.p>
              <motion.div className="flex flex-col md:flex-row justify-center items-center gap-16 bg-gradient-to-r from-[#F7F0FA] to-[#FCF4F4] px-5 sm:px-16 py-10 rounded-xl mt-10">
                <motion.div>
                  <Image
                    height={100}
                    width={100}
                    src="/assets/features/gold.svg"
                    alt="Coin picture"
                    className="min-w-[150px] min-h-[157px]"
                  />
                </motion.div>
                <motion.div>
                  <motion.p className="text-2xl md:text-4xl font-bold mb-2 text-center md:text-left">
                    M Coins
                  </motion.p>
                  <motion.p className="text-center md:text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </motion.p>
                </motion.div>
              </motion.div>
            </div>
          </div>
          <div></div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Features;

{
  /* <motion.div
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
                </motion.div> */
}
