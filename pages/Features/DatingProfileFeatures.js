import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Head from "@/Head";

const DatingProfileFeatures = () => {
  return (
    <>
      <Head title={"Dating Profile Features"} />
      <AnimatePresence>
        <div className="overflow-hidden">
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
            className="py-20 w-[95%] md:w-[90%] lg:w-[70%] xl:w-[65%] mx-auto"
          >
            <motion.div className="md:flex items-center md:gap-20 py-10">
              <motion.div
                initial={{ opacity: 0, scale: 1.4 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  scale: {
                    type: "spring",
                    damping: 10,
                    stiffness: 200,
                    restDelta: 0.001,
                  },
                }}
                className="poppins-text flex flex-col justify-center md:w-[70%] text-center md:text-left"
              >
                <motion.p className="text-2xl md:text-3xl font-semibold mb-2">
                  DATING PROFILE FEATURES
                </motion.p>
                <motion.p className="text-[#828282] text-justify">
                  We offer exciting features for dating, professional networking
                  & events with an extra level of safety and peace of mind so no
                  more catfishing, just real people looking for real
                  connections. Our Mission is to bring people together, be a
                  part of their daily lives by helping them build lasting
                  relationships in an environment of trust & respect and create
                  life-long memories along the way.
                </motion.p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  scale: {
                    type: "spring",
                    damping: 10,
                    stiffness: 200,
                    restDelta: 0.001,
                  },
                }}
                className="w-full flex flex-col items-center md:block md:w-[30%]"
              >
                <Image
                  className=""
                  width={498}
                  height={548}
                  src="/assets/features/dating_profile/dating_profile.svg"
                  alt="Dating Profile Features"
                />
              </motion.div>
            </motion.div>

            <motion.div className="mt-10 flex flex-col gap-24">
              {/* Panel - 1 */}
              <motion.div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-5 lg:gap-8 xl:gap-8 2xl:gap-12">
                <motion.div
                  initial={{ opacity: 0, scale: 1.1, x: "-40%" }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    scale: {
                      type: "spring",
                      damping: 10,
                      stiffness: 200,
                      restDelta: 0.001,
                    },
                  }}
                  style={{ boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)" }}
                  className="md:w-[60%] p-7 rounded-md"
                >
                  <motion.div className="flex gap-3 items-center">
                    <Image
                      width={47}
                      height={44}
                      src="/assets/features/dating_profile/events_small.svg"
                      alt="Event Logo"
                    />
                    <motion.p className="text-2xl md:text-3xl font-semibold">
                      Events
                    </motion.p>
                  </motion.div>
                  <motion.p className="poppins-text text-justify mt-3">
                    An improved & easier way of communication with the Parents &
                    Students allowing to put forward the goodwill of schools at
                    large.
                  </motion.p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 1.1, x: "40%" }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    scale: {
                      type: "spring",
                      damping: 10,
                      stiffness: 200,
                      restDelta: 0.001,
                    },
                  }}
                  className="md:w-[40%]"
                >
                  <Image
                    height={600}
                    width={545.67}
                    src="/assets/features/dating_profile/events.svg"
                    alt="Events"
                  />
                </motion.div>
              </motion.div>
              {/* Panel - 2 */}
              <motion.div className="flex flex-col-reverse md:flex-row justify-center items-center gap-10 md:gap-5 lg:gap-8 xl:gap-8 2xl:gap-12">
                <motion.div
                  initial={{ opacity: 0, scale: 1.1, y: "-50%" }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    scale: {
                      type: "spring",
                      damping: 10,
                      stiffness: 200,
                      restDelta: 0.001,
                    },
                  }}
                  className="md:w-[40%]"
                >
                  <Image
                    height={600}
                    width={545.67}
                    src="/assets/features/dating_profile/explore.svg"
                    alt="Events"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 1.1, y: "50%" }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    scale: {
                      type: "spring",
                      damping: 10,
                      stiffness: 200,
                      restDelta: 0.001,
                    },
                  }}
                  style={{ boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)" }}
                  className="md:w-[60%] p-7 rounded-md"
                >
                  <motion.div className="flex gap-3 items-center">
                    <Image
                      width={47}
                      height={44}
                      src="/assets/features/dating_profile/explore_small.svg"
                      alt="Event Logo"
                    />
                    <motion.p className="text-2xl md:text-3xl font-semibold">
                      Explore
                    </motion.p>
                  </motion.div>
                  <motion.p className="poppins-text text-justify mt-3">
                    An improved & easier way of communication with the Parents &
                    Students allowing to put forward the goodwill of schools at
                    large.
                  </motion.p>
                </motion.div>
              </motion.div>
              {/* Panel - 3 */}
              <motion.div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-5 lg:gap-8 xl:gap-8 2xl:gap-12">
                <motion.div
                  initial={{ opacity: 0, scale: 1.1, y: "50%" }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    scale: {
                      type: "spring",
                      damping: 10,
                      stiffness: 200,
                      restDelta: 0.001,
                    },
                  }}
                  style={{ boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)" }}
                  className="md:w-[60%] p-7 rounded-md"
                >
                  <motion.div className="flex gap-3 items-center">
                    <Image
                      width={47}
                      height={44}
                      src="/assets/features/dating_profile/mingle_instant_small.svg"
                      alt="Event Logo"
                    />
                    <motion.p className="text-2xl md:text-3xl font-semibold">
                      Mingle Instant
                    </motion.p>
                  </motion.div>
                  <motion.p className="poppins-text text-justify mt-3">
                    An improved & easier way of communication with the Parents &
                    Students allowing to put forward the goodwill of schools at
                    large.
                  </motion.p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 1.1, y: "-50%" }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    scale: {
                      type: "spring",
                      damping: 10,
                      stiffness: 200,
                      restDelta: 0.001,
                    },
                  }}
                  className="md:w-[40%]"
                >
                  <Image
                    className="md:ml-auto"
                    height={613}
                    width={304}
                    src="/assets/features/dating_profile/mingle_instant.svg"
                    alt="Events"
                  />
                </motion.div>
              </motion.div>
              {/* Panel - 4 */}
              <motion.div className="flex flex-col-reverse md:flex-row justify-center items-center gap-10 md:gap-5 lg:gap-8 xl:gap-8 2xl:gap-12">
                <motion.div
                  initial={{ opacity: 0, scale: 1.4 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.7,
                    scale: {
                      type: "spring",
                      damping: 14,
                      stiffness: 200,
                      restDelta: 0.001,
                    },
                  }}
                  className="md:w-[40%]"
                >
                  <Image
                    height={600}
                    width={545.67}
                    src="/assets/features/dating_profile/feed.svg"
                    alt="Events"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.7,
                    scale: {
                      type: "spring",
                      damping: 14,
                      stiffness: 200,
                      restDelta: 0.001,
                    },
                  }}
                  style={{ boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)" }}
                  className="md:w-[60%] p-7 rounded-md"
                >
                  <motion.div className="flex gap-3 items-center">
                    <Image
                      width={47}
                      height={44}
                      src="/assets/features/dating_profile/feed_small.svg"
                      alt="Event Logo"
                    />
                    <motion.p className="text-2xl md:text-3xl font-semibold">
                      Feed
                    </motion.p>
                  </motion.div>
                  <motion.p className="poppins-text text-justify mt-3">
                    An improved & easier way of communication with the Parents &
                    Students allowing to put forward the goodwill of schools at
                    large.
                  </motion.p>
                </motion.div>
              </motion.div>
              {/* Panel - 5 */}
              <motion.div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-5 lg:gap-8 xl:gap-8 2xl:gap-12">
                <motion.div
                  initial={{ opacity: 0, scale: 1.1, x: "-50%" }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    scale: {
                      type: "spring",
                      damping: 10,
                      stiffness: 200,
                      restDelta: 0.001,
                    },
                  }}
                  style={{ boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)" }}
                  className="md:w-[60%] p-7 rounded-md"
                >
                  <motion.div className="flex gap-3 items-center">
                    <Image
                      width={47}
                      height={44}
                      src="/assets/features/dating_profile/games_small.svg"
                      alt="Event Logo"
                    />
                    <motion.p className="text-2xl md:text-3xl font-semibold">
                      Games
                    </motion.p>
                  </motion.div>
                  <motion.p className="poppins-text text-justify mt-3">
                    An improved & easier way of communication with the Parents &
                    Students allowing to put forward the goodwill of schools at
                    large.
                  </motion.p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 1.1, x: "50%" }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    scale: {
                      type: "spring",
                      damping: 10,
                      stiffness: 200,
                      restDelta: 0.001,
                    },
                  }}
                  className="md:w-[40%]"
                >
                  <Image
                    className="md:ml-auto"
                    height={613.14}
                    width={304.38}
                    src="/assets/features/dating_profile/games.svg"
                    alt="Events"
                  />
                </motion.div>
              </motion.div>
              {/* Panel - 6 */}
              <motion.div className="flex flex-col-reverse md:flex-row justify-center items-center gap-10 md:gap-5 lg:gap-8 xl:gap-8 2xl:gap-12">
                <motion.div
                  initial={{ opacity: 0, scale: 1.1, x: "-50%" }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    scale: {
                      type: "spring",
                      damping: 10,
                      stiffness: 200,
                      restDelta: 0.001,
                    },
                  }}
                  className="md:w-[40%]"
                >
                  <Image
                    height={600}
                    width={545.67}
                    src="/assets/features/dating_profile/chats.svg"
                    alt="Events"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 1.1, x: "-50%" }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    scale: {
                      type: "spring",
                      damping: 10,
                      stiffness: 200,
                      restDelta: 0.001,
                    },
                  }}
                  style={{ boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)" }}
                  className="md:w-[60%] p-7 rounded-md"
                >
                  <motion.div className="flex gap-3 items-center">
                    <Image
                      width={47}
                      height={44}
                      src="/assets/features/dating_profile/chats_small.svg"
                      alt="Event Logo"
                    />
                    <motion.p className="text-2xl md:text-3xl font-semibold">
                      Chats
                    </motion.p>
                  </motion.div>
                  <motion.p className="poppins-text text-justify mt-3">
                    An improved & easier way of communication with the Parents &
                    Students allowing to put forward the goodwill of schools at
                    large.
                  </motion.p>
                </motion.div>
              </motion.div>
              {/* Panel - 7 */}
              <motion.div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-5 lg:gap-8 xl:gap-8 2xl:gap-12">
                <motion.div
                  initial={{ opacity: 0, scale: 1.1, x: "50%" }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    scale: {
                      type: "spring",
                      damping: 10,
                      stiffness: 200,
                      restDelta: 0.001,
                    },
                  }}
                  style={{ boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)" }}
                  className="md:w-[60%] p-7 rounded-md"
                >
                  <motion.div className="flex gap-3 items-center">
                    <Image
                      width={47}
                      height={44}
                      src="/assets/features/dating_profile/speed_dating_small.svg"
                      alt="Event Logo"
                    />
                    <motion.p className="text-2xl md:text-3xl font-semibold">
                      Speed Dating
                    </motion.p>
                  </motion.div>
                  <motion.p className="poppins-text text-justify mt-3">
                    An improved & easier way of communication with the Parents &
                    Students allowing to put forward the goodwill of schools at
                    large.
                  </motion.p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 1.1, x: "50%" }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    scale: {
                      type: "spring",
                      damping: 10,
                      stiffness: 200,
                      restDelta: 0.001,
                    },
                  }}
                  className="md:w-[40%]"
                >
                  <Image
                    height={600}
                    width={545.67}
                    src="/assets/features/dating_profile/speed_dating.svg"
                    alt="Events"
                  />
                </motion.div>
              </motion.div>
              {/* Panel - 8 */}
              <motion.div className="flex flex-col-reverse md:flex-row justify-center items-center gap-10 md:gap-5 lg:gap-8 xl:gap-8 2xl:gap-12">
                <motion.div
                  initial={{ opacity: 0, scale: 1.1, y: "-50%" }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    scale: {
                      type: "spring",
                      damping: 10,
                      stiffness: 200,
                      restDelta: 0.001,
                    },
                  }}
                  className="md:w-[40%]"
                >
                  <Image
                    className="md:mx-auto"
                    height={614.58}
                    width={304.38}
                    src="/assets/features/dating_profile/m_coins.svg"
                    alt="Events"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 1.1, y: "50%" }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    scale: {
                      type: "spring",
                      damping: 10,
                      stiffness: 200,
                      restDelta: 0.001,
                    },
                  }}
                  style={{ boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)" }}
                  className="md:w-[60%] p-7 rounded-md"
                >
                  <motion.div className="flex gap-3 items-center">
                    <Image
                      width={47}
                      height={44}
                      src="/assets/features/dating_profile/events_small.svg"
                      alt="Event Logo"
                    />
                    <motion.p className="text-2xl md:text-3xl font-semibold">
                      Events
                    </motion.p>
                  </motion.div>
                  <motion.p className="poppins-text text-justify mt-3">
                    An improved & easier way of communication with the Parents &
                    Students allowing to put forward the goodwill of schools at
                    large.
                  </motion.p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default DatingProfileFeatures;
