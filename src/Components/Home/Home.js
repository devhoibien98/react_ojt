import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container className="mt-4">
      <h1>Welcome to My App</h1>
      <h3>Explore the following sections:</h3>
      <ul
        style={{ listStyle: "none" }}
        className="d-flex justify-content-around"
      >
        <li>
          <Link to="/orchid" className="text-decoration-none text-white">
            <Button
              variant="primary"
              type="submit"
              style={{ marginTop: "20px" }}
            >
              Orchid
            </Button>
          </Link>
        </li>
      </ul>
    </Container>
  );
};

export default Home;
