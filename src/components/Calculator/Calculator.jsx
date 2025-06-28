import React, { useState } from "react";
import Select from "react-select";
import styles from "./Calculator.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWarehouse,
  faRulerHorizontal,
  faRulerVertical,
  faBoxesStacked,
  faWeightHanging,
  faCalculator,
} from "@fortawesome/free-solid-svg-icons";

const warehousesList = [
  { value: "koledino", label: "Коледино (Wildberries)" },
  { value: "tula", label: "Тула, Алексин (Wildberries)" },
  { value: "kazan", label: "Казань (Wildberries)" },
  { value: "elektrostal", label: "Электросталь (Wildberries)" },
  { value: "krasnodar", label: "Краснодар (Wildberries)" },
  { value: "nevinomisk", label: "Невиномысск (Wildberries)" },
  { value: "podolsk", label: "Подольск (Wildberries)" },
  { value: "obukhovo", label: "Обухово (Wildberries)" },
  { value: "ryazan", label: "Рязань (Wildberries)" },
  { value: "grivno", label: "Гривно (OZON)" },
];

const packingOptions = {
  ВПП: [
    { name: "ВПП 10x10", price: 22 },
    { name: "ВПП 15x15", price: 24 },
    { name: "ВПП 20x20", price: 27 },
    { name: "ВПП 30x30", price: 32 },
    { name: "ВПП 40x40", price: 42 },
    { name: "ВПП 50x50", price: 45 },
    { name: "ВПП 60x50", price: 51 },
  ],
  БОПП: [
    { name: "БОПП 10x8", price: 18 },
    { name: "БОПП 15x12", price: 20 },
    { name: "БОПП 27x12", price: 20 },
    { name: "БОПП 38x15", price: 21 },
  ],
  Курьерский: [
    { name: "Курьерский 10x15", price: 15 },
    { name: "Курьерский 15x21", price: 18 },
    { name: "Курьерский 16.5x24", price: 19 },
    { name: "Курьерский 19x24", price: 20 },
    { name: "Курьерский 24x32", price: 22 },
    { name: "Курьерский 30x40", price: 26 },
    { name: "Курьерский 34x46", price: 31 },
    { name: "Курьерский 36x50", price: 34 },
  ],
  "Zip-Lock": [
    { name: "Zip-Lock цветной 60x70", price: 80 },
    { name: "Zip-Lock черный 60x70", price: 70 },
  ],
  Фольгированный: [{ name: "Фольгированный дой-пак 13x16+3", price: 33 }],
  Термоусадочная: [
    { name: "Термоусадочная плёнка (от 5 до 100 микрон)", price: 0.2 },
  ],
};

const deliveryMatrix = {
  koledino: [430, 290, 200],
  tula: [430, 360, 290],
  kazan: [850, 650, 590],
  elektrostal: [430, 360, 290],
  krasnodar: [910, 780, 700],
  nevinomisk: [910, 780, 700],
  podolsk: [3770],
  obukhovo: [3770],
  ryazan: [520, 390, 280],
  grivno: [520, 390, 280],
};

const additionalServices = [
  ["Привоз товара на склад + пересчёт", 2],
  ["Проверка товара", 4],
  ["Упаковка стандарт", 4],
  ["Упаковка нестандарт (цены оговариваются)", 6],
  ["Проверка на брак", 2],
  ["Вкладыши (листовки)", 2],
  ["Упаковка в зип-пакеты", 9],
  ["Упаковка в зип-пакеты с клеевым слоем", 9],
  ["Проверка размеров", 5],
  ["Вскрытие возвратов", 4],
  ["Возвратный короб (работа + маркировка работы)", 15],
];

const Calculator = () => {
  const [warehouse, setWarehouse] = useState(null);
  const [inputs, setInputs] = useState({
    length: "",
    width: "",
    height: "",
    quantity: "",
    weight: "",
    thermalLength: "",
  });
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [packingCategory, setPackingCategory] = useState("");
  const [packing, setPacking] = useState("");
  const [result, setResult] = useState("");
  const isThermal = packingCategory === "Термоусадочная";

  const handleInputChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleOptionChange = (e) => {
    const { value, checked, dataset } = e.target;
    if (checked) {
      setSelectedOptions([...selectedOptions, { value, price: +dataset.price }]);
    } else {
      setSelectedOptions(selectedOptions.filter((opt) => opt.value !== value));
    }
  };

  const calculate = () => {
    const { length, width, height, quantity, weight, thermalLength } = inputs;
    const qty = +quantity || 0;
    const l = +length || 0;
    const w = +width || 0;
    const h = +height || 0;
    const wg = +weight || 0;

    const productVolume = (l * w * h) / 1000;
    const boxVolume = (60 * 40 * 40) / 1000;
    const unitsPerBoxByVolume = productVolume ? Math.floor(boxVolume / productVolume) : 1;
    const unitsPerBoxByWeight = wg ? Math.floor(25 / wg) : 1;
    const unitsPerBox = Math.max(1, Math.min(unitsPerBoxByVolume, unitsPerBoxByWeight));
    const requiredBoxes = Math.ceil(qty / unitsPerBox);

    let deliveryPerBox = 0;
    if (warehouse && deliveryMatrix[warehouse.value]) {
      const d = deliveryMatrix[warehouse.value];
      deliveryPerBox = requiredBoxes <= 5 ? d[0] : requiredBoxes <= 10 ? d[1] || d[0] : d[2] || d[0];
    }

    let packingPrice = 0;
    if (isThermal) {
      packingPrice = qty * (+thermalLength || 0) * 0.2;
    } else {
      const selected = packingOptions[packingCategory]?.find((p) => p.name === packing);
      packingPrice = selected ? selected.price * qty : 0;
    }

    const extraOptions = selectedOptions.reduce((acc, opt) => acc + opt.price * qty, 0);
    const total = packingPrice + extraOptions + requiredBoxes * deliveryPerBox;

    setResult({ total, requiredBoxes, unitsPerBox, wg, deliveryPerBox });
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Калькулятор стоимости услуг</h1>
      </div>

      <label className={styles.label}>
        <FontAwesomeIcon icon={faWarehouse} /> Выберите склад:
      </label>
      <Select
        options={warehousesList}
        value={warehouse}
        onChange={setWarehouse}
        isClearable
        placeholder="Начните вводить склад..."
        className={styles.selectReact}
      />

      <label className={styles.label}>
        <FontAwesomeIcon icon={faRulerHorizontal} /> Длина (см) товара:
      </label>
      <input type="number" id="length" value={inputs.length} onChange={handleInputChange} className={styles.input} placeholder="Например: 30" />

      <label className={styles.label}>
        <FontAwesomeIcon icon={faRulerHorizontal} /> Ширина (см) товара:
      </label>
      <input type="number" id="width" value={inputs.width} onChange={handleInputChange} className={styles.input} placeholder="Например: 20" />

      <label className={styles.label}>
        <FontAwesomeIcon icon={faRulerVertical} /> Высота (см) товара:
      </label>
      <input type="number" id="height" value={inputs.height} onChange={handleInputChange} className={styles.input} placeholder="Например: 15" />

      <label className={styles.label}>
        <FontAwesomeIcon icon={faBoxesStacked} /> Количество товара:
      </label>
      <input type="number" id="quantity" value={inputs.quantity} onChange={handleInputChange} className={styles.input} placeholder="Например: 100" />

      <label className={styles.label}>
        <FontAwesomeIcon icon={faWeightHanging} /> Вес (кг) товара:
      </label>
      <input type="number" id="weight" value={inputs.weight} onChange={handleInputChange} className={styles.input} placeholder="Например: 0.4" />

      <div className={styles.sectionTitle}>Дополнительные услуги</div>
      <div className={styles.checkboxGroup}>
        {additionalServices.map(([label, price], i) => (
          <label key={i}>
            <input type="checkbox" value={label} data-price={price} onChange={handleOptionChange} /> {label}
          </label>
        ))}
      </div>

      <div className={styles.sectionTitle}>Упаковка</div>
      <label className={styles.label}>Выберите категорию упаковки:</label>
      <select value={packingCategory} onChange={(e) => setPackingCategory(e.target.value)} className={styles.select}>
        <option value="">— Не выбрано —</option>
        {Object.keys(packingOptions).map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      {!isThermal && packingCategory && (
        <>
          <label className={styles.label}>Выберите упаковку:</label>
          <select value={packing} onChange={(e) => setPacking(e.target.value)} className={styles.select}>
            <option value="">— Не выбрано —</option>
            {packingOptions[packingCategory]?.map((opt) => (
              <option key={opt.name} value={opt.name}>{opt.name}</option>
            ))}
          </select>
        </>
      )}

      {isThermal && (
        <div className={styles.thermalBlock}>
          <label>Введите длину (см) плёнки на 1 товар:</label>
          <input type="number" id="thermalLength" value={inputs.thermalLength} onChange={handleInputChange} className={styles.input} />
          <small>от 5 до 100 микрон, цена: 0,2 ₽ за 1 см длины на каждую единицу</small>
        </div>
      )}

      <button onClick={calculate} className={styles.button}>
        <FontAwesomeIcon icon={faCalculator} /> Рассчитать стоимость
      </button>

{result && (
  <div className={styles.result}>
    <p><strong>Итоговая стоимость:</strong><br />{result.total.toFixed(2)} ₽</p>
    <p>Коробов нужно: <strong>{result.requiredBoxes}</strong></p>
    <p>По {result.unitsPerBox} товаров в коробке</p>
    {result.wg > 0 && (
      <p><em>(учтено ограничение: до 25 кг в коробке)</em></p>
    )}
    <p>Доставка: {result.deliveryPerBox} ₽/короб</p>
  </div>
)}
      
    </div>
  );
};

export default Calculator;