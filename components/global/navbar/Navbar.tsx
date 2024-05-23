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
          {/* <Link href="/check-location" className="flex flex-row items-center justify-center text-3xl gap-3 border-2 border-s-neutral-300 p-3 rounded-2xl hover:bg-blue-900 hover:scale-110">
            <h1>Check your</h1>
            <Image
              src={location}
              alt="Location"
              width={50}
              height={50}
            />
          </Link> */}
          <AdSection />
          <Logo />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
