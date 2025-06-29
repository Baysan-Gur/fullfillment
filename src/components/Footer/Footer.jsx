import React, { useState } from "react";
import styles from "./Footer.module.css";
import Modal from "./Modal";

const Footer = () => {
  const [modalInfo, setModalInfo] = useState({
    open: false,
    title: "",
    content: "",
  });

  const footerModalTexts = {
    wildberies: `– Электросталь
              – Коледино
              – Казань
              – Тула
              – Краснодар
              – Невинномысск
              – Подольск
              – Рязань
              – Обухово`,

    ozon: `– Пушкино
          – Хоругвино
          – Кавказский хаб
          – Павловская Слобода
          – Софьино
          – Гривно`,
    yandexMarket: `– Софьино`,

    fbs: `FBS (Fulfillment by Seller): Сдаем заказы на маркетплейсы день в день. Гарантированно за 24 часа. Ваш товар – быстрее в топе!
Ваш склад – наша скорость. Привезли заказ? Мы обработаем его за часы, а не дни: приемка, комплектация, упаковка по стандартам маркетплейса, маркировка и сдача на склады ДЕНЬ В ДЕНЬ в течение 24 часов. Забудьте о штрафах за просрочку, получите приоритет в выдаче Ozon, Wildberries и других маркетплейсов. Быстрая логистика = больше продаж. Доверьте исполнение профи.`,
    fbo: `Рост продаж – это круто. Рост логистических проблем – нет. (FBO) Fulfillment by Operator – решение для амбициозных: мы мгновенно адаптируемся под ваш объем – будь то 10 или 10 000 заказов в день. Наши мощности, опытная команда и технологии станут надежной платформой для вашей экспансии. Фокусируйтесь на рынке, логистику доверьте нам.`,
  };

  const openModal = (title, content) => {
    setModalInfo({ open: true, title, content });
  };

  const closeModal = () => {
    setModalInfo({ ...modalInfo, open: false });
  };

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.columns}>
          <div className={styles.column}>
            <h3>Фулфилмент</h3>
            <ul>
              <li
                onClick={() =>
                  openModal("Wildberries", footerModalTexts.wildberies)
                }
              >
                <p>Wildberries</p>
              </li>
              <li onClick={() => openModal("OZON", footerModalTexts.ozon)}>
                <p>OZON</p>
              </li>
              <li
                onClick={() =>
                  openModal("Yandex Market", footerModalTexts.yandexMarket)
                }
              >
                <p>Yandex Market</p>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3>Услуги</h3>
            <ul>
              <li>
                <p>Упаковка</p>
              </li>
              <li>
                <p>Маркировка</p>
              </li>
              <li>
                <p>Доставка</p>
              </li>
              <li onClick={() => openModal("FBS", footerModalTexts.fbs)}>
                <p>FBS</p>
              </li>
              <li onClick={() => openModal("FBO", footerModalTexts.fbo)}>
                <p>FBO</p>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3>Информация</h3>
            <ul>
              <li>
                <p>О нас</p>
              </li>
              <li>
                <p>Цены</p>
              </li>
              <li>
                <p>Калькулятор</p>
              </li>
              <li>
                <p>Вакансии</p>
              </li>
              <li>
                <p>Контакты</p>
              </li>
              <li>
                <p>Что такое фулфилмент?</p>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <Modal
        isOpen={modalInfo.open}
        onClose={closeModal}
        title={modalInfo.title}
      >
        {modalInfo.content.split("\n").map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </Modal>
    </>
  );
};

export default Footer;
