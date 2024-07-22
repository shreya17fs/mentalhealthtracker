import React, { useState } from 'react';

function MoodSelector() {
  const [mood, setMood] = useState('');

  const handleChange = (e) => {
    setMood(e.target.value);
  };

  return (
    <div>
      <h2>Select Your Mood</h2>
      <select value={mood} onChange={handleChange}>
        <option value="">Select...</option>
        <option value="happy">Happy</option>
        <option value="sad">Sad</option>
        <option value="angry">Angry</option>
        {/* Add more moods as needed */}
      </select>
    </div>
  );
}

export default MoodSelector;





