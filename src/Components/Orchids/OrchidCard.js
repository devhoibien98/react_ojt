import React from "react";

const OrchidCard = ({ orchid }) => {
  const { name, image, origin, color, isSpecial, rating, category } = orchid;
  return (
    <div>
      <img src={image} alt={name} height={350} width={450} />
      <div>
        <h3>{name}</h3>
        <p>
          <strong>Origin : {origin}</strong>
        </p>
        <p>
          <strong>Color : {color}</strong>
        </p>
        <p>
          <strong>Category : {category}</strong>
        </p>
        <p>
          <strong>Rating : {rating}</strong>
        </p>
        {isSpecial && <p className="fw-bold text-danger">Special Orchid</p>}
      </div>
    </div>
  );
};
export default OrchidCard;
