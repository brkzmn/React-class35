import React from "react";
import allProducts from "../fake-data/all-products";
import Product from "./Product";

function ShowProducts({ category }) {
  let productList;
  const productCategory = category.slice(6);
  if (productCategory === "") {
    productList = allProducts;
  } else {
    productList = allProducts.filter((product) => {
      return product.category === productCategory;
    });
  }

  return (
    <div>
      {productList.map((eachProduct) => {
        return <Product productInfo={eachProduct} />;
      })}
    </div>
  );
}

export default ShowProducts;
