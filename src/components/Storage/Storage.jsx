import React from "react";
import styles from "./Storage.module.css";

const Storage = () => {
  return (
    <div className={`${styles.contentWrapper} ${styles.fadeIn}`}>
      <p className={styles.comingSoonText}>
        Информация насчет хранения, появится на сайте немного позже
      </p>
    </div>
  );
};
export default Storage;
