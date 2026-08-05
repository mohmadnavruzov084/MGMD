import { ArrowDown, Code2, Sparkles } from "lucide-react";
import portraitUrl from "../../../img/hero-portrait.png";

export const HeroVisual = () => {
  return (
    <div className="hero-visual-enter relative mx-auto flex h-110 w-full max-w-147.5 items-center justify-center overflow-hidden sm:h-135 lg:h-147.5">
      <Code2 className="absolute top-12 left-2 z-20 size-6 text-purple-400 sm:top-20 sm:left-0" />

      <div className="absolute h-[230px] w-[360px] -rotate-[19deg] rounded-full border border-purple-400/20 sm:h-[310px] sm:w-[510px]" />
      <div className="absolute h-[275px] w-[410px] -rotate-[19deg] rounded-full border border-dashed border-purple-400/20 opacity-50 sm:h-[380px] sm:w-[575px]" />

      <div className="relative z-10 h-[400px] w-[280px] overflow-hidden rounded-t-[150px] rounded-b-3xl border border-purple-300/20 bg-zinc-900 sm:h-[510px] sm:w-[365px] sm:rounded-t-[190px]">
        <img
          src={portraitUrl}
          alt="Мохмад — веб-разработчик и UI-дизайнер"
          className="h-full w-full object-cover object-[center_42%]"
        />
      </div>

      <span className="absolute right-2 bottom-24 z-20 font-mono text-lg font-bold text-purple-400 sm:right-0">
        {"{ }"}
      </span>

      <div className="absolute right-14 bottom-10 z-20 hidden flex-col items-center gap-3 text-zinc-500 sm:flex lg:right-12 lg:bottom-1 cursor-pointer">
        <span className="text-[9px] tracking-[0.18em] uppercase [writing-mode:vertical-rl]">
          Листайте вниз
        </span>
        <ArrowDown className="size-4 text-purple-400" aria-hidden="true" />
      </div>

      <div className="focus-card absolute bottom-6 left-2 z-20 flex items-center gap-3 rounded-xl border border-white/10 bg-zinc-900/85 px-4 py-3 shadow-xl backdrop-blur-md sm:bottom-12 sm:left-0">
        <div className="focus-icon grid size-8 place-items-center rounded-lg bg-purple-600 sm:size-9">
          <Sparkles className="focus-sparkle size-4" aria-hidden="true" />
        </div>
        <div>
          <span className="block text-[9px] text-zinc-500 uppercase">
            Фокус
          </span>
          <strong className="block text-xs text-white sm:text-sm">
            Web & UI
          </strong>
        </div>
      </div>
    </div>
  );
};
