"use client";
import { Play } from "lucide-react";
import { createTraining } from "@/shared/api";
import { useRouter } from "next/navigation";
export const StartTrainingButton = () => {
  const router = useRouter();
  const onClick = async () => {
    const createdTraining = await createTraining();
    router.push(`/training?id=${createdTraining.id}&step=1`);
  };

  return (
    <button
      onClick={() => onClick()}
      className="flex flex-col items-center w-full p-7 bg-linear-to-br from-main to-[#2f215e] rounded-2xl active:scale-95 transition"
    >
      <Play className="text-white fill-white" size={48} />
      <h1 className="font-bold mt-4 text-2xl">Начать тренировку</h1>
      <p className="text-lg">Продолжить прогресс</p>
    </button>
  );
};
