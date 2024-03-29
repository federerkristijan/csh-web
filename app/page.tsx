import GeolocationButton from "@/components/shared/GeolocationButton";
import GeolocationCheck from "@/lib/functions/GeolocationCheck";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="">
        <Image
          className="hero-image"
          src="/cannaSMokeHere.png"
          alt="Next.js Logo"
          width={400}
          height={300}
          // fill={true}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {/* <Home /> */}
        {/* <GeolocationButton onClick={GeolocationCheck} /> */}
        {/*
        <button onClick={() => console.log('click')}>
          Check Location
        </button> */}
      </div>
    </main>
  );
}
