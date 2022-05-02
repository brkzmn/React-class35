import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import TopNavbar from "../components/TopNavbar";

const HomePage = ({
  category,
  setCategory,
  isLoadingFirst,
  setIsLoadingFirst,
  isLoadingSecond,
  setIsLoadingSecond,
}) => {
  return (
    <div className="App">
      <TopNavbar header={"Products"} />
      <Navbar
        category={category}
        setCategory={setCategory}
        isLoadingSecond={isLoadingSecond}
        setIsLoadingSecond={setIsLoadingSecond}
      />
      <Products
        category={category}
        isLoadingFirst={isLoadingFirst}
        setIsLoadingFirst={setIsLoadingFirst}
        isLoadingSecond={isLoadingSecond}
        setIsLoadingSecond={setIsLoadingSecond}
      />
    </div>
  );
};

export default HomePage;
