import React from "react";
import Header from "./Components/Header/Header";
import "./styles.css";
import { ThemeProvider } from "@mui/styles";
import { theme } from "./theme";
import AboutUs from "./Components/AboutUs/AboutUs";
import Portfolio from "./Components/Porfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { SnackbarProvider } from "notistack";

const App = () => {
  return (
    <>
      <SnackbarProvider
        iconVariant={{
          success: "✅",
          error: "✖️",
          warning: "⚠️",
          info: "ℹ️",
        }}
      >
        <ThemeProvider theme={theme}>
          <Header />
          {/* <section id="About"> */}
          <AboutUs />
          {/* </section> */}

          <Portfolio />
          <Contact />
          <Footer />
        </ThemeProvider>
      </SnackbarProvider>
    </>
  );
};

export default App;
