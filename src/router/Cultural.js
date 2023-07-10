import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import BoxPackages from "../components/BoxPackages";
import CulturalHeader from "../components/cultural/CulturalHeader";

function Cultural() {
  return (
    <div>
      <Navbar />
      <CulturalHeader />
      <BoxPackages />
      <Footer />
    </div>
  );
}

export default Cultural;
