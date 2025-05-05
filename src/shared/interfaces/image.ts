

export interface IImageCompoentProps {
    className?: string;
    blur?: boolean;
    src: string | URL;
    alt?: string;
    width?: number;
    height?: number;
    unoptimized?: boolean;
    fill?: boolean;
    sizes?: string;
    style?: object
  }