import React from "react";
import { signInWithGoogle } from "../../Services/firebase";
import { useNavigate } from "react-router-dom";
import { Button, Box, Paper, Typography } from "@mui/material";

export default function Login() {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    signInWithGoogle().then((user) => {
      localStorage.setItem("user", "user");
      navigate("/home");
    });
  };

  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "400px",
          width: "100%",
        }}
      >
        <Typography variant="h5" component="h1" gutterBottom>
          Welcome to Orchid App
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Please sign in to continue
        </Typography>

        <Button
          variant="contained"
          size="large"
          onClick={handleGoogleLogin}
          sx={{
            textTransform: "none",
            padding: "12px 24px",
            borderRadius: "8px",
            fontSize: "1.1rem",
            backgroundColor: "#4285f4",
            "&:hover": {
              backgroundColor: "#3367d6",
            },
          }}
        >
          Sign in with Google
        </Button>
      </Paper>
    </Box>
  );
}
