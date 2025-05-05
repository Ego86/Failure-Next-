import { useState } from "react";
import PlatfomArticle from "../platformArticle/UI/platfomArticle";
import styles from "./alertWindow.module.scss";
const AlertWindow = ({ children }: { children: string }) => {
  const [isActive, setIsActive] = useState<boolean>(true);
  const handleClose = () => {
    setIsActive(false);
  };
  return (
    <>
      {isActive ? (
        <>
          <div className={styles.overlay} onClick={handleClose} />
          <PlatfomArticle onClick={handleClose} className={styles.alertWrapper}>
            {children}
          </PlatfomArticle>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default AlertWindow;
