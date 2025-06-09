import React, { useEffect, useState } from "react";
import styles from "./Calculator.module.css";
import { FaWarehouse, FaRulerHorizontal, FaRulerVertical, FaBoxes, FaWeightHanging, FaCalculator } from "react-icons/fa";

const Calculator = () => {
  const [warehouseList, setWarehouseList] = useState([]);
  const [warehouseFilter, setWarehouseFilter] = useState("");
  const [warehouse, setWarehouse] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [quantity, setQuantity] = useState("");
  const [weight, setWeight] = useState("");
  const [options, setOptions] = useState([]);
  const [category, setCategory] = useState("");
  const [packing, setPacking] = useState("");
  const [thermalLength, setThermalLength] = useState("");
  const [resultHtml, setResultHtml] = useState("");

  const allWarehouses = [
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
    "ВПП": [
      { name: "ВПП 10x10", price: 22 },
      { name: "ВПП 15x15", price: 24 },
      { name: "ВПП 20x20", price: 27 },
      { name: "ВПП 30x30", price: 32 },
      { name: "ВПП 40x40", price: 42 },
      { name: "ВПП 50x50", price: 45 },
      { name: "ВПП 60x50", price: 51 }
    ],
    "БОПП": [
      { name: "БОПП 10x8", price: 18 },
      { name: "БОПП 15x12", price: 20 },
      { name: "БОПП 27x12", price: 20 },
      { name: "БОПП 38x15", price: 21 }
    ],
    "Курьерский": [
      { name: "Курьерский 10x15", price: 15 },
      { name: "Курьерский 15x21", price: 18 },
      { name: "Курьерский 16.5x24", price: 19 },
      { name: "Курьерский 19x24", price: 20 },
      { name: "Курьерский 24x32", price: 22 },
      { name: "Курьерский 30x40", price: 26 },
      { name: "Курьерский 34x46", price: 31 },
      { name: "Курьерский 36x50", price: 34 }
    ],
    "Zip-Lock": [
      { name: "Zip-Lock цветной 60x70", price: 80 },
      { name: "Zip-Lock черный 60x70", price: 70 }
    ],
    "Фольгированный": [
      { name: "Фольгированный дой-пак 13x16+3", price: 33 }
    ],
    "Термоусадочная": [
      { name: "Термоусадочная плёнка (от 5 до 100 микрон)", price: 0.2 }
    ]
  };

  const additionalOptions = [
    { label: "Привоз товара на склад + пересчёт", price: 2 },
    { label: "Проверка товара", price: 4 },
    { label: "Упаковка стандарт", price: 4 },
    { label: "Упаковка нестандарт (цены оговариваются)", price: 6 },
    { label: "Проверка на брак", price: 2 },
    { label: "Вкладыши (листовки)", price: 2 },
    { label: "Упаковка в зип-пакеты", price: 9 },
    { label: "Упаковка в зип-пакеты с клеевым слоем", price: 9 },
    { label: "Проверка размеров", price: 5 },
    { label: "Вскрытие возвратов", price: 4 },
    { label: "Возвратный короб (работа + маркировка работы)", price: 15 },
  ];

  const deliveryMatrix = {
    koledino: [430, 290, 200], tula: [430, 360, 290], kazan: [850, 650, 590], elektrostal: [430, 360, 290],
    krasnodar: [910, 780, 700], nevinomisk: [910, 780, 700], podolsk: [3770], obukhovo: [3770],
    ryazan: [520, 390, 280], grivno: [520, 390, 280]
  };

  useEffect(() => {
    setWarehouseList(allWarehouses);
  }, []);

  const filteredWarehouses = warehouseList.filter(wh =>
    wh.label.toLowerCase().includes(warehouseFilter.toLowerCase())
  );

  const calculate = () => {
    const qty = parseInt(quantity) || 0;
    const l = parseFloat(length) || 0;
    const w = parseFloat(width) || 0;
    const h = parseFloat(height) || 0;
    const wt = parseFloat(weight) || 0;

    const productVolume = (l * w * h) / 1000;
    const boxVolume = 60 * 40 * 40 / 1000;
    const maxBoxWeight = 25;

    const unitsByVolume = productVolume ? Math.floor(boxVolume / productVolume) : 1;
    const unitsByWeight = wt ? Math.floor(maxBoxWeight / wt) : 1;
    const unitsPerBox = Math.max(1, Math.min(unitsByVolume, unitsByWeight));
    const requiredBoxes = Math.ceil(qty / unitsPerBox);

    let deliveryPerBox = 0;
    if (deliveryMatrix[warehouse]) {
      if (requiredBoxes <= 5) deliveryPerBox = deliveryMatrix[warehouse][0];
      else if (requiredBoxes <= 10) deliveryPerBox = deliveryMatrix[warehouse][1] || deliveryMatrix[warehouse][0];
      else deliveryPerBox = deliveryMatrix[warehouse][2] || deliveryMatrix[warehouse][0];
    }

    let packingCost = 0;
    if (category === "Термоусадочная") {
      const len = parseFloat(thermalLength) || 0;
      packingCost = qty * len * 0.2;
    } else {
      const selected = packingOptions[category]?.find(p => p.name === packing);
      if (selected) packingCost = selected.price * qty;
    }

    let extraCost = 0;
    options.forEach(opt => {
      extraCost += opt.price * qty;
    });

    const total = packingCost + (deliveryPerBox * requiredBoxes) + extraCost;

    setResultHtml(`
      <strong>Итоговая стоимость: ${total.toFixed(2)} ₽</strong>
      <div>Коробов нужно: ${requiredBoxes}</div>
      <div>По ${unitsPerBox} шт. в коробке</div>
      ${wt ? `<div style="color:#777;">(учтено ограничение: до 25 кг)</div>` : ""}
      <div>Доставка: ${deliveryPerBox} ₽ / короб</div>
    `);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Калькулятор стоимости услуг</h1>

      <label className={styles.label}><FaWarehouse /> Выберите склад:</label>
      <input
        type="text"
        placeholder="Начните вводить склад..."
        value={warehouseFilter}
        onChange={(e) => setWarehouseFilter(e.target.value)}
        className={styles.input}
      />
      <select value={warehouse} onChange={(e) => setWarehouse(e.target.value)} className={styles.select}>
        <option value="">— Не выбрано —</option>
        {filteredWarehouses.map((wh) => (
          <option key={wh.value} value={wh.value}>{wh.label}</option>
        ))}
      </select>

      <label className={styles.label}><FaRulerHorizontal /> Длина (см):</label>
      <input type="number" value={length} onChange={(e) => setLength(e.target.value)} className={styles.input} />

      <label className={styles.label}><FaRulerHorizontal /> Ширина (см):</label>
      <input type="number" value={width} onChange={(e) => setWidth(e.target.value)} className={styles.input} />

      <label className={styles.label}><FaRulerVertical /> Высота (см):</label>
      <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} className={styles.input} />

      <label className={styles.label}><FaBoxes /> Кол-во:</label>
      <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} className={styles.input} />

      <label className={styles.label}><FaWeightHanging /> Вес (кг):</label>
      <input type="number" step="0.01" value={weight} onChange={(e) => setWeight(e.target.value)} className={styles.input} />

      <div className={styles.sectionTitle}>Дополнительные услуги</div>
      <div className={styles.checkboxGroup}>
        {additionalOptions.map((opt, idx) => (
          <label key={idx} className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={options.includes(opt)}
              onChange={() => {
                if (options.includes(opt)) {
                  setOptions(options.filter(o => o !== opt));
                } else {
                  setOptions([...options, opt]);
                }
              }}
            />
            {opt.label}
          </label>
        ))}
      </div>

      <div className={styles.sectionTitle}>Упаковка</div>
      <label className={styles.label}>Выберите категорию упаковки:</label>
      <select value={category} onChange={(e) => setCategory(e.target.value)} className={styles.select}>
        <option value="">— Не выбрано —</option>
        {Object.keys(packingOptions).map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      {category === "Термоусадочная" ? (
        <>
          <label className={styles.label}>Введите длину плёнки (см):</label>
          <input
            type="number"
            value={thermalLength}
            onChange={(e) => setThermalLength(e.target.value)}
            className={styles.input}
          />
        </>
      ) : (
        <>
          <label className={styles.label}>Выберите упаковку:</label>
          <select value={packing} onChange={(e) => setPacking(e.target.value)} className={styles.select}>
            <option value="">— Не выбрано —</option>
            {packingOptions[category]?.map((opt, idx) => (
              <option key={idx} value={opt.name}>{opt.name}</option>
            ))}
          </select>
        </>
      )}

      <button className={styles.button} onClick={calculate}>
        <FaCalculator /> Рассчитать стоимость
      </button>

      {resultHtml && (
        <div className={styles.result} dangerouslySetInnerHTML={{ __html: resultHtml }} />
      )}
    </div>
  );
};

export default Calculator;
