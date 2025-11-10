"use client";

import {
  motion,
  type Variants,
  type Transition,
  useReducedMotion,
} from "framer-motion";
import clsx from "clsx";

const EASE: Transition["ease"] = [0.22, 1, 0.36, 1];

const makeRightIn = (reduce: boolean): Variants => ({
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: reduce ? 0 : 0.95, ease: EASE },
  },
});

const makeUpIn = (reduce: boolean): Variants => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: reduce ? 0 : 0.95,
      ease: EASE,
      delay: reduce ? 0 : 0.08,
    },
  },
});

export default function HeroClient({
  className,
  title,
  description,
  helper,
  cta,
}: {
  className?: string;
  title: string;
  description: string;
  helper: string;
  cta: string;
}) {
  const reduce = useReducedMotion() ?? false;
  const rightIn = makeRightIn(reduce);
  const upIn = makeUpIn(reduce);

  return (
    <div className={clsx("mx-auto lg:mx-0", className)}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={rightIn}
      >
        <h1 className="text-lg lg:text-2xl font-bold leading-normal text-ink">
          {title}
        </h1>
        <p className="font-bold text-sm lg:text-lg mt-3 lg:mt-4 text-body leading-8 max-w-[520px] mx-auto lg:mx-0">
          {description}
        </p>
      </motion.div>

      <motion.div
        className="mt-4 lg:mt-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={upIn}
      >
        <p className="text-xs md:text-base font-semibold md:font-bold text-[#595959] lg:text-muted">
          {helper}
        </p>
        <button
          type="button"
          className="mt-4 lg:mt-8 h-10 lg:h-12 px-2 w-36 rounded-lg bg-primary text-white text-sm lg:text-lg font-semibold md:font-bold hover:bg-primary-2 transition"
        >
          {cta}
        </button>
      </motion.div>
    </div>
  );
}
