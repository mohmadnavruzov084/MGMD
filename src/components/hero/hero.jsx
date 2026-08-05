import { HeroContent } from "./heroContent";
import { HeroVisual } from "./heroVisual";

export const Hero = () => {
  return (
    <main className="mx-auto w-full max-w-295 px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-17.5">
      <section className="grid items-center gap-12 lg:min-h-150 lg:grid-cols-[55%_45%] lg:gap-0">
        <HeroContent />
        <HeroVisual />
      </section>
    </main>
  );
};
