import Image from "next/image";
import Link from "next/link";
import React from "react";

const WhiteBackgroundLogo = () => {
  return (
    <div className="bg-white rounded-full">
      <Image
        className="cursor-pointer"
        width={60}
        height={60}
        src="/assets/logo/mingle.png"
        alt="logo"
      />
    </div>
  );
};

export default WhiteBackgroundLogo;
