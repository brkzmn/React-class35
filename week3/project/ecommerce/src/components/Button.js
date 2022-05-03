import React, { useContext } from "react";
import { CategoriesContext } from "../context/CategoriesContext";

function Button({ eachCategory, index, activeIndex, setActiveIndex }) {
  const { setCategory } = useContext(CategoriesContext);

  return (
    <button
      key={index}
      className={`navbar-item ${activeIndex === index ? "active" : null}`}
      onClick={() => {
        setCategory(eachCategory);
        setActiveIndex(index);
      }}
    >
      {eachCategory}
    </button>
  );
}

export default Button;
