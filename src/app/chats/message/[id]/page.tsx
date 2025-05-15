"use client"

import useWebSocket from "@/shared/hook/useWebSocket";
import Button from "@/shared/ui/button/Button";
import Input from "@/shared/ui/input/input";
import PlatfomSection from "@/shared/ui/platformSection/UI/platfomSection";
import { useState } from "react";

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
  );
};

export default Message;
