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
  const initialLeaderboardOne: LeaderboardItem[] = [
    { id: 1, username: 'Morozan Andrei', score: '250 xp' },
    { id: 2, username: 'Cioban Ada', score: '225 xp' },
    { id: 3, username: 'Rusu Emilia', score: '215 xp' },
    // Add more entries as needed
  ];

  const initialLeaderboardTwo: LeaderboardItem[] = [
    { id: 1, username: 'Norvegia: Burduja Ion', score: '280 xp' },
    { id: 2, username: 'Italia: Popov Maria', score: '270 xp' },
    { id: 3, username: 'Estonia: Morozan Andrei', score: '250 xp' },
    // Add more entries as needed
  ];

  const [leaderboardOne, setLeaderboardOne] = useState<LeaderboardItem[]>(initialLeaderboardOne);
  const [leaderboardTwo, setLeaderboardTwo] = useState<LeaderboardItem[]>(initialLeaderboardTwo);

  return (
    <div className="leaderboard-wrapper">
      <NavBar />
      <div className="leaderboard-container first-leaderboard">
        <h2 className="leaderboard-title">Cei mai implicati moldoveni din Estonia</h2>
        <ul className="leaderboard-list">
          {leaderboardOne.map((item) => (
            <li key={item.id} className="leaderboard-item">
              <span className="username">{item.username}</span>
              <span className="score">Score: {item.score}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="leaderboard-container second-leaderboard">
        <h2 className="leaderboard-title">Topul celor mai implicati moldoveni dupa tara</h2>
        <ul className="leaderboard-list">
          {leaderboardTwo.map((item) => (
            <li key={item.id} className="leaderboard-item">
              <span className="username">{item.username}</span>
              <span className="score">Score: {item.score}</span>
            </li>
          ))}
        </ul>
      </div>

      <Footer />
    </div>
  );
};

export default Leaderboard;
