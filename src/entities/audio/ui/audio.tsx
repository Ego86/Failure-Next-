"use client";

import Button from "@/shared/ui/button/Button";
import PlatfomSection from "@/shared/ui/platformSection/UI/platfomSection";
import { Pause, Play, Volume2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./audio.module.scss";

export const Audio = ({ className }: { className?: string }) => {
  const [play, setPlay] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlay = () => {
    if (audioRef.current) {
      if (play) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setPlay((prev) => !prev);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      const newTime =
        (parseFloat(event.target.value) / 100) * audioRef.current.duration;
      audioRef.current.currentTime = newTime;
    }
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(event.target.value) / 100;
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    setVolume(newVolume);
  };

  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.addEventListener("timeupdate", handleTimeUpdate);
    }
    return () => {
      if (audioElement) {
        audioElement.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
  }, []);

  return (
    <PlatfomSection className={`${styles.containerAudio} ${className}`}>
      <audio
        ref={audioRef}
        src="NLO22 - MYICE Alternate Version.mp3"
        preload="auto"
      />
      <Image
        src="/car.png"
        width={300}
        height={300}
        className="mb-3 rounded-lg w-[300px] h-auto"
        alt="car"
      />
      <div className="mb-3">
        <h3>
          <strong>MYICE</strong>
        </h3>
        <cite className="text-sm text-slate-500">NLO22</cite>
      </div>
      <div className={styles.wrapperControls}>
        <input
          type="range"
          value={(currentTime / (audioRef.current?.duration || 1)) * 100}
          onChange={handleSeek}
          className="h-2 mb-3  bg-gray-300 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex mb-3  justify-center w-full">
          <Button variant="containd">{"<"}</Button>
          <Button className="mx-2" variant="containd" onClick={handlePlay}>
            {play ? <Pause /> : <Play />}
          </Button>
          <Button variant="containd">{">"}</Button>
        </div>
        <div className="flex items-center">
          <Volume2 className="mr-2" />
          <input
            type="range"
            value={volume * 100}
            onChange={handleVolumeChange}
            className="flex-1 h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>
    </PlatfomSection>
  );
};
