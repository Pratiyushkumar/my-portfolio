import { theme } from "../../theme";

export const contactConatainer = {
  backgroundColor: theme.palette.secondary.main,
  padding: "3em",
};

export const contactConatainerResp = {
  backgroundColor: theme.palette.secondary.main,
  padding: "1em",
};

export const contactSecondaryContainer = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
};

export const paperStyle = {
  padding: "30px 50px",
  maxWidth: "40rem",
  // minWidth: "20rem",
  width: "100%",
  // margin: "20px auto",
  "@media (min-width: 780px)": {
    padding: "10px",
  },
};

export const paperStyleResp = {
  padding: "10px",
  width: "100%",
};

export const TextFieldStyle = {
  maxWidth: "40rem",
  minWidth: "20rem",
  width: "100%",
  marginBottom: "15px",
};

export const button = {
  maxWidth: "40rem",
  minWidth: "20rem",
  width: "100%",
};

export const TextFieldStyleResp = {
  width: "100%",
  marginBottom: "15px",
};

export const buttonResp = {
  width: "100%",
};
