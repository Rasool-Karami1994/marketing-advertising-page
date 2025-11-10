"use client";

import { useId } from "react";
import { motion, type Variants, type Transition } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { CARDS } from "@/utils/cards";

const EASE: Transition["ease"] = [0.22, 1, 0.36, 1];

// appear from center
const centerIn: Variants = {
  hidden: { opacity: 0, scale: 0.4, y: 8 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.95, ease: EASE },
  },
};

export default function Obstacles() {
  const prev = useId();
  const next = useId();

  return (
    <section className="relative">
      <div
        className="
          absolute inset-x-0 top-0 z-0
          h-[200px] md:h-[230px]
          bg-linear-to-r from-primary-2 to-primary
          
        "
      />

      {/* Light bg under band */}
      <div
        className="absolute inset-x-0 bottom-0 -z-20 h-[58%] bg-[#F6F7F9]"
        aria-hidden
      />

      <div className="container relative">
        <motion.h2
          className="pt-6 md:pt-8 text-center text-white text-[20px] md:text-2xl font-extrabold"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={centerIn}
        >
          موانع رایج در دریافت خدمات تولید محتوا برای کسب‌وکارها
        </motion.h2>

        <motion.div
          className="mt-5 md:mt-7 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={centerIn}
        >
          <Swiper
            modules={[Autoplay, Navigation]}
            loop
            autoplay={{
              delay: 2600,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{ prevEl: `#${prev}`, nextEl: `#${next}` }}
            slidesPerView="auto" // slide width come from content
            spaceBetween={12}
            breakpoints={{
              640: { spaceBetween: 16 },
              1024: { spaceBetween: 20 },
            }}
            className="px-2! pb-6!"
          >
            {CARDS.map(({ t, d, Icon }, i) => (
              <SwiperSlide key={i} className="w-auto!">
                {" "}
                <div className="w-56 lg:w-72 h-48 lg:h-56">
                  {" "}
                  <article
                    className="
            w-full h-full bg-white rounded-[18px] border border-[#E6EAF1]
             p-5 md:p-6 text-center overflow-hidden
          "
                  >
                    <div
                      className="mx-auto mb-3 size-10 lg:size-14 grid place-items-center rounded-[12px]
                          bg-[color-mix(in oklab,var(--color-primary) 12%,white)]
                          text-primary"
                    >
                      <Icon />
                    </div>

                    <h3 className="text-xs font-bold mb-2 leading-6">{t}</h3>
                    <p className=" text-xs font-medium text-body leading-5">
                      {d}
                    </p>
                  </article>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* nav buttons above track */}
          <div className="pointer-events-none">
            <button
              id={prev}
              aria-label="قبلی"
              className="
                pointer-events-auto hidden lg:grid absolute left-0 top-1/2 -translate-y-1/2 z-20
                 place-items-center size-8 md:size-9 rounded-lg bg-white text-[#B1B1B1] text-2xl
                 border border-[#E6EAF1] cursor-pointer
              "
            >
              ›
            </button>
            <button
              id={next}
              aria-label="بعدی"
              className="
                pointer-events-auto absolute right-0 top-1/2 -translate-y-1/2 z-20
                hidden lg:grid place-items-center size-8 md:size-9 rounded-lg bg-white text-[#B1B1B1] text-2xl
                shadow- border border-[#E6EAF1] cursor-pointer
              "
            >
              ‹
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
