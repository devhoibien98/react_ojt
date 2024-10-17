import React from "react";
import { Card, Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const OrchidCard = ({ orchid }) => {
  const { orchidName, image, category, description, isNatural, isAttractive } =
    orchid;

  return (
    <Card className="h-100 orchid-card">
      <Card.Img
        src={image}
        alt={orchidName}
        style={{
          height: "250px",
          width: "100%",
          objectFit: "cover",
          objectPosition: "center",
          maxWidth: "400px",
          margin: "0 auto",
        }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{orchidName}</Card.Title>
        <Card.Text>
          <strong>Category:</strong> {category}
          <br />
          <strong>Description:</strong> {description.slice(0, 100)}...
          <br />
          <strong>Natural:</strong> {isNatural ? "Yes" : "No"}
          <br />
          <strong>Attractive:</strong> {isAttractive ? "Yes" : "No"}
        </Card.Text>
        <Link
          to={`/orchid/${orchid.id}`}
          className="text-decoration-none text-white text-center mb-3"
        >
          <Button variant="primary" type="submit" style={{ marginTop: "20px" }}>
            View Orchid
          </Button>
        </Link>
        {isNatural && (
          <Badge bg="success" className="mb-2 text-center p-2">
            Natural Orchid
          </Badge>
        )}
        {isAttractive && (
          <Badge bg="warning" className="mt-2 text-center p-2">
            Attractive Orchid
          </Badge>
        )}
      </Card.Body>
    </Card>
  );
};

export default OrchidCard;
