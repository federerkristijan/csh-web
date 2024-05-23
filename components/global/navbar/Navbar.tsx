import Link from "next/link";
import Image from "next/image";
import location from "@/assets/images/location.svg"
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
      <div className="py-4">
        <div
          className="
          flex
          flex-col
          items-center
          justify-center
          gap-3
          md:gap-0
          "
        >
          <AdSection />
          <Logo />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
