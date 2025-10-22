import Link from "next/link";
import { listComponents } from "@shared/constants/navigation/constants";
import styles from "./aside.module.scss";
import Header from "@/widgets/header";

const Aside = ({ className }) => {
  const list = listComponents.map(({ url, title, Icon }, index) => {
        return (
          <li key={index}>
            <Link href={url}>
              <Icon className={styles.icon} />
              {title}
            </Link>
          </li>
        );
      })
    

  return (
    <div className="flex items-center">
      <aside  className={`${styles.aside} ${className}`}>
        <Header />
        <nav className={`${styles.navList} ${styles.navDefault}`}>
          <ul>{list}</ul>
        </nav>
      
        <footer></footer>
      </aside>
    </div>
  );
};

export default Aside;
