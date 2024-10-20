// import React from "react";
// import { Link, useParams } from "react-router-dom";
// import orchids from "../../data/ListOfOrchids";
// import { Button, Card } from "react-bootstrap";

// const OrchidsDetail = () => {
//   const { id } = useParams();

//   const orchid = orchids.find((orchid) => orchid.id === id);

//   if (!orchid) {
//     return (
//       <h1 className="text-danger text-center fw-bold">Orchid Not Found</h1>
//     );
//   }
//   return (
//     <Card className="h-100">
//       <Card.Img
//         src={orchid.image}
//         alt={orchid.name}
//         style={{
//           height: "400px",
//           width: "100%",
//           objectFit: "cover",
//           objectPosition: "center",
//           maxWidth: "300px",
//           margin: "0 auto",
//         }}
//       />

//       <Card.Body className="d-flex flex-column text-center">
//         <Card.Title>{orchid.name}</Card.Title>

//         <Card.Text>
//           <strong>Origin:</strong> {orchid.origin}
//           <br />
//           <strong>Color:</strong> {orchid.color}
//           <br />
//           <strong>Category:</strong> {orchid.category}
//           <br />
//           <strong>Rating:</strong> {orchid.rating} ⭐
//         </Card.Text>
//       </Card.Body>
//       <Link to="/orchid" className="text-decoration-none text-white mb-2">
//         <Button variant="primary" type="submit" style={{ marginTop: "20px" }}>
//           Back
//         </Button>
//       </Link>
//     </Card>
//   );
// };

// export default OrchidsDetail;
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  Button,
  Card,
  Modal,
  Spinner,
  Alert,
  Form,
  NavLink,
} from "react-bootstrap";
import axios from "axios";

const OrchidsDetail = () => {
  const BASE_URL = "https://67072c0ba0e04071d2294b5e.mockapi.io/players";
  const { id } = useParams();
  const navigate = useNavigate();
  const [orchid, setOrchid] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    const fetchOrchid = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/${id}`);
        if (response.data) {
          setOrchid(response.data);
          console.log(response.data);
        } else {
          throw new Error("Orchid not found");
        }
      } catch (err) {
        setError("Orchid Not Found");
      } finally {
        setIsLoading(false);
      }
    };
    fetchOrchid();
  }, [id]);

  // Handle delete
  const handleDelete = async () => {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
      alert("Orchid Deleted Successfully");
      navigate("/orchid");
    } catch (error) {
      console.log("Error deleting orchid", error);
    }
  };

  const handleEdit = async () => {
    try {
      await axios.put(`${BASE_URL}/${id}`, orchid);
      setShowEditModal(false);
    } catch (error) {
      console.log("Error updating orchid", error);
    }
  };

  if (isLoading) {
    return (
      <div className="text-center">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="danger" className="text-center">
        {error}
      </Alert>
    );
  }

  return (
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
            <strong> Category:</strong> {orchid.category}
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
            <strong>Video : </strong>{" "}
            <NavLink href={orchid.video} target="_blank">
              Watch Video
            </NavLink>
          </Card.Text>
          <div className="d-flex justify-content-around mt-3">
            <Button variant="primary" onClick={() => setShowEditModal(true)}>
              Edit
            </Button>
            <Button variant="danger" onClick={() => setShowDeleteModal(true)}>
              Delete
            </Button>
          </div>
        </Card.Body>
      </Card>

      <Link to="/orchid" className="text-decoration-none text-white mb-2">
        <Button variant="primary" type="button" style={{ marginTop: "20px" }}>
          Back
        </Button>
      </Link>

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Orchid</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={orchid.orchidName} // Sử dụng orchid.orchidName thay vì orchid.name
                onChange={(e) =>
                  setOrchid({ ...orchid, orchidName: e.target.value })
                }
                placeholder="Enter orchid name"
              />
            </Form.Group>
            <Form.Group controlId="formColor" className="mt-3">
              <Form.Label>Color</Form.Label>
              <Form.Control
                type="text"
                value={orchid.color}
                onChange={(e) =>
                  setOrchid({ ...orchid, color: e.target.value })
                }
                placeholder="Enter orchid color"
              />
            </Form.Group>
            <Form.Group controlId="formCategory" className="mt-3">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                value={orchid.category}
                onChange={(e) =>
                  setOrchid({ ...orchid, category: e.target.value })
                }
                placeholder="Enter orchid category"
              />
            </Form.Group>
            <Form.Group controlId="formDescription" className="mt-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={orchid.description}
                onChange={(e) =>
                  setOrchid({ ...orchid, description: e.target.value })
                }
                placeholder="Enter orchid description"
              />
            </Form.Group>
            <Form.Group controlId="formIsNatural" className="mt-3">
              <Form.Check
                type="checkbox"
                label="Is Natural"
                checked={orchid.isNatural}
                onChange={(e) =>
                  setOrchid({ ...orchid, isNatural: e.target.checked })
                }
              />
            </Form.Group>
            <Form.Group controlId="formIsAttractive" className="mt-3">
              <Form.Check
                type="checkbox"
                label="Is Attractive"
                checked={orchid.isAttractive}
                onChange={(e) =>
                  setOrchid({ ...orchid, isAttractive: e.target.checked })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Delete Modal */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Orchid</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this orchid "{orchid.orchidName}"?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
};

export default OrchidsDetail;
