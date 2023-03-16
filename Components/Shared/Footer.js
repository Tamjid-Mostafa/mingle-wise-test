import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div>
        <Image />
        <p className="text-white relative">
          <span className="text-4xl md:text-5xl xl:text-7xl header-font-extra-light tracking-widest">
            MingleWise
          </span>
          <span className="absolute text-[10px] xl:text-xs min-w-[16px] min-h-[16px] xl:min-w-[18px] xl:min-h-[18px] text-center">
            TM
          </span>
        </p>
        <p className="text-white header-font-regular text-base md:text-xl sm:tracking-widest mt-4">
          Dating | Networking | Events
        </p>
      </div>
    </div>
  );
};

export default Footer;
