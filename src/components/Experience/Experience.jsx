import React, { useState, useEffect } from "react";
import { Fade } from "react-reveal";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import { MdLocationPin } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<IoIosArrowForward sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const experienceContent = [
  {
    slNo: "1",
    companyName: "Ahana Systems and Solutions",
    companyLink: "https://ahanait.com/",
    position: "Software Engineer",
    start: "Dec, 2021",
    end: "Present",
    location: "Bangalore, IN",
    logoImg: "https://ahanait.com/wp-content/uploads/2023/01/logo-new-1.svg",
    logoAlt: "Ahana Logo",
    description:
      "My work spans full-stack development, utilizing the multiple technologies to design and implement robust, scalable, and efficient web applications with a focus on MERN stack, Java-based backend and JavaScript-based frontend frameworks.",
    skills: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "ReactJS",
      "NodeJS",
      "MySQL",
      "MongoDB",
      "Java",
      "Python",
      "DJango",
    ],
  },
];

export default function Experience() {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleClick = () => {};

  return (
    <>
      <Fade bottom>
        <h2 className="p-0 m-0" style={{ color: "#a3c3db" }}>
          Professional Experience
        </h2>
        <div className="p-3"></div>
        <div>
          {experienceContent.map((expVal, i) => (
            <Accordion
              expanded={expanded === `panel${i + 1}`}
              onChange={handleChange(`panel${i + 1}`)}
              className="mb-2"
              style={{ borderRadius: "5px" }}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography style={{ width: "100%" }}>
                  <div className="row">
                    <div className="col-md-9">
                      <span>
                        {expVal.position} @ {expVal.companyName}
                      </span>
                    </div>
                    <div className="col-md-3">
                      <div className="d-flex justify-content-end">
                        <span>
                          {expVal.start} - {expVal.end}
                        </span>
                      </div>
                    </div>
                  </div>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography style={{ width: "100%" }}>
                  <div className="row">
                    <div className="col-md-1 d-flex">
                      <img src={expVal.logoImg} alt={expVal.logoAlt} />
                    </div>
                    <div className="col-md-11">
                      <div className="row">
                        <span>
                          <span>
                            <MdLocationPin />
                          </span>
                          <span>{expVal.location}</span>
                        </span>
                        <span>{expVal.description}</span>
                        <span>
                          {expVal.skills.map((skillVal, j) => (
                            <span>
                              <Chip
                                label={skillVal}
                                variant="outlined"
                                onClick={handleClick}
                                className="m-1"
                              />
                            </span>
                          ))}
                        </span>
                      </div>
                    </div>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </Fade>
    </>
  );
}
