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
                  Lorem ipsum dolor sit amet consectetur. Imperdiet elementum
                  mattis tristique velit enim parturient. Morbi leo mi at amet
                  tempus. Leo ante lorem cursus tristique. Nulla urna faucibus
                  mauris tristique elementum mauris platea.
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
                className="flex flex-col md:flex-col lg:flex-col xl:flex-row gap-5 mt-5 lg:mt-32 justify-center items-center md:items-start"
              >
                <a
                  href="https://play.google.com/store/apps/details?id=com.appsynergies.minglewise"
                  target="_blank"
                >
                  <Image
                    height={100}
                    width={200}
                    className=""
                    src="/assets/icons/available_on_both_stores_generated 1.png"
                    alt="Play store"
                  />
                </a>
                <a
                  href="https://apps.apple.com/in/app/minglewise-dating-pro-events/id1574084760"
                  target="_blank"
                >
                  <Image
                    height={100}
                    width={200}
                    className=""
                    src="/assets/icons/available_on_both_stores_generated 2.png"
                    alt="App store"
                  />
                </a>
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
