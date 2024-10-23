import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Switch,
  FormControlLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import axios from "axios";

const AddOrchid = ({ open, handleClose, refreshOrchids }) => {
  const [orchidData, setOrchidData] = useState({
    image: "",
    orchidName: "",
    description: "",
    isNatural: false,
    isAttractive: false,
    category: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setOrchidData({
      ...orchidData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://67072c0ba0e04071d2294b5e.mockapi.io/players",
        orchidData
      );
      handleClose();
      refreshOrchids();
    } catch (error) {
      console.error("Error adding orchid:", error);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add Orchid</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Image URL"
            name="image"
            value={orchidData.image}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Name"
            name="orchidName"
            value={orchidData.orchidName}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Description"
            name="description"
            value={orchidData.description}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <FormControlLabel
            control={
              <Switch
                checked={orchidData.isNatural}
                onChange={handleChange}
                name="isNatural"
              />
            }
            label="Is Natural"
          />
          <FormControlLabel
            control={
              <Switch
                checked={orchidData.isAttractive}
                onChange={handleChange}
                name="isAttractive"
              />
            }
            label="Is Attractive"
          />
          <FormControl fullWidth margin="normal" required>
            <InputLabel>Category</InputLabel>
            <Select
              name="category"
              value={orchidData.category}
              onChange={handleChange}
            >
              <MenuItem value="Dendrobium">Dendrobium</MenuItem>
              <MenuItem value="Brassavola">Brassavola</MenuItem>
              <MenuItem value="Cattleya">Cattleya</MenuItem>
            </Select>
          </FormControl>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddOrchid;
