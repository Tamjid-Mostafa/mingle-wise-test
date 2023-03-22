import Image from "next/image";
import React from "react";

const WhyMingleWise = () => {
  return (
    <div className="py-24">
      <p className="text-2xl md:text-[36px] font-semibold text-center pb-24">
        Why Create a profile on MingleWise ?
      </p>
      <div className="md:flex items-center container mx-auto gap-14">
        <div className="flex md:w-[60%]">
          <Image
            src="/assets/why-minglewise/phonegroup.png"
            alt="Image"
            width={1000}
            height={500}
          />
        </div>
        <div className="md:w-[40%] mt-10 md:mt-0">
          <div className="text-center md:text-left lg:w-[80%]">
            <p className="text-xl font-semibold">DATING PROFILE</p>
            <p className="text-lg">
              Find exciting people, meet in real or video dates & try your luck
              with speed dating!
            </p>
          </div>
          <div className="text-center md:text-left lg:w-[80%]">
            <p className="text-xl font-semibold mt-10">
              PROFESSIONAL NETWORKING PROFILE
            </p>
            <p className="text-lg">
              Find exciting people, meet in real or video dates & try your luck
              with speed dating!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyMingleWise;
