import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./HowWeWorkSlider.module.css";

import Step1Img from "../../assets/step1-package-arrived.svg";
import Step2Img from "../../assets/step2-delivery.svg";
import Step3Img from "../../assets/step3-analytics.svg";
import Step4Img from "../../assets/step4-analytics-dashboard.svg";

const steps = [
  {
    title: "Товар к нам",
    text: "Доставьте вашу продукцию на наш склад – мы всё проверим и аккуратно разместим.",
    image: Step1Img,
  },
  {
    title: "Заказ – нам",
    text: "Как только покупатель оформляет заказ, данные мгновенно поступают к нам.",
    image: Step2Img,
  },
  {
    title: "Мы в действии",
    text: "Наши специалисты быстро соберут заказ, профессионально упакуют и отправят перевозчику.",
    image: Step3Img,
  },
  {
    title: "Вы спокойны",
    text: "Вся информация — в вашем онлайн‑кабинете. Сфокусируйтесь на развитии бизнеса!",
    image: Step4Img,
  },
];

const HowWeWorkSlider = () => (
  <div className={styles.sliderSection}>
    <div className={styles.headerBlock}>
      <h2 className={styles.title}>Как мы работаем?</h2>
      <p className={styles.subtitle}>Ваш фулфилмент — всего за 4 простых шага</p>
    </div>

    <div className={styles.sliderWrapper}>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {steps.map((step, i) => (
          <SwiperSlide key={i}>
            <div className={styles.fixedHeight}>
              <div className={styles.stepCard}>
                <img
                  src={step.image}
                  alt={step.title}
                  className={`${styles.image} ${i === 0 ? styles.firstImage : ""}`}
                />
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
);

export default HowWeWorkSlider;



