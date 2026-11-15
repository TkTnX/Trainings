"use client";
import { finishTraining } from "@/shared/api";
import { useRouter, useSearchParams } from "next/navigation";

export const FinishTrainingButton = () => {
  const searchParams = useSearchParams();
    const id = searchParams.get("id");
    const router = useRouter()

  const onFinish = async () => {
    if (!id) return;
      await finishTraining(id);
      router.push('/history')
  };

  return (
    <button onClick={onFinish} className="border border-red-500 p-3 rounded-lg">
      <div className="w-4 bg-red-500 h-4 rounded-sm" />
    </button>
  );
};
