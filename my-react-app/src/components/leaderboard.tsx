import React, { useState } from "react";
import "../App.css";
import NavBar from "./navbar";
import Footer from "./footer";

interface LeaderboardItem {
  id: number;
  username: string;
  score: string;
}

const Leaderboard: React.FC = () => {
  // Sample leaderboard data
  const initialLeaderboard: LeaderboardItem[] = [
    { id: 1, username: 'Morozan Andrei', score: "150 xp" },
    { id: 2, username: 'Cioban Ada', score: "125 xp" },
    { id: 3, username: 'Rusu Emilia', score: "115 xp" },
    { id: 1, username: "Morozan Andrei", score: "150xp" },
    { id: 2, username: "Cioban Ada", score: "125 xp" },
    { id: 3, username: "Rusu Emilia", score: "115 xp" },
    // Add more entries as needed
  ];

  const [leaderboard, setLeaderboard] =
    useState<LeaderboardItem[]>(initialLeaderboard);

  return (
    <div className="leaderboard-container">
      {" "}
      {/* Apply a class for the container */}
      <NavBar />
      <h2 className="leaderboard-title">
        Leaderboard: persoane din Estonia
      </h2>{" "}
      {/* Class for the title */}
      <ul className="leaderboard-list">
        {" "}
        {/* Class for the list */}
        {leaderboard.map((item) => (
          <li key={item.id} className="leaderboard-item">
            {" "}
            {/* Class for each list item */}
            <span className="username">{item.username}</span>{" "}
            {/* Class for username */}
            <span className="score">Score: {item.score}</span>{" "}
            {/* Class for score */}
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
};

export default Leaderboard;
