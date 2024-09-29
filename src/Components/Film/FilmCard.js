import { Card, Badge } from "react-bootstrap";

const FilmCard = ({ film }) => {
  const { name, image, origin, category, rating, isSpecial } = film;

  return (
    <Card className="h-100">
      <Card.Img
        src={image}
        alt={name}
        style={{
          height: "150px",
          width: "100%",
          objectFit: "cover",
          objectPosition: "center",
          maxWidth: "300px",
          margin: "0 auto",
        }}
      />

      <Card.Body className="d-flex flex-column">
        <Card.Title>{name}</Card.Title>

        <Card.Text>
          <strong>Origin:</strong> {origin}
          <br />
          <strong>Category:</strong> {category}
          <br />
          <strong>Rating:</strong> {rating} ⭐
        </Card.Text>

        {isSpecial && (
          <Badge bg="danger" className=" mb-2 text-center p-3">
            Special Film
          </Badge>
        )}
      </Card.Body>
    </Card>
  );
};

export default FilmCard;
