import React from "react";
import BoxPackages from "../components/BoxPackages";
import Footer from "../components/layout/Footer";
import RelaxHeader from "../components/relax/RelaxHeader";
import Navbar from "../components/layout/NavBar";

function Relax() {
  return (
    <main>
      <Navbar />
      <RelaxHeader />
      <BoxPackages />
      <Footer />
    </main>
  );
}

export default Relax;
