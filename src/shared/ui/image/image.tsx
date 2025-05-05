import Image from "next/image";
import style from "./image.module.scss";
import { IImageCompoentProps } from "@/shared/interfaces/image";

const ImageComponent = ({
  className,
  blur,
  src,
  alt,
  ...props
}: IImageCompoentProps) => {
  return (
    <Image
      {...props}
      src={src as string}
      className={`${blur ? style.blur : ""} ${className}`}
      draggable={false}
      alt={alt ? alt : (src as string)}
    />
  );
};

export default ImageComponent;
