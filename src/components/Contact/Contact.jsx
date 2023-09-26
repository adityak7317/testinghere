import React, { useState } from "react";
import { Fade } from "react-reveal";

import Button from "@mui/material/Button";

export default function Contact() {
  const [userData, setUserData] = useState({
    userName: "",
    userEmail: "",
    userPhone: "",
    userMessage: "",
  });

  const inputEventHandler = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  function handleSubmit() {
    console.log("entered data...", userData);
  }

  return (
    <>
      <Fade bottom>
        <div className="row">
          <div className="col-md-6">
            <div className="d-flex align-items-center justify-content-center">
              <span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum,
                minima! Enim maiores necessitatibus recusandae nisi magnam unde
                reiciendis voluptate, dolores ipsa temporibus perferendis, vitae
                ullam cumque error! Culpa, minima error?
              </span>
            </div>
          </div>

          <div className="col-md-6">
            <form>
              <div className="p-5 row">
                <div>
                  <div className="mb-2">
                    <label htmlFor="nameInput" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nameInput"
                      placeholder="xyz"
                      required
                      name="userName"
                      onChange={(e) => {
                        inputEventHandler(e);
                      }}
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="mailInput" className="form-label">
                      Mail ID
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="mailInput"
                      placeholder="abc@example.com"
                      required
                      name="userEmail"
                      onChange={(e) => {
                        inputEventHandler(e);
                      }}
                    />
                  </div>

                  <div className="mb-2">
                    <label htmlFor="numInput" className="form-label">
                      Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="numInput"
                      placeholder="0000000000"
                      required
                      name="userPhone"
                      onChange={(e) => {
                        inputEventHandler(e);
                      }}
                    />
                  </div>

                  <div className="mb-2">
                    <label htmlFor="messageInput" className="form-label">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="messageInput"
                      rows={3}
                      placeholder="Hi my name is xyz!"
                      required
                      name="userMessage"
                      onChange={(e) => {
                        inputEventHandler(e);
                      }}
                    />
                  </div>
                </div>
                <div className="p-2"></div>
                <div className="d-flex justify-content-end">
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => {
                      handleSubmit();
                    }}
                  >
                    Success
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Fade>
    </>
  );
}
