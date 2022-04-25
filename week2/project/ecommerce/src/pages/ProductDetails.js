import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

const ProductDetails = () => {
  const [details, setDetails] = useState({});
  const [isLoadingDetails, setIsLoadingDetails] = useState(true);

  const { id } = useParams();

  const getDetails = async () => {
    try {
      console.log(id);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setDetails(data);
      setIsLoadingDetails(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div>
      {isLoadingDetails === true && <Loading />}
      {isLoadingDetails === false && (
        <div>
          <h1>ProductDetails</h1>
          <span className="product-title">{details.title}</span>
          <img src={details.image} alt={details.title} />
          <p>{details.description}</p>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
