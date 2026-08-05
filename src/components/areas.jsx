import { useEffect, useRef } from "react";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const areas = [
  "WEB DEVELOPMENT",
  "UI/UX DESIGN",
  "CREATIVE CODING",
  "RESPONSIVE DESIGN",
];

export const Areas = () => {
  const marqueeItems = Array.from({ length: 4 }, () => areas).flat();
  const resumeTimer = useRef(null);

  useEffect(() => () => clearTimeout(resumeTimer.current), []);

  const stopAutoplay = (swiper) => {
    clearTimeout(resumeTimer.current);
    swiper.autoplay.stop();
  };

  const resumeAutoplay = (swiper) => {
    clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      if (!swiper.destroyed) swiper.autoplay.start();
    }, 1500);
  };

  return (
    <section className="overflow-hidden border-y border-white/10 bg-[#0e0e14] py-4 sm:py-5">
      <Swiper
        className="areas-swiper font-unbounded text-[11px] tracking-[1.5px] text-zinc-400 sm:text-xs sm:tracking-[2px] lg:text-sm"
        modules={[Autoplay, FreeMode]}
        slidesPerView="auto"
        spaceBetween={32}
        loop
        speed={9000}
        grabCursor
        freeMode={{
          enabled: true,
          momentum: true,
        }}
        onSliderFirstMove={stopAutoplay}
        onTouchEnd={resumeAutoplay}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
      >
        {marqueeItems.map((area, index) => (
          <SwiperSlide
            key={`${area}-${index}`}
            className="areas-slide"
            aria-hidden={index >= areas.length}
          >
            <span>{area}</span>
            <span className="text-purple-600" aria-hidden="true">
              ✦
            </span>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
