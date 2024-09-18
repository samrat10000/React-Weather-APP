// src/components/MyChart.js
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import "./MyChart.css";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const MyChart = ({ forecastData }) => {
  const labels = [
    forecastData?.date || "Date",
    forecastData?.date2 || "Date",
    forecastData?.date3 || "Date",
    forecastData?.date4 || "Date",
    forecastData?.date5 || "Date",
    forecastData?.date6 || "Date",
  ];

  const temperatures = [
    forecastData?.temperature || 0,
    forecastData?.temperature2 || 0,
    forecastData?.temperature3 || 0,
    forecastData?.temperature4 || 0,
    forecastData?.temperature5 || 0,
    forecastData?.temperature6 || 0,
  ];

  const maxTemps = [
    forecastData?.maxTemp || 0,
    forecastData?.maxTemp2 || 0,
    forecastData?.maxTemp3 || 0,
    forecastData?.maxTemp4 || 0,
    forecastData?.maxTemp5 || 0,
    forecastData?.maxTemp6 || 0,
  ];

  const minTemps = [
    forecastData?.minTemp || 0,
    forecastData?.minTemp2 || 0,
    forecastData?.minTemp3 || 0,
    forecastData?.minTemp4 || 0,
    forecastData?.minTemp5 || 0,
    forecastData?.minTemp6 || 0,
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Temperature",
        data: temperatures,
        borderColor: "#1E90FF",
        backgroundColor: "rgba(30, 144, 255, 0.2)",
        borderWidth: 2,
        pointBackgroundColor: "#1E90FF",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 6,
      },
      {
        label: "Max Temp",
        data: maxTemps,
        borderColor: "#FF6347",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderWidth: 2,
        pointBackgroundColor: "#FF6347",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 6,
      },
      {
        label: "Min Temp",
        data: minTemps,
        borderColor: "#32CD32",
        backgroundColor: "rgba(50, 205, 50, 0.2)",
        borderWidth: 2,
        pointBackgroundColor: "#32CD32",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 14,
            family: 'Poppins", sans-serif',
            weight: "bold",
          },
        },
      },
      tooltip: {
        backgroundColor: "#333",
        titleColor: "#fff",
        bodyColor: "#fff",
        callbacks: {
          label: (tooltipItem) => {
            const label = tooltipItem.dataset.label || "";
            const value = tooltipItem.raw;
            return `${label}: ${value}°C`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
        title: {
          display: true,
          text: "Day",
          color: "#666",
          font: {
            family: 'Poppins", sans-serif',
            weight: "bold",
          },
        },
      },
      y: {
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
        title: {
          display: true,
          text: "Temperature (°C)",
          color: "#666",
          font: {
            size: 14,
            family: 'Poppins", sans-serif',
          },
        },
      },
    },
  };

  return (
    <div className="chart-main">
      <div
        className="chart-container"
        style={{ width: "70vw", height: "40vh" }}
      >
        {" "}
        {/* Using 70vw width and 40vh height */}
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default MyChart;
