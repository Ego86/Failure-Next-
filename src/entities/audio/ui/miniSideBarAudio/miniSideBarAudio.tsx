"use client";

import { IMiniSideBarAudioProps } from "@/shared/interfaces/audio";
import Button from "@/shared/ui/button/Button";
import { Pause, Play, Volume } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./miniSideBarAudio.module.scss";
export const MiniSideBarAudio = ({
  audio,
  isAudio,
}: IMiniSideBarAudioProps) => {
  const [isPlay, setIsPlay] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [volume, setVolume] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef) return;
    if (audioRef.current) {
      audioRef.current.volume = 0.1;
    }
  }, []);
  const handlerPlay = () => {
    if (!audioRef) return;
    if (!isPlay) {
      setIsPlay(true);
      audioRef.current?.play();
    } else {
      setIsPlay(false);
      audioRef.current?.pause();
    }
  };
  const handlerVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
const newVolume = parseFloat(event.target.value) / 100
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    setVolume(newVolume);  
};
  const handlerOpen = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div 
      className={`${styles.container} ${
        isOpen ? styles.openSideBar : styles.closeSideBar
      }`}
    >
      <div className={styles.wrapper}>
        <div className="flex">
          <Image
            width={60}
            height={60}
            className="w-[60px] h-[60px] rounded-full mr-2"
            src={audio.image}
            alt={audio.name}
          />
          {isOpen && <p className="text-2xl">{audio.name}</p>}
        </div>
        <audio ref={audioRef} src={audio.src} />
        <Button className="w-max" onClick={handlerPlay} variant="containd">
          {isPlay ? <Pause /> : <Play />}
        </Button>
        <div className="flex">
          <Button className="mr-2">
            <Volume />
          </Button>
          {isOpen && <input value={volume! * 100} onChange={handlerVolumeChange} type="range" />}
        </div>
      </div>
      <Button
        onClick={handlerOpen}
        variant="containd"
        className="h-full w-2 !p-2 "
      >
        {isOpen ? "<" : ">"}
      </Button>
    </div>
  );
};
