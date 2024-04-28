import Container from "@/components/global/Container";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Container>
        <div className="absolute top-4 right-16 w-min">
            <h1 className=" text-white border-5 border-blue-500 text-8xl font-bold p-4">
              CANNA SMOKE HERE?
            </h1>
        </div>
        <div className="absolute bottom-72 right-8">
            <h3 className=" text-white text-5xl font-extrabold  text-nowrap">
              Your best bud in your pocket
            </h3>
        </div>
      </Container>
    </div>
  );
}
