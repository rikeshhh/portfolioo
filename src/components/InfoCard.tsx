export default function InfoCard() {
  return (
    <div className="grid grid-cols-2 gap-12 h-screen container mx-auto items-center">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="relative w-full h-[400px] overflow-hidden p-12 border rounded-3xl">
          <div className="bg-hero-image bg-center w-full h-full bg-no-repeat"></div>
        </div>
        <div className="mt-4">
          <h2>This thing called UX?</h2>
          When the pandemic struck, I took it as an opportunity to explore new
          things. I came across UX design competitions, and thought it might be
          fun to just give it a go (several times). Long story short, my
          failures eventually turned into successes, and the rest was history.
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="mb-4">
          This is my story — alongside some flicks from my recent trip to Japan.
        </div>
        <div className="relative w-full h-[400px] overflow-hidden p-12 border rounded-3xl">
          <div className="bg-hero-image bg-center w-full h-full bg-no-repeat"></div>
        </div>
      </div>
    </div>
  );
}