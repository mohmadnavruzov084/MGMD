import { SectionLabel } from "@/components/sectionLabel";

export const About = () => (
  <section
    id="about"
    className="mx-auto grid w-full max-w-295 scroll-mt-24 gap-2 px-4 py-22 sm:px-6 sm:py-28 lg:grid-cols-[180px_1fr] lg:px-8 lg:py-32"
  >
    <SectionLabel number="01">Обо мне</SectionLabel>

    <div>
      <h2 className="font-unbounded text-[clamp(1.75rem,6vw,3.5rem)] leading-[1.12] font-bold tracking-[-0.045em] text-white">
        Продуманный дизайн.
        <br />
        <span className="font-unbounded text-purple-400">Чистый код.</span>{" "}
        Реальный результат.
      </h2>

      <div className="mt-11 grid gap-8 sm:mt-16 lg:grid-cols-2 lg:gap-16 xl:gap-22">
        <p className="text-lg leading-relaxed text-zinc-200 sm:text-xl lg:text-2xl">
          Я создаю сайты, в которых эстетика работает вместе с функциональностью.
        </p>

        <div className="space-y-5 text-sm leading-7 text-zinc-400">
          <p>
            Мне важно не просто «сверстать экран», а понять задачу бизнеса,
            поведение пользователя и собрать цельный цифровой опыт.
          </p>
          <p>
            Люблю ясную структуру, выразительную типографику, аккуратные
            микроэффекты и решения без лишнего шума.
          </p>
        </div>
      </div>
    </div>
  </section>
);
