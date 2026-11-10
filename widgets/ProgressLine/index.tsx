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

interface Props {
  id: string;
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export const ProgressLine = ({ id }: Props) => {
  const data = {
    labels: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн"],
    datasets: [
      {
        label: "Веса",
        data: [40, 80, 120, 110],
        borderColor: "#6c3cd2",
        backgroundColor: "#6c3cd2",
        tension: 0.4,
      },
      {
        label: "Повторения",
        data: [8, 8, 10, 8],
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
    <div className="h-70 mt-5">
      <Line data={data} options={options} />
    </div>
  );
};
