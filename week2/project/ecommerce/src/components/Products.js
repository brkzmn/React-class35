import React, { useEffect, useState } from "react";

import Product from "./Product";

function Products({ category, setIsLoading, isLoading }) {
  const [productList, setProductList] = useState(null);

  const getAllProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProductList(data);

      console.log(isLoading, "isloadinggg");
      console.log(productList, "first Effect");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();

    setTimeout(() => {
      console.log("setISLOADING ..2000");
      setIsLoading(false);
    }, 2000);
  }, []);

  const getProducts = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      );
      const data = await response.json();
      setProductList(data);
      setIsLoading(false);
      console.log(isLoading, "isLoading inside sub category");
      console.log(productList, "second Effect");
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
      {isLoading === true && <div>LOADING</div>}

      {isLoading === false &&
        productList.map((eachProduct, index) => {
          return <Product key={index + 1} productInfo={eachProduct} />;
        })}
    </div>
  );
}

export default Products;
