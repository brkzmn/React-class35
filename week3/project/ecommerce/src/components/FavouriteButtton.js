import React, { useContext } from "react";
import { FavouritesContext } from "../context/FavouritesContext";
import heart from "../assets/heart-regular.svg";
import heartSelected from "../assets/heart-solid.svg";

const FavouriteButton = ({ id }) => {
  const favourites = useContext(FavouritesContext);

  return (
    <div
      className="favourite-container"
      onClick={() => {
        console.log(id);
      }}
    >
      <img src={heartSelected} alt="heart" />
    </div>
  );
};

export default FavouriteButton;
