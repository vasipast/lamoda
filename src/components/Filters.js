import React, { useState } from "react";
import styles from "../css/filters.module.css";
import { COLORS, CATEGORY } from "./Arrays";

const Filters = ({ onSelectedColors, onSelectedCategories }) => {
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleColorChange = (color) => {
    const updatedColors = selectedColors.includes(color)
      ? selectedColors.filter((c) => c !== color)
      : [...selectedColors, color];

    setSelectedColors(updatedColors);
    onSelectedColors(updatedColors);
  };

  const handleCategoryChange = (category) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];

    setSelectedCategories(updatedCategories);
    onSelectedCategories(updatedCategories);
  };

  return (
    <div className={styles.filtersContainer}>
      <div className={styles.filterWrapper}>
        <h3>По цвету</h3>
        {COLORS.map((color) => (
          <div className={styles.color} key={color.color}>
            <input
              type="checkbox"
              onChange={() => handleColorChange(color.color)}
              checked={selectedColors.includes(color.color)}
            />
            <p>{color.color}</p>
          </div>
        ))}
      </div>

      <div className={styles.filterWrapper}>
        <h3>По категории</h3>
        {CATEGORY.map((category) => (
          <div className={styles.category} key={category}>
            <input
              type="checkbox"
              onChange={() => handleCategoryChange(category)}
              checked={selectedCategories.includes(category)}
            />
            <p>{category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Filters);
