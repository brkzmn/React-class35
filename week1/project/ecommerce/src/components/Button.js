import React, { useState } from "react";

function Button({
  eachCategory,
  index,
  setCategory,
  activeIndex,
  setActiveIndex,
}) {
  return (
    <button
      key={index}
      className={activeIndex === index ? "selected" : "not-selected"}
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
