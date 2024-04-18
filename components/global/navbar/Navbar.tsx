import Link from "next/link";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const NavBar = async () => {
  return (
    <div
      className="
  sticky
  bottom-0
  w-full
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
          justify-between
          gap-3
          md:gap-0
          "
        >
          <Link href="/check-location" className="">
            <LocationOnOutlinedIcon className="text-white text-4xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
