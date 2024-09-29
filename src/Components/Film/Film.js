import { Container, Row, Col, Badge } from "react-bootstrap";
import FilmCard from "./FilmCard";
import films from "../../data/ListOfFilms";
import { Link } from "react-router-dom";
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
      <br></br>
      <Badge bg="danger" className=" mb-2 text-center p-3 ">
        <Link to="/orchid" className="text-decoration-none text-white ">
          Orchid
        </Link>
      </Badge>
    </Container>
  );
};

export default Film;
