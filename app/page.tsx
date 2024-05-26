"use client";

import Container from "@/components/global/Container";
import Search from "@/assets/Search.svg";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import AllowLocationDialog from "@/components/shared/AllowLocation";
import Button from "@/components/ui/Buttons";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleLocationResponse = (allow: boolean) => {
    setIsModalOpen(false);
    if (allow) {
      console.log("Location access granted");
      // You can now use the position.coords to get the user's location
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
      <div className="flex flex-col items-center justify-center gap-[5rem] w-1/3">
        <div className="text-center w-max">
          <h3 className="text-[2rem] font-semibold md:w-fit">
            Your best bud in your pocket
          </h3>
        </div>
        <div className="text-center w-fit mx-4 ">
          <span className="text-[1rem] ">
            Your little helper for finding safe, designated smoking spots in
            your kiez. Using your phone&apos;s GPS, we pinpoint your location
            and guide you to where you Canna Smoke.
          </span>
          <br />
          <span className="bold">Enjoy your doobies responsibly with this free service.</span>
        </div>
        <div>
          <Button
            type="primary"
            text="Check your smoke-cation"
            onClick={() => window.location.href = '/check-location'}
            icon={Search}
          />
        </div>
      </div>
    </Container>
  );
}
