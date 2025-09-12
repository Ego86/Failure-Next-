"use client";

import Link from "next/link";
import { useMemo } from "react";  
import { listComponents } from "../../constants/navigation/navigation";
import styles from "./aside.module.scss";
import Header from "@/widgets/header";

const Aside = ({ className }) => {
  const list = useMemo(
    () =>
      listComponents.map(({ url, title, Icon }, index) => {
        return (
          <li key={index}>
            <Link href={url}>
              <Icon className={styles.icon} />
              {title}
            </Link>
          </li>
        );
      }),
    []
  );

  return (
    <aside  className={`${styles.aside} ${className}`}>
      <Header />
      <nav className={`${styles.navList} ${styles.navDefault}`}>
        <ul>{list}</ul>
      </nav>

      <footer></footer>
    </aside>
  );
};

export default Aside;
