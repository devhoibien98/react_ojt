import { Button } from "@mui/material";
import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();
  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        localStorage.removeItem("user");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });

    navigate("/");
  };
  return (
    <div>
      <Button variant="outlined" color="secondary" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
}
