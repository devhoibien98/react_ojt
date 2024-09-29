import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Orchids from "./Components/Orchids/Orchid";
import Film from "./Components/Film/Film";
import Contact from "./Components/Contact/Contact";
import NavBar from "./Navbar/Navbar";
import Home from "./Components/Home/Home";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orchid" element={<Orchids />} />
        <Route path="/film" element={<Film />}></Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
