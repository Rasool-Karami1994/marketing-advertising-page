import Link from "next/link";
import { HamburgerIcon, SearchIcon, UserIcon } from "./icons";

const NAV = [
  { href: "/", label: "خانه" },
  { href: "/web-design", label: "طراحی سایت" },
  { href: "/campaigns", label: "کمپین‌های بازاریابی و تبلیغاتی" },
  { href: "/automation", label: "اتوماسیون و بازاریابی" },
  { href: "/content", label: "تولید محتوا" },
  { href: "/seo", label: "سئو" },
  { href: "/contact", label: "تماس با ما" },
] as const;

export default function Header() {
  const isActive = (href: string) => href === "/campaigns";

  return (
    <header className="border-b border-[#ECEFF4] bg-white">
      <div className="container h-16 md:h-[71px] flex items-center justify-between ">
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="باز کردن منو"
            className="lg:hidden size-8 grid place-items-center  border border-[#E6EAF1] rounded-[12px] text-ink hover:bg-surface transition"
          >
            <HamburgerIcon />
          </button>
          <Link
            href="/"
            className="h-8 md:h-10 w-18 md:w-24 text-xs md:text-[18px]  px-4 grid place-items-center rounded-full bg-[#E9E9EB]  text-ink"
          >
            logo
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-7 text-sm">
          {NAV.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={"/"}
                className={`transition hover:text-ink  ${
                  active ? "font-bold text-ink" : "text-muted font-medium"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3 text-ink">
          <button
            type="button"
            aria-label="حساب کاربری"
            className="size-8 md:size-12 grid place-items-center rounded-[12px] border border-[#E6EAF1] text-ink hover:bg-surface transition cursor-pointer"
          >
            <UserIcon />
          </button>
          <button
            type="button"
            aria-label="جستجو"
            className="size-8 md:size-12 grid place-items-center rounded-[12px] border border-[#E6EAF1] text-ink hover:bg-surface transition cursor-pointer"
          >
            <SearchIcon />
          </button>
        </div>
      </div>
    </header>
  );
}
