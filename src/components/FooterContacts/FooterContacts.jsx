import React from "react";
import styles from "./FooterContacts.module.css";

const FooterContacts = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.innerContent}>
        <div className={styles.contactCard}>
          <div className={styles.contactItem}>
            <span className={styles.icon}>📞</span>
            <div>
              <p className={styles.label}>Телефон</p>
              <a href="tel:+79295907660" className={styles.link}>
                +7 929 590-76-60
              </a>
            </div>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.icon}>📧</span>
            <div>
              <p className={styles.label}>Почта</p>
              <a href="mailto:format24.rf@mail.ru" className={styles.link}>
                format24.rf@mail.ru
              </a>
            </div>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.icon}>📍</span>
            <div>
              <p className={styles.label}>Адрес</p>
              <p className={styles.text}>
                5539-й Проектируемый пр-д, Развилка, Московская обл., Россия,
                142717
              </p>
            </div>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.icon}>⏰</span>
            <div>
              <p className={styles.label}>Режим работы</p>
              <p className={styles.text}>с 9:00 до 19:00, без выходных</p>
            </div>
          </div>
        </div>

        <div className={styles.mapBlock}>
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=37.763122%2C55.595119&z=18&pt=37.763122,55.595119,pm2rdm"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            title="Карта"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default FooterContacts;
