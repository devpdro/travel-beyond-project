import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import BoxPackages from "../components/BoxPackages";
import HistoryHeader from "../components/history/HistoryHeader";

function History() {
  return (
    <div>
      <Navbar />
      <HistoryHeader />
      <BoxPackages />
      <Footer />
    </div>
  );
}

export default History;
