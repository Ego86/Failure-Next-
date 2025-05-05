"use client";

import { ChevronLeft, ChevronRight, DoorClosed } from "lucide-react";
import { Dispatch, memo, SetStateAction, useCallback, useState } from "react";
import Image from "@/shared/ui/image/image";
import Button from "@/shared/ui/button/Button";
import styles from "./Slider.module.scss";

export const Slider = memo(
  ({
    setOpenSlider,
    imgs,
  }: {
    setOpenSlider: Dispatch<SetStateAction<boolean>>;
    imgs: string[];
  }) => {
    const [countImg, setCountImg] = useState(0);
    const images = imgs.map((img, index) => {
      if (countImg === index) {
        return (
          <Image
            width={900}
            height={500}
            sizes="(max-width: 900px) 100vw, (min-width: 320px) 50vw,"
            style={{
              maxWidth: "900px",
              minWidth: "320px",
              maxHeight: "500px",
              minHeight: "300px"
            }}
            key={index}
            unoptimized={true}
            className={styles.active}
            src={img}
          />
        );
      }
    });

    const handleClickLeft = useCallback(() => {
      if (countImg <= 0) {
        setCountImg(imgs.length - 1);
      } else {
        setCountImg((prev) => (prev -= 1));
      }
    }, [countImg, imgs.length]);
    
    const handleClickRight = useCallback(() => {
      if (countImg >= imgs.length - 1) {
        setCountImg(0);
      } else {
        setCountImg((prev) => (prev += 1));
      }
    }, [countImg, imgs.length]);

    return (
      <div className={styles.slider}>
        <Button
          onClick={() => setOpenSlider((prev) => !prev)}
          className={styles.closeBtn}
        >
          <DoorClosed />
        </Button>
        <Button onClick={handleClickLeft}>
          <ChevronLeft />
        </Button>
        {images}
        <Button onClick={handleClickRight}>
          <ChevronRight />
        </Button>
      </div>
    );
  }
);
