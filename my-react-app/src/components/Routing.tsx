import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SignIn from "./sign-in";
import SignUp from "./sign-up";
import FirstPage from "./firstPage";
import Quiz from "./test";
import CommentsSection from "./Suggestion";
import Leaderboard from "./leaderboard";
import "../App.css";
import Cursuri from "./cursuri";
import Portal from "./portal";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/firstPage" />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/firstPage" element={<FirstPage />} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="/Sugestii" element={<CommentsSection />} />
        <Route path="/portal" element={<Portal />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/cursuri" element={<Cursuri />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Routing;
