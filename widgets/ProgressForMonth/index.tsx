"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";
import Link from "next/link";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export const ProgressForMonth = () => {
  const data = {
    labels: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн"],
    datasets: [
      {
        label: "Веса",
        data: [20, 40, 50, 10, 40, 60],
        borderColor: "#3b82f6",
        backgroundColor: "#3b82f6",
        tension: 0.4,
      },
      {
        label: "Повторения",
        data: [10, 8, 14, 24, 12, 32],
        borderColor: "red",
        backgroundColor: "red",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  };
  return (
    <section className="container mt-5">
      <div className="h-70 ">
        <Line data={data} options={options} />
      </div>
    </section>
  );
};
