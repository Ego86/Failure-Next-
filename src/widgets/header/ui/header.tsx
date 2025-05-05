import Logo from "@shared/ui/logo/logo";
import style from "./header.module.scss";
import Link from "next/link";

export const Header = () => {
  return (
    <header className={style.header}>
      <Link href="/">
        <Logo color="#fff" />
      </Link>
      
    </header>
  );
};
