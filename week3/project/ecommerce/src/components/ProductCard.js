import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FavouriteButton from "./FavouriteButtton";

import { FavouritesContext } from "../context/FavouritesContext";

function ProductCard({ productInfo }) {
  const { favouritesProducts, setFavouritesProducts, setFavouriteIds } =
    useContext(FavouritesContext);
  // console.log(favouritesProducts, "carddd");

  return (
    <li className="product-card">
      <Link to={`/product/${productInfo.id}`}>
        <div>
          <img
            className="product-image"
            src={productInfo.image}
            alt={productInfo.title}
          />
          {}

          <span className="product-title">{productInfo.title}</span>
        </div>
      </Link>
      <FavouriteButton id={productInfo.id} />
    </li>
  );
}

export default ProductCard;
