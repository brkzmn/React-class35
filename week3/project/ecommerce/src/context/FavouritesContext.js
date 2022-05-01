import { useState, createContext } from "react";

export const FavouritesContext = createContext();

export const FavouritesProvider = (props) => {
  const [favouritesProducts, setFavouritesProducts] = useState({});
  const favourites = {
    setFavouritesProducts,
    favouritesProducts,
  };
  return (
    <FavouritesContext.Provider value={favourites}>
      {props.children}
    </FavouritesContext.Provider>
  );
};
