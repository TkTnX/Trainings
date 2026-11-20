"use client";
import { Set } from "@/app/generated/prisma/client";
import { TrainingExercise } from "@/entities/TrainingExercise";
import { getTraining } from "@/shared/api";
import { MuscleGroupEnum, TrainingWithExercise } from "@/shared/types";
import { TrainingInfo } from "@/shared/ui";
import { Loader2Icon } from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
  id: string;
}

export const BigTraining = ({ id }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [training, setTraining] = useState<TrainingWithExercise & {sets: Set[]} | null>(null);
  useEffect(() => {
    const getTrainingFunc = async () => {
      try {
        setIsLoading(true);
        const training = await getTraining(id);
        setTraining(training);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getTrainingFunc();
  }, [id]);

  if (isLoading)
    return (
      <div>
        <Loader2Icon className="animate-spin mx-auto" />
      </div>
    );

  if (!training)
    return (
      <p className="text-center mt-5 font-bold text-2xl">
        Тренировка не найдена!
      </p>
    );

  return (
    <section className="container">
      <h1 className="font-bold text-4xl">
        {training.muscleGroup.map((item) => MuscleGroupEnum[item]).join(" & ")}
      </h1>
      <TrainingInfo training={training} />
      <div className="mt-5">
        <h2 className="text-2xl font-semibold">Упражнения</h2>
        <div className="mt-4 flex flex-col gap-3">
          {training.exercises.map(({exercise}) => (
            <TrainingExercise exercise={exercise} key={exercise.id} />
          ))}
        </div>
      </div>
    </section>
  );
};
