import Container from "@/components/global/Container";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Container>
        <div className="relative">
            <h1 className="text-4xl font-bold p-3 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              CANNA SMOKE HERE?
            </h1>
            <h3 className="text-2xl font-bold bottom-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              Your best bud in your pocket
            </h3>
        </div>
      </Container>
    </div>
  );
}
