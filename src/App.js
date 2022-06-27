import LayoutWraper from "./components/LayoutWraper";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllProjects from "./pages/AllProjects";
import Platforms from "./pages/Platforms";
import Reviews from "./pages/Reviews";
import Hire from "./pages/Hire";
import { Alert } from "@mui/material";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Alert
        severity="warning"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        This site is under development work. Some of functionalities may not be
        work properly. [ADMIN]
      </Alert>
      <Navbar />
      <LayoutWraper>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/allprojects" element={<AllProjects />} />
          <Route path="/platforms" element={<Platforms />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/hire" element={<Hire />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </LayoutWraper>
      <Footer />
    </Router>
  );
}

export default App;
