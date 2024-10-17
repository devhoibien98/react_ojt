// components/ModalComponent.js
import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

const ModalComponent = ({ open, handleClose, title, content, onConfirm }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{content}</DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={onConfirm} color="secondary">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalComponent;
