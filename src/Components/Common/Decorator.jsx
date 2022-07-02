import React from "react";

import { Typography } from "@mui/material";

import { theme } from "../../theme";

const Decorator = ({ text }) => {
  return (
    <>
      {/* Decorator */}
      {/* <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: {
            xs: "200",
          },
          ml: { lg: "0", xl: "0" },
          mx: {
            xs: "auto",
            sm: "auto",
          },
        }}
      > */}
      <Typography
        variant="h3"
        sx={{
          color: theme.palette.base2.main,
          fontSize: "2rem",
        }}
      >
        {text}
      </Typography>
      {/* </Box> */}
    </>
  );
};

export default Decorator;
