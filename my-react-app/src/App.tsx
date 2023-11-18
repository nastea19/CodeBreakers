import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { NavLinkProps, navLinks } from "./components/links/navbar-routing";
// import NavigationBar from "./components/NavigationBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import APL from "./components/apl";
import Footer from "./components/footer";
import NavBar from "./components/navbar";
import Routing from "./components/Routing";
import Quiz from "./components/test";
import { theme } from "./components/theme";
import { ThemeProvider } from "@emotion/react";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Routing />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
