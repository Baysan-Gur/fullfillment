import React from "react";
import styles from "./HowWeWork.module.css";

const HowWeWork = () => {
  return (
      <div className={`${styles.contentWrapper} ${styles.fadeIn}`}>
      <section className={styles.headerSection}>
        <h2 className={styles.title}>Как мы работаем:</h2>
        <p className={styles.subtitle}>Ваш фулфилмент за 4 простых шага:</p>
      </section>

      <section className={styles.rowsContainer}>
        <div className={styles.row}>
          <div className={styles.stepCard}>
            <h3>Товар к нам</h3>
            <p>Доставьте вашу продукцию на наш склад – мы всё проверим и аккуратно разместим.</p>
          </div>
          <div className={styles.stepCard}>
            <h3>Заказ – нам</h3>
            <p>Как только покупатель оформляет заказ в вашем магазине, данные мгновенно поступают к нам.</p>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.stepCard}>
            <h3>Мы в действии</h3>
            <p>Наши специалисты быстро соберут заказ, профессионально упакуют и отправят лучшим перевозчиком.</p>
          </div>
          <div className={styles.stepCard}>
            <h3>Вы спокойны</h3>
            <p>Вся информация по остаткам, заказам и доставке – в вашем онлайн-кабинете. Сфокусируйтесь на развитии бизнеса!</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowWeWork;