import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  const [category, setCategory] = useState("All");
  return (
    <div className="App">
      <h1>Products</h1>
      <Navbar category={category} setCategory={setCategory} />
      <Products category={category} />
    </div>
  );
}

export default App;
