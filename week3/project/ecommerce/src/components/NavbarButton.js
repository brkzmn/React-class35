import React, { useContext } from "react";
import { CategoriesContext } from "../context/CategoriesContext";

// function NavbarButton({ eachCategory, index, activeIndex, setActiveIndex }) {
//   const { setCategory } = useContext(CategoriesContext);

//   return (
//     <li
//       key={index}
//       className={`navbar-item ${activeIndex === index ? "active" : null}`}
//       onClick={() => {
//         setCategory(eachCategory);
//         setActiveIndex(index);
//       }}
//     >
//       {eachCategory}
//     </li>
//   );
// }

function NavbarButton({ eachCategory }) {
  const { category, setCategory } = useContext(CategoriesContext);

  return (
    <li
      className={`navbar-item ${category === eachCategory ? "active" : null}`}
      onClick={() => {
        setCategory(eachCategory);
      }}
    >
      {eachCategory}
    </li>
  );
}

export default NavbarButton;
