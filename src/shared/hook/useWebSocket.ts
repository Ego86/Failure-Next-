import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

const useWebSocket = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const socket = useRef(
    io("https://failure-server.onrender.com", {
      transports: ["polling", "websocket"],
      upgrade: true,
      reconnection: true,
    })
  );
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
  return { socket, messages };
};

export default useWebSocket;
