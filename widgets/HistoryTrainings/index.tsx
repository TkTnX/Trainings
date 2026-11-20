"use client";
import { Training } from "@/entities";
import { getTrainings } from "@/shared/api";
import { TrainingWithExercise } from "@/shared/types";
import { useEffect, useState } from "react";



export const HistoryTrainings = () => {
  const [trainings, setTrainings] = useState<TrainingWithExercise[]>([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const getTrainingsFunc = async () => {
      setIsPending(true);
      try {
        const trainings = await getTrainings();
        setTrainings(trainings);
      } catch (error) {
        console.log(error);
      } finally {
        setIsPending(false);
      }
    };

    getTrainingsFunc();
  }, []);

  return (
    <div className="grid gap-5">
      {isPending
        ? [...new Array(5)].map((_, index) => (
            <div className="w-full h-48 bg-border animate-pulse" key={index} />
          ))
        : trainings.map((training) => (
            <Training key={training.id} training={training} />
          ))}
    </div>
  );
};
