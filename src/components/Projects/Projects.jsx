import React, { useState, useEffect } from "react";
import { Fade } from "react-reveal";
// import SS from "../../static/SS.png";
import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import DR from "../../static/projects/DR.png";
import ImgViewer from "./ImgViewer/ImgViewer";

export default function Projects() {
  const [imgViewerOpen, setImgViewerOpen] = useState(false);

  const ProjectsData = [
    {
      image: DR,
      name: " Digital Register",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta temporibus eveniet soluta natus autem ea, veniam consequuntur modi corrupti! Earum veniam quia ipsam, quaerat reprehenderit animi ipsum consequatur vero optio.",
    },
    {
      image: DR,
      name: " Digital Register",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta temporibus eveniet soluta natus autem ea, veniam consequuntur modi corrupti! Earum veniam quia ipsam, quaerat reprehenderit animi ipsum consequatur vero optio.",
    },
  ];

  return (
    <>
      <ImgViewer
        setImgViewerOpen={setImgViewerOpen}
        imgViewerOpen={imgViewerOpen}
        DR={DR}
      />
      <Fade bottom>
        <h2 className="p-0 m-0" style={{ color: "rgb(29 48 73)" }}>
          Projects
        </h2>

        <div className="p-3"></div>

        {ProjectsData.map((val, key) => (
          <Card
            className="projectCard mb-3"
            onClick={() => {
              setImgViewerOpen(true);
            }}
          >
            <div>
              <CardActionArea>
                <div className="bg-light rounded-3 overflow-hidden">
                  <div className="row">
                    <div className="col-md-5">
                      <img
                        src={val.image}
                        alt="photoooo...."
                        // className="position-relative"
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="col-md-7">
                      <h5 className="mt-3">{val.name}</h5>
                      <span>{val.desc}</span>
                    </div>
                  </div>
                </div>
              </CardActionArea>
            </div>
          </Card>
        ))}
      </Fade>
    </>
  );
}
