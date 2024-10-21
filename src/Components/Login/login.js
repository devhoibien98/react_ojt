import React from "react";
import { signInWithGoogle } from "../../Services/firebase";
import { useNavigate } from "react-router-dom";
import { Button, Box, Paper, Typography } from "@mui/material";

export default function Login() {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    signInWithGoogle().then((user) => {
      localStorage.setItem("user", "user");
      navigate("/orchid");
    });
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="#f5f5f5"
    >
      <Button
        variant="contained"
        onClick={handleGoogleLogin}
        style={{
          backgroundColor: "#ff3b30", // Màu nền
          color: "white", // Màu chữ
        }}
      >
        Sign In with Google
      </Button>
    </Box>
  );
}
