import React from "react";

import { Box } from "@mui/system";

import Decorator from "./Decorator";
import Description from "./Description";
import Line from "./Line";
import Title from "./Title";

const Section = () => {
  return (
    <>
      {/* decorator */}
      <Box
        sx={{
          display: "flex",
          flexFlow: "column",
          justifyContent: "center",
          alignContent: "center",
          flexWrap: "wrap",
          width: {
            xs: "200",
          },
          ml: { lg: "0", xl: "0" },
          mx: {
            xs: "auto",
            sm: "auto",
          },
        }}
      >
        <Decorator text="About Me" />
        {/* Title */}
        <Title para="Hello I'm Pratiyush Kumar" />
        {/* line */}
        <Line />
        {/* description */}
        <Description para="I am a passionate web developer who loves front-end desining. I have also knowledge of Backend development. " />
      </Box>
    </>
  );
};

export default Section;
