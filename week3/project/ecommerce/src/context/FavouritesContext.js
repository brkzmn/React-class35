import { useState, createContext } from "react";

export const FavouritesContext = createContext();

export const FavouritesProvider = (props) => {
  const [favouritesProducts, setFavouritesProducts] = useState([]);

  const setFavouriteIds = (id) => {
    let ids = [...favouritesProducts];

    if (!ids.includes(id)) {
      ids.push(id);
      setFavouritesProducts(ids);
      return;
    }
    if (ids.includes(id)) {
      ids = ids.filter((favouriteId) => {
        return favouriteId !== id;
      });
      setFavouritesProducts(ids);
      return;
    }

    return;
  };

  const favourites = {
    setFavouritesProducts,
    favouritesProducts,
    setFavouriteIds,
  };

  return (
    <FavouritesContext.Provider value={favourites}>
      {props.children}
    </FavouritesContext.Provider>
  );
};
