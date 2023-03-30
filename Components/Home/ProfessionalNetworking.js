import { PROFESSIONAL_NETWORKING } from "@/Data/Home";
import Image from "next/image";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

const ProfessionalNetworking = () => {
  const router = useRouter();
  return (
    <AnimatePresence>
      <div className="py-20 overflow-hidden">
        <div className="text-center w-[90%] md:w-[70%] mx-auto">
          <motion.p
            initial={{ x: "40%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
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
            className="text-2xl md:text-3xl font-semibold poppins-text"
          >
            PROFESSIONAL
          </motion.p>
          <motion.p
            initial={{ x: "-40%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
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
            className="text-2xl md:text-3xl font-semibold poppins-text"
          >
            NETWORKING
          </motion.p>
          <motion.p
            initial={{ scale: 0.6, opacity: 0.2 }}
            whileInView={{ scale: 1, opacity: 1 }}
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
            className="mt-5 mb-7 poppins-text"
          >
            Lorem ipsum dolor sit amet consectetur. Ac gravida vulputate
            malesuada nec tellus. Nibh sit proin egestas metus condimentum
            blandit. Elit sed interdum id egestas. At fringilla eleifend
            molestie nunc at lacus magna placerat.
          </motion.p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 w-[90%] md:w-[90%] lg:w-[95%] xl:w-[70%] 2xl:w-[65%] mx-auto">
          {PROFESSIONAL_NETWORKING.map((profile, index) => (
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
                  duration: 0.8,
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
                  src={profile?.logo}
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
        <div className="text-center">
          <button
            onClick={() =>
              router.push("/Features/ProfessionalNetworkingFeatures")
            }
            className="bg-transparent text-white font-semibold w-28 h-12 relative
            before:w-full before:h-full before:scale-x-[1.05] before:scale-y-[1.1]  before:absolute before:top-[50%] before:left-[50%]
            before:-z-10 before:translate-x-[-50%] before:translate-y-[-50%] 
            before:from-[#7B00D6] before:to-[#FB695B] before:bg-gradient-to-br
            before:rounded-full
            hover:bg-white hover:text-black transition-all duration-200 px-4 rounded-full py-2 poppins-text"
          >
            See All
          </button>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default ProfessionalNetworking;
