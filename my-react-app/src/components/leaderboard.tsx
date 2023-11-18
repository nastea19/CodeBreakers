import React, { useState } from 'react';

interface LeaderboardItem {
  id: number;
  username: string;
  score: number;
}

const Leaderboard: React.FC = () => {
  // Sample leaderboard data
  const initialLeaderboard: LeaderboardItem[] = [
    { id: 1, username: 'Player1', score: 1500 },
    { id: 2, username: 'Player2', score: 1200 },
    { id: 3, username: 'Player3', score: 1000 },
    // Add more entries as needed
  ];

  const [leaderboard, setLeaderboard] = useState<LeaderboardItem[]>(initialLeaderboard);

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {leaderboard.map((item) => (
          <li key={item.id}>
            {item.username} - Score: {item.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
