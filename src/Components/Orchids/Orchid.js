import React, { useEffect, useState } from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import { Alert, CircularProgress } from "@mui/material";
import OrchidCard from "./OrchidCard";
import Login from "../Login/login";

const Orchids = () => {
  const BASE_URL = "https://67072c0ba0e04071d2294b5e.mockapi.io/players";
  const [orchids, setOrchids] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(BASE_URL);
        if (response.ok) {
          const data = await response.json();
          setOrchids(data);
        } else {
          throw new Error("Something went wrong");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <Container fluid>
      {/* <Login /> */}
      <Row xs={1} sm={2} md={3} lg={4} className="g-4 pt-5">
        {isLoading && <CircularProgress className="mx-auto" />}
        {error && (
          <Alert severity="error" className="mx-auto">
            {error}
          </Alert>
        )}
        {orchids.length === 0 && !isLoading && (
          <Col className="text-center">
            <p>No Orchids Found</p>
          </Col>
        )}
        {orchids.map((orchid) => (
          <Col key={orchid.id} className="d-flex">
            <OrchidCard orchid={orchid} className="flex-fill h-100" />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Orchids;
