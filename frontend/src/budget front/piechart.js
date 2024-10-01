import React from 'react';
import { Pie } from 'react-chartjs-2';
import './PieChart.css';

const PieChart = () => {
  const data = {
    labels: ['Wants', 'Needs', 'Savings'],
    datasets: [
      {
        label: 'Budget Distribution',
        data: [300, 500, 200],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div>
      <h2>Budget Distribution</h2>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
