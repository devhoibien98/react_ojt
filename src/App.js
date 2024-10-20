// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "./App.css";
// import Orchids from "./Components/Orchids/Orchid";
// import Film from "./Components/Film/Film";
// import Contact from "./Components/Contact/Contact";
// import NavBar from "./Components/Navbar/Navbar";
// import Home from "./Components/Home/Home";
// import OrchidsDetail from "./Components/Orchids/OrchidsDetail";
// import UseTheme from "./Components/Theme/UseTheme";
// import { ThemeProvider } from "react-bootstrap";
// import ThemeToggle from "./Components/Theme/ThemeToggle";
// import Footer from "./Components/Footer/Footer";
// import Natural from "./Natural/Natural";
// import About from "./Components/About/About";
// import Login from "./Components/Login/login";

// function App() {
//   const [theme, toggleTheme] = UseTheme();
//   return (
//     <ThemeProvider theme={theme}>
//       {""}
//       <div
//         style={{
//           backgroundColor: theme.backgroundColor,
//           color: theme.color,
//           minHeight: "100vh",
//           padding: "0px",
//         }}
//       >
//         <Router>
//           <NavBar />
//           <ThemeToggle toggleTheme={toggleTheme} />
//           <Routes>
//             <Route path="/" element={<Login />} />

//             <Route path="/home" element={<Home />} />
//             <Route path="/orchid" element={<Orchids />} />
//             <Route path="/orchid/:id" element={<OrchidsDetail />} />
//             <Route path="/natural" element={<Natural />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//           <Footer />
//         </Router>
//       </div>
//     </ThemeProvider>
//   );
// }

// export default App;
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Orchids from "./Components/Orchids/Orchid";
import Film from "./Components/Film/Film";
import Contact from "./Components/Contact/Contact";
import NavBar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import OrchidsDetail from "./Components/Orchids/OrchidsDetail";
import UseTheme from "./Components/Theme/UseTheme";
import { ThemeProvider } from "react-bootstrap";
import ThemeToggle from "./Components/Theme/ThemeToggle";
import Footer from "./Components/Footer/Footer";
import Natural from "./Natural/Natural";
import About from "./Components/About/About";
import Login from "./Components/Login/login";
import PrivateRouter from "./Components/PrivateRouter/PrivateRouter";

function App() {
  const [theme, toggleTheme] = UseTheme();
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          backgroundColor: theme.backgroundColor,
          color: theme.color,
          minHeight: "100vh",
          padding: "0px",
        }}
      >
        <Router>
          <NavBar />
          <ThemeToggle toggleTheme={toggleTheme} />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/home"
              element={
                <PrivateRouter>
                  <Home />
                </PrivateRouter>
              }
            />
            <Route
              path="/orchid"
              element={
                <PrivateRouter>
                  <Orchids />
                </PrivateRouter>
              }
            />
            <Route
              path="/orchid/:id"
              element={
                <PrivateRouter>
                  <OrchidsDetail />
                </PrivateRouter>
              }
            />
            <Route
              path="/natural"
              element={
                <PrivateRouter>
                  <Natural />
                </PrivateRouter>
              }
            />
            <Route
              path="/about"
              element={
                <PrivateRouter>
                  <About />
                </PrivateRouter>
              }
            />
            <Route
              path="/contact"
              element={
                <PrivateRouter>
                  <Contact />
                </PrivateRouter>
              }
            />
          </Routes>
          <Footer />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
