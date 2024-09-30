import { useState } from "react";
import { Container } from "react-bootstrap";

const ThemeToggle = ({ toggleTheme }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    toggleTheme();
  };
  return (
    <Container>
      <button onClick={handleToggle}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </Container>
  );
};

export default ThemeToggle;
