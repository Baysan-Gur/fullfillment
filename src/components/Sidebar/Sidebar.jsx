import React from "react";
import styles from "./Sidebar.module.css";
import TelegramIcon from "../fon-icon/telegram-icon.png";
import WhatsapIcon from "../fon-icon/whatsap-icon.png";

const Sidebar = ({ handleOpenSidebar, refs, isOpen }) => {
  const { serviceRef, howRef, advantagesRef, storageRef } = refs;

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    handleOpenSidebar();
  };

  return (
    <div className={`${styles.sidebarNav} ${isOpen ? styles.open : styles.close}`}>
      <button className={styles.closeButton} onClick={handleOpenSidebar}>×</button>

      <div className={styles.linksBlock}>
        <p onClick={() => scrollTo(serviceRef)}>Описание услуги</p>
        <p onClick={() => scrollTo(howRef)}>Как мы работаем</p>
        <p onClick={() => scrollTo(advantagesRef)}>Наши преимущества</p>
        <p onClick={() => scrollTo(storageRef)}>Хранение</p>
      </div>

      <a href="tel:+79295907660" className={styles.phoneNumber}>+7 (929) 590-76-60</a>
    </div>
  );
};

export default Sidebar;
