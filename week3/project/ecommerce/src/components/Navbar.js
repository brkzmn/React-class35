import React, { useState } from "react";
import Button from "./Button";
import useFetch from "../useFetch";
import Loading from "./Loading";

function Navbar() {
  const { data, error, isLoading } = useFetch(
    "https://fakestoreapi.com/products/categories"
  );
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <nav className="navbar">
      <ul>
        {isLoading === true && <Loading />}
        {error !== null && <div>{error}</div>}
        {isLoading === false &&
          data !== null &&
          data.map((eachCategory, index) => {
            return (
              <Button
                key={index}
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
