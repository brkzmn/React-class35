import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ShowProducts from "./components/ShowProducts";

function App() {
  const [category, setCategory] = useState("All");
  return (
    <div className="App">
      <h1>Products</h1>
      <Navbar category={category} setCategory={setCategory} />
      <ShowProducts category={category} />
    </div>
  );
}

export default App;
