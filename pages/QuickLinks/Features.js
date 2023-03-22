import Image from "next/image";
import React, { useContext } from "react";
import Dating from "../../public/assets/features-card/dating.jpg";
import Networking from "../../public/assets/features-card/professioanl.jpg";
import Event from "../../public/assets/features-card/event.jpg";
import Secured from "../../public/assets/features-card/secured.jpg";
import { StateContext } from "../_app";

const Features = () => {
  const { setPageName } = useContext(StateContext);

  setPageName("");
  setPageName("FEATURES");

  return (
    <div className="bg-white pb-10 flex flex-col gap-10">
      <div className="flex items-center relative justify-end">
        <div className="bg-white absolute w-[40%] p-5 left-0 lg:left-20 xl:left-36 2xl:left-80 hidden sm:block">
          <p className="text-2xl barlow font-semibold">Dating</p>
          <p className="barlow">
            Find interesting & compatible people using AI. Participate in
            exciting speed dating sessions. Meet your matches in real or video
            dates. Book venues & plan your date.
          </p>
        </div>
        <div className="max-w-[900px]">
          <Image src={Dating} alt="Card Image" />
          <div className="block sm:hidden p-2">
            <p className="text-2xl barlow font-semibold">Dating</p>
            <p className="barlow">
              Find interesting & compatible people using AI. Participate in
              exciting speed dating sessions. Meet your matches in real or video
              dates. Book venues & plan your date.
            </p>
          </div>
        </div>
      </div>
      {/* Break */}
      <div className="flex items-center relative justify-start">
        <div className="max-w-[900px]">
          <Image src={Networking} alt="Card Image" />
          <div className="block sm:hidden p-2">
            <p className="text-2xl barlow font-semibold">
              Professional Networking
            </p>
            <p className="barlow">
              Grow your network by connecting & meeting like minded
              professionals. Find exciting job opportunities. Find co-founders,
              skilled employees & build your team
            </p>
          </div>
        </div>
        <div className="bg-white absolute w-[40%] p-5 right-0 lg:right-20 xl:right-36 2xl:right-80 hidden sm:block">
          <p className="text-2xl barlow font-semibold">
            Professional Networking
          </p>
          <p className="barlow">
            Grow your network by connecting & meeting like minded professionals.
            Find exciting job opportunities. Find co-founders, skilled employees
            & build your team
          </p>
        </div>
      </div>
      {/* Break */}
      <div className="flex items-center relative justify-end">
        <div className="bg-white absolute w-[40%] p-5 left-0 lg:left-20 xl:left-36 2xl:left-80 hidden sm:block">
          <p className="text-2xl barlow font-semibold">Events</p>
          <p className="barlow">
            Participate in interesting events or host & live stream your events
            to your network. Easily connect with fellow participants during or
            after the event.
          </p>
        </div>
        <div className="max-w-[900px]">
          <Image src={Event} alt="Card Image" />
          <div className="block sm:hidden p-2">
            <p className="text-2xl barlow font-semibold">Events</p>
            <p className="barlow">
              Participate in interesting events or host & live stream your
              events to your network. Easily connect with fellow participants
              during or after the event.
            </p>
          </div>
        </div>
      </div>
      {/* Break */}
      <div className="flex items-center relative justify-start">
        <div className="max-w-[900px]">
          <Image src={Secured} alt="Card Image" />
          <div className="block sm:hidden p-2">
            <p className="text-2xl barlow font-semibold">
              Verified & Compatible Matches
            </p>
            <p className="barlow">
              Profiles are verified by social media accounts, mobile numbers &
              photo verification using AI technology. Compatibility tests to
              match with people that are truly tailored to you.
            </p>
          </div>
        </div>
        <div className="bg-white absolute w-[40%] p-5 right-0 lg:right-20 xl:right-36 2xl:right-80 hidden sm:block">
          <p className="text-2xl barlow font-semibold">
            Verified & Compatible Matches
          </p>
          <p className="barlow">
            Profiles are verified by social media accounts, mobile numbers &
            photo verification using AI technology. Compatibility tests to match
            with people that are truly tailored to you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
