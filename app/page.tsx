import Container from "@/components/global/Container";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-2">
      <Container>
        <div className="relative">
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
      </Container>
    </div>
  );
}
