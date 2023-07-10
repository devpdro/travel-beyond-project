import React from "react";
import BoxPackages from "../components/BoxPackages";
import Footer from "../components/Footer";
import RelaxHeader from "../components/RelaxHeader";
import Navbar from "../components/NavBar";

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
