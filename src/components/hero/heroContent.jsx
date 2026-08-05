import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  ["2+", "года опыта"],
  ["10", "завершённых проектов"],
  ["100%", "внимания к деталям"],
];

export const HeroContent = () => {
  return (
    <div className="hero-content-enter min-w-0 text-center lg:text-left">
      <div className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-white/10 px-3 py-2 sm:gap-3 sm:px-4">
        <span className="relative flex size-2 shrink-0" aria-hidden="true">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-60" />
          <span className="relative inline-flex size-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]" />
        </span>
        <span className="text-[10px] font-semibold tracking-widest text-zinc-300 uppercase sm:text-[11px]">
          Доступен для новых проектов
        </span>
      </div>

      <p className="mt-6 text-sm text-zinc-300 sm:mt-7">
        Ассаламу алейкум, меня зовут Мохмад
      </p>

      <h1 className="mt-3 font-unbounded text-[clamp(1.5rem,7.5vw,2.25rem)] leading-[1.1] font-bold tracking-[-0.04em] text-white sm:text-5xl lg:text-[56px] xl:text-[64px]">
        Создаю digital-продукты,
        <br className="hidden sm:block" /> которые{" "}
        <span className="font-unbounded text-purple-400">запоминаются.</span>
      </h1>

      <p className="mx-auto mt-5 max-w-142.5 text-sm leading-6 text-zinc-400 sm:mt-6 sm:text-base sm:leading-7 lg:mx-0">
        Веб-разработчик и дизайнер интерфейсов. Превращаю идеи в быстрые,
        удобные и визуально сильные сайты.
      </p>

      <div className="mt-8 flex flex-col items-stretch gap-5 min-[420px]:items-center sm:flex-row sm:justify-center lg:justify-start">
        <Button
          asChild
          className="h-auto w-full justify-between rounded-lg bg-purple-600 px-5 py-4 text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-purple-500 hover:shadow-[0_10px_30px_rgba(147,51,234,0.25)] min-[420px]:w-auto sm:min-w-53.5"
        >
          <a href="#projects">
            Смотреть проекты <ArrowDown className="size-4" aria-hidden="true" />
          </a>
        </Button>

        <a
          href="https://wa.me/+79282844731"
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-purple-500 px-5 py-4 text-sm font-semibold text-zinc-300 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-purple-400 hover:bg-purple-500/10 hover:text-white hover:shadow-[0_10px_30px_rgba(147,51,234,0.12)]"
        >
          Связаться со мной
          <ArrowUpRight className="size-4 text-purple-400" aria-hidden="true" />
        </a>
      </div>

      <dl className="mt-12 grid grid-cols-3 lg:w-fit lg:grid-cols-[auto_auto_auto]">
        {stats.map(([value, label]) => (
          <div
            key={label}
            className="relative min-w-0 px-3 after:absolute after:top-1/2 after:right-0 after:h-10 after:w-px after:-translate-y-1/2 after:bg-gradient-to-b after:from-transparent after:via-white/15 after:to-transparent after:content-[''] first:pl-0 last:pr-0 last:after:hidden sm:px-4"
          >
            <dt className="font-unbounded text-lg font-bold text-white sm:text-xl">
              {value}
            </dt>
            <dd className="mt-1 text-[9px] leading-snug tracking-wide text-zinc-500 uppercase sm:text-[10px]">
              {label}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};
