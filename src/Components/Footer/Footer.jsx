import React from "react";

import { Box, Grid, Typography } from "@mui/material";
import ScrollAnimation from "react-animate-on-scroll";

import { footerContainer, icon } from "./FooterStyling";

const Footer = () => {
  return (
    <Box style={footerContainer}>
      <ScrollAnimation animateIn="fadeIn">
        <Grid container>
          <Grid
            item
            container
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box>
              <Typography variant="h4" sx={{ padding: "1em" }}>
                Thank you for visiting my profile
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            container
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box sx={{ paddingBottom: "1em" }}>
              <Typography variant="p">
                I am always excited to work on some awesome projects, message me
                and let's discuss over coffee❤️.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            container
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box sx={{ padding: "1em" }}>
              <Typography variant="p">You can find me on</Typography>
            </Box>
          </Grid>
          <Grid
            item
            container
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box variant="span">
              <a
                href="https://www.facebook.com/pratiyush.kejriwal/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-facebook-f" style={icon}></i>
              </a>
            </Box>
            <Box variant="span">
              <a
                href="https://github.com/Pratiyushkumar"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-brands fa-github" style={icon}></i>
              </a>
            </Box>
            <Box variant="span">
              <a
                href="https://www.linkedin.com/in/pratiyushkumar/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-linkedin" style={icon}></i>
              </a>
            </Box>
          </Grid>
        </Grid>
      </ScrollAnimation>
    </Box>
  );
};

export default Footer;
