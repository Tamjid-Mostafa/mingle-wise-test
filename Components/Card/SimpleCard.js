import Image from "next/image";
import React from "react";

const SimpleCard = ({ data }) => {
  return (
    <div
      className={`min-w-[303px] max-w-[400px] mx-auto relative shadow hover:shadow-md`}
    >
      <Image src={data?.image} alt="Card Image" />
      <div className="roboto card-hover min-h-[110px] px-2 pt-3">
        <div className="min-h-[120px] max-h-[120px]">
          <p className="text-xl font-semibold text-[#333333]">{data?.type}</p>
          <p className="mt-3 text-[#4F4F4F]">{data?.info}</p>
        </div>
        <div>
          <button className="font-semibold px-2 pt-2 pb-3 text-[#333333]">
            Know more &#8250;
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimpleCard;
