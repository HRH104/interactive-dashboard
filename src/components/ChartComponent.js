import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ChartComponent = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
      label: 'Sample Data',
      data: [65, 59, 80, 81, 56, 55],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
    }],
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      <Line data={data} />
    </div>
  );
};

export default ChartComponent;
