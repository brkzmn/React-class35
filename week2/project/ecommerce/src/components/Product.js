import React from "react";
import { Link } from "react-router-dom";

function Product({ productInfo }) {
  return (
    <div className="product-card">
      <Link to={`/product/${productInfo.id}`}>
        <img src={productInfo.image} alt={productInfo.title} />
        <span className="product-title">{productInfo.title}</span>
      </Link>
    </div>
  );
}

export default Product;
