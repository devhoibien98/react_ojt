import films from "../../data/films";
import { Container, Row, Col } from "react-bootstrap";
import FilmCard from "./FilmCard";
const Film = () => {
  return (
    <Container fluid>
      <Row xs={1} sm={2} md={3} lg={5} className="g-4 pt-5">
        {films.map((film) => (
          <Col key={film.id}>
            <FilmCard film={film} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Film;
