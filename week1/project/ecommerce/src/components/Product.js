import React from "react";

function Product({ productInfo }) {
  return (
    <div className="productCard">
      <img src={productInfo.image} alt={productInfo.title} />
      <h3>{productInfo.title}</h3>
    </div>
  );
}

export default Product;
