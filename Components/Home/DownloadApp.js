import Image from "next/image";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const DownloadApp = () => {
  return (
    <AnimatePresence>
      <div id="download-now" className="py-24 px-2 overflow-hidden">
        <div className="flex md:flex-row flex-col-reverse items-center container mx-auto gap-14">
          <div className="md:w-[40%] mt-2 md:mt-0">
            <div className="text-center md:text-left">
              <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
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
              >
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
                  className="text-3xl md:text-4xl font-semibold mt-10 poppins-text"
                >
                  Download the App
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
                  className="mt-5 poppins-text"
                >
                  MingleWise is the app for you if swiping makes your thumb hurt
                  and you&epos;re sick of people ghosting you. With the
                  all-in-one AI-driven app MingleWise, you can find, meet, and
                  form genuine connections for dating or business networking, as
                  well as take part in hybrid events.
                </motion.p>
              </motion.div>
              <motion.div
                initial={{ y: "40%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
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
                className="flex flex-row md:flex-col lg:flex-col xl:flex-row gap-1 md:gap-5 mt-5 lg:mt-20 xl:mt-32 md:justify-start justify-center"
              >
                <motion.a
                  initial={{ x: "-40%", opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1 }}
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
                  href="https://play.google.com/store/apps/details?id=com.appsynergies.minglewise"
                  target="_blank"
                >
                  <Image
                    height={100}
                    width={200}
                    className="h-12 md:h-16 w-auto"
                    src="/assets/icons/Play_Store.png"
                    alt="Play store"
                  />
                </motion.a>
                <motion.a
                  initial={{ x: "40%", opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1 }}
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
                  href="https://apps.apple.com/in/app/minglewise-dating-pro-events/id1574084760"
                  target="_blank"
                >
                  <Image
                    height={100}
                    width={200}
                    className="h-12 md:h-16 w-auto"
                    src="/assets/icons/App_Store.png"
                    alt="App store"
                  />
                </motion.a>
              </motion.div>
            </div>
          </div>
          <motion.div
            initial={{ scale: 0.5, x: "40%", opacity: 0 }}
            whileInView={{ scale: 1, x: 0, opacity: 1 }}
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
            className="flex md:w-[60%]"
          >
            <Image
              src="/assets/why-minglewise/phone-group-2.png"
              alt="Image"
              width={1000}
              height={500}
            />
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default DownloadApp;
