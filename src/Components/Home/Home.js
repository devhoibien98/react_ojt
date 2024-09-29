import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container className="mt-4">
      <h1>Welcome to My App</h1>
      <h3>Explore the following sections:</h3>
      <ul style={{ listStyle: "none" }}>
        <li>
          <Link to="/orchid">Orchids</Link>
        </li>
        <li>
          <Link to="/film">Film</Link>
        </li>
      </ul>
    </Container>
  );
};

export default Home;
