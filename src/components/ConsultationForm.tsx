"use client";

import { useMemo, useState } from "react";
import { motion, type Variants, type Transition } from "framer-motion";
import { MailIcon, NameIcon, PhoneIcon } from "./icons";
import { Errors, Fields, ServiceKey } from "@/utils/types";

const EASE: Transition["ease"] = [0.22, 1, 0.36, 1];

const topIn: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.95, ease: EASE } },
};

const centerIn: Variants = {
  hidden: { opacity: 0, scale: 0.4, y: 8 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.95, ease: EASE },
  },
};

const SERVICE_LABELS: Record<ServiceKey, string> = {
  seo: "خدمات سئو",
  web: "طراحی وب سایت",
  automation: "اتوماسیون و بازاریابی",
  campaigns: "کمپین‌های بازاریابی و تبلیغاتی",
  content: "خدمات تولید محتوا",
};

export default function ConsultationForm() {
  const [fields, setFields] = useState<Fields>({
    name: "",
    email: "",
    phone: "",
    services: {
      seo: false,
      web: false,
      automation: false,
      campaigns: false,
      content: false,
    },
    note: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);

  function onFieldChange<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((prev) => ({ ...prev, [key]: value }));
  }
  function onServiceToggle(key: ServiceKey, checked: boolean) {
    setFields((prev) => ({
      ...prev,
      services: { ...prev.services, [key]: checked },
    }));
  }

  const hasAnyService = useMemo(
    () => Object.values(fields.services).some(Boolean),
    [fields.services]
  );

  function validate(): Errors {
    const errs: Errors = {};
    if (!fields.name.trim())
      errs.name = "لطفاً نام و نام خانوادگی را وارد کنید.";
    if (!fields.email.trim()) {
      errs.email = "ایمیل را وارد کنید.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      errs.email = "فرمت ایمیل صحیح نیست.";
    }
    if (!fields.phone.trim()) {
      errs.phone = "شماره تماس را وارد کنید.";
    } else if (!/^0\d{9,10}$/.test(fields.phone.replace(/\D/g, ""))) {
      errs.phone = "شماره تماس معتبر نیست.";
    }
    if (!hasAnyService) errs.services = "حداقل یک سرویس را انتخاب کنید.";
    return errs;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length > 0) return;

    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 2000));
    setSubmitting(false);
    console.log("فرم ارسال شد");
  }

  return (
    <section className="container py-10 md:py-14">
      <motion.div
        className="text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={topIn}
      >
        <h2 className="text-lg md:text-xl font-bold text-ink">
          فرم دریافت مشاوره
        </h2>
        <p className="mt-4 md:mt-6 font-medium md:font-semibold text-sm md:text-base text-body">
          برای ارتقای بیزینس خود به دنبال فرصتی ناب هستید؟ فرم زیر را تکمیل کنید
          تا مشاوران ما به صورت کاملاً رایگان شما را راهنمایی کنند.
        </p>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={centerIn}
        className="
          mt-4 md:mt-8 bg-white rounded-lg border border-[#E6EAF1]
            py-8 px-4 lg:py-10 lg:px-10
        "
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 items-start">
          <div className="relative">
            <label className="block text-ink  mb-2  text-xs font-medium lg:text-sm lg:font-semibold ">
              نام و نام خانوادگی خود را وارد کنید
            </label>
            <input
              className="w-full h-12 rounded-xl border text-xs font-medium border-[#E6EAF1] pr-12 pl-4 bg-bg
                 text-ink placeholder:textmuted
                 focus:outline-none focus:ring-2 focus:ring-ring"
              value={fields.name}
              onChange={(e) => onFieldChange("name", e.target.value)}
              placeholder="نام و نام خانوادگی"
            />
            <span
              aria-hidden
              className="absolute right-3 top-6 translate-y-1/2
                 size-7 rounded-full grid place-items-center
                   text-red-500!"
            >
              <NameIcon />
            </span>
            {errors.name && (
              <span className="mt-1 text-xs text-red-500">{errors.name}</span>
            )}
          </div>

          <div className="relative">
            <label className="block text-ink text-sm mb-2 font-medium lg:text-sm lg:font-semibold ">
              آدرس ایمیل خود را وارد کنید
            </label>
            <input
              type="email"
              className="w-full h-12 rounded-xl border border-[#E6EAF1] pr-12 pl-4  text-xs font-medium bg-bg
                 text-ink placeholder:text-muted
                 focus:outline-none focus:ring-2 focus:ring-ring"
              value={fields.email}
              onChange={(e) => onFieldChange("email", e.target.value)}
              placeholder="address@mail.com"
            />
            <span
              aria-hidden
              className="absolute right-3 top-6 translate-y-1/2
                 size-7 rounded-full grid place-items-center
                   text-red-500"
            >
              <MailIcon />
            </span>
            {errors.email && (
              <span className="mt-1 text-xs text-red-500">{errors.email}</span>
            )}
          </div>

          <div className="relative">
            <label className="block text-ink text-xs font-medium lg:text-sm lg:font-semibold mb-2">
              شماره تماس خود را وارد کنید
            </label>
            <input
              inputMode="tel"
              className="w-full h-12 rounded-xl border border-[#E6EAF1] pr-12 pl-4 bg-bg  text-xs font-medium
                 text-ink placeholder:text-muted
                 focus:outline-none focus:ring-2 focus:ring-ring"
              value={fields.phone}
              onChange={(e) => onFieldChange("phone", e.target.value)}
              placeholder="09123456789"
            />
            <span
              aria-hidden
              className="absolute right-3 top-6 translate-y-1/2
                 size-7 rounded-full grid place-items-center
              text-red-500"
            >
              <PhoneIcon />
            </span>
            {errors.phone && (
              <span className="mt-1 text-xs text-red-500">{errors.phone}</span>
            )}
          </div>
        </div>

        <div className="mt-6">
          <p className="text-ink  mb-3 font-medium text-sm lg:font-semibold">
            نوع سرویس(های) مورد نظر خود را انتخاب کنید.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 text-xs font-medium">
            {(Object.keys(SERVICE_LABELS) as ServiceKey[]).map((key) => {
              const checked = fields.services[key];
              return (
                <label
                  key={key}
                  className={`
                    flex items-center justify-start gap-2 h-11 rounded-xl border px-4 cursor-pointer select-none text-xs font-medium
                    ${
                      checked
                        ? "border-primary bg-[color-mix(in oklab,var(--color-primary) 8%,white)]"
                        : "border-[#E6EAF1] bg-bg"
                    }
                  `}
                >
                  <input
                    type="checkbox"
                    className="accent-primary size-4 bg-[#ECECEC] text-xs font-medium"
                    checked={checked}
                    onChange={(e) => onServiceToggle(key, e.target.checked)}
                  />
                  <span className="text-[13px]">{SERVICE_LABELS[key]}</span>
                </label>
              );
            })}
          </div>
          {errors.services && (
            <span className="mt-2 text-xs text-red-500">{errors.services}</span>
          )}
        </div>

        <div className="mt-6">
          <p className="text-ink  mb-3  font-medium text-sm lg:font-semibold">
            در مورد درخواست خود برای ما بنویسید.
          </p>
          <textarea
            className="w-full min-h-[150px] rounded-xl border border-[#E6EAF1] p-4 focus:outline-none focus:ring-2 focus:ring-ring bg-bg text-xs font-medium"
            value={fields.note}
            onChange={(e) => onFieldChange("note", e.target.value)}
            placeholder="توضیحات (اختیاری)"
          />
        </div>

        <div className="mt-6 md:mt-8">
          <button
            type="submit"
            disabled={submitting}
            className="
              w-full md:w-[420px] mx-auto block
              h-11 px-6 rounded-lg md:rounded-xl bg-ink text-white text-sm md:text-base font-bold
              disabled:opacity-60 disabled:cursor-not-allowed
              hover:bg-ink/90 transition cursor-pointer
            "
          >
            {submitting ? "در حال ارسال…" : "ثبت درخواست"}
          </button>
        </div>
      </motion.form>
    </section>
  );
}
