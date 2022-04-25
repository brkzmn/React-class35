import React from "react";
import { useNavigate } from "react-router-dom";

function Product({ productInfo }) {
  const navigate = useNavigate();
  return (
    <li
      className="product-card"
      onClick={() => {
        navigate(`/product/${productInfo.id}`);
      }}
    >
      <img src={productInfo.image} alt={productInfo.title} />
      <span className="product-title">{productInfo.title}</span>
    </li>
  );
}

export default Product;
