import { IN_APP_FEATURES } from "@/Data/Home";
import Image from "next/image";
import React from "react";

const InAppFeatures = () => {
  return (
    <div className="py-20">
      <div className="text-center w-[90%] md:w-[70%] mx-auto">
        <p className="text-2xl md:text-[36px] font-semibold mb-14">
          In-app Features
        </p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 w-[90%] md:w-[90%] lg:w-[95%] xl:w-[70%] 2xl:w-[65%] mx-auto">
        {IN_APP_FEATURES.map((profile, index) => (
          <div key={index} className="p-10 mb-5">
            <Image
              className="w-20 h-20"
              height={30}
              width={30}
              src={profile?.logo}
              alt={profile?.title}
            />
            <div className="mt-3">
              <p className="text-xl font-semibold">{profile?.title}</p>
              <p className="text-justify mt-1">{profile?.info}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button
          className="bg-transparent text-white font-bold w-28 h-12 relative
            before:w-full before:h-full before:scale-x-[1.05] before:scale-y-[1.1]  before:absolute before:top-[50%] before:left-[50%]
            before:-z-10 before:translate-x-[-50%] before:translate-y-[-50%] 
            before:from-[#7B00D6] before:to-[#FB695B] before:bg-gradient-to-br
            before:rounded-full
            hover:bg-white hover:text-black transition-all duration-200 px-4 rounded-full py-2  hover:bg-primary hover:border-primary"
        >
          See All
        </button>
      </div>
    </div>
  );
};

export default InAppFeatures;
