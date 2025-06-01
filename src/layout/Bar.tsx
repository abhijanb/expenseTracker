'use client';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
  plugins: {
    legend: {
      labels: {
        color: 'white',
      },
    },
    title: {
      display: true,
      text: 'Sales Overview',
      color: 'white',
    },
    tooltip: {
      titleColor: 'white',
      bodyColor: 'white',
    },
  },
  scales: {
    x: {
      ticks: {
        color: 'white',
      },
      grid: {
        color: 'rgba(255, 255, 255, 0.1)',
      },
    },
    y: {
      ticks: {
        color: 'white',
      },
      grid: {
        color: 'rgba(255, 255, 255, 0.1)',
      },
    },
  },
};

const DaySpendBar = () => {
  const [labels, setLabels] = useState<string[]>([]);
  const [dataPoints, setDataPoints] = useState<number[]>([]);

  useEffect(() => {
    const trips = JSON.parse(localStorage.getItem('trips') || '[]');
    const expenses = JSON.parse(localStorage.getItem('expenses') || '[]');

    // Map: date -> total amount
    const dailyTotals: { [date: string]: number } = {};

    expenses.forEach((expense: { tripId: string; amount: number; date: string }) => {
      const date = new Date(expense.date).toLocaleDateString(); // Normalize date
      if (!dailyTotals[date]) {
        dailyTotals[date] = 0;
      }
      dailyTotals[date] += expense.amount;
    });

    // Sort by date (optional)
    const sortedDates = Object.keys(dailyTotals).sort((a, b) => {
      return new Date(a).getTime() - new Date(b).getTime();
    });

    setLabels(sortedDates);
    setDataPoints(sortedDates.map(date => dailyTotals[date]));
  }, []);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Expenses',
        data: dataPoints,
        backgroundColor: dataPoints.map(
          (_, idx) =>
            ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)', 'rgba(75, 192, 192, 0.5)', 'rgba(153, 102, 255, 0.5)'][idx % 5]
        ),
      },
    ],
  };

  return (
    <div className="w-full sm:w-1/2 border border-gray-300 bg-gray-600 rounded-sm p-4 min-h-full text-white">
      <h2 className="text-lg font-semibold border-b border-gray-400 mb-2 pb-1">
        Day Spend Bar
      </h2>
      <div className="h-64 bg-gray-500 rounded flex items-center justify-center">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default DaySpendBar;
