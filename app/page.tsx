import Container from "@/components/global/Container";
import location from "@/assets/images/location.svg"
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
      <Container>
        <div className="flex flex-col items-center justify-center gap-[5rem]">
          <div className="w-min -top-4 mt-6 bg-slate-900/70">
            <h1 className="border-5 rounded-md border-white text-4xl font-bold p-2">
              CANNA SMOKE HERE?
            </h1>
          </div>
          <div className="text-center w-max">
            <h3 className="text-[1.6rem] font-extrabold ml-6">
              Your best bud in your pocket
            </h3>
          </div>
          <div>
          <Link href="/check-location" className="flex flex-row items-center justify-center text-3xl gap-3 bg-[#C900A5] p-3 rounded-3xl hover:bg-blue-900 hover:scale-110">
            <h1>Check your location</h1>
            <Image
              src={location}
              alt="Location"
              width={50}
              height={50}
            />
          </Link>
          </div>
        </div>
      </Container>
  );
}
