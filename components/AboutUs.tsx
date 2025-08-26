"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { aboutUsData } from "../utils/aboutUsData";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";

type AboutUsSectionProps = {
  onContactClick: () => void;
};

const AboutUs = ({ onContactClick }: AboutUsSectionProps) => {
  return (
    <section className="flex flex-col px-5  md:px-[150px] py-[136px] md:py-[134px] bg-[#F8F9FB]">
      <Carousel>
        <CarouselContent>
          {aboutUsData.map((item, index) => (
            <CarouselItem key={item.title + index}>
              <div className="flex justify-between md:pt-[52px]">
                <div className="flex flex-col gap-10 md:max-w-[550px]">
                  <div className="relative">
                    <p className="font-play font-bold text-[44px] md:text-[54px] text-[#373745]">
                      {item.title}
                    </p>
                  </div>

                  <div className="flex items-center relative md:hidden">
                    <Image
                      alt={item.title}
                      src={"/partnersHome" + item.logo}
                      className={cn(
                        "w-[60px] absolute left-0",
                        index === 1 ? "h-[272px]" : "h-[272px]"
                      )}
                      width={272}
                      height={48}
                    />
                    <Image
                      alt={item.title}
                      src={"/partnersHome" + item.image}
                      className="w-[263px] h-[253px] ms-[66px]"
                      width={263}
                      height={253}
                    />
                  </div>
                  <div className="flex flex-col gap-5">
                    <p className="font-rubik font-bold text-[20px] md:text-[28px] text-[#373745]">
                      {item.descriptionTitle}
                    </p>
                    <p className="font-rubik font-light text-[14px] md:text-[20px] text-[#373745]">
                      {item.descriptionText}
                    </p>
                    <Button
                      onClick={onContactClick}
                      className=" mt-5 w-full md:w-[213px] bg-[#618C85] hover:bg-[linear-gradient(to_top,_#376760,_#618C85)] cursor-pointer rounded-[2px] py-[25px] font-rubik font-bold text-[16px] uppercase md:flex items-center"
                    >
                      Contact us
                    </Button>
                  </div>
                </div>
                <div className="hidden md:flex items-center relative gap-[56px] max-w-[654px]">
                  <Image
                    alt={item.title}
                    src={"/partnersHome" + item.logo}
                    className={cn("w-[88px] h-[491px] absolute left-[-20px]")}
                    width={272}
                    quality={100}
                    height={48}
                  />
                  <Image
                    alt={item.title}
                    src={"/partnersHome" + item.imageMd}
                    className="w-[283px] h-[273px] md:w-[540px] md:h-[493px] ms-[90px] "
                    width={510}
                    quality={100}
                    height={493}
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex top-4 right-0 md:top-20  md:right-[60%] absolute gap-[16px] bg-[#F8F9FB]">
          <CarouselPrevious className="bg-none bg-transparent border-none hover:bg-transparent hover:cursor-pointer shadow-none" />
          <CarouselNext className="bg-none bg-transparent border-none hover:bg-transparent hover:cursor-pointer shadow-none" />
        </div>
      </Carousel>
    </section>
  );
};

export default AboutUs;
