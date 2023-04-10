import Image from "next/image";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Head from "@/Head";
import { IN_APP_FEATURES } from "@/Data/QuickLink";
import Link from "next/link";
import { DATING_PROFILE, PROFESSIONAL_NETWORKING } from "@/Data/Home";

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
          className="overflow-hidden poppins-text"
        >
          <div className=" py-24">
            <motion.div
              initial={{ scale: 1.2, opacity: 0 }}
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
              className="w-[95%] md:w-[90%] lg:w-[70%] xl:w-[60%] mx-auto flex flex-col justify-center items-center"
            >
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
                className="poppins-text text-2xl md:text-4xl font-semibold mb-6 text-center"
              >
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C029A8] to-[#F65667]">
                  Features
                </span>
              </motion.p>
              <motion.div className="flex flex-col md:flex-row justify-center items-center gap-16 bg-gradient-to-r from-[#F7F0FA] to-[#FCF4F4] px-5 sm:px-16 py-10 rounded-xl mt-10">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{
                    delay: 0.1,
                    duration: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                      type: "spring",
                      damping: 20,
                      stiffness: 100,
                      restDelta: 0.001,
                    },
                  }}
                >
                  <Image
                    height={100}
                    width={100}
                    src="/assets/features/gold.svg"
                    alt="Coin picture"
                    className="min-w-[150px] min-h-[157px]"
                  />
                </motion.div>
                <motion.div>
                  <motion.p
                    initial={{ scale: 1.2, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{
                      duration: 0.7,
                      ease: [0, 0.71, 0.2, 1.01],
                      scale: {
                        type: "tween",
                        damping: 14,
                        stiffness: 100,
                        restDelta: 0.001,
                      },
                    }}
                    className="text-2xl md:text-4xl font-bold mb-2 text-center md:text-left"
                  >
                    M Coins
                  </motion.p>
                  <motion.p
                    initial={{ x: "20%", scale: 1.2, opacity: 0 }}
                    whileInView={{ x: 0, scale: 1, opacity: 1 }}
                    transition={{
                      delay: 0.1,
                      duration: 0.7,
                      ease: [0, 0.71, 0.2, 1.01],
                      scale: {
                        type: "tween",
                        damping: 100,
                        stiffness: 100,
                        restDelta: 0.001,
                      },
                    }}
                    className="text-center md:text-left"
                  >
                    Buy some M coins to access popular features like Mingle
                    Match, Mingle Meet also you can buy mystery likes ,buzzes
                    and many more.
                  </motion.p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
          <motion.div className="bg-gradient-to-br from-[#F7EFFB] to-[#F8F0F9] py-24">
            <motion.p
              initial={{ scale: 1.2, opacity: 0 }}
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
              className="text-center text-black font-semibold text-2xl md:text-4xl mb-20"
            >
              IN - APP FEATURES
            </motion.p>
            <motion.div className="grid gap-10 xl:gap-16 sm:grid-cols-2 lg:grid-cols-3 w-[90%] md:w-[90%] lg:w-[95%] xl:w-[70%] mx-auto">
              {IN_APP_FEATURES.slice(0, 6).map((data, index) => (
                <motion.div
                  initial={{ y: "-40%", scale: 1.2, opacity: 0 }}
                  whileHover={{ scale: 1.1 }}
                  whileInView={{ y: 0, scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.7,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                      type: "tween",
                      damping: 14,
                      stiffness: 100,
                      restDelta: 0.001,
                    },
                  }}
                  key={index}
                  className="flex flex-col items-center px-5 py-14 text-center shadow-md rounded-2xl bg-white"
                >
                  <Image
                    width={81}
                    height={81}
                    src={data?.logo}
                    alt={data?.title}
                    className="w-20 h-20"
                  />
                  <motion.p className="text-3xl py-4">{data?.title}</motion.p>
                  <motion.p>{data?.info}</motion.p>
                </motion.div>
              ))}
            </motion.div>
            <motion.div className="text-center my-20">
              <Link href="/QuickLinks/InAppFeatures">
                <motion.button
                  initial={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.1, opacity: 1 }}
                  transition={{
                    duration: 0.7,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                      type: "tween",
                      damping: 200,
                      stiffness: 200,
                      restDelta: 0.001,
                    },
                  }}
                  className="bg-gradient-to-r from-[#9E0DD1] to-[#F95963] hover:from-[white] hover:to-[white] hover:text-black px-8 py-3 rounded-full font-bold text-white shadow"
                >
                  View All
                </motion.button>
              </Link>
            </motion.div>
            <motion.p
              initial={{ scale: 1.2, opacity: 0 }}
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
              className="text-center text-2xl md:text-4xl font-semibold"
            >
              DATING PROFILE FEATURES
            </motion.p>
            <motion.div className="grid gap-10 xl:gap-16 sm:grid-cols-2 lg:grid-cols-3 w-[90%] md:w-[90%] lg:w-[95%] xl:w-[70%] mx-auto mt-24">
              {DATING_PROFILE.slice(0, 3).map((data, index) => (
                <motion.div
                  initial={{ y: "-40%", scale: 1.2, opacity: 0 }}
                  whileHover={{ scale: 1.1 }}
                  whileInView={{ y: 0, scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.7,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                      type: "tween",
                      damping: 14,
                      stiffness: 100,
                      restDelta: 0.001,
                    },
                  }}
                  key={index}
                  className="flex flex-col items-center px-5 py-14 text-center shadow-md rounded-2xl bg-white"
                >
                  <Image
                    width={81}
                    height={81}
                    src={data?.logo}
                    alt={data?.title}
                    className="w-20 h-20"
                  />
                  <motion.p className="text-3xl py-4">{data?.title}</motion.p>
                  <motion.p>{data?.info}</motion.p>
                </motion.div>
              ))}
            </motion.div>
            <motion.div className="text-center my-20">
              <Link href="/Features/DatingProfileFeatures">
                <motion.button
                  initial={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.1, opacity: 1 }}
                  transition={{
                    duration: 0.7,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                      type: "tween",
                      damping: 200,
                      stiffness: 200,
                      restDelta: 0.001,
                    },
                  }}
                  className="bg-gradient-to-r from-[#9E0DD1] to-[#F95963] hover:from-[white] hover:to-[white] hover:text-black px-8 py-3 rounded-full font-bold text-white shadow"
                >
                  View All
                </motion.button>
              </Link>
            </motion.div>
            <motion.p
              initial={{ scale: 1.2, opacity: 0 }}
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
              className="text-center text-2xl md:text-4xl font-semibold"
            >
              PROFESSIONAL NETWORKING
            </motion.p>
            <motion.div className="grid gap-10 xl:gap-16 sm:grid-cols-2 lg:grid-cols-3 w-[90%] md:w-[90%] lg:w-[95%] xl:w-[70%] mx-auto mt-24">
              {PROFESSIONAL_NETWORKING.slice(5, 9).map((data, index) => (
                <motion.div
                  initial={{ y: "-40%", scale: 1.2, opacity: 0 }}
                  whileHover={{ scale: 1.1 }}
                  whileInView={{ y: 0, scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.7,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                      type: "tween",
                      damping: 14,
                      stiffness: 100,
                      restDelta: 0.001,
                    },
                  }}
                  key={index}
                  className="flex flex-col items-center px-5 py-14 text-center shadow-md rounded-2xl bg-white"
                >
                  <Image
                    width={81}
                    height={81}
                    src={data?.logo}
                    alt={data?.title}
                    className="w-20 h-20"
                  />
                  <motion.p className="text-3xl py-4">{data?.title}</motion.p>
                  <motion.p>{data?.info}</motion.p>
                </motion.div>
              ))}
            </motion.div>
            <motion.div className="text-center my-20">
              <Link href="/Features/ProfessionalNetworkingFeatures">
                <motion.button
                  initial={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.1, opacity: 1 }}
                  transition={{
                    duration: 0.7,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                      type: "tween",
                      damping: 200,
                      stiffness: 200,
                      restDelta: 0.001,
                    },
                  }}
                  className="bg-gradient-to-r from-[#9E0DD1] to-[#F95963] hover:from-[white] hover:to-[white] hover:text-black px-8 py-3 rounded-full font-bold text-white shadow"
                >
                  View All
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
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
