"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { forwardRef } from "react";

type HeroSectionProps = {
  onContactClick: () => void;
};

const HeroSection = forwardRef<HTMLElement, HeroSectionProps>(
  ({ onContactClick }, ref) => {
    return (
      <section
        ref={ref}
        id="hero-block"
        className="flex flex-col gap-10 py-[70px] md:pb-[139px] px-5 md:px-[150px]  bg-[#F8F9FB] md:flex-row md:justify-between"
      >
        <div className="felx flex-col gap-1 md:pt-[60px]">
          <p className="font-play text-[#373745] text-[34px] md:text-[84px] leading-none font-bold uppercase">
            Your
          </p>
          <p className="font-play text-[#618C85] text-[54px] md:text-[110px] leading-none font-bold uppercase">
            AG Solution
          </p>
          <p className="font-play text-[#373745] text-[54px] md:text-[110px] leading-none font-bold uppercase">
            Partner
          </p>
          <p className="font-play text-[#373745] text-[20px] md:text-[50px] font-normal pt-2.5">
            Global Reach. Local Expertise
          </p>
          <Button
            onClick={onContactClick}
            className="hidden mt-10 w-[213px] bg-[#618C85] hover:bg-[linear-gradient(to_top,_#376760,_#618C85)] cursor-pointer rounded-[2px] py-[25px] font-rubik font-bold text-[16px] uppercase md:flex items-center"
          >
            Contact us
          </Button>
        </div>
        <div className="relative">
          <Image
            src={"/hero-tractor.svg"}
            alt={"tractor"}
            width={388}
            height={312}
            className="relative z-50 md:w-[767px] md:h-[633px]"
          />
          <Image
            className="absolute right-0 top-0 z-0 md:w-[612px] md:h-[612px]"
            src={"/Vector.svg"}
            alt="img"
            width={270}
            height={270}
          />
        </div>
        <Button
          onClick={onContactClick}
          className="w-full bg-[#618C85] rounded-[2px] py-[25px] font-rubik font-bold text-[16px] uppercase md:hidden"
        >
          Contact us
        </Button>
      </section>
    );
  }
);

HeroSection.displayName = "HeroSection";
export default HeroSection;
