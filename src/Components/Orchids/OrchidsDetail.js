import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button, Card, Modal } from "react-bootstrap";
import axios from "axios";

const OrchidsDetail = () => {
  const { id } = useParams();
  const BASE_URL = `https://67072c0ba0e04071d2294b5e.mockapi.io/players/${id}`;

  const [orchid, setOrchid] = useState(null);
  const [showVideo, setShowVideo] = useState(false);

  const getEmbedUrl = (url) => {
    const videoId = url.split("v=")[1];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  useEffect(() => {
    const fetchOrchid = async () => {
      try {
        const response = await axios.get(BASE_URL);
        setOrchid(response.data);
      } catch (error) {
        console.error("Error fetching orchid", error);
      }
    };
    fetchOrchid();
  }, [id]);

  if (!orchid) {
    return <div>Loading orchid details...</div>;
  }

  return (
    <>
      <Card className="h-100">
        <Card style={{ borderTopWidth: "0px", borderBottomWidth: "0px" }}>
          <Card.Img
            src={orchid.image}
            alt={orchid.orchidName}
            style={{
              height: "400px",
              width: "100%",
              objectFit: "cover",
              objectPosition: "center",
              maxWidth: "300px",
              margin: "0 auto",
            }}
          />
          <Card.Body className="d-flex flex-column text-center">
            <Card.Title>{orchid.orchidName}</Card.Title>
            <Card.Text>
              <strong>Category:</strong> {orchid.category}
              <br />
              <strong>Description:</strong>
              <p className="mt-2 text-muted" style={{ fontSize: "0.9em" }}>
                {orchid.description}
              </p>
              <strong>Rating:</strong> {orchid.rating} ⭐
              <br />
              <strong>Is Natural:</strong> {orchid.isNatural ? "Yes" : "No"} |
              <strong> Is Attractive:</strong>{" "}
              {orchid.isAttractive ? "Yes" : "No"}
              <br />
              <strong>Video: </strong>{" "}
              <Button
                variant="link"
                className="p-0 text-decoration-none"
                onClick={() => setShowVideo(true)}
              >
                Watch Video
              </Button>
            </Card.Text>
          </Card.Body>
        </Card>

        <Link to="/orchid" className="text-decoration-none text-white mb-2">
          <Button variant="primary" type="button" style={{ marginTop: "20px" }}>
            Back
          </Button>
        </Link>
      </Card>

      {/* Video Modal */}
      <Modal
        show={showVideo}
        onHide={() => setShowVideo(false)}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{orchid.orchidName}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          <div className="ratio ratio-16x9">
            <iframe
              src={getEmbedUrl(orchid.video)}
              title={orchid.orchidName}
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default OrchidsDetail;
