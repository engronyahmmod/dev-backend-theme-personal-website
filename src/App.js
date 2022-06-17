import LayoutWraper from "./components/LayoutWraper";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <Navbar />
      <LayoutWraper>
        <Homepage />
      </LayoutWraper>
    </>
  );
}

export default App;
