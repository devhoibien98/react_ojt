import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Orchids from "./Components/Orchids/Orchid";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/orchid" element={<Orchids />} />
      </Routes>
    </Router>
  );
}

export default App;
