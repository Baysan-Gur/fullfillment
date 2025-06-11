import React from "react";
import styles from "./Storage.module.css";
import { FaSpinner } from "react-icons/fa";

const Storage = () => {
  return (
    <div className={`${styles.contentWrapper} ${styles.fadeIn}`}>
      <h2 className={styles.comingSoonTitle}>
        Информация о хранении — скоро
      </h2>
      <div className={styles.spinner}>
        <FaSpinner className={styles.spinIcon} />
      </div>
    </div>
  );
};

export default Storage;
