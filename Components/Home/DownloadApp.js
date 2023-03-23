import Image from "next/image";
import React from "react";

const DownloadApp = () => {
  return (
    <div className="py-24">
      <div className="flex md:flex-row flex-col-reverse items-center container mx-auto gap-14">
        <div className="md:w-[40%] mt-2 md:mt-0">
          <div className="text-center md:text-left">
            <p className="text-6xl font-semibold mt-10">Download the App</p>
            <p className="text-lg mt-5">
              Lorem ipsum dolor sit amet consectetur. Imperdiet elementum mattis
              tristique velit enim parturient. Morbi leo mi at amet tempus. Leo
              ante lorem cursus tristique. Nulla urna faucibus mauris tristique
              elementum mauris platea.
            </p>
            <div className="flex flex-col md:flex-col lg:flex-col xl:flex-row gap-5 mt-5 lg:mt-32 justify-center items-center md:items-start">
              <Image
                height={100}
                width={200}
                className=""
                src="/assets/icons/available_on_both_stores_generated 1.svg"
                alt="Play store"
              />
              <Image
                height={100}
                width={200}
                className=""
                src="/assets/icons/available_on_both_stores_generated 2.svg"
                alt="App store"
              />
            </div>
          </div>
        </div>
        <div className="flex md:w-[60%]">
          <Image
            src="/assets/why-minglewise/phone-group-2.png"
            alt="Image"
            width={1000}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
