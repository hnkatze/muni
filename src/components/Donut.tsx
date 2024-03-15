import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
    labels: string[];
    series: number[];
    title: string;
  }
  
  const Donut: React.FC<DoughnutChartProps> = ({ labels, series, title }) => {
    const pastelColors = [
        '#FFD700', '#FFA07A', '#FFB6C1', '#87CEEB', '#98FB98',
        '#FF69B4', '#FFDAB9', '#FF6347', '#FFA500', '#FFC0CB',
        '#DDA0DD', '#FF4500', '#FF8C00', '#FF1493', '#20B2AA'
      ];
    
      // Genera colores aleatorios a partir de la paleta sin repetir
      const getRandomColor = () => {
        const randomIndex = Math.floor(Math.random() * pastelColors.length);
        const color = pastelColors.splice(randomIndex, 1)[0];
        return color;
      };
    
      const backgroundColor = Array.from({ length: series.length }, getRandomColor);
  const borderColor = '#fff0f2'; 

  const data = {
    labels: labels,
    datasets: [
      {
        data: series,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function(context: { label: string; parsed: number; }) {
            let label = context.label || '';

            if (label) {
              label += ': ';
            }
            if (context.parsed) {
              label += (context.parsed * 1).toFixed(0) + '%';
            }
            return label;
          }
        }
      }
    }
  };
  return (
    <div className=" flex flex-col w-[25vw]  h-[60vh]   justify-center ">
        <h2 className='text-gray-700 text-lg uppercase -translate-x-5 pt-5 text-center'>{title}</h2>
        <div className='w-[22vw] items-center'>
        <Doughnut data={data} options={options} />
        </div>
      
    </div>
  );
};

export default Donut;
