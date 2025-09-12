import { ReactNode } from "react";
import styles from "./platform.module.scss";
type TypeSection = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
const PlatfomSection = ({
  children,
  ...props
}: {
  children?: ReactNode;
} & TypeSection) => {
  return (
    <section {...props} className={`${styles.section} ${props.className}`}>{children}</section>
  );
};

export default PlatfomSection;
