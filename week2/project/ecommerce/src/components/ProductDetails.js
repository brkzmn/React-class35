import React, { useEffect } from "react";

const ProductDetails = ({ productId }) => {
  const getDetails = async () => {
    try {
      const response = fetch(`https://fakestoreapi.com/products/${productId}`);
      const data = (await response).json();
    } catch (error) {}
  };

  useEffect(() => {}, [productId]);
  return <div>ProductDetails</div>;
};

export default ProductDetails;
