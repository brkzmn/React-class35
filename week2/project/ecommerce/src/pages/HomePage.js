import React from "react";
import Navbar from "../components/Navbar";
import Products from "../components/Products";

const HomePage = ({ category, setCategory, isLoading, setIsLoading }) => {
  return (
    <div className="App">
      <h1>Products</h1>
      <Navbar
        category={category}
        setCategory={setCategory}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      <Products
        category={category}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </div>
  );
};

export default HomePage;
