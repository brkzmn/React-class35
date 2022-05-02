import React, { useState, useEffect, useContext } from "react";
import { FavouritesContext } from "../context/FavouritesContext";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";
import TopNavbar from "../components/TopNavbar";
const FavouritesPage = () => {
  const { favouritesProducts } = useContext(FavouritesContext);

  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getProducts = async (id) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!response.ok) throw "HTTP Error";
      const data = await response.json();

      setProductList((previousState) => [...previousState, data]);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    setProductList([]);
    favouritesProducts.forEach((favouriteId) => {
      getProducts(favouriteId);
    });
  }, [favouritesProducts]);

  // if (productList.length === 0) {
  //   return null;
  // }
  if (error != null) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <TopNavbar header={"Favourites"} />
      <ul className="products-container">
        {isLoading === true && <Loading />}
        {productList.length === 0 && <div>No favourite item</div>}
        {isLoading === false &&
          productList.map((eachProduct, index) => {
            return <ProductCard key={index + 1} productInfo={eachProduct} />;
          })}
      </ul>
    </div>
  );
};

export default FavouritesPage;
