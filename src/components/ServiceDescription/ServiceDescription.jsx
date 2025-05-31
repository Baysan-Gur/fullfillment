import React from "react";
import styles from "./ServiceDescription.module.css";

const ServiceDescription = () => {
  return (
    <div className={`${styles.contentWrapper} ${styles.fadeIn}`}>
      <div className={styles.serviceDescriptionPage}>
        <div className={styles.mainBlock}>
          <p className={styles.mainTitle}>
            Фулфилмент — Полный цикл обработки заказов на аутсорсинге.
          </p>
          <p className={styles.mainSubtitle}>
            Передайте нам всю логистику: от приемки товара на склад до отправки
            заказа покупателю и обработки возвратов.
          </p>
        </div>

        <div className={styles.bottomBlocksWrapper}>
          <div className={styles.infoBlock}>
            <h3 className={styles.blockTitle}>Мы обеспечим:</h3>
            <ul className={styles.infoList}>
              <li>Надёжное хранение вашего товара.</li>
              <li>Быструю комплектацию и упаковку заказов.</li>
              <li>Оптимальную доставку по выгодным тарифам.</li>
              <li>Прозрачную отчётность 24/7.</li>
            </ul>
          </div>

          <div className={styles.infoBlock}>
            <h3 className={styles.blockTitle}>Ваши выгоды:</h3>
            <p className={styles.infoText}>
              Экономия времени и денег, масштабируемость, скорость доставки,
              профессиональное исполнение.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDescription;
