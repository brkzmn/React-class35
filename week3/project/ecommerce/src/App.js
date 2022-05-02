import React, { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import { FavouritesProvider } from "./context/FavouritesContext";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FavouritesPage from "./pages/FavouritesPage";

function App() {
  const [category, setCategory] = useState(null);
  const [isLoadingFirst, setIsLoadingFirst] = useState(false);
  const [isLoadingSecond, setIsLoadingSecond] = useState(false);

  return (
    <FavouritesProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                category={category}
                setCategory={setCategory}
                isLoadingFirst={isLoadingFirst}
                setIsLoadingFirst={setIsLoadingFirst}
                isLoadingSecond={isLoadingSecond}
                setIsLoadingSecond={setIsLoadingSecond}
              />
            }
          />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
        </Routes>
      </Router>
    </FavouritesProvider>
  );
}

export default App;
