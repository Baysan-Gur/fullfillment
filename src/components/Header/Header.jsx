import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import SidebarIcon from "../fon-icon/hamburger-white.svg";
import TelegramIcon from "../fon-icon/telegram-icon.png";
import WhatsapIcon from "../fon-icon/whatsap-icon.png";
import Sidebar from "../Sidebar/Sidebar";

const Header = ({ refs }) => {
  const { serviceRef, howRef, advantagesRef, storageRef } = refs;
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleOpenSidebar = () => {
    if (!isSidebarVisible && !isSidebarOpened) {
      setIsSidebarVisible(true);
      setTimeout(() => setIsSidebarOpened(true), 10); // Плавное появление
    } else {
      setIsSidebarOpened(false);
      setTimeout(() => setIsSidebarVisible(false), 300); // Даём время на закрытие
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.header}>
      <div className={styles.leftBlock} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <p className={styles.companyName}>Формат24.рф</p>
      </div>

      {!isMobile && (
        <div className={styles.centerBlock}>
          <button onClick={() => scrollTo(serviceRef)}>Описание услуги</button>
          <button onClick={() => scrollTo(howRef)}>Как мы работаем</button>
          <button onClick={() => scrollTo(advantagesRef)}>Наши преимущества</button>
          <button onClick={() => scrollTo(storageRef)}>Хранение</button>
        </div>
      )}

      <div className={styles.rightBlock}>
        <div className={styles.contactIcons}>
          <a href="https://t.me/+79295907660" target="_blank" rel="noopener noreferrer">
            <img className={styles.icon} src={TelegramIcon} alt="Telegram" />
          </a>
          <a href="https://wa.me/79295907660" target="_blank" rel="noopener noreferrer">
            <img className={styles.icon} src={WhatsapIcon} alt="WhatsApp" />
          </a>
        </div>
        <p className={styles.phoneNumber}>+7 (929) 590-76-60</p>
      </div>

      {isMobile && (
        <button onClick={handleOpenSidebar} className={styles.sidebarIcon}>
          <img className={styles.icon} src={SidebarIcon} alt="Меню" />
        </button>
      )}

      {isMobile && isSidebarVisible && (
        <>
          <Sidebar
            handleOpenSidebar={handleOpenSidebar}
            refs={refs}
            isOpen={isSidebarOpened}
          />
          <div className={styles.sideBarOverlay} onClick={handleOpenSidebar}></div>
        </>
      )}
    </div>
  );
};

export default Header;
