import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Orchids from "./Components/Orchids/Orchid";
import Film from "./Components/Film/Film";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/orchid" element={<Orchids />} />
        <Route path="/film" element={<Film />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
