"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Magnet } from "lucide-react";
import PlatfomSection from "@/shared/ui/platformSection/UI/platfomSection";
import useWebSocket from "@/shared/hook/useWebSocket";
import MessageForm from "./messageForm/messageForm";
import FriendsList from "@/features/friend-list/friend-list";
import Main from "@/shared/ui/main";

const human = [
  { icon: <Magnet />, name: "alex" },
  { icon: <Magnet />, name: "sema" },
  { icon: <Magnet />, name: "petr" },
  { icon: <Magnet />, name: "vasa" },
];

const Message = () => {
  const [value, setValue] = useState<string>("");
  const { socket, messages } = useWebSocket();
  const chatRef = useRef<HTMLDivElement>(null)
  const handleSendMessage = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      if (value.trim()) {
        socket.current.emit("send_message", value);
        setValue("");
      }
    },
    [socket, value]
  );
useEffect(() => {
  const chat:  HTMLDivElement | null = chatRef.current
chat?.scrollTo(0, chat.clientHeight)
}, [messages])
  return (
    <Main className="flex w-full h-full">
      <FriendsList friends={human as []}/>
      <PlatfomSection className="w-full flex flex-col justify-between overflow-hidden p-5 ">
        <div ref={chatRef} className="overflow-auto ">
          {messages.map((message, index) => (
            <p className="break-all px-3 py-2 bg-[#6F4C3E] rounded-lg max-w-[300px] w-max mb-3" key={index}>{message.trim()}</p>
          ))}
        </div>
        <MessageForm
          handleSendMessage={handleSendMessage}
          value={value}
          setValue={setValue}
        />
      </PlatfomSection>
    </Main>
  );
};

export default Message;
