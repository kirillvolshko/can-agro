import { cn } from "../lib/utils";
import { partnersData } from "../utils/partnersData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import PartnersCard from "./ui/partners-card";

const OurPartners = () => {
  return (
    <section className="px-5 py-[100px] md:px-[150px]  flex flex-col gap-10">
      <p className="font-play text-[44px]  font-bold md:hidden">
        Our <span className="text-[#618C85]">partners</span>
      </p>

      <Carousel
        opts={{
          align: "start",
          slidesToScroll: 1,
          breakpoints: {
            "(min-width: 768px)": {
              slidesToScroll: 3,
            },
          },
        }}
        className="md:flex flex-col item gap-10"
      >
        <div className="hidden md:flex justify-between items-center">
          <p className=" font-play text-[54px] font-bold">
            Our <span className="text-[#618C85]">partners</span>
          </p>
          <div className="flex gap-[16px]">
            <CarouselPrevious className="bg-none border-none hover:bg-transparent hover:cursor-pointer shadow-none" />
            <CarouselNext className="bg-none border-none hover:bg-transparent hover:cursor-pointer shadow-none" />
          </div>
        </div>
        <CarouselContent>
          {partnersData.map((item, index) => (
            <CarouselItem
              key={item.title}
              className={cn(
                "basis-full md:basis-1/3",
                index % 3 === 0 ? "md:pl-4" : "md:pl-0"
              )}
            >
              <PartnersCard data={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="pt-10 flex justify-between md:hidden">
          <CarouselPrevious className="bg-none border-none hover:bg-transparent hover:cursor-pointer shadow-none" />
          <CarouselNext className="bg-none border-none hover:bg-transparent hover:cursor-pointer shadow-none" />
        </div>
      </Carousel>
    </section>
  );
};
export default OurPartners;
