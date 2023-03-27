import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Confirmation from "./Confirmation";

const DataCollector = () => {
  const [showModal, setShowModal] = useState(false);
  const [info, setInfo] = useState({
    name: "",
    email: "",
  });
  const handleUserSubmission = (e) => {
    e.preventDefault();
    setShowModal(true);
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
        className="py-24 min-h-[70vh]"
      >
        <motion.div className="xl:w-[40%] mx-auto p-24 rounded mt-10 shadow-md">
          <form onSubmit={handleUserSubmission}>
            <div className="poppins-text flex flex-col">
              <label htmlFor="userName">Name</label>
              <input
                required
                onChange={(e) => setInfo({ ...info, name: e.target.value })}
                id="userName"
                type="text"
                value={info?.name}
                className="px-4 py-3 border-none bg-[#D9D9D9] rounded focus:outline-gray-400"
              />
            </div>
            <div className="poppins-text flex flex-col">
              <label htmlFor="userEmail">Email</label>
              <input
                required
                onChange={(e) => setInfo({ ...info, email: e.target.value })}
                id="userEmail"
                type="email"
                value={info?.email}
                className="px-4 py-3 border-none bg-[#D9D9D9] rounded focus:outline-gray-400"
              />
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
          handleUserSubmission={handleUserSubmission}
          info={info}
          setInfo={setInfo}
          isVisible={showModal}
          onClose={() => setShowModal(false)}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default DataCollector;
