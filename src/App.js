import React, { useState, useEffect, useRef } from "react";
import "./App.css";

import SideLinks from "./components/SideLinks/SideLinks";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BsFillArrowUpCircleFill } from "react-icons/bs";

export default function App() {
  const [navbarChange, setNavbarChange] = useState(false);

  const style = {
    componentStyle: {
      minHeight: "90vh",
      padding: "4%",
      backgroundColor: "#DDE6ED",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  const homeRef = useRef();
  const aboutRef = useRef();
  const expRef = useRef();
  // const skillsRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();
  const toTop = useRef();

  const scrollHandler = (elmRef) => {
    console.log(elmRef);
    window.scrollTo({
      top: elmRef.current.offsetTop - 60,
      behavior: "smooth",
    });
  };
  const scrollToTop = (elmRef) => {
    console.log(elmRef);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleScroll = (event) => {
      if (window.scrollY > 500) {
        setShow(true);
        setNavbarChange(true);
      } else {
        setShow(false);
        setNavbarChange(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <ToastContainer />

      <Header
        scrollHandler={scrollHandler}
        homeRef={homeRef}
        aboutRef={aboutRef}
        expRef={expRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
        navbarChange={navbarChange}
      />

      <div className="Components">
        <div className="SpaceBWNavAndCom"></div>
        <div ref={homeRef}>
          <div style={{ ...style.componentStyle, backgroundColor: "#9DB2BF" }}>
            <Home />
          </div>
        </div>
        <div
          // style={{ ...style.componentStyle, backgroundColor: "#526D82" }}
          ref={aboutRef}
        >
          <div style={{ ...style.componentStyle, backgroundColor: "#526D82" }}>
            <About />
          </div>
        </div>
        <div
          // style={{ ...style.componentStyle, backgroundColor: "#27374D" }}
          ref={expRef}
        >
          <div style={{ ...style.componentStyle, backgroundColor: "#27374D" }}>
            <Experience />
          </div>
        </div>
        <div
          // style={{ ...style.componentStyle, backgroundColor: "#526D82" }}
          ref={projectsRef}
        >
          <div style={{ ...style.componentStyle, backgroundColor: "#526D82" }}>
            <Projects />
          </div>
        </div>
        <div
          // style={{ ...style.componentStyle, backgroundColor: "#9DB2BF" }}
          ref={contactRef}
        >
          <div style={{ ...style.componentStyle, backgroundColor: "#9DB2BF" }}>
            <Contact />
          </div>
        </div>
        <div className="bg-dark text-white" style={{ ...style.componentStyle }}>
          <Footer />
        </div>
      </div>

      <div
        className="sideContactList BTNStyling p-2"
        // style={{
        //   position: "absolute",
        //   top: "30%",
        //   left: "0%",
        //   width: "min-content",
        // }}
      >
        <SideLinks />
      </div>

      {/* back to top */}
      <div
        style={{
          position: "fixed",
          right: 30,
          bottom: 30,
          cursor: "pointer",
        }}
        onClick={() => {
          scrollToTop(toTop);
        }}
      >
        {show && (
          <>
            <button
              type="button"
              className="btn btn-warning btn-sm fs-5 pt-0"
              style={{
                backgroundColor: "rgb(222 129 0)",
                borderColor: "rgb(222 129 0)",
              }}
            >
              <BsFillArrowUpCircleFill />
            </button>
          </>
        )}
      </div>
    </>
  );
}
