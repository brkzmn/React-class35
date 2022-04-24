import React from "react";

function Button({
  eachCategory,
  index,
  setCategory,
  activeIndex,
  setActiveIndex,
  setIsLoading,
}) {
  return (
    <button
      key={index}
      className={`navbar-item ${activeIndex === index ? "active" : null}`}
      onClick={() => {
        setCategory(eachCategory);
        setActiveIndex(index);
        setIsLoading(true);
      }}
    >
      {eachCategory}
    </button>
  );
}

export default Button;
