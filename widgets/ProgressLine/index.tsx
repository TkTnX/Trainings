"use client";

import { Set } from "@/app/generated/prisma/client";
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
  sets: Set[];
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

export const ProgressLine = ({ sets }: Props) => {
  console.log(sets);
  const data = {
    labels: sets.map((set) =>
      new Date(set.createdAt).toLocaleDateString("ru-RU"),
    ),
    datasets: [
      {
        label: "Веса",
        data: sets.map((set) => set.kg),
        borderColor: "#6c3cd2",
        backgroundColor: "#6c3cd2",
        tension: 0.4,
      },
      {
        label: "Повторения",
        data: sets.map((set) => set.reps),
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
