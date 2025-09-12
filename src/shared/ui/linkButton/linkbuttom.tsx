
import styles from "./linkButtom.module.scss";
import { FC, HTMLProps, JSX } from "react";
import Link, { LinkProps } from "next/link";
import { ILinkButton } from "@/shared/interfaces/linkButton";

const LinkButton: FC<LinkProps & HTMLProps<HTMLAnchorElement> & ILinkButton> = ({
  isActive = false,
  href,
  className,
  variant,
  children,
  ...props
}) => {
  const link: JSX.Element = (
    <Link
    href={href}
      className={`${
        variant === "containd"
          ? styles.link
          : variant === "outline"
          ? styles.linkOutline
          : "py-2 px-5 hover:bg-slate-800 rounded-lg"
      } ${className} ${isActive && styles.active}`}
      {...props}
    >
      {children}
    </Link>
  );

  return link;
};

export default LinkButton;
