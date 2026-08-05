import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  ["Обо мне", "#about"],
  ["Навыки", "#skills"],
  ["Проекты", "#projects"],
  ["Контакты", "#contacts"],
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header-enter sticky top-0 backdrop-blur-xl z-40 mx-auto w-full max-w-295 border-b border-white/10 px-4 sm:px-6 lg:px-8 ">
      <div className="flex h-18 items-center justify-between sm:h-20 lg:h-23 ">
        <a href="#" className="font-unbounded text-lg font-bold sm:text-xl">
          <span className="font-unbounded text-purple-500">M</span>GMD.
        </a>

        <nav className="hidden items-center gap-6 text-xs text-zinc-300 md:flex lg:gap-9">
          {navItems.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="transition-colors hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href="#contacts"
          className="hidden rounded-full border border-white/10 px-4.5 py-3 text-xs transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-purple-400/50 hover:bg-white/5 md:inline-flex"
        >
          Обсудить проект <span className="ml-2 text-purple-400">↗</span>
        </a>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-lg border border-white/10 text-zinc-200 md:hidden"
          aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {isOpen && (
        <nav
          id="mobile-navigation"
          className="absolute inset-x-4 top-full mt-3 flex flex-col rounded-2xl border border-white/10 bg-zinc-950/95 p-2 shadow-2xl backdrop-blur-xl md:hidden"
        >
          {navItems.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="rounded-xl px-4 py-3 text-sm text-zinc-300 transition-colors duration-300 ease-out hover:bg-white/5 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="#contacts"
            className="mt-2 rounded-xl bg-purple-600 px-4 py-3 text-center text-sm font-semibold text-white transition-colors duration-300 ease-out hover:bg-purple-500"
            onClick={() => setIsOpen(false)}
          >
            Обсудить проект
          </a>
        </nav>
      )}
    </header>
  );
};
