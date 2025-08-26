"use client";
import { forwardRef, useEffect, useRef, useState } from "react";
import { ourpartnersData } from "../utils/ourpartnersData";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import Link from "next/link";

type ProductsSectionProps = {
  onContactClick: () => void;
};

const OurPartnersProducts = forwardRef<HTMLElement, ProductsSectionProps>(
  ({ onContactClick }, ref) => {
    const [visibleCount, setVisibleCount] = useState(2);
    const loadMoreRef = useRef<HTMLDivElement>(null);

    const handleLoadMore = () => {
      setVisibleCount((prev) => Math.min(prev + 2, ourpartnersData.length));
    };

    useEffect(() => {
      if (!loadMoreRef.current) return;

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            handleLoadMore();
          }
        },
        {
          rootMargin: "100px",
          threshold: 0.1,
        }
      );

      observer.observe(loadMoreRef.current);

      return () => {
        if (loadMoreRef.current) observer.unobserve(loadMoreRef.current);
      };
    }, [visibleCount]);

    const handleContactClick = () => {
      setVisibleCount(ourpartnersData.length);
      onContactClick();
    };

    return (
      <section
        ref={ref}
        id="partners"
        className="pt-[30px] pb-[100px] md:pb-[120px] px-5 md:px-[150px]"
      >
        <div className="flex flex-col gap-20">
          <p className="font-rubik text-[14px] font-medium text-[#B6B7BB]">
            <Link className="cursor-pointer" href={"/"}>
              Home
            </Link>{" "}
            / <span className="text-[#696973] underline">Contacts</span>
          </p>
          <div className="flex flex-col gap-10">
            <p className="font-play font-bold text-[54px] text-[#373745]">
              Our <span className="text-[#618C85]">partners</span>
            </p>
            <div className="flex flex-col gap-5 md:gap-0 md:flex-row md:flex-wrap">
              {ourpartnersData.slice(0, visibleCount).map((item, index) => {
                const isLast = index >= visibleCount - 2;
                return (
                  <div
                    key={item.srcLogo + index}
                    className="flex flex-col border bg-[#FBFBFD] group border-[#DEDFE1] rounded-[2px] relative hover:z-10 min-h-[532px] md:min-h-[732px] cursor-pointer hover:shadow-xl hover:bg-white md:w-[50%]"
                  >
                    <div className="p-5 flex-col md:flex justify-center w-full">
                      <Image
                        src={"/partnersHome" + item.srcLogo}
                        alt={item.srcLogo}
                        width={388}
                        height={117}
                        className="w-[388px] h-[117px] md:w-[420px] md:h-[120px] object-contain"
                      />
                    </div>
                    <Carousel className="flex flex-col flex-1 justify-between">
                      <CarouselContent className="flex-1">
                        {item.products.map((prod) => (
                          <CarouselItem key={prod.title + prod.srcProduct}>
                            <div className="flex flex-col h-full">
                              <div className="md:w-full md:flex md:justify-center">
                                <Image
                                  src={"/partnersHome" + prod.srcProduct}
                                  alt={prod.title}
                                  width={388}
                                  height={200}
                                  className="w-[388px] h-[200px] md:w-[470px] md:h-[300px] object-contain md:object-center"
                                />
                              </div>
                              <div className="p-5 pt-10 flex flex-col gap-4 border-t border-[#DEDFE1]">
                                <p className="font-rubik font-bold text-[18px] h-[60px] text-[#373745] md:h-[69px]">
                                  {prod.title}
                                </p>
                                <p className="font-rubik font-light text-[#373745] text-[14px] md:text-[16px]">
                                  {prod.description}
                                </p>
                              </div>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>

                      <div
                        ref={isLast ? loadMoreRef : null}
                        className="p-5 pt-10 bg-[#FBFBFD] flex justify-between items-center group-hover:bg-white"
                      >
                        <div
                          className={cn(
                            "gap-[16px]",
                            item.products.length > 1 ? "flex" : "hidden"
                          )}
                        >
                          <CarouselPrevious className="bg-transparent border-none hover:bg-transparent hover:cursor-pointer shadow-none" />
                          <CarouselNext className="bg-transparent border-none hover:bg-transparent hover:cursor-pointer shadow-none" />
                        </div>
                        <Button
                          onClick={handleContactClick}
                          className="w-[133px] h-[42px] cursor-pointer ms-auto bg-[#E2F2EF] text-[#07695A] rounded-full py-[10px] px-[24px] flex items-center justify-center font-rubik font-bold text-[16px]"
                        >
                          Contact us
                        </Button>
                      </div>
                    </Carousel>
                  </div>
                );
              })}
            </div>
            {visibleCount < ourpartnersData.length && (
              <div className="flex justify-center w-full">
                <Button
                  onClick={handleLoadMore}
                  className="uppercase w-[206px] min-h-[52px] cursor-pointer text-[#696973] rounded-none bg-transparent border border-[#696973] py-[14px]  px-[56px] flex items-center justify-center font-rubik font-bold text-[16px]"
                >
                  Load more
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }
);

OurPartnersProducts.displayName = "OurPartnersProducts";
export default OurPartnersProducts;
