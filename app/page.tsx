import Container from "@/components/global/Container";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center">
      <Container>
        <div className="relative">
            <h1 className="absolute text-white border-4 border-blue-500 text-4xl font-bold p-3 bottom-12 left-60">
              CANNA SMOKE HERE?
            </h1>
            <h3 className="absolute text-white text-2xl font-bold top-48 text-nowrap">
              Your best bud in your pocket
            </h3>
        </div>
      </Container>
    </div>
  );
}
