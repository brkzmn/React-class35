import React from "react";
import allCategories from "../fake-data/all-categories";

function Navbar({ setCategory }) {
  const handleCategory = (category) => {
    setCategory(category);
  };
  return (
    <div className="Navbar">
      {allCategories.map((category, index) => {
        return (
          <button key={index} onClick={() => handleCategory(category)}>
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default Navbar;
