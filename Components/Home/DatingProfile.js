import { DATING_PROFILE } from "@/Data/Home";
import Image from "next/image";
import React from "react";

const DatingProfile = () => {
  return (
    <div className="py-20">
      <div className="text-center w-[90%] md:w-[70%] mx-auto">
        <p className="text-2xl md:text-3xl font-semibold poppins-text">
          DATING PROFILE FEATURES
        </p>
        <p className="mt-5 mb-7 poppins-text">
          Lorem ipsum dolor sit amet consectetur. Ac gravida vulputate malesuada
          nec tellus. Nibh sit proin egestas metus condimentum blandit. Elit sed
          interdum id egestas. At fringilla eleifend molestie nunc at lacus
          magna placerat.
        </p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 w-[90%] md:w-[90%] lg:w-[95%] xl:w-[70%] 2xl:w-[65%] mx-auto">
        {DATING_PROFILE.map((profile, index) => (
          <div key={index} className="p-10 mb-5">
            <Image
              className="w-20 h-20"
              height={30}
              width={30}
              src={profile?.logo}
              alt={profile?.title}
            />
            <div className="mt-3">
              <p className="text-[18px] font-semibold poppins-text">
                {profile?.title}
              </p>
              <p className="text-justify mt-1 lato">{profile?.info}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button
          className="bg-transparent text-white font-semibold w-28 h-12 relative
            before:w-full before:h-full before:scale-x-[1.05] before:scale-y-[1.1]  before:absolute before:top-[50%] before:left-[50%]
            before:-z-10 before:translate-x-[-50%] before:translate-y-[-50%] 
            before:from-[#7B00D6] before:to-[#FB695B] before:bg-gradient-to-br
            before:rounded-full
            hover:bg-white hover:text-black transition-all duration-200 px-4 rounded-full py-2 poppins-text"
        >
          See All
        </button>
      </div>
    </div>
  );
};

export default DatingProfile;
