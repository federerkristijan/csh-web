import Container from "@/components/global/Container";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Container>
        <div className="relative">
            <h1 className="absolute border-4 border-blue-500 text-4xl font-bold p-3 bottom-12 left-32 transform -translate-x-1/2 -translate-y-1/6">
              CANNA SMOKE HERE?
            </h1>
            <h3 className="absolute text-2xl font-bold top-48 text-nowrap">
              Your best bud in your pocket
            </h3>
        </div>
      </Container>
    </div>
  );
}
