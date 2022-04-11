import React, { useState } from "react";
import allCategories from "../fake-data/all-categories";
import Button from "./Button";

function Navbar({ setCategory }) {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <nav className="navbar">
      {allCategories.map((eachCategory, index) => {
        return (
          <Button
            key={index}
            eachCategory={eachCategory}
            index={index}
            setCategory={setCategory}
            setActiveIndex={setActiveIndex}
            activeIndex={activeIndex}
          />
        );
      })}
    </nav>
  );
}

export default Navbar;
