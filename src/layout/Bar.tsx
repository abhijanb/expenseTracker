import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';
const options = {
  plugins: {
    legend: {
      labels: {
        color: 'white', // Legend text
      },
    },
    title: {
      display: true,
      text: 'Sales Overview',
      color: 'white', // Title text
    },
    tooltip: {
      titleColor: 'white',
      bodyColor: 'white',
    },
  },
  scales: {
    x: {
      ticks: {
        color: 'white', // X-axis label color
      },
      grid: {
        color: 'rgba(255, 255, 255, 0.1)', // X-axis grid lines
      },
    },
    y: {
      ticks: {
        color: 'white', // Y-axis label color
      },
      grid: {
        color: 'rgba(255, 255, 255, 0.1)', // Y-axis grid lines
      },
    },
  },
};

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface Props{
  label:string[],
  datas:number[]
}

const DaySpendBar = ({label,datas}:Props) => {
  const data = {
  labels: label,
  datasets: [
    {
      label: 'Sales',
      data: datas,
      backgroundColor:  ['rgba(255, 99, 132, 0.5)',  // Jan
        'rgba(54, 162, 235, 0.5)',  // Feb
        'rgba(255, 206, 86, 0.5)',] ,
    },
  ],
};

  return (
    <div className="w-full sm:w-1/2 border border-gray-300 bg-gray-600 rounded-sm p-4 min-h-full text-white">
      <h2 className="text-lg font-semibold border-b border-gray-400 mb-2 pb-1">
        Day Spend Bar
      </h2>
      {/* Placeholder for bar graph or spend data */}
      <div className="h-32 bg-gray-500 rounded flex items-center justify-center">
        <span className="text-sm text-white"><Bar data={data} options={options}/></span>
      </div>
    </div>
  );
};

export default DaySpendBar;
