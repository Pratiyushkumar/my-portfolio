import React from "react";

import { Avatar, Grid, Typography } from "@mui/material";

import { theme } from "../../theme";

const TechStack = ({ skill, image }) => {
  return (
    <>
      <Grid container>
        <Grid
          item
          xs={6}
          sx={{
            maxWidth: { xs: "13%", sm: "16%" },
            display: "flex",
            flexFlow: "row",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Avatar src={image} alt="skills" />
        </Grid>
        <Grid item xs={6}>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.base2.main,
            }}
            mt="6px"
            ml="2px"
          >
            {skill}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default TechStack;
