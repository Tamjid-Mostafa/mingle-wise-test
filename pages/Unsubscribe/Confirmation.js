import React from "react";

const Confirmation = ({ isVisible, onClose, info, setConfirmation }) => {
  if (!isVisible) return null;
  const handleOnClose = (e) => {
    if (e.target.id === "wrapper") {
      setConfirmation(false);
      onClose();
    }
  };
  return (
    <div
      id="wrapper"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-70 md:pt-6 md:px-5 pt-3 px-3 flex justify-center items-center z-[100] pb-36"
    >
      <div className="min-h-[30vh] min-w-[30vw] p-10 bg-white rounded-xl flex justify-center items-center">
        <div>
          <div className="flex flex-col text-center py-10">
            <p className="text-2xl font-semibold text-gray-600 mb-1">
              Are you sure you would like to unsubscribe?
            </p>
            <p>You are currently subscribed with the address:</p>
            <p className="font-semibold">{info?.email}</p>
          </div>
          <div className="flex justify-between px-10">
            <div>
              <button
                onClick={() => {
                  setConfirmation(true), onClose();
                }}
                className="bg-gray-600 py-3 px-4 rounded text-white poppins-text"
                type="submit"
              >
                Yes, Unsubscribe
              </button>
            </div>
            <button
              onClick={() => {
                setConfirmation(false), onClose();
              }}
              className="bg-gradient-to-r from-[#9D0CD3] to-[#F95963] py-3 px-4 rounded text-white poppins-text"
              type="submit"
            >
              No, Not Yet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
