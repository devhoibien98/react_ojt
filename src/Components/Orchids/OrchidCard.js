import React from "react";
import { Card, Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const OrchidCard = ({ orchid }) => {
  const { orchidName, image, category, description, isNatural, isAttractive } =
    orchid;

  return (
    <Card className="h-100 orchid-card">
      <div
        className="card-container"
        style={{
          width: "320px",
          height: "480px",
          margin: "0 auto",
        }}
      >
        <div
          className="img-container"
          style={{
            height: "200px",
            width: "100%",
            overflow: "hidden",
          }}
        >
          <Card.Img
            src={image}
            alt={orchidName}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>

        <Card.Body
          className="d-flex flex-column"
          style={{
            height: "calc(100% - 200px)",
            padding: "1rem",
          }}
        >
          <div
            className="content-wrapper"
            style={{
              flex: "1 1 auto",
              overflow: "hidden",
            }}
          >
            <Card.Title className="text-truncate">{orchidName}</Card.Title>
            <Card.Text
              style={{
                fontSize: "0.9rem",
                marginBottom: "0.5rem",
              }}
            >
              <strong>Category:</strong> {category}
              <br />
              <div
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: "2",
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                <strong>Description:</strong> {description}
              </div>
              <strong>Natural:</strong> {isNatural ? "Yes" : "No"}
              <br />
              <strong>Attractive:</strong> {isAttractive ? "Yes" : "No"}
            </Card.Text>
          </div>

          <div
            className="button-badge-container"
            style={{
              marginTop: "auto",
              textAlign: "center",
            }}
          >
            <Link to={`/orchid/${orchid.id}`} className="text-decoration-none">
              <Button variant="primary" className="w-100 mb-2">
                View Orchid
              </Button>
            </Link>
            {isNatural && (
              <Badge bg="success" className="d-block mb-2 w-100 py-2">
                Natural Orchid
              </Badge>
            )}
            {isAttractive && (
              <Badge bg="warning" className="d-block w-100 py-2">
                Attractive Orchid
              </Badge>
            )}
          </div>
        </Card.Body>
      </div>
    </Card>
  );
};

export default OrchidCard;
