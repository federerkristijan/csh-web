import Link from "next/link";
import Image from "next/image";
import location from "@/assets/location.svg"

const NavBar = async () => {
  return (
    <div
      className="
  sticky
  top-0
  w-screen
  bg-none
  z-30
  shadow-sm
  "
    >
      <div className="py-4 border-b-[1px]">
        <div
          className="
          flex
          items-center
          justify-center
          gap-3
          md:gap-0
          "
        >
          <Link href="/check-location" className="">
            <Image
              src={location}
              alt="Location"
              width={50}
              height={50}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
