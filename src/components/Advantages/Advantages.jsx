import React from "react";
import styles from "./Advantages.module.css";
import FlameIcon from "../fon-icon/flame.png";
import ItalyanoIcon from "../fon-icon/italyano.png";
import CorobIcon2 from "../fon-icon/corob2.png";

const Advantages = () => {
  return (
    <div className={`${styles.contentWrapper} ${styles.fadeIn}`}>
      <div className={styles.advantagesPage}>
        <div className={styles.advantagesMain}>
          <h2 className={styles.title}>Как мы экономим ваши деньги?</h2>
        </div>

        <div className={styles.advantagesBlock}>
          <div className={styles.advantagesClass}>
            <div>
              <img src={FlameIcon} alt="Снижение расходов" />
            </div>
            <div>
              <p className={styles.advantagesDescription}>
                Снижаем ваши складские расходы до 40%
              </p>
              <p className={styles.advantagesDescription2}>
                Никаких скрытых платежей и мелкого шрифта
              </p>
            </div>
          </div>

          <div className={styles.advantagesClass}>
            <div>
              <img src={ItalyanoIcon} alt="Маркетплейсы" />
            </div>
            <div>
              <p className={styles.advantagesDescription}>
                Знаем все тонкости маркетплейсов
              </p>
              <p className={styles.advantagesDescription2}>
                Упаковываем по стандартам и минимизируем штрафы
              </p>
            </div>
          </div>

          <div className={styles.advantagesClass}>
            <div>
              <img src={CorobIcon2} alt="Товары" />
            </div>
            <div>
              <p className={styles.advantagesDescription}>
                Работаем с любыми товарами – от мелких до крупногабаритных
              </p>
              <p className={styles.advantagesDescription2}>
                Не важно, 10 или 10 000 артикулов — всё под контролем
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
