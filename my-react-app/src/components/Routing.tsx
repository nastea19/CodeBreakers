import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SignIn from "./sign-in";
import SignUp from "./sign-up";
import FirstPage from "./firstPage";
import Quiz from "./test";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/firstPage" />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/firstPage" element={<FirstPage />} />
        <Route path="/Lectii" element={<Quiz />} />
        <Route path="/Sugestii" element={<Quiz />} />
        <Route path="/APL" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Routing;
