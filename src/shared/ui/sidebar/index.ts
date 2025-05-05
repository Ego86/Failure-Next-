"use client";

import dynamic from "next/dynamic";

export { default as SideBar } from "./ui/sidebar";
export const LazySideBar = dynamic(() => import("./ui/sidebar"), {
  ssr: false,
});
