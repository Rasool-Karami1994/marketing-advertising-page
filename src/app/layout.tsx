import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const iranSansFaNum = localFont({
  src: [{ path: "./font/IranianSans.ttf", weight: "400", style: "normal" }],
  variable: "--font-iransansx-fanum",
  display: "swap",
});
export const metadata: Metadata = {
  title: "کمپین‌های بازاریابی و تبلیغاتی",
  description: "Landing page – task",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={iranSansFaNum.variable}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <footer className="mt-10 md:mt-[101px] bg-black h-36 md:h-[365px]"></footer>
      </body>
    </html>
  );
}
