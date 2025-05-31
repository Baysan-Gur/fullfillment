import React from "react";
import styles from "./Sidebar.module.css";
import { useNavigate } from "react-router-dom";
import TelegramIcon from "../fon-icon/telegram-icon.png";
import WhatsapIcon from "../fon-icon/whatsap-icon.png";

const Sidebar = ({ handleOpenSidebar }) => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
    handleOpenSidebar();
  };

  return (
    <>
      <div className={styles.sidebarNav}>
        <button className={styles.closeButton} onClick={handleOpenSidebar}>
          x
        </button>

        <div className={styles.linksBlock}>
          <p onClick={() => handleClick("/service-description")}>
            Описание услуги
          </p>
          <p onClick={() => handleClick("/how-we-work")}>Как мы работаем</p>
          <p onClick={() => handleClick("/advantages")}>Наши преимущества</p>
          <p onClick={() => handleClick("/storage")}>Хранение</p>
        </div>

        <a href="tel:+79635983804" className={styles.phoneNumber}>
          +7 (963) 598-38-04
        </a>
      </div>

      <div className={styles.sidebarRightBlock}>
        <a href="tel:+79635983804" className={styles.phoneNumberSidebar}>
          +7 (963) 598-38-04
        </a>
      </div>
    </>
  );
};

export default Sidebar;
