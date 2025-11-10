"use client";

import { useState } from "react";
import { motion, type Variants, type Transition } from "framer-motion";
import { ITEMS } from "@/utils/mock-data";

const EASE: Transition["ease"] = [0.22, 1, 0.36, 1];

const topIn = (delay = 0.95): Variants => ({
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.95, ease: EASE, delay },
  },
});

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number>(-1);

  const toggle = (i: number) => setOpenIndex((cur) => (cur === i ? -1 : i));

  return (
    <section className="container">
      <div
        className="
          md:rounded-lg md:border md:border-[#E6EAF1] bg-bg md:bg-white 
           py-10  md:py-20 md:px-10 lg:[direction:ltr]
        "
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_.6fr] items-start gap-6 ">
          <motion.div
            className="order-1 lg:order-2 text-center lg:text-right "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={topIn(0)}
          >
            <h3 className="text-lg md:text-3xl font-bold uppercase tracking-wide text-ink">
              FAQ
            </h3>
            <h3 className="mt-2 md:mt-4 text-lg md:text-2xl font-bold text-ink">
              سوالات متداولی که از ما می‌پرسید
            </h3>
            <p className="mt-2 text-base font-medium text-body leading-8 hidden md:block">
              سوالات متداولی که ممکن است نیاز شما نیز باشند در اینجا پاسخ داده
              شده‌اند
            </p>
          </motion.div>
          <motion.div
            className="order-2 lg:order-1 "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={topIn(0.12)}
          >
            <ul className="space-y-3  [direction:rtl]">
              {ITEMS.map((it, i) => {
                const open = i === openIndex;
                return (
                  <li key={i}>
                    <div
                      className="
                        rounded-lg bg-bg border border-[#E6EAF1]
                        overflow-hidden 
                      "
                    >
                      <button
                        type="button"
                        aria-expanded={open}
                        onClick={() => toggle(i)}
                        className="
                          w-full h-12 md:h-[52px] px-4 md:px-6 py-2 md:py-4
                          flex items-center justify-between gap-4 text-right
                          text-xs md:text-base font-bold text-ink cursor-pointer
                        "
                      >
                        <span className="truncate">{it.q}</span>

                        <span
                          className="
                            shrink-0 size-6 rounded-full grid place-items-center
                            border border-[#6B6B6B] md:border-[#515151] text-[#6B6B6B] md:text-[#515151] bg-bg
                          "
                          aria-hidden
                        >
                          <span className="relative block w-3 md:w-3.5 h-0.5 bg-current">
                            <span
                              className={`absolute inset-0 transition-transform duration-200 ${
                                open ? "scale-x-0" : "scale-x-100"
                              }`}
                            />
                          </span>
                          <span
                            className={`absolute block w-0.5 h-3 md:h-3.5 bg-current transition-transform duration-200 ${
                              open ? "scale-y-0" : "scale-y-100"
                            }`}
                          />
                        </span>
                      </button>

                      <div
                        className={`
                          grid transition-[grid-template-rows] duration-300 ease-out
                          ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
                        `}
                      >
                        <div className="overflow-hidden">
                          <div className="px-4 md:px-5 pb-4 md:pb-5 text-[13.5px] md:text-[14px] leading-7 text-body">
                            {it.a}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
