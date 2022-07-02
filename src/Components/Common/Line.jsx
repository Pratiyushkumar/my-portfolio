import React from "react";

import { Typography } from "@mui/material";
// import { Box } from "@mui/system";

import { theme } from "../../theme";

const Line = () => {
  return (
    <>
      <Typography
        variant="span"
        sx={{
          width: "64px",
          height: "4px",
          backgroundColor: theme.palette.base2.main,
          my: "10px",
          // ml: { sm: "20em", md: "20em", lg: "0" },
        }}
      ></Typography>
    </>
  );
};

export default Line;
