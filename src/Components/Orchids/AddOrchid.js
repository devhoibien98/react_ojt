import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ModalComponent from "../ModalComponent";
// import "./AddOrchid.css"; // Import file CSS của bạn

export default function AddOrchid() {
  const BASE_URL = "https://67072c0ba0e04071d2294b5e.mockapi.io/players";
  const [orchids, setOrchids] = useState([]);
  const fetchOrchids = () => {
    axios
      .get(BASE_URL)
      .then((response) => {
        setOrchids(response.data);
      })
      .catch((error) => {
        console.error("Error fetching orchids", error);
      });
  };
  const [newOrchid, setNewOrchid] = useState({
    orchidName: "",
    color: "",
    description: "",
    category: "",
    isNatural: false,
    isAttractive: false,
    image: "",
  });
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const handleAdd = () => {
    axios
      .post(`${BASE_URL}`, newOrchid)
      .then(() => {
        alert("Orchid Added Successfully");
        handleClose();
        setNewOrchid({
          // Reset state after adding
          orchidName: "",
          color: "",
          description: "",
          category: "",
          isNatural: false,
          isAttractive: false,
          image: "",
        });
      })
      .catch((error) => {
        console.error("Error Adding Orchid", error);
      });
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Add Orchid
      </Button>
      <ModalComponent
        open={openModal}
        handleClose={handleClose}
        title="Add New Orchid"
        content={
          <div className="modal-content">
            <input
              type="text"
              className="form-control"
              placeholder="Orchid Name"
              value={newOrchid.orchidName}
              onChange={(e) =>
                setNewOrchid({ ...newOrchid, orchidName: e.target.value })
              }
            />
            <input
              type="text"
              className="form-control"
              placeholder="Color"
              value={newOrchid.color}
              onChange={(e) =>
                setNewOrchid({ ...newOrchid, color: e.target.value })
              }
            />
            <textarea
              className="form-control"
              placeholder="Description"
              value={newOrchid.description}
              onChange={(e) =>
                setNewOrchid({ ...newOrchid, description: e.target.value })
              }
            />
            <input
              type="text"
              className="form-control"
              placeholder="Category"
              value={newOrchid.category}
              onChange={(e) =>
                setNewOrchid({ ...newOrchid, category: e.target.value })
              }
            />
            <div className="checkbox-group">
              <label>
                <input
                  type="checkbox"
                  checked={newOrchid.isNatural}
                  onChange={(e) =>
                    setNewOrchid({ ...newOrchid, isNatural: e.target.checked })
                  }
                />
                Is Natural
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={newOrchid.isAttractive}
                  onChange={(e) =>
                    setNewOrchid({
                      ...newOrchid,
                      isAttractive: e.target.checked,
                    })
                  }
                />
                Is Attractive
              </label>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Image URL"
              value={newOrchid.image}
              onChange={(e) =>
                setNewOrchid({ ...newOrchid, image: e.target.value })
              }
            />
          </div>
        }
        onConfirm={handleAdd}
      />
    </>
  );
}
