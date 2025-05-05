import Link from "next/link";
import { memo } from "react";
import { listComponents } from "../../constants/navigation/navigation";
import { IPropsModelNavigation } from "../model/interface";
import style from "./modalNavigation.module.scss";

const ModalNav = memo(({ isActive = false }: IPropsModelNavigation) => {

  const list = listComponents.map(({ url, title, Icon }, index) => {
    return (
      <li key={index}>
        <Link href={url}>
          <Icon />
          {title}
        </Link>
      </li>
    );
  });

  return (
    <nav className={`${style.navList} ${isActive ? style.Active : ""}`}>
      <ul>{list}</ul>
    </nav>
  );
});

export default ModalNav;
