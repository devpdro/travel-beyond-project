import Navbar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";
import BoxPackages from "../components/BoxPackages";
import SportsHeader from "../components/sports/SportsHeader";

function Sports() {
  return (
    <div>
      <Navbar />
      <SportsHeader />
      <BoxPackages />
      <Footer />
    </div>
  );
}

export default Sports;
