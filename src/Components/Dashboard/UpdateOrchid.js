import React, { useState, useEffect } from "react";
import {
  Modal,
  Box,
  TextField,
  Button,
  Switch,
  FormControlLabel,
} from "@mui/material";
import axios from "axios";

const UpdateOrchid = ({ open, handleClose, orchid, refreshOrchids }) => {
  const [orchidData, setOrchidData] = useState({
    image: "",
    orchidName: "",
    description: "",
    isNatural: false,
  });

  useEffect(() => {
    if (orchid) {
      setOrchidData({
        image: orchid.image,
        orchidName: orchid.orchidName,
        description: orchid.description,
        isNatural: orchid.isNatural,
        isAttractive: orchid.isAttractive,
      });
    }
  }, [orchid]);

  const handleUpdate = async () => {
    try {
      await axios.put(
        `https://67072c0ba0e04071d2294b5e.mockapi.io/players/${orchid.id}`,
        orchidData
      );
      refreshOrchids();
      handleClose();
    } catch (error) {
      console.error("Error updating orchid:", error);
      alert("Failed to update orchid.");
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          padding: 2,
          backgroundColor: "white",
          borderRadius: 1,
          maxWidth: 400,
          margin: "auto",
        }}
      >
        <h2>Update Orchid</h2>
        <TextField
          label="Image URL"
          variant="outlined"
          fullWidth
          value={orchidData.image}
          onChange={(e) =>
            setOrchidData({ ...orchidData, image: e.target.value })
          }
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          value={orchidData.orchidName}
          onChange={(e) =>
            setOrchidData({ ...orchidData, orchidName: e.target.value })
          }
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          value={orchidData.description}
          onChange={(e) =>
            setOrchidData({ ...orchidData, description: e.target.value })
          }
          sx={{ marginBottom: 2 }}
        />
        <FormControlLabel
          control={
            <Switch
              checked={orchidData.isNatural}
              onChange={(e) =>
                setOrchidData({ ...orchidData, isNatural: e.target.checked })
              }
            />
          }
          label="Is Natural"
        />
        <FormControlLabel
          control={
            <Switch
              checked={orchidData.isAttractive}
              onChange={(e) =>
                setOrchidData({ ...orchidData, isAttractive: e.target.checked })
              }
            />
          }
          label="Is Attractive"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleUpdate}
          fullWidth
        >
          Update
        </Button>
      </Box>
    </Modal>
  );
};

export default UpdateOrchid;
