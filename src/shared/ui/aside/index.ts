"use client";

import dynamic from "next/dynamic";

export { default as Aside } from "./ui/aside";
export const LazyAside = dynamic(() => import("./ui/aside"), {
  ssr: false,
});
