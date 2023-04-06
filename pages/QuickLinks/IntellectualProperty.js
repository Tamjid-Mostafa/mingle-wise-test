import React from "react";
import Head from "@/Head";
import { AnimatePresence, motion } from "framer-motion";
import { GoPrimitiveDot } from "react-icons/go";
const IntellectualProperty = () => {
  return (
    <div>
      <>
        <Head title={"Intellectual Property"} />
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
            className="py-20"
          >
            <motion.div className="poppins-text w-[95%] md:w-[90%] lg:w-[70%] xl:w-[65%] mx-auto">
              <motion.h2
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
                className="text-2xl md:text3xl font-semibold py-10 text-center"
              >
                Intellectual Property
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
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
                className="mb-10"
              >
                <div className="flex flex-col gap-5">
                  <div className="flex gap-5">
                    <span>
                      <GoPrimitiveDot className="text-md" />
                    </span>
                    <p>
                      All Content included on the Website, unless uploaded by
                      Users, is the property of AppSynergies Ltd, our affiliates
                      or other relevant third parties. In these terms and
                      conditions, Content means any text, graphics, images,
                      audio, video, software, data compilations, page layout,
                      underlying code and software and any other form of
                      information capable of being stored in a computer that
                      appears on or forms part of this Website, including any
                      such content uploaded by Users. By continuing to use the
                      Website you acknowledge that such Content is protected by
                      copyright, trademarks, database rights and other
                      intellectual property rights. Nothing on this site shall
                      be construed as granting, by implication, estoppel, or
                      otherwise, any license or right to use any trademark, logo
                      or service mark displayed on the site without the owner’s
                      prior written permission
                    </p>
                  </div>
                  <div className="flex gap-5">
                    <span>
                      <GoPrimitiveDot className="text-md" />
                    </span>
                    <p>
                      {" "}
                      You may, for your own personal, non-commercial use only,
                      do the following: Retrieve, display and view the Content
                      on a computer screen
                    </p>
                  </div>{" "}
                  <div className="flex gap-5">
                    <span>
                      <GoPrimitiveDot className="text-md" />
                    </span>
                    <p>
                      You must not otherwise reproduce, modify, copy, distribute
                      or use for commercial purposes any Content without the
                      written permission of AppSynergies Ltd.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 1.1 }}
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
                className="mb-10"
              >
                <p>
                  Below is a non-exhaustive list of trademarks owned by
                  AppSynergies Ltd related to the MingleWise brand.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
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
                className="mb-10"
              >
                <p className="mb-3">
                  You may not use the below marks without authorization from
                  AppSynergies Ltd. If granted authorization and you use the
                  below marks in publications distributed only in the United
                  States, United Kingdom & India include the appropriate ™ or ®
                  symbol on at least the first use and on those subsequent uses
                  where the marks appear prominently. For publications
                  distributed outside the United States, United Kingdom & India
                  use of the ™ notice symbol is acceptable. It is also
                  appropriate to use, instead of the trademark symbols, in the
                  forms listed below:
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 1.1 }}
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
                className="mb-10"
              >
                <p className="font-semibold mb-3">Sample trademark legends:</p>
                <div className="flex gap-5">
                  <span>
                    <GoPrimitiveDot className="text-md" />
                  </span>
                  <p>
                    {" "}
                    For registered trademarks: MingleWise is the exclusive
                    registered trademark of AppSynergies Ltd, and is used with
                    permission.
                  </p>
                </div>{" "}
                <div className="flex gap-5">
                  <span>
                    <GoPrimitiveDot className="text-md" />
                  </span>
                  <p>
                    {" "}
                    For unregistered trademarks: MingleWise is the exclusive
                    trademark of AppSynergies Ltd, and is used with permission.
                  </p>
                </div>{" "}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 1.1 }}
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
                className="mb-10"
              >
                <p className="font-semibold mb-3">MingleWise logo:</p>
                <p className="mb-3">
                  MingleWise logo also indicate that the logo is
                  copyright-protected. This can be done through either the
                  combination symbol “™&® MingleWise”, with Copyright [year of
                  first publication] AppSynergies Ltd. All rights reserved. Used
                  with permission. If you see a website or app that uses a
                  AppSynergies Ltd trademark inappropriately, we would like to
                  hear about it. Report inappropriate use of a AppSynergies Ltd
                  trademark to trademark@match.com.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </>
    </div>
  );
};

export default IntellectualProperty;
