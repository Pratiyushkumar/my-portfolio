import React from "react";

import { Avatar, Grid } from "@mui/material";
import { Box } from "@mui/system";
import ScrollAnimation from "react-animate-on-scroll";

import { theme } from "../../theme";
import image from "../../image/mypic.jpg";
import Section from "../Common/Section";
import { tech } from "./techSkills";
import TechStack from "./TechStack";

const AboutUs = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: theme.palette.secondary.main,
          paddingBottom: "2em",
        }}
        id="About"
      >
        <ScrollAnimation animateIn="fadeIn">
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sm={12}
              md={3}
              sx={{
                margin: {
                  xs: "2em",
                  sm: "2em",
                  // md: "2em 6em 0",
                  lg: "2em 6em 0",
                },
                display: "flex",
                justifyContent: { xs: "center", sm: "center" },
              }}
            >
              <Avatar
                alt="my pic"
                src={image}
                sx={{
                  width: { lg: "20em", sm: "10em", xs: "10em" },
                  height: { lg: "20em", sm: "10em", xs: "10em" },
                }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              lg={1}
              sx={{
                margin: {
                  xs: "2em",
                  sm: "2em",
                },
                marginTop: {
                  xl: "3em",
                  md: "3em",
                },
                display: "flex",
                flexDirection: "column",
                maxWidth: {
                  sm: "100%",
                },
                flexGrow: {
                  sm: "1",
                },
              }}
            >
              <Section />

              <Grid container>
                {tech.map((currEle) => (
                  <Grid item xs={12} sm={6} mb="7px">
                    {<TechStack skill={currEle.skills} image={currEle.image} />}
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </ScrollAnimation>
      </Box>
    </>
  );
};

export default AboutUs;
