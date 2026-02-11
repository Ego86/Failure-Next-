"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Magnet } from "lucide-react";
import PlatfomSection from "@/shared/ui/platformSection/UI/platfomSection";
import useWebSocket from "@/shared/hook/useWebSocket";
import FriendsList from "@/features/friend-list/friend-list";
import Main from "@/shared/ui/main";
import MessagesList from "./ui/messagesList";
import ChatForm from "./ui/chatForm";
import useWindowSize from "@/shared/hook/useWindowSize";


const human = [
  { icon: <Magnet />, name: "alex" },
  { icon: <Magnet />, name: "sema" },
  { icon: <Magnet />, name: "petr" },
  { icon: <Magnet />, name: "vasa" },
];
 
const Message = () => {
  const [value, setValue] = useState<string>("");
  const { socket, messages } = useWebSocket();
  const chatRef = useRef<HTMLDivElement>(null);
const [width] = useWindowSize()
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
    const chat: HTMLDivElement | null = chatRef.current;
    chat?.scrollTo(0, chat.clientHeight);
  }, [messages]);
  
  return (
    <Main className="flex w-full h-full">
      {width > 1000 && <FriendsList friends={human as []} />}
      <PlatfomSection className="w-full flex flex-col justify-between overflow-hidden p-5 ">
        <MessagesList chatRef={chatRef} messages={messages}/>
        <ChatForm
          handleSendMessage={handleSendMessage}
          value={value}
          setValue={setValue}
        />
      </PlatfomSection>
    </Main>
  );
};

export default Message;
