import React, { useState } from "react";
import "./App.css";

import HomePage from "./pages/HomePage";
import ProductDetails from "./components/ProductDetails";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [category, setCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              category={category}
              setCategory={setCategory}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          }
        />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
