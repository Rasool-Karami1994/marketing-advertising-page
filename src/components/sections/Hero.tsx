"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

export default function Hero() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={stagger}
      className="container py-[72px] md:py-[96px]"
    >
      <div className="grid items-center gap-[32px] md:grid-cols-2">
        <motion.div variants={fadeUp}>
          <h1 className="text-[36px] leading-[44px] md:text-[48px] md:leading-[56px] font-bold tracking-[-0.02em]">
            {/* Figma heading text here */}
            تیتر سادهٔ بخش هیرو
          </h1>
          <p className="mt-[16px] text-[16px] leading-[26px] md:text-[18px] md:leading-[28px] text-text-muted max-w-[52ch]">
            {/* Figma subheading */}
            یک زیرتیتر کوتاه مطابق طراحی فیگما.
          </p>
          <div className="mt-[28px] flex gap-[12px]">
            <button className="px-[20px] h-[48px] rounded-[12px] bg-brand text-white font-medium">
              دکمه CTA
            </button>
            <button className="px-[20px] h-[48px] rounded-[12px] border border-gray-200">
              بیشتر بدانید
            </button>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="relative w-full h-[260px] md:h-[360px]"
        >
          <Image
            src="/hero.svg"
            alt="Hero visual"
            fill
            className="object-cover rounded-2xl shadow-card"
            priority
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
