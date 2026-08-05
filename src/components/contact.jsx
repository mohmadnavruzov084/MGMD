import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/sectionLabel";

export const Contact = () => (
  <section id="contacts" className="mx-auto w-full max-w-295 scroll-mt-24 px-4 py-22 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
    <div className="relative min-h-135 overflow-hidden rounded-3xl bg-gradient-to-br from-[#7340dd] via-[#9c59f7] to-[#5822c4] p-6 sm:min-h-147.5 sm:p-12 lg:p-15">
      <span className="pointer-events-none absolute -top-55 -right-57.5 size-150 rounded-full border border-white/15" />
      <span className="pointer-events-none absolute -top-32.5 -right-37.5 size-107.5 rounded-full border border-white/15" />

      <SectionLabel number="04" light>Контакты</SectionLabel>

      <div className="relative z-10 mt-14 text-center sm:mt-8">
        <p className="text-[10px] font-semibold tracking-[0.2em] text-white/80 uppercase">Есть идея или проект?</p>
        <h2 className="my-6 font-unbounded text-[clamp(2rem,7vw,4.125rem)] leading-[1.12] font-bold tracking-[-0.045em] text-white sm:my-9">
          Давайте сделаем
          <br />
          <span className="font-unbounded text-[#17101f]">что-то классное.</span>
        </h2>
        <a
          href="tel:+79282844731"
          className="mx-auto inline-flex w-full max-w-72 items-center justify-between rounded-lg bg-white px-5 py-4 text-sm font-bold text-[#15111c] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(37,15,64,0.25)]"
        >
          +7 928 284-47-31
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </div>

      <div className="absolute right-5 bottom-8 left-5 z-10 flex justify-center gap-5 sm:right-15 sm:bottom-10 sm:left-15 sm:gap-9">
        {[
          ["Telegram", "https://t.me/Mohmad688"],
          ["WhatsApp", "https://wa.me/79282844731"],
          ["GitHub", "https://github.com/mohmadnavruzov084?tab=repositories"],
        ].map(([label, href]) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="text-[10px] font-bold text-white transition-opacity duration-300 hover:opacity-65 sm:text-xs"
          >
            {label} ↗
          </a>
        ))}
      </div>
    </div>
  </section>
);
