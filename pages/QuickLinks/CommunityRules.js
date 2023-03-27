import { COMMUNITY_RULES_DATA } from "@/Data/QuickLink";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const CommunityRules = () => {
  const [collapse, setCollapse] = useState(null);
  const toggleAccordion = (index) => {
    if (collapse === index) {
      return setCollapse(null);
    }
    setCollapse(index);
  };

  return (
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
        className="py-20 poppins-text w-[95%] md:w-[90%] lg:w-[70%] xl:w-[65%] mx-auto text-justify"
      >
        <motion.p
          initial={{ opacity: 0, scale: 1.2, x: "-60%" }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: 0.3,
            scale: {
              type: "spring",
              damping: 12,
              stiffness: 200,
              restDelta: 0.001,
            },
          }}
          className="text-2xl md:text-3xl font-semibold text-center py-10"
        >
          Community Rules
        </motion.p>
        <motion.div>
          <motion.p
            initial={{ opacity: 0, scale: 1.2, x: "60%" }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 0.3,
              scale: {
                type: "spring",
                damping: 12,
                stiffness: 200,
                restDelta: 0.001,
              },
            }}
            className="mb-4"
          >
            Effective Date: December 29, 2020
          </motion.p>
          <motion.p
            initial={{ opacity: 0, scale: 1.2, x: "60%" }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 0.3,
              scale: {
                type: "spring",
                damping: 12,
                stiffness: 200,
                restDelta: 0.001,
              },
            }}
            className="mb-5"
          >
            MingleWise is a safe place for you to express yourself, get to know
            new people and meet someone who can become your significant other.
            We build a community of people who respect other users and tolerate
            each other’s differences.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, scale: 1.2, x: "-60%" }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 0.3,
              scale: {
                type: "spring",
                damping: 12,
                stiffness: 200,
                restDelta: 0.001,
              },
            }}
            className=""
          >
            The following rules apply to your behavior as well as the content
            shared on MingleWise. Breaking any of them will result in account
            suspension.
          </motion.p>
        </motion.div>
        <div className="">
          <div className="min-h-[70vh] flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
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
              className="border rounded-xl"
            >
              {COMMUNITY_RULES_DATA.map((data, index) => (
                <div key={index} className="item">
                  <div className="title flex items-center justify-between px-4 py-5 cursor-pointer border-b-2 rounded-xl">
                    <h3 className="sm:text-xl font-semibold poppins-text ">
                      {data?.question}
                    </h3>
                    {collapse === index ? (
                      <motion.span
                        initial={{ rotate: 0 }}
                        whileTap={{ rotate: -180 }}
                        transition={{
                          duration: 0.5,
                          ease: "circOut",
                        }}
                      >
                        <AiOutlineMinus
                          onClick={() => toggleAccordion(index)}
                          className="text-2xl"
                        />
                      </motion.span>
                    ) : (
                      <motion.span
                        initial={{ rotate: 0 }}
                        whileTap={{ rotate: -180 }}
                        transition={{
                          duration: 0.5,
                          ease: "circOut",
                        }}
                      >
                        <AiOutlinePlus
                          onClick={() => toggleAccordion(index)}
                          className="text-2xl"
                        />
                      </motion.span>
                    )}
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: "-50%" }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      scale: {
                        type: "spring",
                        damping: 10,
                        stiffness: 100,
                        restDelta: 0.001,
                      },
                    }}
                    className={`${
                      collapse === index ? "" : "hidden"
                    } poppins-text px-4 py-5 border-b-2 rounded-xl`}
                  >
                    {data?.answer}
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CommunityRules;
