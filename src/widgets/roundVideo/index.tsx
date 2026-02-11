"use client"
import { useEffect, useRef, useState } from "react";

const SimpleRoundVideo = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [hasAccess, setHasAccess] = useState(false);
  const [isRequesting, setIsRequesting] = useState(false);
  
  const requestCamera = async() => {
    if (typeof window === "undefined" || !navigator.mediaDevices?.getUserMedia) {
      alert("Ваш браузер не поддерживает камеру");
      return;
    }
    setIsRequesting(true);
    
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(stream => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setHasAccess(true);
        }
      })
      .catch(err => {
        alert(`Ошибка доступа к камере: ${err.message}`);
      })
      .finally(() => {
        setIsRequesting(false);
      });
  };
  
  // useEffect(() => {
  //   return () => {
  //     // if (videoRef.current?.srcObject ) {
  //     //   videoRef.current.srcObject.getTracks().forEach(track => track.stop());
  //     // }
  //   };
  // }, []);
  
  if (!hasAccess) {
    return (
      <div style={{
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        background: "#f0f0f0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "2px solid #ccc"
      }}>
        <button
          onClick={requestCamera}
          disabled={isRequesting}
          style={{
            padding: "10px 20px",
            background: "#1890ff",
            color: "white",
            border: "none",
            borderRadius: "20px",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          {isRequesting ? "Запрос..." : "Включить камеру"}
        </button>
      </div>
    );
  }
  
  return (
    <video
      ref={videoRef}
      autoPlay
      playsInline
      muted
      style={{
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        objectFit: "cover",
        border: "3px solid #52c41a"
      }}
    />
  );
};

export default SimpleRoundVideo;