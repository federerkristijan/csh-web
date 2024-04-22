import Link from "next/link";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const NavBar = async () => {
  return (
    <div
      className="
  sticky
  top-0
  w-full
  bg-none
  z-30
  shadow-sm
  border-2
  border-blue-500
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
            <LocationOnOutlinedIcon className="text-4xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
