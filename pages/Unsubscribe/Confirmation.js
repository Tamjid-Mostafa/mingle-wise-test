import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AnimatePresence, motion } from "framer-motion";
import Head from "@/Head";
import { ColorRing } from "react-loader-spinner";

const Confirmation = ({ isVisible, onClose, reset, info, setInfo }) => {
  const [loading, setLoading] = useState(false);
  const Router = useRouter();
  if (!isVisible) return null;
  const handleOnClose = (e) => {
    if (e.target.id === "wrapper") {
      onClose();
    }
  };

  const handleConfirm = () => {
    console.log(info);
    setLoading(true);
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
          window.scroll({ top: 0, left: 0, behavior: "smooth" });
          toast.success("Successfully Unsubscribe");
          setInfo({});
          reset();
          Router.push("/Unsubscribe/UnsubMessage");
          setLoading(false);
          onClose();
        },
        (err) => {
          toast.error("Failed to unsubscribe");
          setLoading(false);
          setInfo({});
          reset();
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
                  {loading ? (
                    <>
                      <button
                        onClick={handleConfirm}
                        className="bg-gray-600 hover:bg-gray-500 active:bg-gray-700 py-2 px-4 rounded text-white poppins-text w-full sm:w-auto"
                        type="submit"
                      >
                        <div className="px-12">
                          <ColorRing
                            visible={true}
                            height="40"
                            width="40"
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
                        </div>
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={handleConfirm}
                        className="bg-gray-600 hover:bg-gray-500 active:bg-gray-700 py-3 px-4 rounded text-white poppins-text w-full sm:w-auto"
                        type="submit"
                      >
                        Yes, Unsubscribe
                      </button>
                    </>
                  )}
                </div>
                <button
                  onClick={handleNotConfirm}
                  className="bg-gradient-to-r from-[#9D0CD3] to-[#F95963] hover:from-[#F95963] hover:to-[#9D0CD3] poppins-text py-3 px-4 rounded text-white poppins-text w-full sm:w-auto mt-3 sm:mt-0"
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
