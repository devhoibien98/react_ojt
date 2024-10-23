import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import UpdateOrchid from "./UpdateOrchid";
import AddOrchid from "./AddOrchid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dashboard = ({ orchids, refreshOrchids }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [selectedOrchid, setSelectedOrchid] = useState(null);

  const handleAddOrchid = () => {
    setModalOpen(false);
    refreshOrchids();
    toast.success("Orchid added successfully!");
  };

  const handleUpdateOrchid = (orchid) => {
    setSelectedOrchid(orchid);
    setUpdateModalOpen(true);
  };

  const handleDeleteOrchid = async (id) => {
    console.log("🚀 ~ id:", id);

    try {
      await axios.delete(
        `https://67072c0ba0e04071d2294b5e.mockapi.io/players/${id}`
      );
      refreshOrchids();
      toast.success("Orchid deleted successfully!");
    } catch (error) {
      console.error("Error deleting orchid:", error);
      toast.error("Failed to delete orchid.");
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setModalOpen(true)}
        sx={{ marginBottom: 2 }}
      >
        Add Orchid
      </Button>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                Image
              </TableCell>
              <TableCell sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                Name
              </TableCell>
              <TableCell sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                Description
              </TableCell>
              <TableCell sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                Is Natural
              </TableCell>
              <TableCell sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                Is Attractive
              </TableCell>
              <TableCell sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                Category
              </TableCell>
              <TableCell sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orchids.map((orchid) => (
              <TableRow key={orchid.id}>
                <TableCell>
                  <img
                    src={orchid.image}
                    alt={orchid.orchidName}
                    width={50}
                    height={50}
                  />
                </TableCell>
                <TableCell sx={{ fontSize: "1rem" }}>
                  {orchid.orchidName}
                </TableCell>
                <TableCell sx={{ fontSize: "1rem" }}>
                  {orchid.description}
                </TableCell>
                <TableCell sx={{ fontSize: "1rem" }}>
                  {orchid.isNatural ? "Yes" : "No"}
                </TableCell>
                <TableCell sx={{ fontSize: "1rem" }}>
                  {orchid.isAttractive ? "Yes" : "No"}
                </TableCell>
                <TableCell sx={{ fontSize: "1rem" }}>
                  {orchid.category}
                </TableCell>
                <TableCell>
                  <IconButton
                    color="secondary"
                    onClick={() => handleUpdateOrchid(orchid)}
                    aria-label="edit"
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="error"
                    sx={{ marginLeft: 1 }}
                    onClick={() => handleDeleteOrchid(orchid.id)}
                    aria-label="delete"
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add Orchid Modal */}
      <AddOrchid
        open={modalOpen}
        handleClose={() => setModalOpen(false)}
        refreshOrchids={handleAddOrchid}
      />

      {/* Update Orchid Modal */}
      <UpdateOrchid
        open={updateModalOpen}
        handleClose={() => setUpdateModalOpen(false)}
        orchid={selectedOrchid}
        refreshOrchids={() => {
          refreshOrchids();
          toast.success("Orchid updated successfully!");
        }}
      />

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default Dashboard;
