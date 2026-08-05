import { ArrowUpRight } from "lucide-react";
import arbiDentImage from "@/img/projects/arbi-dent.jpg";
import brixTemplatesImage from "@/img/projects/brix-templates.png";
import djoStroyImage from "@/img/projects/djo-stroy.jpg";
import inkHouseImage from "@/img/projects/ink-house.png";
import { SectionLabel } from "@/components/sectionLabel";

const projects = [
  {
    title: "DJO_STROY",
    category: "Construction · Landing",
    image: djoStroyImage,
    imageClass: "object-cover object-top",
    background: "bg-[#17191a]",
  },
  {
    title: "ARBI DENT",
    category: "Healthcare · Corporate Website",
    image: arbiDentImage,
    imageClass: "object-cover object-top",
    background: "bg-[#edf3f6]",
  },
  {
    title: "Ink.House",
    category: "E-commerce · React",
    image: inkHouseImage,
    imageClass: "object-cover object-top",
    background: "bg-[#e8f3ec]",
  },
  {
    title: "Brix Templates",
    category: "Dashboard · UI Development",
    image: brixTemplatesImage,
    imageClass: "object-cover object-center",
    background: "bg-[#f1f0ff]",
  },
];

export const Projects = () => (
  <section id="projects" className="scroll-mt-20 bg-[#0b0b10] py-22 sm:py-28 lg:py-32">
    <div className="mx-auto w-full max-w-295 px-4 sm:px-6 lg:px-8">
      <SectionLabel number="03">Избранные проекты</SectionLabel>

      <div className="mb-11 items-end justify-between sm:mb-14 lg:flex">
        <h2 className="font-unbounded text-[clamp(1.75rem,6vw,3.25rem)] leading-[1.12] font-bold tracking-[-0.045em] text-white">
          Работы, которыми
          <br />
          <span className="font-unbounded text-purple-400">я горжусь</span>
        </h2>
        <p className="mt-5 max-w-92.5 text-sm leading-7 text-zinc-400 lg:mt-0">
          Реальные сайты и интерфейсы, разработанные для проектов из разных сфер.
        </p>
      </div>

      <div
        className="mx-auto grid max-w-170 gap-y-7 md:grid-cols-2"
        style={{ columnGap: "80px" }}
      >
        {projects.map(({ title, category, image, imageClass, background }) => (
          <article key={title} className="group min-w-0">
            <div className={`relative h-40 overflow-hidden rounded-xl border border-white/10 sm:h-44 ${background}`}>
              <img
                src={image}
                alt={`Скриншот проекта ${title}`}
                loading="lazy"
                decoding="async"
                className={`size-full transition-[filter] duration-500 ease-out group-hover:brightness-[1.03] ${imageClass}`}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>

            <div className="mt-3 flex items-center justify-between gap-3">
              <div>
                <span className="text-[10px] tracking-[0.12em] text-zinc-500 uppercase">{category}</span>
                <h3 className="mt-1 font-unbounded text-base font-semibold text-white">{title}</h3>
              </div>
              <a
                href="#contacts"
                aria-label={`Подробнее о проекте ${title}`}
                className="grid size-9 shrink-0 place-items-center rounded-full border border-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/50 hover:bg-purple-500/10"
              >
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
