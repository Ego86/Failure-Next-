import { RefObject } from "react";

const Chat = ({chatRef, messages}: { chatRef:RefObject<HTMLDivElement | null>, messages: string[]}) => {
  return (
    <div ref={chatRef} className="overflow-auto ">
      {messages.map((message, index) => (
        <p
          className="break-all px-3 py-2 bg-[#6F4C3E] rounded-lg max-w-[300px] w-max mb-3"
          key={index}
        >
          {message.trim()}
        </p>
      ))}
    </div>
  );
};

export default Chat;
