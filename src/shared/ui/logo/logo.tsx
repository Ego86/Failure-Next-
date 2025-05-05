import { memo } from "react";
import ImageComponent from "../image/image";

interface ILogo {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

const Logo = memo(({ width = 50, height = 50, className, color }: ILogo) => {
  return (
    <ImageComponent
      src="logo.svg"
      style={{ color, stroke: color,  height: "auto" }}

      className={className}
      width={width}
      height={height}
    />
  );
});

export default Logo;
