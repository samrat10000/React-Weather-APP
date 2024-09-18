//graaph code with different temperature button temperature

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import "./MyChartInfo.css";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const MyChartInfo = ({ forecastData }) => {
  const labels = [
    forecastData?.date || "Date",
    forecastData?.date2 || "Date",
    forecastData?.date3 || "Date",
    forecastData?.date4 || "Date",
  ];

  const temperatures = [
    forecastData?.temperature || 0,
    forecastData?.temperature2 || 0,
    forecastData?.temperature3 || 0,
    forecastData?.temperature4 || 0,
  ];

  const maxTemps = [
    forecastData?.maxTemp || 0,
    forecastData?.maxTemp2 || 0,
    forecastData?.maxTemp3 || 0,
    forecastData?.maxTemp4 || 0,
    forecastData?.maxTemp5 || 0,
  ];

  const minTemps = [
    forecastData?.minTemp || 0,
    forecastData?.minTemp2 || 0,
    forecastData?.minTemp3 || 0,
    forecastData?.minTemp4 || 0,
    forecastData?.minTemp5 || 0,
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
            size: (context) => {
              const width = context.chart.width;
              return width > 768 ? 14 : width > 480 ? 12 : 10; 
            },
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
        ticks: {
          font: {
            size: (context) => {
              const width = context.chart.width;
              return width > 768 ? 14 : width > 480 ? 12 : 10; 
            },
            family: 'Poppins", sans-serif',
            weight: "bold",
          },
          color: "#666",
        },
        grid: {
          color: "rgba(200, 200, 200, 0.3)",
        },
        title: {
          display: true,
          text: "Day",
          color: "#666",
          font: {
            size: (context) => {
              const width = context.chart.width;
              return width > 768 ? 16 : width > 480 ? 14 : 12; 
            },
            family: 'Poppins", sans-serif',
            weight: "bold",
          },
        },
      },
      y: {
        ticks: {
          font: {
            size: (context) => {
              const width = context.chart.width;
              return width > 768 ? 14 : width > 480 ? 12 : 10; 
            },
            family: 'Poppins", sans-serif',
          },
          color: "#666",
        },
        grid: {
          color: "rgba(200, 200, 200, 0.3)",
        },
        title: {
          display: true,
          text: "Temperature (°C)",
          color: "#666",
          font: {
            size: (context) => {
              const width = context.chart.width;
              return width > 768 ? 16 : width > 480 ? 14 : 12; 
            },
            family: 'Poppins", sans-serif',
          },
        },
      },
    },
  };

  return (
    <div className="chart-main1">
      <div className="chart-container1">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default MyChartInfo;

// grapg with normal data

// //  cahnge it for components in the info bar

// import React from 'react';
// import { Line } from 'react-chartjs-2';
// import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
// // import './MyChart.css';
// import { color } from 'chart.js/helpers';
// import './MyChartInfo.css'

// // Registering components required for the chart
// ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

// const MyChartInfo = ({ forecastData }) => {
//   // Process forecastData to get chart data
//   const labels = [
//     forecastData?.date || 'Date',
//     forecastData?.date2 || 'Date',
//     forecastData?.date3 || 'Date',
//     forecastData?.date4 || 'Date',
//     // forecastData?.date5 || 'Date',
//     // forecastData?.date6 || 'Date',
//   ];

//   const temperatures = [
//     forecastData?.temperature || 0,
//     forecastData?.temperature2 || 0,
//     forecastData?.temperature3 || 0,
//     forecastData?.temperature4 || 0,

//   ];

//   const maxTemps = [
//     forecastData?.maxTemp || 0,
//     forecastData?.maxTemp2 || 0,
//     forecastData?.maxTemp3 || 0,
//     forecastData?.maxTemp4 || 0,
//     forecastData?.maxTemp5 || 0,
//     // forecastData?.maxTemp6 || 0,
//   ];

//   const minTemps = [
//     forecastData?.minTemp || 0,
//     forecastData?.minTemp2 || 0,
//     forecastData?.minTemp3 || 0,
//     forecastData?.minTemp4 || 0,
//     forecastData?.minTemp5 || 0,
//     // forecastData?.minTemp6 || 0,
//   ];

//   const data = {
//     labels: labels,
//     datasets: [
//       {
//         label: 'Temperature',
//         data: temperatures,
//         borderColor: '#1E90FF',
//         backgroundColor: 'rgba(30, 144, 255, 0.2)',
//         borderWidth: 2,
//         pointBackgroundColor: '#1E90FF',
//         pointBorderColor: '#fff',
//         pointBorderWidth: 2,
//         pointRadius: 6,
//       },
//       {
//         label: 'Max Temp',
//         data: maxTemps,
//         borderColor: '#FF6347',
//         backgroundColor: 'rgba(255, 99, 132, 0.2)',
//         borderWidth: 2,
//         pointBackgroundColor: '#FF6347',
//         pointBorderColor: '#fff',
//         pointBorderWidth: 2,
//         pointRadius: 6,
//       },
//       {
//         label: 'Min Temp',
//         data: minTemps,
//         borderColor: '#32CD32',
//         backgroundColor: 'rgba(50, 205, 50, 0.2)',
//         borderWidth: 2,
//         pointBackgroundColor: '#32CD32',
//         pointBorderColor: '#fff',
//         pointBorderWidth: 2,
//         pointRadius: 6,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         position: 'top',
//         labels: {
//           font: {
//             size: 14,
//             family: 'Poppins", sans-serif',
//             weight: 'bold',
//           },
//         },
//       },
//       tooltip: {
//         backgroundColor: '#333',
//         titleColor: '#fff',
//         bodyColor: '#fff',
//         callbacks: {
//           label: (tooltipItem) => {
//             const label = tooltipItem.dataset.label || '';
//             const value = tooltipItem.raw;
//             return `${label}: ${value}°C`;
//           },
//         },
//       },
//     },

//     scales: {
//       x: {
//         ticks: {
//           font: (context) => {
//             const width = context.chart.width;
//             return {
//               size: width > 768 ? 14 : width > 480 ? 1 :7, // Responsive font size
//             };
//           },
//           color: '#666',
//         },
//         grid: {
//           color: 'rgba(200, 200, 200, 0.3)',
//         },
//         title: {
//           display: true,
//           text: 'Day',
//           color: '#666',
//         //   color :"white",   // color of text
//           font: {
//             family: 'Poppins", sans-serif',
//             weight: 'bold',
//           },
//         },
//       },
//       y: {
//         ticks: {
//           font: (context) => {
//             const width = context.chart.width;
//             return {
//               size: width > 768 ? 14 : width > 480 ? 12 : 10,
//             };
//           },
//           color: '#666',
//         },
//         grid: {
//           color: 'rgba(200, 200, 200, 0.3)',
//         },
//         title: {
//           display: true,
//           text: 'Temperature (°C)',
//           color: '#666',

//           font: {
//             // size: 14,
//             family: 'Poppins", sans-serif',
//           },
//         },
//       },
//     },
//   };

//   return (
//     <div className="chart-main1">
//       <div className="chart-container1">
//         <Line data={data} options={options} />
//       </div>
//     </div>
//   );
// };

// export default MyChartInfo;
