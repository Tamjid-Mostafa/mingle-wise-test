import { SUBSCRIPTION_TIRES } from "@/Data/QuickLink";
import { GoPrimitiveDot } from "react-icons/go";
import React from "react";
import Image from "next/image";
import { BsPinAngleFill } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";

const SubscriptionTires = () => {
  return (
    <>
      <Head>
        <title>SUBSCRIPTIONS - MingleWise</title>
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
          className="py-28 bg-[#FCFCFC] overflow-hidden"
        >
          <motion.p
            initial={{ opacity: 0, scale: 0.6, x: "-50%" }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 0.3,
              scale: {
                type: "spring",
                damping: 50,
                stiffness: 200,
                restDelta: 0.001,
              },
            }}
            className="text-2xl lg:text-3xl poppins-text font-semibold text-center pt-10"
          >
            Subscription Tiers at a glance
          </motion.p>
          <div className="hidden sm:block py-20">
            <table className="container mx-auto bg-white poppins-text shadow-md">
              <tr className="rounded-xl">
                <th className="py-3 text-start px-4 border-2">Features</th>
                <th className="py-3 border-2 bg-[#FCFCFC]">MingleWise</th>
                <th className="py-3 border-2 bg-[#F5F5F5]">
                  <div className="flex items-center justify-center md:gap-2">
                    <Image
                      className="bg-gradient-to-r from-[#8801E1]/50 to-[#5E06E1] rounded-full p-1 h-12 w-12"
                      height={50}
                      width={50}
                      src="/assets/logo/Icon2V1 1.svg"
                      alt="Mingle Elite"
                    />
                    <span>Mingle Elite</span>
                  </div>
                </th>
                <th className="bg-[#ECECEC] py-3 border-2">
                  <div className="flex items-center justify-center md:gap-2">
                    <Image
                      className="bg-[#2D1212] rounded-full p-3 h-12 w-12"
                      height={50}
                      width={50}
                      src="/assets/logo/Icon2V1 1 2.svg"
                      alt="Mingle Elite"
                    />
                    <span>Mingle Celeb</span>
                  </div>
                </th>
              </tr>
              {SUBSCRIPTION_TIRES.map((data, index) => (
                <tr key={index} className="border-2">
                  <td className=" py-3 px-4 border-2">{data?.concept}</td>
                  <td className=" py-3 px-4 border-2 bg-[#FCFCFC]">
                    {data?.mingleWise && (
                      <GoPrimitiveDot className="mx-auto text-4xl text-[#BEBEBE]" />
                    )}
                  </td>
                  <td className=" py-3 px-4 border-2 bg-[#F5F5F5] text-4xl text-[#7E02D8]">
                    {data?.mingleElite && (
                      <GoPrimitiveDot className="mx-auto" />
                    )}
                  </td>
                  <td className=" py-3 px-4 border-2 bg-[#ECECEC] text-4xl text-[#4A2E2E]">
                    {data?.mingleCeleb && (
                      <GoPrimitiveDot className="mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </table>
          </div>
          <div className="sm:hidden">
            <div className="mt-10 w-[90%] bg-white rounded-md mx-auto shadow">
              <p className="text-center text-xl font-semibold pt-2 poppins-text">
                Mingle Wise
              </p>
              <ul className="px-4 py-3 poppins-text">
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> Mingle Date &
                  Pro Profiles
                </li>
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> Match & chat
                </li>
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> Join events
                </li>
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> Virtual Dates &
                  Meetings
                </li>
              </ul>
            </div>
            <div className="mt-10 w-[90%] bg-white rounded-md mx-auto shadow">
              <div className="flex items-center justify-center gap-2 pt-4">
                <Image
                  className="bg-gradient-to-r from-[#8801E1]/50 to-[#5E06E1] rounded-full p-[.1rem] h-10 w-10"
                  height={50}
                  width={50}
                  src="/assets/logo/Icon2V1 1.svg"
                  alt="Mingle Elite"
                />
                <span className="text-xl poppins-text">Mingle Elite</span>
              </div>
              <ul className="px-4 py-3 poppins-text">
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> Mingle Date &
                  Pro Profiles
                </li>
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> Match & chat
                </li>
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> Join events
                </li>
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> Virtual Dates &
                  Meetings
                </li>
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> Plan Events
                </li>
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> No Time Limit
                </li>
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> Teleport
                </li>
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> See who likes
                  you
                </li>
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> No more Ads
                </li>
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> Profile Privacy
                </li>
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> Second look
                </li>
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> Rollback Swipes
                </li>
              </ul>
            </div>
            <div className="mt-10 w-[90%] bg-white rounded-md mx-auto shadow">
              <div className="flex items-center justify-center gap-2 pt-4">
                <Image
                  className="bg-[#2D1212] rounded-full p-2 h-10 w-10"
                  height={50}
                  width={50}
                  src="/assets/logo/Icon2V1 1 2.svg"
                  alt="Mingle Elite"
                />
                <span className="text-xl font-semibold poppins-text">
                  Mingle Celeb
                </span>
              </div>
              <ul className="px-4 py-3 poppins-text">
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> Mingle Date &
                  Pro Profiles
                </li>
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> Match & chat
                </li>
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> Join events
                </li>
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> Virtual Dates &
                  Meetings
                </li>
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> Plan Events
                </li>
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> No Time Limit
                </li>
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> Teleport
                </li>
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> See who likes
                  you
                </li>
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> No more Ads
                </li>
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> Profile Privacy
                </li>
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> Second look
                </li>
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> Rollback Swipes
                </li>
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> Advanced
                  Filters
                </li>
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> Discounts on
                  in-app purchases
                </li>
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> Priority Match
                </li>
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> Profile
                  Insights
                </li>
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> Concierge
                  Service
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default SubscriptionTires;
