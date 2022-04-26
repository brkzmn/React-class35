import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

const ProductDetailsPage = () => {
  const [details, setDetails] = useState({});
  const [isLoadingDetails, setIsLoadingDetails] = useState(true);

  const { id } = useParams();

  const getDetails = async () => {
    try {
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
    <div className="product-details">
      {isLoadingDetails === true && <Loading />}
      {isLoadingDetails === false && (
        <div>
          <div className="details-title-container">
            <h1 className="details-title">{details.title}</h1>
          </div>
          <div className="product-details-container">
            <p className="product-details-description">{details.description}</p>
            <div className="product-image-container">
              <img
                className="product-image"
                src={details.image}
                alt={details.title}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailsPage;
