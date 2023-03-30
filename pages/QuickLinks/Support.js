import { SUPPORT_DATA } from "@/Data/QuickLink";
import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import Head from "@/Head";
import axios from "axios";
import { toast } from "react-hot-toast";
import { ColorRing } from "react-loader-spinner";
const Support = () => {
  const [loading, setLoading] = useState(false);
  const [collapse, setCollapse] = useState(null);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const toggleAccordion = (index) => {
    if (collapse === index) {
      return setCollapse(null);
    }
    setCollapse(index);
  };

  const handleOnSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    console.log(userData);
    console.log({
      name: userData?.name,
      email: userData?.email,
      message: userData,
    });
    axios
      .post(
        "https://us-central1-minglewise2019.cloudfunctions.net/A6_2_ContactUsWebsiteApi/contactUsWebsite",
        {
          name: userData?.name,
          email: userData?.email,
          message: userData?.message,
        }
      )
      .then((res) => {
        console.log(res);
        toast.success("Successfully submitted");
        setUserData({
          name: "",
          email: "",
          message: "",
        });
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err.message);
      });
  };

  return (
    <>
      <Head title={"Support"} />
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
          className="py-28 overflow-hidden"
        >
          <div className="poppins-text w-[95%] md:w-[90%] lg:w-[70%] xl:w-[65%] mx-auto">
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
              className="text-2xl md:text-3xl text-center"
            >
              FAQ & Support
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
              className="text-center mt-3"
            >
              Find answers to the most popular questions about MingleWise here.
              If you are facing any issue using the app, contact us at
              support@minglewise.com or via the form below. We are here to help
              you 24/7.
            </motion.p>
          </div>
          <div className="wrapper w-[95%] md:w-[90%] lg:w-[70%] xl:w-[60%] mx-auto">
            <div className="min-h-[60vh] flex flex-col justify-center">
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
                {SUPPORT_DATA.map((data, index) => (
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
          <div className="w-[95%] md:w-[90%] lg:w-[70%] xl:w-[60%] mx-auto">
            <p className="text-xl font-semibold mb-10 poppins-text">
              Contact Us
            </p>
            <form onSubmit={handleOnSubmit}>
              <motion.div
                initial={{ opacity: 0, scale: 1.4 }}
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
                className="flex flex-col md:flex-row gap-3 mb-3"
              >
                <div className="flex flex-col w-full">
                  <label htmlFor="name" className="poppins-text m-1">
                    Name
                  </label>
                  <input
                    required
                    id="name"
                    className="border-2 focus:outline-gray-400 px-2 py-2 rounded-md w-full poppins-text"
                    type="text"
                    onChange={(e) =>
                      setUserData({ ...userData, name: e.target.value })
                    }
                    value={userData?.name}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="email" className="poppins-text m-1">
                    Email
                  </label>
                  <input
                    required
                    id="email"
                    className="border-2 focus:outline-gray-400 px-2 py-2 rounded-md w-full poppins-text"
                    type="email"
                    onChange={(e) =>
                      setUserData({ ...userData, email: e.target.value })
                    }
                    value={userData?.email}
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 1.4 }}
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
              >
                <div className="flex flex-col w-full">
                  <label htmlFor="message" className="poppins-text m-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    className="border-2 focus:outline-gray-400 px-2 py-2 rounded-md w-full poppins-text h-36"
                    type="text"
                    onChange={(e) =>
                      setUserData({ ...userData, message: e.target.value })
                    }
                    value={userData?.message}
                  />
                </div>
              </motion.div>
              <div className="flex justify-center">
                <button
                  className="bg-transparent text-white font-semibold w-44 h-12 relative
          before:w-full before:h-full before:scale-x-[1.05] before:scale-y-[1.1]  before:absolute before:top-[50%] before:left-[50%]
          before:-z-10 before:translate-x-[-50%] before:translate-y-[-50%] 
          before:from-[#7B00D6] before:to-[#FB695B] before:bg-gradient-to-br
          before:rounded-md
          hover:bg-white hover:text-black transition-all duration-200 px-4 rounded-md py-2 poppins-text mt-5 flex justify-center items-center"
                  type="submit"
                >
                  {loading ? (
                    <>
                      <ColorRing
                        visible={true}
                        height="50"
                        width="50"
                        ariaLabel="blocks-loading"
                        wrapperStyle={{}}
                        wrapperClass="blocks-wrapper"
                        colors={[
                          "#e15b64",
                          "#f47e60",
                          "#f8b26a",
                          "#abbd81",
                          "#849b87",
                        ]}
                      />
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Support;
