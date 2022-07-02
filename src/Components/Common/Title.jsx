import React from "react";

import { Typography } from "@mui/material";

import { theme } from "../../theme";

const Title = ({ para }) => {
  return (
    <>
      <Typography
        variant="p"
        sx={{
          color: theme.palette.base2.main,
          // width: { xs: "200", sm: "200" },
          // ml: { lg: "0", xl: "0" },
          // mx: { xs: "auto", sm: "auto" },
          mt: "10px",
          fontSize: "1.5rem",
          fontWeight: "bolder",
        }}
      >
        {para}
      </Typography>
    </>
  );
};

export default Title;
