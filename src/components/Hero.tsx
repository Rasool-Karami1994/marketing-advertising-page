import Image from "next/image";
import HeroClient from "./HeroClient";

export default async function HeroServer() {
  const data = {
    title: "کمپین‌های بازاریابی و تبلیغاتی",
    description:
      "آیا به دنبال راهی مطمئن برای دیده شدن برندتان هستید؟ مشاوره رایگان به شما کمک می‌کند تا مسیر موفقیت را پیدا کنید. همین حالا قدم اول را بردارید!",
    helper: "جهت دریافت مشاوره رایگان با شماره‌ی زیر تماس بگیرید",
    cta: "دریافت مشاوره",
    imageSrc: "/hero.svg",
  };

  return (
    <section
      className="
        container
        py-10 lg:py-(--space-heroY)
        grid grid-cols-1 lg:grid-cols-[1.05fr_.95fr]
        items-center gap-8 lg:gap-16
        lg:[direction:ltr]
      "
    >
      <div className="order-1 lg:order-1 justify-self-center [direction:rtl]">
        <div
          className="
          relative mx-auto
          w-[312px] sm:w-[360px] md:w-[520px] lg:w-[620px] xl:w-[690px]
          aspect-312/193 md:aspect-690/480
        "
        >
          <Image
            src={data.imageSrc}
            alt={data.title}
            fill
            priority
            className="object-contain"
            sizes="
              (min-width:1280px) 690px,
              (min-width:1024px) 620px,
              (min-width:768px) 520px,
              (min-width:640px) 360px,
              312px
            "
          />
        </div>
      </div>

      <HeroClient
        className="order-2 lg:order-2 text-center lg:text-right [direction:rtl]"
        title={data.title}
        description={data.description}
        helper={data.helper}
        cta={data.cta}
      />
    </section>
  );
}
