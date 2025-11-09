import { Vazirmatn } from "next/font/google";

export const iranSansFaNum = Vazirmatn({
  subsets: ["arabic"],
  weight: ["400", "500", "700"], // adjust if you need more
  display: "swap",
  variable: "--font-iransansxfanum", // keep this var name so we can swap later
});
