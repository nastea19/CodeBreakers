import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { NavLinkProps, navLinks } from "./components/links/navbar-routing";
// import NavigationBar from "./components/NavigationBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./components/navbar";
import Quiz from "./components/test";

function App() {
  return (
    <><>
      <NavBar />

    </><Quiz /></>


  );
}

export default App;
