import React from "react";

function Product({ productInfo }) {
  return (
    <div className="product-card">
      <img src={productInfo.image} alt={productInfo.title} />
      <span className="product-title">{productInfo.title}</span>
    </div>
  );
}

export default Product;
