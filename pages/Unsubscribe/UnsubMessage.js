import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";

const UnsubMessage = () => {
  return (
    <>
      <Head>
        <title>MESSAGE - MingleWise</title>
      </Head>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 1.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.1,
            scale: {
              type: "spring",
              damping: 14,
              stiffness: 200,
              restDelta: 0.001,
            },
          }}
          className="min-h-[80vh] md:min-h-[60vh] xl:min-h-[56.5vh] flex flex-col items-center justify-center w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] mx-auto poppins-text overflow-hidden"
        >
          <p className="text-4xl font-semibold text-center">
            We’re sad to see you go
          </p>
          <p className="text-center mt-5">
            You have successfully unsubscribed from our newsletter and will no
            longer receive any emails from us. If you change your mind , you can
            <Link href="/" className="underline ml-1">
              subscribe back
            </Link>
          </p>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default UnsubMessage;
