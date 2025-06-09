import React from "react";
import styles from "./Main.module.css";
import Calculator from "../Calculator/Calculator";
import HowWeWorkSlider from "../HowWeWorkSlider/HowWeWorkSlider";

const Main = ({ calculatorRef }) => {
  const handleScroll = () => {
    calculatorRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className={`${styles.contentWrapper} ${styles.fadeIn}`}>
      <div className={styles.mainContent}>
        <div className={styles.descriptionBlock}>
          <p className={styles.descriptionText}>
            Компания <span className={styles.neonPink}>Формат24.рф</span> — это
            команда профессионалов с уникальным опытом работы в Wildberries и
            практикой ведения собственных продаж на маркетплейсах.
          </p>
          <p className={styles.descriptionText2}>
            Мы объединяем инсайдерские знания платформы с глубоким пониманием
            потребностей продавцов, предлагая клиентам комплексные и эффективные
            логистические решения.
          </p>
          <button onClick={handleScroll}>Рассчитать стоимость</button>
        </div>

        <div ref={calculatorRef} className={styles.scrollWrap}>
          <Calculator />
          <HowWeWorkSlider />
        </div>
      </div>
    </div>
  );
};

export default Main;
