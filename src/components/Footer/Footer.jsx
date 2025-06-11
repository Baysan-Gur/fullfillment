import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        <div className={styles.column}>
          <h3>Фулфилмент</h3>
          <ul>
            <li>Wildberries</li>
            <li>OZON</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3>Услуги</h3>
          <ul>
            <li>Упаковка</li>
            <li>Маркировка</li>
            <li>Доставка</li>
            <li>FBS</li>
            <li>FBO</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3>Информация</h3>
          <ul>
            <li>О нас</li>
            <li>Цены</li>
            <li>Калькулятор</li>
            <li>Реквизиты</li>
            <li>Вакансии</li>
            <li>Контакты</li>
            <li>Что такое фулфилмент?</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
