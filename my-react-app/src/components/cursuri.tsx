import React, { useState } from "react";
import "../App.css";
import NavBar from "./navbar";
import Footer from "./footer";

const LegislationCourses: React.FC = () => {
  return (
    <><NavBar />
    <div className="legislation-courses-wrapper">
      <div className="legislation-course">
        <h2 className="course-title">Curs despre legislația Republicii Moldova</h2>
        <p className="course-description">
        "Cursul despre legislația Republicii Moldova oferă o perspectivă comprehensivă și practică asupra sistemului legal, acoperind aspecte fundamentale și aplicate ale legislației în 10-15 sesiuni captivante."        </p>
      </div>

      <div className="legislation-course">
        <h2 className="course-title">Curs incepător despre oganizarea administrativă în RM</h2>
        <p className="course-description">
        "Introducere accesibilă în structura administrativă a Republicii Moldova în 10-15 lecții."        </p>
      </div>

      <div className="legislation-course">
        <h2 className="course-title">Curs avansat despre oganizarea administrativă în RM</h2>
        <p className="course-description">
        "Analiză detaliată a structurii administrative a Republicii Moldova în 10-15 module complexe."        </p>
      </div>
    <Footer/>
    </div></>
  );
};

export default LegislationCourses;