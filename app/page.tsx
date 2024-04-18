import GeolocationButton from "@/components/shared/GeolocationButton";
import GeolocationCheck from "@/lib/functions/GeolocationCheck";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <div className="relative">
        <Image
          className="hero-image"
          src="/cannaSMokeHere.png"
          alt="Next.js Logo"
          width={400}
          height={300}
          // fill={true}
          priority
        />
        <div className="absolute border-5 border-white top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="text-4xl font-bold p-3">
            CANNA SMOKE HERE?
          </h1>
        </div>
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h3 className="text-2xl font-bold">
            Your best bud in your pocket
          </h3>
        </div>
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
