import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import "./styles/style.css";
import "./styles/header.css";
import "./styles/footer.css";
import { Bar,Line } from 'react-chartjs-2';
import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend,} from 'chart.js';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  const data = {
    labels: ['2024', '2023', '2022', '2021', '2020'], 
    datasets: [
      {
        label: 'Sales and marketing ', 
        data: [67, 59, 75, 48, 56], 
        backgroundColor: 'white', 
        borderColor: '#52131d', 
        borderWidth: 3, 
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Sales Data',
      },
    },
  };
  // AIzaSyDuQabTIbxIwshpcYHIaIC0GBTgS4u9h_I
  return (
    <>
        <Header/>
    <div style={{ width: '70%', margin: '0 auto' }}>
      <Bar data={data} options={options} />
    </div>
    <Footer />
    </>
  );
};

export default Chart;
