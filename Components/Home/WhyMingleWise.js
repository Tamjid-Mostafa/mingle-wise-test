import { WHY_MINGLE_WISE } from "@/Data/Home";
import React from "react";
import SimpleCard from "../Card/SimpleCard";

const WhyMingleWise = () => {
  return (
    <div className="container mx-auto mb-28">
      <p className="text-5xl text-center my-20">WHY MINGLEWISE?</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-center">
        {WHY_MINGLE_WISE.map((data, index) => (
          <SimpleCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default WhyMingleWise;
