import React from "react";
import styles from "./Storage.module.css";

const Storage = () => {
  return (
    <div className={`${styles.contentWrapper} ${styles.fadeIn}`}>
    <div className={styles.contentWrapper}>
      <p className={styles.comingSoonText}>
        Информация насчет хранения, появится на сайте немного позже
      </p>
    </div>
    </div>
  );
};
export default Storage;
