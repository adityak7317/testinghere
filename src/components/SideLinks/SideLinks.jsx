import React from "react";
import { Fade } from "react-reveal";

import { BiLogoLinkedin } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";
// import { FaBeer } from 'react-icons/fa';

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
    link: "https://wa.me/917317420140",
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

export default function SideLinks() {
  return (
    <>
      <Fade left>
        {/* <div className="row">
        {contactLinks.map((val, key) => (
          <a href={val.link}>
            <button
              type="button"
              className="btn btn-outline-dark rounded-circle border-0 btn-sm fs-5 pt-0 homeBTN"
            >
              {val.logo}
            </button>
          </a>
        ))}
      </div> */}

        <div
          className="row "
          style={{
            borderRadius: "50px",
            backgroundColor: "#b2bcc3",
            boxSizing: "border-box",
            boxShadow: "0px 0px 6px gray",
            // display: "flex",
            // flexDirection: "column",
            // alignItems: "center",
            // justifyContent: "center",
            // width: "max-content",
            // aspectRatio: "1",
          }}
        >
          {contactLinks.map((val, key) => (
            <a href={val.link} className="p-0 m-0">
              <button
                className="btn btn-outline-dark p-2 border-0 "
                style={{
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "max-content",
                  aspectRatio: "1",
                }}
              >
                {val.logo}
              </button>
            </a>
          ))}
        </div>
      </Fade>
    </>
  );
}
