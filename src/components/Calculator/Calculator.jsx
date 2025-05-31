import React, { useState } from "react";
import styles from "./Calculator.module.css";

const Calculator = () => {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [quantity, setQuantity] = useState("");
  const [options, setOptions] = useState({
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false,
  });
  const [packing, setPacking] = useState("");
  const [result, setResult] = useState(null);

  const optionPrices = {
    option1: 20,
    option2: 40,
    option3: 5,
    option4: 3,
    option5: 5,
  };

  const optionLabels = {
    option1: "Проверка на брак по сложному ТЗ",
    option2: "Заполнение короба крафт-бумагой",
    option3: "Прикрепление новой бирки",
    option4: "Вложить подарок или флаер",
    option5: "Удаление ниток на изделии",
  };

  const packingOptions = [
    { label: "— Не выбрано —", price: 0 },
    { label: "Термоусадочная плёнка 5 мкм", price: 5 },
    { label: "Термоусадочная плёнка 10 мкм", price: 10 },
    { label: "Термоусадочная плёнка 15 мкм", price: 15 },
    { label: "Термоусадочная плёнка 20 мкм", price: 20 },
    { label: "Термоусадочная плёнка 25 мкм", price: 25 },
    { label: "Термоусадочная плёнка 30 мкм", price: 30 },
    { label: "Термоусадочная плёнка 35 мкм", price: 35 },
    { label: "Термоусадочная плёнка 40 мкм", price: 40 },
    { label: "Термоусадочная плёнка 45 мкм", price: 45 },
    { label: "Термоусадочная плёнка 50 мкм", price: 50 },
    { label: "ВПП 10x10", price: 22 },
    { label: "ВПП 15x15", price: 24 },
    { label: "ВПП 20x20", price: 27 },
    { label: "ВПП 30x30", price: 32 },
    { label: "ВПП 40x40", price: 42 },
    { label: "ВПП 50x50", price: 45 },
    { label: "ВПП 60x50", price: 51 },
    { label: "БОПП 10x8", price: 18 },
    { label: "БОПП 15x12", price: 20 },
    { label: "БОПП 27x12", price: 20 },
    { label: "БОПП 38x15", price: 21 },
    { label: "Курьерский 10x15", price: 15 },
    { label: "Курьерский 15x21", price: 18 },
    { label: "Курьерский 16.5x24", price: 19 },
    { label: "Курьерский 19x24", price: 20 },
    { label: "Курьерский 24x32", price: 22 },
    { label: "Курьерский 30x40", price: 26 },
    { label: "Курьерский 34x46", price: 31 },
    { label: "Курьерский 36x50", price: 34 },
    { label: "Zip-Lock цветной 60x70", price: 80 },
    { label: "Zip-Lock черный 60x70", price: 70 },
    { label: "Фольгированный дой-пак 13x16+3", price: 33 },
  ];

  const calculate = () => {
    const qty = parseInt(quantity) || 0;

    const selectedPackingPrice =
      packingOptions.find((p) => p.label === packing)?.price || 0;

    let total = selectedPackingPrice * qty;

    Object.keys(options).forEach((key) => {
      if (options[key]) {
        total += optionPrices[key] * qty;
      }
    });

    setResult(total.toFixed(2));
  };

  const handleOptionChange = (e) => {
    const { name, checked } = e.target;
    setOptions((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Калькулятор стоимости услуг</h1>

      <label className={styles.label}>
        Длина (см):
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          placeholder="Например: 30"
          className={styles.input}
        />
      </label>

      <label className={styles.label}>
        Ширина (см):
        <input
          type="number"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
          placeholder="Например: 20"
          className={styles.input}
        />
      </label>

      <label className={styles.label}>
        Высота (см):
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Например: 15"
          className={styles.input}
        />
      </label>

      <label className={styles.label}>
        Количество:
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Например: 100"
          className={styles.input}
        />
      </label>

      <div className={styles.sectionTitle}>Дополнительные услуги</div>
      <div className={styles.checkboxGroup}>
        {Object.keys(optionLabels).map((key) => (
          <label key={key} className={styles.checkboxLabel}>
            <input
              type="checkbox"
              name={key}
              checked={options[key]}
              onChange={handleOptionChange}
            />
            {optionLabels[key]}
          </label>
        ))}
      </div>

      <div className={styles.sectionTitle}>Упаковка</div>
      <label className={styles.label}>
        Выберите упаковку:
        <select
          value={packing}
          onChange={(e) => setPacking(e.target.value)}
          className={styles.select}
        >
          {packingOptions.map((opt) => (
            <option key={opt.label} value={opt.label}>
              {opt.label}
            </option>
          ))}
        </select>
      </label>

      <button onClick={calculate} className={styles.button}>
        Рассчитать стоимость
      </button>

      {result !== null && (
        <div className={styles.result}>
          <strong>Итоговая стоимость:</strong> {result} ₽
        </div>
      )}
    </div>
  );
};

export default Calculator;
