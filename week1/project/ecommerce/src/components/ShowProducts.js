import React from "react";
import allProducts from "../fake-data/all-products";
import Product from "./Product";

function ShowProducts({ category }) {
  if (category === "All") {
    return (
      <div>
        {allProducts.map((eachProduct) => {
          return <Product productInfo={eachProduct} />;
        })}
      </div>
    );
  }
  return;
}

export default ShowProducts;
