import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import SidebarIcon from "../fon-icon/sidebar-icon.svg";
import TelegramIcon from "../fon-icon/telegram-icon.png";
import FulfillmentIcon from "../fon-icon/fulfillment-icon.png";
import WhatsapIcon from "../fon-icon/whatsap-icon.png";
import Sidebar from "../Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);

  const handleOpenSidebar = () => {
    setIsSidebarOpened(!isSidebarOpened);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.header}>
      <div className={styles.leftBlock} onClick={() => navigate("/")}>
        <img className={styles.icon} src={FulfillmentIcon} alt="Логотип" />
        <p className={styles.name}>Формат24.рф</p>
      </div>

      {!isMobile && (
        <div className={styles.centerBlock}>
          <button onClick={() => navigate("/service-description")}>
            Описание услуги
          </button>
          <button onClick={() => navigate("/how-we-work")}>
            Как мы работаем
          </button>
          <button onClick={() => navigate("/advantages")}>
            Наши преимущества
          </button>
          <button onClick={() => navigate("/storage")}>Хранение</button>
        </div>
      )}

      <div className={styles.rightBlock}>
        <div className={styles.contactIcons}>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img className={styles.icon} src={TelegramIcon} alt="Telegram" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img className={styles.icon} src={WhatsapIcon} alt="WhatsApp" />
          </a>
        </div>
        <p className={styles.phoneNumber}>
          +7 (963) 598-38-04
        </p>
      </div>

      {isMobile && (
        <button onClick={handleOpenSidebar} className={styles.sidebarIcon}>
          <img className={styles.icon} src={SidebarIcon} alt="Меню" />
        </button>
      )}
      {isMobile && isSidebarOpened && (
        <>
          <Sidebar handleOpenSidebar={handleOpenSidebar} />
          <div
            className={styles.sideBarOverlay}
            onClick={handleOpenSidebar}
          ></div>
        </>
      )}
    </div>
  );
};

export default Header;
