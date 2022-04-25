import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [details, setDetails] = useState({});

  const { id } = useParams();

  const getDetails = async () => {
    try {
      console.log(id);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setDetails(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetails();
  });
  console.log(details);

  if (details === {}) {
    return null;
  }
  return (
    <div>
      <h1>ProductDetails</h1>
      <span className="product-title">{details.title}</span>
      <img src={details.image} alt={details.title} />
      <p>{details.description}</p>
    </div>
  );
};

export default ProductDetails;
