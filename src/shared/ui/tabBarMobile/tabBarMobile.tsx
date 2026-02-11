
import Link from "next/link";
import { listComponents } from "@shared/constants/navigation/constants";
import styles from "./tabBarMobile.module.scss";
const TabBarMobile = ({className}) => {
  return (
    <nav className={`${styles.nav} ${className}`} >
      <ul className="bg-[#151515] p-2 rounded-xl">
        {listComponents.map(({ title, Icon, url }) => {
          return (
            <li key={title}>
              <Link href={url}>
                <Icon />
                {/* {title} */}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default TabBarMobile;
