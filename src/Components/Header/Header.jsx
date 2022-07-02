import React from "react";
// import { theme } from "../../theme";
import { Box } from "@mui/material";
import NavBar from "./NavBar";
// import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import profilepic from "../../image/undraw_programming_re_kg9v.svg";
import { Decorator } from "../Common/CommonComponent";

const Header = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          minHeight: "90vh",
          height: "auto",
          backgroundImage: `linear-gradient(180deg,rgba(236, 236, 236, 0.5), rgba(20, 30, 39, 1)),
                    url(${profilepic})`,
          marginTop: "0px",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left",
        }}
      >
        <NavBar />
        {Decorator({
          // label: "About Me",
          // withIcon: true,
          // Icon: <ArrowDownwardRoundedIcon />,
        })}
      </Box>
    </>
  );
};

export default Header;
