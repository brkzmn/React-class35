import { useState, createContext } from "react";

export const FavouritesContext = createContext();

export const FavouritesProvider = (props) => {
  const [favouritesProducts, setFavouritesProducts] = useState([]);
  // console.log(favouritesProducts, "context");

  const setFavouriteIds = (id) => {
    // console.log(id);
    // console.log("set function ");
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

    // if (favouritesProducts.includes(id)) {
    //   const filteredIds = favouritesProducts.filter((favouriteId) => {
    //     return favouriteId !== id;
    //   });
    //   setFavouritesProducts(filteredIds);
    //   console.log(favouritesProducts);
    //   return;

    return;
  };
  // console.log("context...");
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
