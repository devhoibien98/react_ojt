import { Card, Badge } from "react-bootstrap";
import { StarFill, StarHalf, Star } from "react-bootstrap-icons";

const FilmCard = ({ film }) => {
  const { name, image, origin, category, rating, isSpecial } = film;
  const renderRatingStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => {
      const starIndex = i + 1;
      if (starIndex <= rating) {
        return <StarFill key={starIndex} className="text-warning" />;
      } else if (starIndex - 0.5 <= rating) {
        return <StarHalf key={starIndex} className="text-warning" />;
      } else {
        return <Star key={starIndex} className="text-warning" />;
      }
    });
  };
  return (
    <Card className="h-100">
      {/* Orchid image */}
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
        {/* Orchid name */}
        <Card.Title>{name}</Card.Title>

        {/* Orchid details */}
        <Card.Text>
          <strong>Origin:</strong> {origin}
          <br />
          <strong>Category:</strong> {category}
          <br />
        </Card.Text>

        {/* Special Orchid badge */}
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
