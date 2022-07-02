import React, { useEffect, useState, useRef } from "react";

import { Box } from "@mui/system";
import { Button, Grid, Paper, TextField } from "@mui/material";
import ScrollAnimation from "react-animate-on-scroll";

import { useSnackbar } from "notistack";
import emailjs from "@emailjs/browser";

import {
  contactConatainer,
  contactSecondaryContainer,
  paperStyle,
  paperStyleResp,
  TextFieldStyle,
  button,
  contactConatainerResp,
  TextFieldStyleResp,
  buttonResp,
} from "./ContactStyling";
import Decorator from "../Common/Decorator";
import Line from "../Common/Line";

const Contact = () => {
  const form = useRef();
  const { enqueueSnackbar } = useSnackbar();

  const hasWindow = typeof window !== "undefined";
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowWidth(window.innerWidth);
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasWindow]);

  const sendEmail = (e) => {
    // e.preventDefault();
    emailjs
      .sendForm(
        "service_ikdqjpy",
        "template_cq9bpzc",
        form.current,
        "pNJdknFqll56wivhs"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message Sent");
        },
        (error) => {
          console.log(error.text);
          console.log("message not sent");
        }
      );
  };

  return (
    <>
      <Box
        style={windowWidth > 490 ? contactConatainer : contactConatainerResp}
        id="Contact"
      >
        <ScrollAnimation animateIn="fadeIn">
          <form ref={form}>
            <Box style={contactSecondaryContainer}>
              {<Decorator text="Contact Me" />}
              {<Line />}
              <Grid>
                <Paper
                  elevation={4}
                  style={windowWidth > 490 ? paperStyle : paperStyleResp}
                >
                  <TextField
                    id="outlined-basic"
                    label="FirstName"
                    variant="outlined"
                    name="user_Name"
                    style={
                      windowWidth > 490 ? TextFieldStyle : TextFieldStyleResp
                    }
                  />
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    name="email"
                    style={
                      windowWidth > 490 ? TextFieldStyle : TextFieldStyleResp
                    }
                  />
                  <TextField
                    id="outlined-basic"
                    label="Message"
                    variant="outlined"
                    name="message"
                    style={
                      windowWidth > 490 ? TextFieldStyle : TextFieldStyleResp
                    }
                  />
                  <Button
                    variant="contained"
                    style={windowWidth > 490 ? button : buttonResp}
                    onClick={() => {
                      enqueueSnackbar("   Message Sent !!!!", {
                        anchorOrigin: {
                          vertical: "top",
                          horizontal: "right",
                        },
                        autoHideDuration: 1700,
                        variant: "success",
                      });
                      sendEmail();
                    }}
                  >
                    Submit
                  </Button>
                </Paper>
              </Grid>
            </Box>
          </form>
        </ScrollAnimation>
      </Box>
    </>
  );
};

export default Contact;
