import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import orchids from "../../data/ListOfOrchids";
import OrchidCard from "./OrchidCard";

const Orchids = () => {
  return (
    <Container fluid>
      <Row xs={1} sm={2} md={3} lg={5} className="g-4 pt-5">
        {orchids.map((orchid) => (
          <Col key={orchid.id}>
            <OrchidCard orchid={orchid} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Orchids;
