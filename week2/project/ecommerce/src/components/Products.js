import React from "react";
import allProducts from "../fake-data/all-products";
import Product from "./Product";

function Products({ category }) {
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
    <div className="products-container">
      {productList.map((eachProduct) => {
        return <Product productInfo={eachProduct} />;
      })}
    </div>
  );
}

export default Products;
