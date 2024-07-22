import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Mood',
      data: [3, 2, 5, 4, 7, 8],
      borderColor: '#00246B',
      backgroundColor: 'rgba(0, 36, 107, 0.2)',
    },
  ],
};

function MoodChart() {
  return (
    <div>
      <h2>Mood Trends</h2>
      <Line data={data} />
    </div>
  );
}

export default MoodChart;
