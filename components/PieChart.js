import React, { useRef, useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, registerables } from 'chart.js';
import styles from './PieChart.module.css';

ChartJS.register(ArcElement, Tooltip, Legend, ...registerables);

// Plugin für Text in der Mitte des Diagramms
const textPlugin = {
  id: 'textCenter',
  afterDraw: (chart) => {
    const { ctx, chartArea } = chart;
    if (!chart.data.datasets[0].data.length) return;

    const fontSize = (chartArea.height / 100).toFixed(2);
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    ctx.font = (fontSize / 2.5) + 'em Arial';
    ctx.fillStyle = 'white';
    ctx.fillText('Designer', chartArea.left + chartArea.width / 4, chartArea.top + chartArea.height / 2);
    ctx.fillText('Coder', chartArea.left + (chartArea.width * 3) / 4, chartArea.top + chartArea.height / 2);
  },
};

// Funktion zur Erstellung von Farbverläufen
const createGradient = (ctx, colors) => {
  const gradient = ctx.createLinearGradient(0, 0, 0, 300);
  colors.forEach((color, index) => {
    gradient.addColorStop(index / (colors.length - 1), color);
  });
  return gradient;
};

const PieChart = () => {
  const chartRef = useRef(null);
  const [gradients, setGradients] = useState({ gradientOne: null, gradientTwo: null });

  useEffect(() => {
    const chart = chartRef.current;
    if (chart) {
      const newGradientOne = createGradient(chart.ctx, ['#cccccc', '#c8c8c8', '#CFCFCF']);
      const newGradientTwo = createGradient(chart.ctx, ['#434343', '#414141', '#3f3f3f']);
      setGradients({ gradientOne: newGradientOne, gradientTwo: newGradientTwo, });
    }
  }, []);

  const data = {
    labels: ['Coding', 'Design'],
    datasets: [
      {
        data: [55, 44],
        backgroundColor: [
          gradients.gradientOne || '#FFFFFF',
          gradients.gradientTwo || '#3E3E3E',
        ],
        borderColor: [
        gradients.gradientOne || '#FFFFFF', // Farbe des Randes für Design
          '#FAFAFA', // Farbe des Randes für Coding
        ],
        hoverBorderColor: [
          '#65AD96', // Farbe des Randes beim Hover für Design
          '#65AD96', // Farbe des Randes beim Hover für Coding
        ],
        borderWidth: 10, // Dicke des Randes
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'null',
        labels: {
          color: '#FAFAFA',
          padding: 10,
          font: {
            size: 12,
            family: 'Arial, sans-serif',
          },
        },
      },
      textCenter: {
        display: true,
      },
    },
  };

  // Registriere den benutzerdefinierten Plugin
  ChartJS.register(textPlugin);

  return (
    <div className={styles['pie-chart-container']}>
      <Pie ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default PieChart;
