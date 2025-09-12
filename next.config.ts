import { NextConfig } from "next";

const nextCofing: NextConfig = {
  sassOptions: {
    implementation: "sass-embedded",
  },
  eslint: { dirs: ["./eslint.config.ts"] },
};

export default nextCofing;
