import { ReactNode } from "react";
import styles from "./platfromArticle.module.scss";
type TypeArticle = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
const PlatfomArticle = ({
  className,
  children,
  ...props
}: {
  className?: string;
  children?: ReactNode;
} & TypeArticle) => {
  
  return (
    <article {...props} className={`${styles.article} ${className}`}>{children}</article>
  );
};

export default PlatfomArticle;
