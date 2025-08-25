import Image from "next/image";
import { brandsData } from "../utils/brandsData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { cn } from "../lib/utils";

const Brands = () => {
  return (
    <section className="py-[100px] md:py-[120px] px-5 md:px-[150px] ">
      <Carousel>
        <div className="flex items-center justify-between mb-[60px]">
          <p className="font-play font-bold text-[55px] text-[#373745]">
            Brands
          </p>
          <div className="flex gap-[16px]">
            <CarouselPrevious className="bg-none border-none hover:bg-transparent hover:cursor-pointer shadow-none" />
            <CarouselNext className="bg-none border-none hover:bg-transparent hover:cursor-pointer shadow-none" />
          </div>
        </div>
        <div className=" border-t border-b border-[#B6B7BB] py-[45px] ">
          <CarouselContent className="flex items-center">
            {brandsData.map((item, index) => (
              <CarouselItem
                key={item.image}
                className={cn(
                  "basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6",
                  index === 0 ? "me-5" : "mx-5"
                )}
              >
                <Image
                  alt={item.image}
                  src={"/partnersHome" + item.image}
                  width={150}
                  height={100}
                  className="h-auto w-auto object-contain"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
      </Carousel>
    </section>
  );
};
export default Brands;
