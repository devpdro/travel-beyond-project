import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import AboutHeader from "../components/AboutHeader";
import AboutPage from "../components/AboutPage";

function About() {
  return (
    <div>
      <Navbar />
      <AboutHeader />
      <AboutPage />
      <Footer />
    </div>
  );
}

export default About;
