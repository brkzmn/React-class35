import React from "react";
import { Link } from "react-router-dom";

const TopNavbar = ({ header }) => {
  return (
    <div className="header">
      <h1>{header}</h1>
      <Link to={"/favourites"} className="nav-link">
        Favourites
      </Link>
      <Link to={"/"} className="nav-link">
        Products
      </Link>
    </div>
  );
};

export default TopNavbar;
