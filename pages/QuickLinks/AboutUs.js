import Image from "next/image";
import React, { useContext } from "react";
import { StateContext } from "../_app";
import Map from "../../public/assets/background-image/FACTS & FIGURES SEC 1.png";
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";

const AboutUs = () => {
  const { setPageName } = useContext(StateContext);
  setPageName("");
  setPageName("ABOUT US");

  return (
    <>
      <Head>
        <title>ABOUT US - MingleWise</title>
      </Head>
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
          className="bg-white overflow-hidden"
        >
          <div className="bg-[#FCFCFC]">
            <div className="w-[95%] md:w-[90%] lg:w-[70%] mx-auto flex flex-col justify-center items-center min-h-[50vh] 2xl:min-h-[45vh] text-center pt-5 sm:pt-32 2xl:pt-20">
              <motion.p
                initial={{ opacity: 0, scale: 1.2 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  scale: {
                    type: "spring",
                    damping: 15,
                    stiffness: 200,
                    restDelta: 0.001,
                  },
                }}
                className="text-base sm:text-2xl md:text-3xl mt-20 sm:mt-0 poppins-text font-semibold"
              >
                MingleWise is a modern, innovative app that cuts through the
                noise & helps its users find, meet & develop meaningful
                connections using AI
              </motion.p>
              <motion.p
                initial={{ opacity: 0, scale: 1.2, y: "100%" }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  scale: {
                    type: "spring",
                    damping: 15,
                    stiffness: 200,
                    restDelta: 0.001,
                  },
                }}
                className="mt-5 text-justify sm:text-center md:w-[80%] w-[95%] mx-auto poppins-text"
              >
                We offer exciting features for dating, professional networking &
                events with an extra level of safety and peace of mind so no
                more catfishing, just real people looking for real connections.
                Our Mission is to bring people together, be a part of their
                daily lives by helping them build lasting relationships in an
                environment of trust & respect and create life-long memories
                along the way.
              </motion.p>
            </div>
          </div>
          <div className="w-[95%] md:w-[90%] lg:w-[60%] mx-auto flex flex-col justify-center min-h-[60vh] sm:min-h-[40vh] poppins-text py-10">
            <motion.p
              initial={{ opacity: 0, scale: 1.2, x: "40%" }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{
                duration: 0.4,
                scale: {
                  type: "spring",
                  damping: 15,
                  stiffness: 200,
                  restDelta: 0.001,
                },
              }}
              className="text-[#828282]"
            >
              MingleWise is an all AI based app and is a child of APP SYNERGIES.
              App SYNERGIES design and develop web and mobile applications for
              our clients worldwide, focusing on outstanding user experience.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, scale: 1.2, x: "-40%" }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{
                duration: 0.4,
                scale: {
                  type: "spring",
                  damping: 15,
                  stiffness: 200,
                  restDelta: 0.001,
                },
              }}
              className="pt-8 text-[#828282]"
            >
              A fast-growing SaaS-based start-up with a very talented and
              rapidly expanding team. We develop cutting-edge AI driven Apps. We
              put value at the heart of our process & focus on what&#39;s
              important to our users. This way, we can prove the value of our
              app idea before we begin development. We then build on this mobile
              strategy throughout discovery, design, development and
              optimization.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, scale: 1.2, y: "40%" }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.5,
                scale: {
                  type: "spring",
                  damping: 15,
                  stiffness: 200,
                  restDelta: 0.001,
                },
              }}
              className="pt-8 text-[#828282] font-semibold"
            >
              You can head over to App Synergies to know more about the company
              or if you would like to work with us.
            </motion.p>
          </div>
          <div className="bg-[#FCFCFC] py-14">
            <div className="xl:w-[70%] mx-auto poppins-text">
              <div className="px-2">
                <motion.p
                  initial={{ opacity: 0, scale: 1.3 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    scale: {
                      type: "spring",
                      damping: 15,
                      stiffness: 200,
                      restDelta: 0.001,
                    },
                  }}
                  className="text-center font-bold barlow text-2xl mt-10"
                >
                  Key Worldwide Locations
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, scale: 0.8, x: "30%" }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    scale: {
                      type: "spring",
                      damping: 15,
                      stiffness: 200,
                      restDelta: 0.001,
                    },
                  }}
                  className="leading-8 mt-5 text-[#828282] text-center"
                >
                  More than just an app, it’s about making deeper connections
                  and celebrating special moments with people who live in your
                  neighborhood or across oceans.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, scale: 1.3, x: "-30%" }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    scale: {
                      type: "spring",
                      damping: 15,
                      stiffness: 200,
                      restDelta: 0.001,
                    },
                  }}
                  className="leading-8 text-[#828282] mt-4 text-center"
                >
                  We have our headquarters based in London – UK, we will be
                  launching soon in United States, Europe & India on the Apple
                  App Store & Google Play Store. As a platform we will
                  continuously keep evolving & empowering people to develop
                  truly meaningful personal & professional relationships.
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 1.4 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  scale: {
                    type: "spring",
                    damping: 20,
                    stiffness: 200,
                    restDelta: 0.001,
                  },
                }}
              >
                <Image src={Map} alt="Map image" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default AboutUs;
