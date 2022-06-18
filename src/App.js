import LayoutWraper from "./components/LayoutWraper";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllProjects from "./pages/AllProjects";
import Platforms from "./pages/Platforms";
import { Reviews } from "@mui/icons-material";
import Hire from "./pages/Hire";

function App() {
  return (
    <Router>
      <Navbar />
      <LayoutWraper>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/allprojects" element={<AllProjects />} />
          <Route path="/platforms" element={<Platforms />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/hire" element={<Hire />} />
        </Routes>
      </LayoutWraper>
      <Footer />
    </Router>
  );
}

export default App;
