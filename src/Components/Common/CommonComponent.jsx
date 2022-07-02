import { theme } from "../../theme";
import { Box, Typography } from "@mui/material";
import Typed from "react-typed";

export const Decorator = ({ label, withIcon, Icon }) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          minHeight: "90vh",
          height: "auto",
          display: "flex",
          flexFlow: "column wrap",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          color: theme.palette.base2.main,
        }}
      >
        <Typography
          variant="h3"
          component="h4"
          sx={{
            fontSize: "3.5rem",
          }}
        >
          I'm a <span style={{ paddingRight: "5px" }}></span>
          <Typed
            strings={["Web Developer", "Proud Indian", "UI/UX desginer"]}
            typeSpeed={30}
            backSpeed={30}
            loop
          />
        </Typography>
        <Typography
          variant="h3"
          component="h4"
          sx={{
            fontSize: "1.5rem",
          }}
        >
          I create website and Applications Based on Your needs...
        </Typography>
      </Box>
    </>
  );
};
