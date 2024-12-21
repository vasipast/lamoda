import React, { useState } from "react";
import styles from "../css/button.module.css";

const Sorting = ({ sorting }) => {
  const [selectedSorting, setSelectedSorting] = useState("Сначала дешевые");

  return sorting.map((element) => (
    <button
      className={
        selectedSorting === element.name
          ? styles.sortingByCheapButton
          : styles.sortingButton
      }
      key={element.name}
      onClick={() => {
        setSelectedSorting(element.name);
        element.sort();
      }}
    >
      {element.name}
    </button>
  ));
};

export default Sorting;
