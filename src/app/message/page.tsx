"use client";

import { useCallback, useState } from "react";
import { Magnet } from "lucide-react";
import PlatfomSection from "@/shared/ui/platformSection/UI/platfomSection";
import useWebSocket from "@/shared/hook/useWebSocket";
import MessageForm from "./messageForm/messageForm";
import FriendsList from "@/entities/friend-list/friend-list";

const human = [
  { icon: <Magnet />, name: "alex" },
  { icon: <Magnet />, name: "sema" },
  { icon: <Magnet />, name: "petr" },
  { icon: <Magnet />, name: "vasa" },
];

const Message = () => {
  const [value, setValue] = useState<string>("");
  const { socket, messages } = useWebSocket();

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

  return (
    <div className="flex w-screen h-screen">
      <FriendsList friends={human as []}/>
      <PlatfomSection className="w-full h-2/3 relative">
        <div className="overflow-auto ">
          {messages.map((message, index) => (
            <p key={index}>{message}</p>
          ))}
        </div>
        <MessageForm
          handleSendMessage={handleSendMessage}
          value={value}
          setValue={setValue}
        />
      </PlatfomSection>
    </div>
  );
};

export default Message;
