import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import React from "react";

const CookiePolicy = () => {
  return (
    <>
      <Head>
        <title>COOKIE POLICY - MingleWise</title>
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
              Cookie Policy
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
              <p className="font-semibold mb-3">Introduction</p>
              <p>
                MingleWise is committed to protecting your privacy. We aim to
                provide trustworthy, industry-leading products and services so
                that you can focus on building meaningful connections. Our
                approach to privacy is to provide you with clear information
                about our data practices. That’s why we’ve tried to keep legal
                and technical jargon to a minimum.This Cookie Policy explains
                what cookies are, what types of cookies are placed on your
                device when you visit our website and how we use them. This
                Cookie Policy does not address how we deal with your personal
                information generally. To learn more about how we process your
                personal information, please see our Terms of use.
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
              <p className="font-semibold mb-3">What are Cookies?</p>
              <p>
                Cookies are small text files that are sent to or accessed from
                your web browser or your device’s memory. A cookie typically
                contains the name of the domain (internet location) from which
                the cookie originated, the “lifetime” of the cookie (i.e., when
                it expires) and a randomly generated unique number or similar
                identifier. A cookie also may contain information about your
                device, such as user settings, browsing history and activities
                conducted while using our services.
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
              <p className="font-semibold mb-3">
                Are there different types of Cookies?
              </p>
              <p className="mb-3">
                First-party and Third-party Cookies There are first-party
                cookies and third-party cookies. First-party cookies are placed
                on your device directly by us. For example, we use first-party
                cookies to adapt our website to your browser’s language
                preferences and to better understand your use of our website.
                Third-party cookies are placed on your device by our partners
                and service providers. For example, we use third-party cookies
                to measure user numbers on our website or to enable you to share
                content with others across social media platforms.
              </p>
              <p>
                Session and Persistent Cookies There are session cookies and
                persistent cookies. Session cookies only last until you close
                your browser. We use session cookies for a variety of reasons,
                including to learn more about your use of our website during one
                single browser session and to help you to use our website more
                efficiently. Persistent cookies have a longer lifespan and
                aren’t automatically deleted when you close your browser. These
                types of cookies are primarily used to help you quickly sign-in
                to our website again and for analytical purposes.
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
              <p className="font-semibold mb-3">
                What about other Tracking Technologies, like web beacons?
              </p>
              <p className="mb-3">
                Other technologies such as web beacons (also calls pixel tags or
                clear gifs), tracking URLs or software development kits (SDKs)
                are used for similar purposes. Web beacons are tiny graphics
                files that contain a unique identifier that enable us to
                recognise when someone has visited our service or opened an
                e-mail that we have sent them. Tracking URLs are custom
                generated links that help us understand where the traffic to our
                webpages comes from. SDKs are small pieces of code included in
                apps, which function like cookies and web beacons.
              </p>
              <p>
                For simplicity, we also refer to these technologies as “cookies”
                in this Cookie Policy.
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
              <p className="font-semibold mb-3">What do we use Cookies for?</p>
              <p>
                Like most providers of online services, we use cookies to
                provide, secure and improve our services, including by
                remembering your preferences, recognizing you when you visit our
                website and personalizing and tailoring ads to your interests.
                To accomplish these purposes, we also may link information from
                cookies with other personal information we hold about you.
              </p>
              <p>
                When you visit our website, some or all of the following types
                of cookies may be set on your device.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default CookiePolicy;
