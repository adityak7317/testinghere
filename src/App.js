import React from "react";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import SideLinks from "./components/SideLinks/SideLinks";

export default function App() {
  return (
    <>
      <div>
        <About />
        <Contact />
        <Experience />
        <Footer />
        <Home />
        <Header />
        <Projects />
        <SideLinks />
      </div>
    </>
  );
}
