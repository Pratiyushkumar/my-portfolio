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
        {/* <Box
          sx={{
            display: "flex",
            fontWeight: "bolder",
            fontFamily: "roboto",
            position: "relative",
            marginTop: "20px",
            "&:before": {
              width: "55px",
              height: "55px",
              backgroundColor: theme.palette.secondary.main,
              content: '""',
              borderRadius: "50%",
            },
          }}
        >
          <Typography
            variant="span"
            sx={{
              lineHeight: "20px",
              position: "absolute",
              left: "33px",
              top: "2px",
              padding: "3px",
              fontSize: "20px",
            }}
          >
            {label}
          </Typography>
          {withIcon ? (
            <>
              <Typography
                variant="span"
                sx={{
                  position: "absolute",
                  left: "10px",
                  lineHeight: "55px",
                  color: theme.palette.base2.main,
                  animationName: "upDown",
                  WebkitAnimationName: "upDown",
                  animationDuration: "0.7s",
                  WebkitAnimationDuration: "0.7s",
                  animationIterationCount: "infinite",
                  "@global": {
                    "@keyFrames upDown": {
                      "0%": {
                        padding: "0px",
                        transform: "scale(0)",
                      },
                      "100%": {
                        padding: "10px",
                        transform: "scale(1)",
                      },
                    },
                  },
                }}
              >
                {Icon}
              </Typography>
            </>
          ) : null}
        </Box> */}
      </Box>
    </>
  );
};
