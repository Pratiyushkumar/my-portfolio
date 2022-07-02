import { theme } from "../../theme";
export const imageContainer = {
  position: "relative",
  cursor: "pointer",
  "&:hover $imageOverlay": {
    opacity: "1",
  },
};

export const imageOverlay = {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: "67px",
  left: "0",
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.base3.main,
  display: "flex",
  flexDirection: "column",
  // justifyContent: "center",
  alignItems: "center",
  opacity: "1",
  transiton: "0.7s",
};

export const overlayTitle = {
  fontSize: "2rem",
  marginBottom: "16px",
  [theme.breakpoints.down("xs")]: {
    fontSize: "1.2rem",
  },
};
