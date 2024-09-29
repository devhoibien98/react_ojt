import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import orchids from "../../data/ListOfOrchids";
import OrchidCard from "./OrchidCard";
import { Link } from "react-router-dom";

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
      <br></br>
      <Badge bg="danger" className=" mb-2 text-center p-3 ">
        <Link to="/film" className="text-decoration-none text-white ">
          Film
        </Link>
      </Badge>
    </Container>
  );
};

export default Orchids;
