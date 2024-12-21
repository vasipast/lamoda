import React, { useState } from "react";

const Find = ({ onFindProduct, products }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    onFindProduct(e.target.value);
  };

  return (
    <p>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder={
            products.length > 0
              ? products[Math.floor(Math.random() * products.length)].name
              : ""
          }
        />
      </div>
    </p>
  );
};

export default React.memo(Find);
