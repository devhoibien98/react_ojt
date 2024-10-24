import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

const Natural = () => {
  const [orchids, setOrchids] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const BASE_URL = "https://67072c0ba0e04071d2294b5e.mockapi.io/players";

  useEffect(() => {
    const fetchOrchids = async () => {
      try {
        const response = await axios.get(BASE_URL);
        const naturalOrchids = response.data.filter(
          (orchid) => orchid.isNatural
        );
        setOrchids(naturalOrchids);
      } catch (err) {
        setError("Failed to fetch orchids");
      } finally {
        setIsLoading(false);
      }
    };
    fetchOrchids();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Container className="mt-4">
      <Row>
        {orchids.map((orchid) => (
          <Col key={orchid.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card
              style={{
                height: "100%",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              <Card.Img
                variant="top"
                src={orchid.image}
                alt={orchid.orchidName}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body className="d-flex flex-column">
                <div className="flex-grow-1">
                  <Card.Title>{orchid.orchidName}</Card.Title>
                  <Card.Text>
                    <strong>Category:</strong> {orchid.category}
                    <br />
                    <strong>Description:</strong>{" "}
                    {orchid.description.length > 100
                      ? `${orchid.description.substring(0, 100)}...`
                      : orchid.description}
                  </Card.Text>
                </div>
                <Button
                  variant="primary"
                  href={`/orchid/${orchid.id}`}
                  className="mt-3"
                >
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Natural;
