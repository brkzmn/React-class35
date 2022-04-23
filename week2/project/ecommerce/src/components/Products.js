import React, { useEffect, useState } from "react";

import Product from "./Product";

function Products({ category }) {
  const [productList, setProductList] = useState(null);

  const getAllProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProductList(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      );
      const data = await response.json();
      setProductList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [category]);

  if (productList == null) {
    return null;
  }

  return (
    <div>
      {productList.map((eachProduct) => {
        return <Product productInfo={eachProduct} />;
      })}
    </div>
  );
}

export default Products;
