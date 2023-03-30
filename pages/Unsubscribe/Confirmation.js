import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import { toast } from "react-hot-toast";
import { AnimatePresence, motion } from "framer-motion";
import Head from "@/Head";

const Confirmation = ({ isVisible, onClose, info, setInfo }) => {
  const Router = useRouter();
  if (!isVisible) return null;
  const handleOnClose = (e) => {
    if (e.target.id === "wrapper") {
      onClose();
    }
  };

  const handleConfirm = () => {
    axios
      .post(
        "https://us-central1-minglewise2019.cloudfunctions.net/A6_1_UnsubscribeEmailApi/unsubscribeEmail",
        {
          name: info?.name,
          email: info?.email,
        }
      )
      .then(
        (res) => {
          console.log(res);
          window.scroll({ top: 0, left: 0, behavior: "smooth" });
          setInfo({ name: "", email: "" });
          toast.success("Successfully Unsubscribe");
          Router.push("/Unsubscribe/UnsubMessage");
          onClose();
        },
        (err) => {
          toast.error("Failed to unsubscribe");
        }
      );
  };
  const handleNotConfirm = () => {
    onClose();
  };
  return (
    <>
      <Head title={"Confirmation"} />
      <AnimatePresence>
        <div
          id="wrapper"
          onClick={handleOnClose}
          className="fixed inset-0 bg-black bg-opacity-70 md:pt-6 md:px-5 pt-3 px-3 flex justify-center items-center z-[100] xl:pb-36"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
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
            className="xl:min-h-[30vh] xl:min-w-[30vw] p-10 bg-white rounded-xl flex justify-center items-center"
          >
            <div>
              <div className="flex flex-col text-center py-10">
                <p className="text-2xl font-semibold text-gray-600 mb-1">
                  Are you sure you would like to unsubscribe?
                </p>
                <p>You are currently subscribed with the address:</p>
                <p className="font-semibold">{info?.email}</p>
              </div>
              <div className="sm:flex justify-between px-10">
                <div>
                  <button
                    onClick={handleConfirm}
                    className="bg-gray-600 py-3 px-4 rounded text-white poppins-text w-full sm:w-auto "
                    type="submit"
                  >
                    Yes, Unsubscribe
                  </button>
                </div>
                <button
                  onClick={handleNotConfirm}
                  className="bg-gradient-to-r from-[#9D0CD3] to-[#F95963] py-3 px-4 rounded text-white poppins-text w-full sm:w-auto mt-3 sm:mt-0"
                  type="submit"
                >
                  No, Not Yet
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default Confirmation;
