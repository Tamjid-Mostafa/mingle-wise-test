import React, { useState } from "react";
import { ColorRing } from "react-loader-spinner";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { toast } from "react-hot-toast";
import Image from "next/image";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleOnSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    // console.log(userData);
    // console.log({
    //   name: userData?.name,
    //   email: userData?.email,
    //   message: userData,
    // });
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
        // console.log(res);
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
    <div className="min-h-[100vh] flex justify-center items-center">
      <div className="w-[95%] md:w-[90%] lg:w-[70%] xl:w-[60%] mx-auto">
        <p className="text-2xl md:text-4xl font-semibold poppins-text relative text-center md:text-left flex flex-col gap-1 md:gap-4 mb-12">
          <span>
            Love to hear from you, <br />
          </span>
          <span> Get in touch 👋</span>
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
    </div>
  );
};

export default ContactUs;
