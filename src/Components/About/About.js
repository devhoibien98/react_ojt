import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const About = () => {
  return (
    <Container
    //   fluid
    //   className={`about ${
    //     isDarkMode ? "bg-dark text-white" : "bg-light text-dark"
    //   }`}
    >
      <Row className="justify-content-center align-items-center min-vh-100">
        <Col xs={12} md={10} lg={8} className="text-center">
          <h2>About Orchid Company</h2>
          <p>
            Welcome to Orchid Company, your number one source for all things
            orchids. We're dedicated to providing you the very best of orchid
            plants, with an emphasis on quality, customer service, and
            uniqueness.
          </p>
          <Card
          // className={`my-4 ${
          //   isDarkMode ? "bg-secondary text-white" : "bg-light text-dark"
          // }`}
          >
            <Card.Body>
              <Card.Title>Our Story</Card.Title>
              <Card.Text>
                Founded in 2020 by Jane Doe, Orchid Company has come a long way
                from its beginnings in a small home office. When Jane first
                started out, her passion for orchids drove her to start her own
                business.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
          // className={`my-4 ${
          //   isDarkMode ? "bg-secondary text-white" : "bg-light text-dark"
          // }`}
          >
            <Card.Body>
              <Card.Title>Our Mission</Card.Title>
              <Card.Text>
                Our mission is to provide the best quality orchids to our
                customers and to share our love for these beautiful plants with
                the world.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
          // className={`my-4 ${
          //   isDarkMode ? "bg-secondary text-white" : "bg-light text-dark"
          // }`}
          >
            <Card.Body>
              <Card.Title>Contact Us</Card.Title>
              <Card.Text>
                If you have any questions or comments, please don't hesitate to
                contact us.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
