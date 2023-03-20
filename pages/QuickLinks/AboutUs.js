import { ABOUT_US } from "@/Data/QuickLink";
import Image from "next/image";
import React, { useContext } from "react";
import { StateContext } from "../_app";
import Map from "../../public/assets/background-image/FACTS & FIGURES SEC 1.png";

const AboutUs = () => {
  const { setPageName } = useContext(StateContext);
  setPageName("");
  setPageName("ABOUT US");

  return (
    <div className="bg-white pb-10">
      <div className="xl:w-[70%] mx-auto text-center">
        <p className="barlow text-3xl">
          MingleWise is a modern, innovative app that cuts through the noise &
          helps its users find, meet & develop meaningful connections using AI
        </p>
        <p className="text-justify barlow mt-5">
          We offer exciting features for dating, professional networking &
          events with an extra level of safety and peace of mind so no more
          catfishing, just real people looking for real connections. Our Mission
          is to bring people together, be a part of their daily lives by helping
          them build lasting relationships in an environment of trust & respect
          and create life-long memories along the way.
        </p>
      </div>
      <hr className="my-10" />
      <p className="text-center text-2xl barlow font-bold">OUR VALUES</p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 container mx-auto gap-5">
        {ABOUT_US.map((data, index) => (
          <div
            key={index}
            className="shadow hover:shadow-md duration-200 ease-linear p-5 rounded"
          >
            <div className="max-h-[300px] overflow-hidden">
              <Image
                className="hover:scale-110 duration-500 ease-linear"
                src={data?.img}
                alt="Card Image"
              />
            </div>
            <p className="text-center mt-6 mb-2 text-xl font-bold">
              {data?.title}
            </p>
            <p className="leading-8 text-justify">{data?.info}</p>
          </div>
        ))}
      </div>
      <hr className="mt-10" />
      <div className="xl:w-[70%] mx-auto">
        <p className="text-center font-bold barlow text-2xl mt-10">
          Key Worldwide Locations
        </p>
        <p className="leading-8 barlow mt-5">
          More than just an app, it’s about making deeper connections and
          celebrating special moments with people who live in your neighborhood
          or across oceans.
        </p>
        <p className="leading-8 barlow">
          We have our headquarters based in London – UK, we will be launching
          soon in United States, Europe & India on the Apple App Store & Google
          Play Store. As a platform we will continuously keep evolving &
          empowering people to develop truly meaningful personal & professional
          relationships.
        </p>
        <Image src={Map} alt="Map image" />
      </div>
    </div>
  );
};

export default AboutUs;
