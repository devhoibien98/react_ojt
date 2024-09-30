import React from "react";
import { Link, useParams } from "react-router-dom";
import orchids from "../../data/ListOfOrchids";
import { Button, Card } from "react-bootstrap";

const OrchidsDetail = () => {
  const { id } = useParams();

  const orchid = orchids.find((orchid) => orchid.id === id);

  if (!orchid) {
    return (
      <h1 className="text-danger text-center fw-bold">Orchid Not Found</h1>
    );
  }
  return (
    <Card className="h-100">
      <Card.Img
        src={orchid.image}
        alt={orchid.name}
        style={{
          height: "400px",
          width: "100%",
          objectFit: "cover",
          objectPosition: "center",
          maxWidth: "300px",
          margin: "0 auto",
        }}
      />

      <Card.Body className="d-flex flex-column text-center">
        <Card.Title>{orchid.name}</Card.Title>

        <Card.Text>
          <strong>Origin:</strong> {orchid.origin}
          <br />
          <strong>Color:</strong> {orchid.color}
          <br />
          <strong>Category:</strong> {orchid.category}
          <br />
          <strong>Rating:</strong> {orchid.rating} ⭐
        </Card.Text>
      </Card.Body>
      <Link to="/orchid" className="text-decoration-none text-white mb-2">
        <Button variant="primary" type="submit" style={{ marginTop: "20px" }}>
          Back
        </Button>
      </Link>
    </Card>
  );
};

export default OrchidsDetail;
