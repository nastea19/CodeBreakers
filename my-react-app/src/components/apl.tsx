import React, { useState } from "react";
import Leaderboard from "./leaderboard";
import "../App.css";
import NavBar from "./navbar";
import Footer from "./footer";

const APL: React.FC = () => {
  const handleButtonClick = (inputNumber: number, action: string) => {
    // Handle button click logic here if needed
  };

  return (
    <div className="apl-container">
      <NavBar />
      <div className="apl-content">
        <div className="apl-description">
          Proiectul de lege propus de Guvernul Republicii Moldova vizează modificarea Legii voluntariatului nr. 121/2010 și are ca scop dezvoltarea voluntariatului în domeniul protecției civile și apărării împotriva incendiilor. Iată un rezumat pe scurt:
        </div>
        <h2>Descrierea Inițială:</h2>
        <ul>
          <li>Număr înregistrare: 408 h.878 2023-11-15</li>
          <li>Data înregistrării: 16.11.2023</li>
          <li>Autor: Guvernul Republicii Moldova</li>
          <li>Stadiu: Examinare</li>
        </ul>

        <h2>Textul Inițial:</h2>
        <ul>
          <li>
            Proiectul a fost elaborat de către Ministerul Afacerilor Interne.
          </li>
          <li>
            Are la bază importanța voluntariatului, recunoscută în acte și
            rezoluții internaționale.
          </li>
          <li>
            Scopul proiectului este implementarea acțiunii nr. 6.8 din Planul de
            acțiuni al Guvernului pentru anul 2023.
          </li>
        </ul>

        <h2>Link către textul inițial:</h2>
        <a href="https://www.parlament.md/LegislationDocument.aspx?Id=e18ff8fc-7e1a-469b-8e3a-02157fd3c5d5" className="apl-links">
          https://www.parlament.md/LegislationDocument.aspx?Id=e18ff8fc-7e1a-469b-8e3a-02157fd3c5d5
        </a>

        <h2>Link către documente adiționale:</h2>
        <ol>
          <li>
            <a href="https://www.parlament.md/LegislationDocument.aspx?Id=450e8dc8-60bb-40f3-896c-0096b9219cfb">
              <strong className="apl-links">Aviz Ministerul Justiției</strong>
            </a>
          </li>
          <li>
            <a href="https://www.parlament.md/LegislationDocument.aspx?Id=ac83356f-9e8d-44e5-b89f-8a2068c5b211">
              <strong className="apl-links">Sinteza propunerilor</strong>
            </a>
          </li>
          <li>
            <a href="https://www.parlament.md/LegislationDocument.aspx?Id=b13c7a49-896a-46aa-a189-be7534d5b486">
              <strong className="apl-links">Aviz CNA</strong>
            </a>
          </li>
          <li>
            <a href="https://www.parlament.md/LegislationDocument.aspx?Id=c99e4ffc-4e72-4b7f-a3ec-daafb2d41a42">
              <strong className="apl-links">Tabel comparativ</strong>
            </a>
          </li>
          <li>
            <a href="https://www.parlament.md/LegislationDocument.aspx?Id=08136287-2878-4a45-9211-e24c77bba852">
              <strong className="apl-links">Avize instituții</strong>
            </a>
          </li>
        </ol>

        <h2>Motivația Proiectului:</h2>
        <ul>
          <li>
            Se evidențiază necesitatea dezvoltării voluntariatului în domeniul
            protecției civile și apărării împotriva incendiilor.
          </li>
          <li>
            Se menționează experiența țărilor care au un procent mare de
            voluntari în serviciile de protecție civilă.
          </li>
          <li>
            Se subliniază contribuția voluntarilor la reducerea consecințelor
            situațiilor de urgență și excepționale.
          </li>
        </ul>

        <h2>Modificări Propuse:</h2>
        <ul>
          <li>
            Modificarea art. 2 din Legea voluntariatului nr. 121/2010, inclusiv
            definirea "Domeniilor de utilitate publică" pentru a include
            activitatea în domeniul protecției civile și apărării împotriva
            incendiilor.
          </li>
          <li>
            Exceptarea de la normele privind neadmiterea voluntarilor la
            activități periculoase sau care pot dăuna vieții și sănătății
            acestora în domeniul protecției civile și apărării împotriva
            incendiilor.
          </li>
        </ul>

        <h2>Consultări și Avize:</h2>
        <ul>
          <li>
            Proiectul a fost publicat pentru consultare publică conform
            prevederilor legale.
          </li>
        </ul>
        <br />
        <h3>Sunteti de acord să implementăm această idee?</h3>
        <div className="apl-buttons">
          <button onClick={() => handleButtonClick(1, "Da")}>Da</button>
          <button onClick={() => handleButtonClick(1, "No")}>Nu</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default APL;
