import { Areas } from "@/components/areas";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Projects } from "@/components/projects";
import { Reveal } from "@/components/reveal";
import { Skills } from "@/components/skills";
import { Header } from "../components/header";
import { Hero } from "../components/hero/hero";

export const Page = () => {
  return (
    <div className="min-h-screen">
      <div className="noise" aria-hidden="true" />
      <Header />
      <Hero />
      <Reveal><Areas /></Reveal>
      <Reveal><About /></Reveal>
      <Reveal><Skills /></Reveal>
      <Reveal><Projects /></Reveal>
      <Reveal><Contact /></Reveal>
      <Reveal><Footer /></Reveal>
    </div>
  );
};
