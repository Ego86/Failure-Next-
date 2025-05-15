"use client"
import useWindowSize from "@/shared/hook/useWindowSize";
import { redirect } from "next/navigation";
;

const ChatsLayout = ({ children}) => {
  const [width] = useWindowSize()
  if(width <= 1000) {
    redirect("/chats")
  }
  return <>{children}</>;
};

export default ChatsLayout;
