import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Logout from "../Logout/Logout";
import { Button } from "@mui/material";
import { signInWithGoogle } from "../../Services/firebase";

const NavBar = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("user");

  const handleGoogleLogin = () => {
    signInWithGoogle().then((user) => {
      localStorage.setItem("user", "user");
      navigate("/orchid");
    });
  };

  return (
    <Container>
      <Navbar bg="light" data-bs-theme="light" expand="lg">
        <Navbar.Brand href="/orchid">Orchid App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar" />
        <Navbar.Collapse id="basic-navbar">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/orchid">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/natural">
              Natural
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
            {isLoggedIn && (
              <Nav.Link as={Link} to="/dashboard">
                Dashboard
              </Nav.Link>
            )}
          </Nav>
          <Nav>
            {isLoggedIn ? (
              <Logout />
            ) : (
              <Button
                variant="contained"
                onClick={handleGoogleLogin}
                style={{
                  backgroundColor: "#ff3b30",
                  color: "white",
                }}
              >
                Sign In with Google
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavBar;
