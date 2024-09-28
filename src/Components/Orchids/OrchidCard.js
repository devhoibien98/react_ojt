import React from "react";
import { Card, Badge } from "react-bootstrap";
import { StarFill, StarHalf, Star } from "react-bootstrap-icons";

const OrchidCard = ({ orchid }) => {
  const { name, image, origin, color, isSpecial, rating, category } = orchid;

  // Function to render rating stars based on the rating value
  const renderRatingStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => {
      const starIndex = i + 1;
      if (starIndex <= rating) {
        return <StarFill key={starIndex} className="text-warning" />;
      } else if (starIndex - 0.5 <= rating) {
        return <StarHalf key={starIndex} className="text-warning" />;
      } else {
        return <Star key={starIndex} className="text-warning" />;
      }
    });
  };

  return (
    <Card className="h-100">
      {/* Orchid image */}
      <Card.Img
        src={image}
        alt={name}
        style={{
          height: "150px",
          width: "100%",
          objectFit: "cover",
          objectPosition: "center",
          maxWidth: "300px",
          margin: "0 auto",
        }}
      />

      <Card.Body className="d-flex flex-column">
        {/* Orchid name */}
        <Card.Title>{name}</Card.Title>

        {/* Orchid details */}
        <Card.Text>
          <strong>Origin:</strong> {origin}
          <br />
          <strong>Color:</strong> {color}
          <br />
          <strong>Category:</strong> {category}
          <br />
          <strong>Rating:</strong> {renderRatingStars(rating)}
        </Card.Text>

        {/* Special Orchid badge */}
        {isSpecial && (
          <Badge bg="danger" className="align-self-start mb-2">
            Special Orchid
          </Badge>
        )}
      </Card.Body>
    </Card>
  );
};

export default OrchidCard;
