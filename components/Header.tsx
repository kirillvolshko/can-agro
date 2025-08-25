import Image from "next/image";
import Link from "next/link";
import HeaderDesktop from "./HeaderView/HeaderDesktop";
import HeaderMobile from "./HeaderView/HeaderMobile";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-[30px] md:px-[150px]  border-b border-[#DEDFE1] px-5">
      <Link href={"/"}>
        <Image
          src={"./logo.svg"}
          alt="logo"
          width={196}
          height={50}
          className="cursor-pointer"
        />
      </Link>
      <HeaderDesktop />
      <HeaderMobile />
    </header>
  );
};
export default Header;
