import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const About = () => {
  return (
    <Container>
      <Row className="justify-content-center align-items-center min-vh-100">
        <Col xs={12} md={10} lg={8} className="text-center">
          <h2>About Orchid Company</h2>
          <p>
            Welcome to Orchid Company, your premier destination for exquisite
            orchids. We are passionate about cultivating and sharing the beauty
            of orchids, providing our customers with exceptional service and
            unique varieties that inspire.
          </p>
          <Card className="my-4">
            <Card.Body>
              <Card.Title>Our Journey</Card.Title>
              <Card.Text>
                Founded in 2020 by a team of orchid enthusiasts, Orchid Company
                began as a small venture aimed at bringing the joy of orchids to
                homes everywhere. Our founders' dedication and love for these
                remarkable plants fueled our growth into a beloved brand.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="my-4">
            <Card.Body>
              <Card.Title>Our Vision</Card.Title>
              <Card.Text>
                We strive to be the leading provider of high-quality orchids,
                fostering a deeper appreciation for these stunning plants. Our
                vision is to create a community where orchid lovers can connect,
                learn, and share their passion.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="my-4">
            <Card.Body>
              <Card.Title>Get in Touch</Card.Title>
              <Card.Text>
                We would love to hear from you! If you have any questions or
                suggestions, feel free to reach out to us. Your feedback is
                invaluable in helping us improve our services.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
