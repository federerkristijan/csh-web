import Container from "@/components/global/Container";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Container>
        <div className="absolute top-4 right-16 w-min sm:top-0">
            <h1 className="border-5 border-blue-500 text-8xl font-bold p-4">
              CANNA SMOKE HERE?
            </h1>
        </div>
        <div className="absolute bottom-[21rem] right-4 sm:bottom-[22rem]sm:right-8">
            <h3 className="text-5xl font-extrabold">
              Your best bud in your pocket
            </h3>
        </div>
      </Container>
    </div>
  );
}
