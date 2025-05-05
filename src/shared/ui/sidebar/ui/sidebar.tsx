"use client";

import Link from "next/link";
import {  useMemo, useState } from "react";
import { PanelLeftOpen, PanelRightOpen } from "lucide-react";
import { listComponents } from "../../constants/navigation/navigation";
import styles from "./sidebar.module.scss";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const list = useMemo(
    () =>
      listComponents.map(({ url, title, Icon }, index) => {
        return (
          <li key={index}>
            <Link href={url}>
              <Icon className={isOpen ? styles.icon : ""} />
              {isOpen ? title : ""}
            </Link>
          </li>
        );
      }),
    [isOpen]
  );

  return (
    <nav
      className={`${styles.navList} ${
        isOpen ? styles.navOpen : styles.navDefault
      }`}
    >
      <button
        className={isOpen ? styles.btnActive : styles.btnDefault}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <PanelRightOpen /> : <PanelLeftOpen />}
      </button>
      <ul>{list}</ul>
    </nav>
  );
};

export default Sidebar;
