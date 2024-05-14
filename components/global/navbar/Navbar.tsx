import Link from "next/link";
import Image from "next/image";
import location from "@/assets/images/location.svg"

const NavBar = async () => {
  return (
    <div
      className="
  sticky
  top-0
  w-fit
  bg-black
  z-30
  shadow-sm
  "
    >
      <div className="py-4">
        <div
          className="
          flex
          items-center
          justify-center
          gap-3
          md:gap-0
          "
        >
          <Link href="/check-location" className="flex flex-row items-center text-3xl gap-3 border-2 border-s-neutral-300 p-3 rounded-2xl hover:bg-blue-900 hover:scale-110">
            <h1>Check your</h1>
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
