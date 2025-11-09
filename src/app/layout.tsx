import { iranSansFaNum } from "./fonts";

export const metadata = {
  title: "Tech Task",
  description: "Next.js 15 + Tailwind + Swiper",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${iranSansFaNum.variable} min-h-dvh bg-white text-text-primary antialiased font-sans`}
      >
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
