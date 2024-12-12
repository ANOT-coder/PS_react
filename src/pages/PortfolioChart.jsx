import React from 'react';
import { Link } from 'react-router-dom';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js';

// Register the necessary components
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

const PortfolioChart = () => {
  // Sample data for the pie chart (this can be dynamically updated based on user response)
  const data = {
    labels: ['Stocks', 'FD', 'SIPs', 'Commodities', 'Bonds/Debentures'],
    datasets: [
      {
        data: [40, 20, 15, 10, 15], // Replace this with dynamic data
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#FF9F40'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#FF9F40'],
      },
    ],
  };

  return (
    <div className="portfolio-chart-container">
      <h2>Your Ideal Portfolio Composition</h2>
      
      <div className="chart">
        <Pie data={data} />
      </div>

      <div className="back-button">
        <Link to="/ideal-portfolio">
          <button className="back-btn">Go Back to Portfolio Form</button>
        </Link>
      </div>
    </div>
  );
};

export default PortfolioChart;
