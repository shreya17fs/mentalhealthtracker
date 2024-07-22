import React from 'react';

// Example data for mood history
const moodData = [
  { date: '2024-07-01', mood: 'Happy' },
  { date: '2024-07-02', mood: 'Sad' },
  { date: '2024-07-03', mood: 'Angry' },
  // Add more historical data as needed
];

function MoodHistory() {
  return (
    <div>
      <h2>Mood History</h2>
      <ul>
        {moodData.length > 0 ? (
          moodData.map((entry, index) => (
            <li key={index}>
              {entry.date}: {entry.mood}
            </li>
          ))
        ) : (
          <p>No mood history available yet.</p>
        )}
      </ul>
    </div>
  );
}

export default MoodHistory;




