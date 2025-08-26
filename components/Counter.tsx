const Counter = () => {
  return (
    <section className="py-[100px] md:py-[120px] px-5 md:px-[150px] ">
      <div className="flex flex-col md:flex-row border border-[#DEDFE1] bg-[#FBFBFD]">
        <div className="flex flex-col text-center gap-2.5 border-b md:border-b-0 md:border-r border-[#DEDFE1] px-5 py-10 md:px-[60px] md:py-[80px] w-full">
          <p className="font-play font-bold text-[54px] md:text-[84px] text-[#618C85]">
            20+
          </p>
          <p className="uppercase font-play font-bold text-[34px] text-[#373745]">
            Years
          </p>
          <p className="font-rubik text-[18px] font-light ">
            Global Ag Solutions Backed by Experience
          </p>
        </div>
        <div className="flex flex-col text-center gap-2.5 border-b md:border-b-0 md:border-r border-[#DEDFE1] px-5 py-10 md:px-[60px] md:py-[80px] w-full">
          <p className="font-play font-bold text-[54px] md:text-[84px] text-[#618C85]">
            10+
          </p>
          <p className="uppercase font-play font-bold text-[34px] text-[#373745]">
            countries
          </p>
          <p className="font-rubik text-[18px] font-light ">
            Serving Farms Worldwide
          </p>
        </div>
        <div className="flex flex-col text-center gap-2.5  border-[#DEDFE1] px-5 py-10 md:px-[60px] md:py-[80px] w-full">
          <p className="font-play font-bold text-[54px] md:text-[84px] text-[#618C85]">
            1000+
          </p>
          <p className="uppercase font-play font-bold text-[34px] text-[#373745]">
            customers
          </p>
          <p className="font-rubik text-[18px] font-light ">
            Globally Trusted, Customer Focused
          </p>
        </div>
      </div>
    </section>
  );
};
export default Counter;
