import React from "react";

const ProductsCard = ({id, thumbnail, title, description}) => {
  return (
    <>
      <p>{id}</p>
      <img src={thumbnail} alt="image" width="200" />
      <h3>{title}</h3>
      <p>{description}</p>
    </>
  );
};

export default ProductsCard;
