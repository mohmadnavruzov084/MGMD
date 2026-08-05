import { ArrowUpRight, Code2, PenTool } from "lucide-react";
import { SectionLabel } from "@/components/sectionLabel";

const skills = [
  {
    number: "01",
    title: "Frontend",
    description: "Семантичная, быстрая и адаптивная верстка для любых экранов.",
    tags: ["HTML / CSS", "JavaScript", "React / Vite"],
    Icon: Code2,
  },
  {
    number: "02",
    title: "UI / UX",
    description: "Понятные интерфейсы с характером, логикой и вниманием к деталям.",
    tags: ["Figma", "Design systems", "Prototyping"],
    Icon: PenTool,
    featured: true,
  },
  {
    number: "03",
    title: "Launch",
    description: "Оптимизация, финальная проверка и подготовка продукта к запуску.",
    tags: ["Responsive", "Performance", "Accessibility"],
    Icon: ArrowUpRight,
  },
];

export const Skills = () => (
  <section
    id="skills"
    className="mx-auto w-full max-w-295 scroll-mt-24 px-4 py-22 sm:px-6 sm:py-28 lg:px-8 lg:py-32"
  >
    <SectionLabel number="02">Навыки</SectionLabel>

    <div className="mb-11 items-end justify-between sm:mb-14 lg:flex">
      <h2 className="font-unbounded text-[clamp(1.75rem,6vw,3.25rem)] leading-[1.12] font-bold tracking-[-0.045em] text-white">
        Мой рабочий
        <br />
        <span className="font-unbounded text-purple-400">инструментарий</span>
      </h2>
      <p className="mt-5 max-w-92.5 text-sm leading-7 text-zinc-400 lg:mt-0">
        Технологии и подходы, с которыми я создаю современные интерфейсы.
      </p>
    </div>

    <div className="grid gap-3.5 md:grid-cols-2 lg:grid-cols-3">
      {skills.map(({ number, title, description, tags, Icon, featured }) => (
        <article
          key={title}
          className={`group relative flex min-h-90 flex-col overflow-hidden rounded-2xl border border-white/10 p-7 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-purple-400/40 sm:p-8 ${featured ? "bg-gradient-to-br from-[#181421] to-[#111117]" : "bg-[#111117]"}`}
        >
          {featured && (
            <span className="pointer-events-none absolute inset-x-[10%] bottom-0 h-1/2 bg-[radial-gradient(ellipse,rgba(133,54,255,0.15),transparent_70%)]" />
          )}
          <span className="absolute top-6 right-6 text-[11px] text-zinc-600">{number}</span>
          <div className="grid size-14 place-items-center rounded-xl border border-purple-400/30 bg-[#15111d] text-purple-400 transition-all duration-300 group-hover:border-purple-400/60 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.18)]">
            <Icon className="size-5" aria-hidden="true" />
          </div>
          <h3 className="mt-10 font-unbounded text-xl font-semibold text-white">{title}</h3>
          <p className="mt-4 text-sm leading-7 text-zinc-400">{description}</p>
          <ul className="relative mt-auto flex flex-wrap gap-2 pt-7">
            {tags.map((tag) => (
              <li key={tag} className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] text-zinc-400">
                {tag}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </section>
);
