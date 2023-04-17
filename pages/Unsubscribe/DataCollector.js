import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Confirmation from "./Confirmation";
import Head from "@/Head";
import { useForm } from "react-hook-form";

const DataCollector = () => {
  const [showModal, setShowModal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [info, setInfo] = useState({});
  const onSubmit = (data) => {
    setInfo(data);
    setShowModal(true);
  };
  return (
    <>
      <Head title={"Unsubscribe"} />
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
          className="py-24 min-h-[70vh]"
        >
          <motion.div className="xl:w-[40%] mx-auto p-24 rounded mt-10 shadow-md">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="poppins-text flex flex-col">
                <label htmlFor="userName">Name*</label>
                <input
                  {...register("name", {
                    required: "Name is required",
                    maxLength: {
                      value: 15,
                      message: "must be max 10 characters",
                    },
                  })}
                  id="userName"
                  type="text"
                  className="border-2 focus:outline-gray-400 px-2 py-2 rounded-md w-full poppins-text"
                />
                {errors.name && (
                  <p className="text-red-500" role="alert">
                    {errors.name?.message}
                  </p>
                )}
              </div>
              <div className="poppins-text flex flex-col">
                <label htmlFor="userEmail">Email*</label>
                <input
                  {...register("email", {
                    required: "Email Address is required",
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Please enter a valid email",
                    },
                  })}
                  id="userEmail"
                  type="email"
                  className="border-2 focus:outline-gray-400 px-2 py-2 rounded-md w-full poppins-text"
                />
                {errors.email && (
                  <p className="text-red-500" role="alert">
                    {errors.email?.message}
                  </p>
                )}
              </div>
              <div className="text-center">
                <button
                  className="bg-transparent text-white font-semibold w-[96%] h-12 relative
          before:w-full before:h-full before:scale-x-[1.05] before:scale-y-[1.1]  before:absolute before:top-[50%] before:left-[50%]
          before:-z-10 before:translate-x-[-50%] before:translate-y-[-50%] 
          before:from-[#7B00D6] before:to-[#FB695B] before:bg-gradient-to-br
          before:rounded-md
          hover:bg-white hover:text-black transition-all duration-200 px-4 rounded-md py-2 poppins-text mt-5"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
              <motion.p className="text-center font-semibold text-gray-400 mt-3">
                If you unsubscribe, you will stop receiving emails from us
              </motion.p>
            </form>
          </motion.div>

          <Confirmation
            info={info}
            setInfo={setInfo}
            reset={reset}
            isVisible={showModal}
            onClose={() => setShowModal(false)}
          />
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default DataCollector;
