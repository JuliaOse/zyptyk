import { Inter } from "next/font/google";
import { Caveat } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"], // Include weights you need
});
