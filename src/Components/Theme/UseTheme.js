import { useState } from "react";

const lightTheme = {
  backgroundColor: "#fff",
  color: "#000",
};
const darkTheme = {
  backgroundColor: "#333",
  color: "#fff",
};

const UseTheme = () => {
  const [theme, setTheme] = useState(lightTheme);
  const toggleTheme = () => {
    setTheme((currTheme) =>
      currTheme === lightTheme ? darkTheme : lightTheme
    );
  };
  return [theme, toggleTheme];
};
export default UseTheme;
