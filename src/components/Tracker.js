import React from 'react';
import MoodSelector from './MoodSelector';
import Journal from './Journal';
import MoodHistory from './MoodHistory';

function Tracker() {
  return (
    <div>
      <MoodSelector />
      <Journal />
      <MoodHistory />
    </div>
  );
}

export default Tracker;




