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

function App() {
  return (
    <>
      <NavBar />
      <Routing /> <Footer />
    </>
  );
}

export default App;
