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
        <div className="relative">
            <h3 className="absolute text-white text-5xl font-bold top-48 text-nowrap">
              Your best bud in your pocket
            </h3>
        </div>
      </Container>
    </div>
  );
}
