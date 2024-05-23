"use client";

import Container from "@/components/global/Container";
import Search from "@/assets/Search.svg";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import AllowLocationDialog from "@/components/shared/AllowLocation";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleLocationResponse = (allow: boolean) => {
    setIsModalOpen(false);
    if (allow) {
      // Request geolocation access
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            console.log("Location allowed:", position.coords);
            // You can now use the position.coords to get the user's location
          },
          (error) => {
            console.error("Error getting location:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    } else {
      console.log("Location access denied");
      // Handle the case where the user denies location access
    }
  };

  return (
    <Container>
      <AllowLocationDialog
        open={isModalOpen}
        onClose={() => handleLocationResponse(true)}
      />
      <div className="flex flex-col items-center justify-center gap-[5rem]">
        <div className="text-center w-max">
          <h3 className="text-[2rem] font-semibold md:w-fit">
            Your best bud in your pocket
          </h3>
        </div>
        <div className="flex flex-col text-center w-[48vw]">
          <span className="text-[1rem]">
            Your little helper for finding safe, designated smoking spots in
            your kiez. Using your phone&apos;s GPS, we pinpoint your location
            and guide you to where you Canna Smoke.
          </span>
          <br />
          <span className="font-bold">Enjoy your doobies responsibly with this free service.</span>
        </div>
        <div>
          <Link
            href="/check-location"
            className="flex flex-row items-center justify-center text-[16] gap-3 bg-[#C900A5] py-[22px] px-[30px] rounded-full"
          >
            <h1>Check your location</h1>
            <Image src={Search} alt="Location" width={30} height={30} />
          </Link>
        </div>
      </div>
    </Container>
  );
}
