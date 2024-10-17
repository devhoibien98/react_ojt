import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col md={6}>
            <h5>Orchid App</h5>
            <p>© 2023 Orchid App. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-right">
            <a href="/">Home</a> |<a href="/about"> About</a> |
            <a href="/contact"> Contact</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
