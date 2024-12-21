import React from "react";
import styles from "../css/product.module.css";

const Product = ({ products }) => {
  return products.length > 0 ? (
    products.map((product) => (
      <div className={styles.productWrapper} key={product.id}>
        <p className={styles.img}>
          <img src={product.image}></img>
        </p>
        <h1>{product.name}</h1>
        <p className={styles.productDesc}>{product.description}</p>
        <div className={styles.productItems}>
          <p>Цвет:</p>
          <p>{product.color}</p>
          <p>Категория:</p>
          <p>{product.category}</p>
          <p>Price:</p>
          <p>{product.price}</p>
          <p>Рейтинг:</p>
          <p>{product.rating}</p>
        </div>
      </div>
    ))
  ) : (
    <p>По вашему запросу ничего не найдено.</p>
  );
};

export default React.memo(Product);
