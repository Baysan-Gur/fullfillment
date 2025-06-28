import React from "react";
import styles from "./Main.module.css";
import ServiceDescription from "../ServiceDescription/ServiceDescription";
import HowWeWorkSlider from "../HowWeWorkSlider/HowWeWorkSlider";
import Advantages from "../Advantages/Advantages";
import Storage from "../Storage/Storage";
import FooterContacts from "../FooterContacts/FooterContacts";
import Footer from "../Footer/Footer";
import Calculator from "../Calculator/Calculator";

const Main = ({ calculatorRef, refs }) => {
  const { serviceRef, howRef, advantagesRef, storageRef } = refs;

  return (
    <div className={`${styles.contentWrapper} ${styles.fadeIn}`}>
      <div className={styles.mainContent}>
        <section className={`${styles.section} ${styles.scrollTarget}`}>
          <div className={styles.descriptionBlock}>
            <p className={styles.descriptionText}>
              Компания <span className={styles.neonPink}>Формат24.рф</span> —
              это команда профессионалов с уникальным опытом работы в
              Wildberries и практикой ведения собственных продаж на
              маркетплейсах.
            </p>
            <p className={styles.descriptionText2}>
              Мы объединяем инсайдерские знания платформы с глубоким пониманием
              потребностей продавцов, предлагая клиентам комплексные и
              эффективные логистические решения.
            </p>
            <button
              onClick={() =>
                calculatorRef.current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Рассчитать стоимость
            </button>
          </div>
        </section>

        <section
          ref={calculatorRef}
          className={`${styles.section} ${styles.scrollTarget}`}
        >
          <Calculator />
        </section>
        <section
          ref={serviceRef}
          className={`${styles.section} ${styles.scrollTarget}`}
        >
          <ServiceDescription />
        </section>

        <section
          ref={howRef}
          className={`${styles.section} ${styles.scrollTarget}`}
        >
          <HowWeWorkSlider />
        </section>

        <section
          ref={advantagesRef}
          className={`${styles.section} ${styles.scrollTarget}`}
        >
          <Advantages />
        </section>

        <section
          ref={storageRef}
          className={`${styles.section} ${styles.scrollTarget}`}
        >
          <Storage />
        </section>

        <FooterContacts />

        <Footer />
      </div>
    </div>
  );
};

export default Main;
