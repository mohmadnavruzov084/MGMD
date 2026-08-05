export const SectionLabel = ({ number, children, light = false }) => (
  <div
    className={`mb-9 flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] uppercase sm:mb-12 ${light ? "text-white/65" : "text-zinc-500"}`}
  >
    <span className={light ? "text-white" : "text-purple-400"}>{number}</span>
    <span>{children}</span>
    <span className={`h-px w-14 ${light ? "bg-white/25" : "bg-white/10"}`} />
  </div>
);
