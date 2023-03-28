import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Image
      className="cursor-pointer"
      width={60}
      height={60}
      src="/assets/logo/mingle.png"
      alt="logo"
    />
  );
};

export default Logo;
