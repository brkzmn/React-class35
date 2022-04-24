import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  const [category, setCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
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
}

export default App;
