import React from "react";

import mainPhoto from "../../static/main2.png";

import { BiLogoLinkedin } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";
// import { FaBeer } from 'react-icons/fa';

import aditya_resume from "../../asset/aditya_resume.pdf";
import { ToastContainer, toast } from "react-toastify";

import "./Home.css";

const contactLinks = [
  {
    name: "Mail",
    logo: <HiOutlineMail />,
    link: "mailto: who.adityak@gmail.com",
  },
  {
    name: "Linkedin",
    logo: <BiLogoLinkedin />,
    link: "https://www.linkedin.com/in/adityak7317/",
  },
  {
    name: "Github",
    logo: <BsGithub />,
    link: "https://github.com/adityak7317",
  },
  {
    name: "Whatsapp",
    logo: <BsWhatsapp />,
    link: "https://twitter.com/adityak7317",
  },
  {
    name: "Instagram",
    logo: <BsInstagram />,
    link: "https://www.instagram.com/adityak7317/",
  },

  {
    name: "Twitter",
    logo: <BsTwitter />,
    link: "https://twitter.com/adityak7317",
  },
];

export default function Home() {
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.download = "aditya_kumar_resume";
    link.href = aditya_resume;
    link.click();
    toast.success("Resume Download Started !");
  };

  return (
    <>
      <div className="row" style={{ margin: "auto" }}>
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
          <div
            // className="row"
            style={{ fontSize: "xx-large", fontWeight: "bold" }}
          >
            <span className="typewriter">
              <p>Hi, I'm Aditya Kumar !</p>
            </span>
          </div>
          <span className="text-center">
            I'm a skilled fullstack developer with expertise in both front-end
            and back-end technologies. I create user-friendly websites and
            applications, focusing on functionality, performance, and modern
            design.
          </span>
          <div className="p-1"></div>
          <div className="row">
            <button
              type="button"
              className="btn btn-outline-dark homeBTN 
            "
              // BTNStyling
              style={{ width: "100%" }}
              onClick={handleResumeDownload}
            >
              Download Resume
            </button>
          </div>
        </div>

        <div
          className="col-md-6"
          style={{
            // minHeight: "45vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={mainPhoto}
              alt="main photo"
              className="mainPhoto"
              style={{
                width: "90%",
                // minHeight: "fit-content",
                // filter: "drop-shadow(16px 16px 10px black)",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

//  {/* <div className="row">
//               <div className="col-md-10">
//                 <div className="d-flex flex-col justify-content-between">
//                   {contactLinks.map((val, key) => (
//                     <a href={val.link}>
//                       <button
//                         type="button"
//                         className="btn btn-outline-dark btn-sm fs-5 pt-0 homeBTN"
//                       >
//                         {val.logo}
//                       </button>
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             </div> */}
