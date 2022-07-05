import React from "react";

import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
// import { Container } from "@mui/system";
import ScrollAnimation from "react-animate-on-scroll";

import { theme } from "../../theme";
import Decorator from "../Common/Decorator";
import Description from "../Common/Description";

import { data } from "./portfolioData";
import Line from "../Common/Line";
import "../../styles.css";

const Portfolio = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: theme.palette.example.main,
          paddingTop: "3em",
          padding: "2em",
        }}
        id="Portfolio"
      >
        <ScrollAnimation animateIn="fadeIn">
          {/* header */}
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
            spacing={(10, 0, 8, 0)}
          >
            <Grid
              item
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Box sx={{ marginBottom: "1em" }}>
                {<Decorator text="My Portfolio" />}
                {<Description para="Let's see my work" />}
                {<Line />}
              </Box>
            </Grid>
          </Grid>
          {/* card section */}
          {/* <Container maxWidth="lg"> */}
          <Grid container spacing={2}>
            {data.map((currEle) => (
              <Grid item xs={12} sm={6} lg={4} key={currEle.id}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={currEle.imgUrl}
                      alt={currEle.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {currEle.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {currEle.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <a
                      href={currEle.link}
                      target="_blank"
                      className="visitLink"
                      rel="noreferrer"
                    >
                      <Button size="small" color="primary">
                        {" "}
                        Visit
                      </Button>
                    </a>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          {/* </Container> */}
        </ScrollAnimation>
      </Box>
    </>
  );
};

export default Portfolio;
