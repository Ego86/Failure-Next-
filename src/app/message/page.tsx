"use client";

import { Magnet } from "lucide-react";
import { useState } from "react";
import Input from "@/shared/ui/input/input";
import PlatfomSection from "@/shared/ui/platformSection/UI/platfomSection";
import Button from "@/shared/ui/button/Button";
import useWebSocket from "@/shared/hook/useWebSocket";

const human = [
  { icon: <Magnet />, name: "alex" },
  { icon: <Magnet />, name: "sema" },
  { icon: <Magnet />, name: "petr" },
  { icon: <Magnet />, name: "vasa" },
];

const Message = () => {
  const [value, setValue] = useState<string>("");
  const { socket, messages } = useWebSocket();

  const handleSendMessage = (event: React.FormEvent) => {
    event.preventDefault();
    if (value.trim()) {
      socket.current.emit("send_message", value);
      setValue(""); 
    }
  };

  return (
    <div className="flex h-screen">
      <PlatfomSection className="max-w-32 h-52 px-2 py-3 overflow-auto mr-3">
        {human.map(({ icon, name }) => (
          <div key={name} className="flex m-2">
            {icon}
            <p className="ml-2">{name}</p>
          </div>
        ))}
      </PlatfomSection>
      <PlatfomSection className="w-full h-2/3 relative">
        <div className="overflow-auto ">
          {messages.map((message, index) => (
            <p key={index}>{message}</p>
          ))}
        </div>
        <form
          onSubmit={handleSendMessage}
          className="w-full flex absolute bottom-0"
        >
          <Input value={value} onChange={(e) => setValue(e.target.value)} />
          <Button>send</Button>
        </form>
      </PlatfomSection>
    </div>
  );
};

export default Message;
