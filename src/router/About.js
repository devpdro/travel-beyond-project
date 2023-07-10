import React from "react";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/NavBar";
import AboutHeader from "../components/about/AboutHeader";
import AboutPage from "../components/about/AboutPage";

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
