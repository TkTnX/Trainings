"use client";
import { Training } from "@/entities";
import { getLastTraining } from "@/shared/api";
import { TrainingWithExercise } from "@/shared/types";
import { useEffect, useState } from "react";

export const LastTraining = () => {
  const [training, setTraining] = useState<TrainingWithExercise | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getTrainingFunc = async () => {
      try {
        setIsLoading(true);
        const training = await getLastTraining();
        setTraining(training);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getTrainingFunc();
  }, []);

  return (
    <section className="mt-5 container relative">
      {isLoading ? (
        <div className="w-full h-48 bg-border animate-pulse" />
      ) : training ? (
        <Training training={training} isLastTraining={true} />
      ) : (
        <p>Тренировки нет!</p>
      )}
    </section>
  );
};
