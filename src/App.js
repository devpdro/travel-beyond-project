import Beachs from "./components/Beachs";
import Destinations from "./components/Destinations";
import Home from "./components/Home";
import Navbar from "./components/NavBar";
import Packages from "./components/Packages";
import Weekend from "./components/Weekend";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Destinations />
      <Weekend />
      <Beachs />
      <Packages />
    </>
  );
}

export default App;
