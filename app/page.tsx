'use client';

import Container from "@/components/global/Container";
import Search from "@/assets/Search.svg"
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
            console.log('Location allowed:', position.coords);
            // You can now use the position.coords to get the user's location
          },
          (error) => {
            console.error('Error getting location:', error);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    } else {
      console.log('Location access denied');
      // Handle the case where the user denies location access
    }
  };


  return (
      <Container>
          <AllowLocationDialog open={isModalOpen} onClose={() => handleLocationResponse(true)} />
        <div className="flex flex-col items-center justify-center gap-[5rem]">
          <div className="w-min mt-6 bg-slate-900/70">
            <h1 className="border-5 rounded-md border-white text-4xl font-bold py-2 px-3 tracking-[.6rem]">
              CANNA SMOKE HERE?
            </h1>
          </div>
          <div className="text-center w-max">
            <h3 className="text-[1.6rem] font-extrabold">
              Your best bud in your pocket
            </h3>
          </div>
          <div className="text-center w-max">
            <span className="text-[1rem] font-extrabold">
              Find out where you can smoke your cannabis in Berlin
            </span>
          </div>
          <div>
          <Link href="/check-location" className="flex flex-row items-center justify-center text-2xl gap-3 bg-[#C900A5] p-4 rounded-full hover:bg-blue-900 hover:scale-110">
            <h1>Check your location</h1>
            <Image
              src={Search}
              alt="Location"
              width={30}
              height={30}
            />
          </Link>
          </div>
        </div>
      </Container>
  );
}
