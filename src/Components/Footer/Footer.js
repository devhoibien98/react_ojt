import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#f8f9fa",
        padding: "20px 0",
        marginTop: "50px",
      }}
    >
      <Container>
        <Row>
          <Col md={6} className="text-left">
            <h5 style={{ marginBottom: "10px" }}>Orchid App</h5>
            <p style={{ margin: 0 }}>© 2024 Orchid App. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-right">
            <a href="/" style={{ marginRight: "15px" }}>
              Home
            </a>
            <a href="/about" style={{ marginRight: "15px" }}>
              About
            </a>
            <a href="/contact">Contact</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
