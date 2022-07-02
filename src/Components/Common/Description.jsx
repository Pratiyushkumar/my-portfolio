import React from "react";
import { Typography } from "@mui/material";

import { theme } from "../../theme";

const Description = ({ para }) => {
  return (
    <>
      <Typography
        variant="p"
        sx={{ color: theme.palette.base2.main, fontSize: "1.3rem" }}
        mb="15px"
      >
        {para}
      </Typography>
    </>
  );
};

export default Description;
