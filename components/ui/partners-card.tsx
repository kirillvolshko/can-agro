"use client";

import Image from "next/image";
import { Button } from "./button";
import { useState } from "react";

interface PropsCard {
  srcLogo: string;
  srcProduct: string;
  title: string;
  description: string;
}

const PartnersCard = ({ data }: { data: PropsCard }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col border border-[#DEDFE1] rounded-[2px] relative hover:z-10 min-h-[512px] md:min-h-[732px] cursor-pointer hover:shadow-xl hover:bg-white bg-[#FBFBFD]">
      <div className="p-5 md:flex flex-col justify-center">
        <Image
          src={"/partnersHome" + data.srcLogo}
          alt={data.title}
          width={388}
          height={117}
          className="w-[388px] h-[117px] md:w-[420px] md:h-[120px] object-contain"
        />
        <Image
          src={"/partnersHome" + data.srcProduct}
          alt={data.title}
          width={388}
          height={200}
          className="w-[388px] h-[200px] md:w-[470px] md:h-[300px] object-contain md:object-center"
        />
      </div>

      <div className="p-5 pt-10 flex flex-col gap-5 border-t border-[#DEDFE1]">
        <p className="font-rubik font-bold text-[18px] h-[50px] text-[#373745] md:h-[69px]">
          {data.title}
        </p>
        <div className="flex flex-col  gap-2.5">
          <p className="font-rubik font-light text-[#373745] text-[14px] md:text-[16px]">
            {show ? data.description : data.description.slice(0, 115) + "..."}
          </p>
          <div
            className="flex justify-between items-center   cursor-pointer max-w-[126px]"
            onClick={() => setShow((prev) => !prev)}
          >
            <p className="font-rubik font-bold text-[18px]  text-[#618C85]">
              Read more
            </p>
            <svg
              width="16"
              height="13"
              viewBox="0 0 16 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.37872 0.212092C8.62977 -0.0389591 9.03681 -0.0389591 9.28786 0.212092L15.1212 6.04543C15.3722 6.29648 15.3722 6.70351 15.1212 6.95456L9.28786 12.7879C9.03681 13.0389 8.62977 13.0389 8.37872 12.7879C8.12767 12.5368 8.12767 12.1298 8.37872 11.8788L13.1146 7.14285H1.33329C0.978247 7.14285 0.69043 6.85503 0.69043 6.49999C0.69043 6.14495 0.978247 5.85714 1.33329 5.85714H13.1146L8.37872 1.12123C8.12767 0.870178 8.12767 0.463143 8.37872 0.212092Z"
                fill="#618C85"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PartnersCard;
