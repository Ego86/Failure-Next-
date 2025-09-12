import { Noto_Sans } from "next/font/google";
import { Sanchez } from "next/font/google"

export const notoSans = Noto_Sans({ weight: "400", subsets: ["latin"] });

export const sanchez = Sanchez({
    subsets: ["latin"],
    weight: "400"
})