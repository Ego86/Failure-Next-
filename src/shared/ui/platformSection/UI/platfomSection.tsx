import { ReactNode } from "react";
import styles from "./platform.module.scss";
type TypeSection = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
const PlatfomSection = ({
  className,
  children,
  ...props
}: {
  className?: string;
  children?: ReactNode;
} & TypeSection) => {
  return (
    <section {...props} className={`${styles.section} ${className}`}>{children}</section>
  );
};

export default PlatfomSection;
