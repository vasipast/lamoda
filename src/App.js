import React, { useState, useEffect, useMemo } from "react";
import Sorting from "./components/Sorting";
import Filters from "./components/Filters";
import Find from "./components/Find";
import Product from "./components/Product";
import handleFilterProducts from "./components/FilterFunction"; 
import { FILTERS, COLORS, CATEGORY, IMAGES } from "./components/Arrays";
import styles from "./css/lamoda.module.css";

const Lamoda = () => {
  var chance = require("chance").Chance();

  const SORTING = [
    {
      name: "Сначала дешевые",
      sort: () => {
        const sortedProducts = [...filteredProducts].sort(
          (a, b) => a.price - b.price
        );
        setFilteredProducts(sortedProducts);
      }
    },
    {
      name: "Сначала дорогие",
      sort: () => {
        const sortedProducts = [...filteredProducts].sort(
          (a, b) => b.price - a.price
        );
        setFilteredProducts(sortedProducts);
      }
    },
    {
      name: "Сначала популярные",
      sort: () => {
        const sortedProducts = [...filteredProducts].sort(
          (a, b) => b.rating - a.rating
        );
        setFilteredProducts(sortedProducts);
      }
    }
  ];
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const colorsForFilter = [
    ...new Set(products.map((product) => product.color))
  ];
  const categoriesForFilter = [
    ...new Set(products.map((product) => product.category))
  ];

  const handleCreateProducts = useMemo(
    () => (count) => {
      const newProducts = [];
      for (let i = 0; i < count; i++) {
        newProducts.push({
          id: Date.now() + Math.random().toString(36).substring(2),
          image: IMAGES[Math.floor(Math.random() * IMAGES.length)],
          name: chance.word(),
          description: chance.sentence(),
          color: COLORS[Math.floor(Math.random() * 5)].color,
          category: CATEGORY[Math.floor(Math.random() * 10)],
          price: Math.floor(Math.random() * 9989) + 10,
          rating: ((Math.random() * 50) / 10).toFixed(1)
        });
      }
      setProducts(
        [...products, ...newProducts].sort((a, b) => a.price - b.price)
      );
    },
    [products]
  );

  const handleSelectedColors = (colors) => {
    setSelectedColors(colors);
    setFilteredProducts(
      handleFilterProducts(products, colors, selectedCategories, "")
    );
  };

  const handleSelectedCategories = (categories) => {
    setSelectedCategories(categories);
    setFilteredProducts(
      handleFilterProducts(products, selectedColors, categories, "")
    );
  };

  const handleFindProduct = (term) => {
    const filtered = handleFilterProducts(
      products,
      selectedColors,
      selectedCategories,
      term
    );
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    handleCreateProducts(9);
  }, []);

  useEffect(() => {
    setFilteredProducts([...products]);
  }, [products]);

  return (
    <div className={styles.container}>
      <div className={styles.sortingAndFind}>
        <div className={styles.sorting}>
          <Sorting sorting={SORTING} products={filteredProducts} />
        </div>
        <div className={styles.find}>
          <Find onFindProduct={handleFindProduct} products={filteredProducts} />
        </div>
      </div>
      <div className={styles.filtersAndProduct}>
        <div className={styles.filters}>
          <Filters
            filters={FILTERS}
            colors={colorsForFilter}
            categories={categoriesForFilter}
            onSelectedColors={handleSelectedColors}
            onSelectedCategories={handleSelectedCategories}
          />
        </div>
        <div className={styles.productContainer}>
          <Product products={filteredProducts} />
        </div>
      </div>
    </div>
  );
};

export default Lamoda;
