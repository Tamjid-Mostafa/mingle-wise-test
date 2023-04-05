import Image from "next/image";
import React, { useContext } from "react";
import { StateContext } from "../_app";
import Map from "../../public/assets/background-image/FACTS & FIGURES SEC 1.png";
import { AnimatePresence, motion } from "framer-motion";
import Head from "@/Head";
import { GoLinkExternal } from "react-icons/go";

const AboutUs = () => {
  const { setPageName } = useContext(StateContext);
  setPageName("");
  setPageName("ABOUT US");

  return (
    <>
      <Head title={"About Us"} />
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
          className="overflow-hidden py-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              scale: {
                type: "tween",
                damping: 50,
                stiffness: 200,
                restDelta: 0.001,
              },
            }}
            className="flex flex-col gap-10 items-center justify-center poppins-text py-10"
          >
            <Image
              width={192}
              height={189}
              src="/assets/logo/appsynergies.svg"
              alt="AppSynergies Logo"
            />
            <motion.p
              initial={{ x: "-60%", opacity: 0, scale: 0.7 }}
              whileInView={{ x: 0, opacity: 1, scale: 1 }}
              transition={{
                duration: 0.7,
                scale: {
                  type: "tween",
                  damping: 50,
                  stiffness: 200,
                  restDelta: 0.001,
                },
              }}
              className="text-3xl md:text-5xl font-semibold"
            >
              APPSYNERGIES
            </motion.p>
            <motion.p
              initial={{ x: "60%", opacity: 0, scale: 0.7 }}
              whileInView={{ x: 0, opacity: 1, scale: 1 }}
              transition={{
                duration: 0.7,
                scale: {
                  type: "tween",
                  damping: 50,
                  stiffness: 200,
                  restDelta: 0.001,
                },
              }}
              className="w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto text-center"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </motion.p>
            <motion.div
              initial={{ y: "-60%", opacity: 0, scale: 0.7 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{
                duration: 0.7,
                scale: {
                  type: "tween",
                  damping: 50,
                  stiffness: 200,
                  restDelta: 0.001,
                },
              }}
              className="text-center"
            >
              <a href="https://appsynergies.com/" target="_blank">
                <button
                  className="bg-transparent text-white font-semibold w-50 h-10 relative
            before:w-full before:h-full before:scale-x-[1.05] before:scale-y-[1.1]  before:absolute before:top-[50%] before:left-[50%]
            before:-z-10 before:translate-x-[-50%] before:translate-y-[-50%] 
            before:from-[#7B00D6] before:to-[#FB695B] before:bg-gradient-to-br
            before:rounded-full
            hover:bg-white hover:text-black transition-all duration-200 px-4 rounded-full py-2 poppins-text"
                >
                  View Website
                </button>
              </a>
            </motion.div>
          </motion.div>
          <motion.div className="text-center py-16 poppins-text">
            <motion.p
              initial={{ y: "-60%", x: "-10%", opacity: 0, scale: 0.7 }}
              whileInView={{ y: 0, x: 0, opacity: 1, scale: 1 }}
              transition={{
                duration: 0.7,
                scale: {
                  type: "tween",
                  damping: 50,
                  stiffness: 200,
                  restDelta: 0.001,
                },
              }}
              className="text-3xl md:text-4xl font-semibold mb-5"
            >
              Our Location
            </motion.p>
            <motion.p
              initial={{ y: "60%", x: "10%", opacity: 0, scale: 0.7 }}
              whileInView={{ y: 0, x: 0, opacity: 1, scale: 1 }}
              transition={{
                duration: 0.7,
                scale: {
                  type: "tween",
                  damping: 50,
                  stiffness: 200,
                  restDelta: 0.001,
                },
              }}
              className="text-lg"
            >
              Our presence is all over the world but we have our <br />
              office setup in United Kingdom and India
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 1.3 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                scale: {
                  type: "tween",
                  damping: 50,
                  stiffness: 200,
                  restDelta: 0.001,
                },
              }}
              className="my-16"
            >
              <Image
                width={1920}
                height={789}
                src="/assets/background-image/our-location.png"
                alt="Location"
                className=""
              />
            </motion.div>
          </motion.div>
          <motion.div className="poppins-text w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto">
            <motion.p
              initial={{ y: "-60%", opacity: 0, scale: 0.7 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{
                duration: 0.7,
                scale: {
                  type: "tween",
                  damping: 50,
                  stiffness: 200,
                  restDelta: 0.001,
                },
              }}
              className="text-center text-2xl md:text-4xl font-semibold mb-10"
            >
              Visit our office in
            </motion.p>
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-24 py-20">
              <motion.div
                initial={{ y: "60%", x: "10%", opacity: 0, scale: 0.7 }}
                whileInView={{ y: 0, x: 0, opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.7,
                  scale: {
                    type: "tween",
                    damping: 50,
                    stiffness: 200,
                    restDelta: 0.001,
                  },
                }}
                className="flex flex-col md:flex-row md:text-left justify-center items-center md:items-start text-center gap-5 min-h-[200px]"
              >
                <div>
                  <Image
                    height={100}
                    width={100}
                    src="/assets/icons/UK-flag.svg"
                    alt="UK Flag"
                    className="min-h-[100px] min-w-[100px]"
                  />
                </div>
                <div className="">
                  <p className="text-4xl pt-5">UK Office</p>
                  <p className="">186 Malvern Avenue, Harrow, HA2 9HD, UK</p>
                  <div className="mt-5 flex justify-center md:justify-start">
                    <a
                      className="flex items-center gap-1 text-semibold text-blue-500"
                      href=""
                    >
                      Locate on map <GoLinkExternal />
                    </a>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ y: "-60%", x: "-10%", opacity: 0, scale: 0.7 }}
                whileInView={{ y: 0, x: 0, opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.7,
                  scale: {
                    type: "tween",
                    damping: 50,
                    stiffness: 200,
                    restDelta: 0.001,
                  },
                }}
                className="flex flex-col md:flex-row md:text-left justify-center items-center md:items-start text-center gap-5 min-h-[200px]"
              >
                <div>
                  <Image
                    height={100}
                    width={100}
                    src="/assets/icons/India-flag.svg"
                    alt="UK Flag"
                    className="min-h-[100px] min-w-[100px]"
                  />
                </div>
                <div className="">
                  <p className="text-4xl pt-3">India Office</p>
                  <p className="">
                    D/1602, OrchidSuburbia, Link Road, Kandivali West, Mumbai,
                    400067, India
                  </p>
                  <div className="mt-5 flex justify-center md:justify-start">
                    <a
                      className="flex items-center gap-1 text-semibold text-blue-500"
                      href=""
                    >
                      Locate on map <GoLinkExternal />
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default AboutUs;
