import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { AiFillCloseSquare } from "react-icons/ai";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  //   width: 400,
  // bgcolor: "background.paper",
  //   border: "2px solid #000",
  boxShadow: 24,
  // p: 4,
  //   scroll: "none",
  // backgroundColor: "transparent",
};

export default function ImgViewer(props) {
  //   const [open, setOpen] = React.useState(false);
  // const handleOpen = () => props.setImgViewerOpen(true);
  const handleClose = () => props.setImgViewerOpen(false);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.imgViewerOpen}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        style={{ backgroundColor: "#000000ad" }}
      >
        <Fade in={props.imgViewerOpen}>
          <Box sx={style}>
            {/* <div className="d-flex justify-content-end">
              <Button
                className="p-0 m-0 text-dark"
                style={{ fontSize: "x-large" }}
              >
                <AiFillCloseSquare />
              </Button>
            </div> */}
            <div className="d-flex justify-content-center align-items-center">
              <img src={props.DR} alt="photo" style={{ width: "180%" }} />
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
