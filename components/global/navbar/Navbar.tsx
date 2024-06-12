import Link from "next/link";
import Image from "next/image";
import location from "@/public/assets/images/location.svg"
import AdSection from "../AdSection";
import Logo from "@/components/shared/Logo";

const NavBar = async () => {
  return (
    <nav
      className="
  sticky
  top-0
  bg-black
  w-fit
  z-30
  shadow-sm
  contents
  "
    >
      <div className="">
        <div
          className="
          flex
          flex-col
          items-center
          justify-center
          md:gap-0
          "
        >
          <Logo />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
