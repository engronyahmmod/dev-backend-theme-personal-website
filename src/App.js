import LayoutWraper from "./components/LayoutWraper";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllProjects from "./pages/AllProjects";

function App() {
  return (
    <Router>
      <Navbar />
      <LayoutWraper>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/allprojects" element={<AllProjects />} />
        </Routes>
      </LayoutWraper>
      <Footer />
    </Router>
  );
}

export default App;
