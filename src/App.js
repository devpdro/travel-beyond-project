import Beachs from "./components/Beachs";
import Destinations from "./components/Destinations";
import Footer from "./components/layout/Footer";
import Home from "./components/layout/Home";
import Navbar from "./components/layout/NavBar";
import Packages from "./components/Packages";
import Weekend from "./components/Weekend";

import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <title>TravelBeyond</title>
      </Helmet>
      <Navbar />
      <Home />
      <Destinations />
      <Weekend />
      <Beachs />
      <Packages />
      <Footer />
    </>
  );
}

export default App;
