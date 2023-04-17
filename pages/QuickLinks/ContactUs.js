import React, { useState } from "react";
import { ColorRing } from "react-loader-spinner";
import axios from "axios";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    axios
      .post(
        "https://us-central1-minglewise2019.cloudfunctions.net/A6_2_ContactUsWebsiteApi/contactUsWebsite",
        {
          name: data?.name,
          email: data?.email,
          message: data?.message,
        }
      )
      .then((res) => {
        toast.success("Successfully submitted");
        reset();
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
        <form onSubmit={handleSubmit(onSubmit)}>
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
                Name*
              </label>
              <input
                {...register("name", {
                  required: "Name is required",
                  maxLength: {
                    value: 15,
                    message: "must be max 10 characters",
                  },
                })}
                id="name"
                className="border-2 focus:outline-gray-400 px-2 py-2 rounded-md w-full poppins-text"
                type="text"
              />
              {errors.name && (
                <p className="text-red-500" role="alert">
                  {errors.name?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="email" className="poppins-text m-1">
                Email*
              </label>
              <input
                {...register("email", {
                  required: "Email Address is required",
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Please enter a valid email",
                  },
                })}
                id="email"
                className="border-2 focus:outline-gray-400 px-2 py-2 rounded-md w-full poppins-text"
                type="email"
              />
              {errors.email && (
                <p className="text-red-500" role="alert">
                  {errors.email?.message}
                </p>
              )}
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
                Your Message*
              </label>
              <textarea
                {...register("message", {
                  required: "Message is required",
                })}
                name="message"
                id="message"
                className="border-2 focus:outline-gray-400 px-2 py-2 rounded-md w-full poppins-text h-36"
                type="text"
              />
              {errors.message && (
                <p className="text-red-500" role="alert">
                  {errors.message?.message}
                </p>
              )}
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
