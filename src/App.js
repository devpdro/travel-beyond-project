import Beachs from "./components/Beachs";
import Destinations from "./components/Destinations";
import Home from "./components/Home";
import Navbar from "./components/NavBar";
import Packages from "./components/Packages";
import Weekend from "./components/Weekend";

import { Helmet } from "react-helmet";

function App() {
  return (
    <>
    <Helmet>
      <title>Travel</title>
    </Helmet>
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
