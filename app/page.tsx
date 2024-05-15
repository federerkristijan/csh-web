import Container from "@/components/global/Container";

export default function Home() {
  return (
    <div className="relative min-h-[55vh]">
      <Container>
        <div>
          <div className="absolute right-[40%] w-min -top-4 mt-6 bg-slate-900/70">
            <h1 className="border-3 rounded-md border-blue-500 text-5xl font-bold px-1 py-3">
              CANNA SMOKE HERE?
            </h1>
          </div>
          <div className="absolute bottom-6 right-0 text-center w-max">
            <h3 className="text-[1.6rem] font-extrabold ml-6">
              Your best bud in your pocket
            </h3>
          </div>
        </div>
      </Container>
    </div>
  );
}
