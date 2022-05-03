import React, { useState } from "react";
import NavbarButton from "./NavbarButton";
import useFetch from "../useFetch";
import Loading from "./Loading";

function Navbar() {
  const { data, error, isLoading } = useFetch(
    "https://fakestoreapi.com/products/categories"
  );
  const [activeIndex, setActiveIndex] = useState(null);
  console.log("navbar re-rendered");

  return (
    <nav className="navbar">
      <ul>
        {isLoading === true && <Loading />}
        {error !== null && <div>{error}</div>}
        {isLoading === false &&
          data !== null &&
          data.map((eachCategory, index) => {
            return (
              <NavbarButton
                key={eachCategory}
                eachCategory={eachCategory}
                index={index}
                setActiveIndex={setActiveIndex}
                activeIndex={activeIndex}
              />
            );
          })}
      </ul>
    </nav>
  );
}

export default Navbar;
