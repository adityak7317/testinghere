import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function Header(props) {
  const style = {
    navbarMenuBTN: {
      fontWeight: "bold",
    },
  };

  const NavbarMenu = [
    {
      name: "Home",
      ref: props.homeRef,
    },
    {
      name: "About",
      ref: props.aboutRef,
    },
    {
      name: "Experience",
      ref: props.expRef,
    },
    {
      name: "Projects",
      ref: props.projectsRef,
    },
    {
      name: "Contact",
      ref: props.contactRef,
    },
  ];

  return (
    <>
      <div
        className="p-3 position-fixed"
        style={{
          width: "100%",
          zIndex: 1,

          backgroundColor: props.navbarChange ? "black" : "#9DB2BF",
          color: props.navbarChange ? "white" : "black",
          transition: "0.5s",
          // minHeight: "7vh",
          // display: "flex",
          // alignItems: "center",
        }}
      >
        <div className="row justify-content-between">
          <div className="col-md-1">
            <div className="d-flex align-items-center justify-content-center">
              <Button size="small">
                <span
                  className="text-center highlightText"
                  style={{ width: "100%" }}
                >
                  &#x2774; 𝕒𝕜 &#x2775;
                </span>
              </Button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="m-0 p-0 col d-flex justify-content-around">
              {NavbarMenu.map((val, key) => (
                <li>
                  <Button
                    size="small"
                    className={
                      props.navbarChange
                        ? "text-white navBtn1"
                        : "text-dark navBtn1"
                    }
                    style={style.navbarMenuBTN}
                    onClick={() => {
                      props.scrollHandler(val.ref);
                    }}
                  >
                    {val.name}
                  </Button>
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
