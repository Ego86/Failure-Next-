import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

const useWebSocket = () => {
  const [messages, setMessages] = useState<string[]>([])
  const socket = useRef(io("failure-next-enderfeed342-gmailcom-failures-projects.vercel.app"));

  useEffect(() => {
    const socketInstance = socket.current;

    socketInstance.on("connect", () => {
      console.log("connected");
    });

    socketInstance.on("connect_error", (error) => {
      console.error("Socket connection error:", error);
    });

    socketInstance.on("receive_message", (message: string) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socketInstance.off("receive_message");
      socketInstance.disconnect();
    };
  }, []);
return {socket, messages}
};

export default useWebSocket;

// const socket = new WebSocket("ws://localhost:3001");

// const send = (message) => {
//   socket.onopen = () => {
//     console.log("✅ WebSocket connected");
//     socket.send(message);
//   };
// };
// };
// const close = () => {
//   socket.onclose = () => {
//     console.log("❌ WebSocket disconnected");
//   };
// return {
//   send,
//   message: socket.onmessage = (event) => {
//     return event.data;
//   },
//   close
// };
