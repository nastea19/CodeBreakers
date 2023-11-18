import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SignIn from "./sign-in";
import SignUp from "./sign-up";
import FirstPage from "./firstPage";
import "../App.css";


function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/firstPage" />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/firstPage" element={<FirstPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Routing;
