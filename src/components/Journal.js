import React, { useState } from 'react';

function Journal() {
  const [entry, setEntry] = useState('');

  const handleChange = (e) => {
    setEntry(e.target.value);
  };

  return (
    <div>
      <h2>Journal</h2>
      <textarea 
        value={entry}
        onChange={handleChange}
        placeholder="Write your journal entry here..."
        rows="4"
        cols="50"
      />
    </div>
  );
}

export default Journal;



