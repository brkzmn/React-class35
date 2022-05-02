import React, { useContext } from "react";
import { FavouritesContext } from "../context/FavouritesContext";
import heart from "../assets/heart-regular.svg";
import heartSelected from "../assets/heart-solid.svg";

const FavouriteButton = ({ id }) => {
  const { favouritesProducts, setFavouritesProducts, setFavouriteIds } =
    useContext(FavouritesContext);
  const isFavourite = favouritesProducts.includes(id);
  console.log(isFavourite, "checkkss");

  return (
    <div
      className="favourite-container"
      onClick={() => {
        setFavouriteIds(id);
        console.log(favouritesProducts, "sgsfg");
        console.log("onclick");
      }}
    >
      <img src={!isFavourite ? heart : heartSelected} alt="heart" />
    </div>
  );
};

export default FavouriteButton;
