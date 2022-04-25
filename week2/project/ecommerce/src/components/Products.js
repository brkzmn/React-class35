import React, { useEffect, useState, useRef } from "react";

import Product from "./Product";
import Loading from "./Loading";

function Products({
  category,
  isLoadingFirst,
  isLoadingSecond,
  setIsLoadingFirst,
  setIsLoadingSecond,
}) {
  const [productList, setProductList] = useState(null);

  const getAllProducts = async () => {
    setIsLoadingFirst(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProductList(data);
      setIsLoadingFirst(false);
      console.log("get all products");
      console.log("first fetch", isLoadingFirst);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();

    return () => {
      console.log("first effect stopped");
    };
  }, []);

  const getProducts = async () => {
    console.log(category);

    setIsLoadingSecond(true);
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      );
      const data = await response.json();
      setProductList(data);

      console.log("second fetch", isLoadingSecond);
      setIsLoadingSecond(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();

    return () => {
      console.log("stopped");
    };
  }, [category]);

  if (productList == null) {
    return null;
  }

  return (
    <ul className="products-container">
      {(isLoadingFirst === true || isLoadingSecond === true) && <Loading />}

      {isLoadingFirst === false &&
        isLoadingSecond === false &&
        productList.map((eachProduct, index) => {
          return <Product key={index + 1} productInfo={eachProduct} />;
        })}
    </ul>
  );
}

export default Products;
