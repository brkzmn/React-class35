import React, { useState } from "react";
import allCategories from "../fake-data/all-categories";

function Navbar({ setCategory }) {
  const handleCategory = (category) => {
    setCategory(category);
  };

  const [activeIndex, setActiveIndex] = React.useState(null);

  const handleOnClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="Navbar">
      {allCategories.map((eachCategory, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              handleCategory(eachCategory);
              handleOnClick(index);
            }}
            className={activeIndex === index ? "selected" : "not-selected"}
          >
            {eachCategory}
          </button>
        );
      })}
    </div>
  );
}

export default Navbar;
