"use client";
import { getExercise } from "@/shared/api";
import { getRecord, getWeightDynamics } from "@/shared/helpers";
import { ExerciseWithSets } from "@/shared/types";
import { ProgressLine } from "@/widgets";
import {
  ChartNoAxesCombined,
  Loader2,
  TrendingDown,
  TrendingUp,
  Trophy,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Props {
  id: string;
}

export const BigExercise = ({ id }: Props) => {
  const [isPending, setIsPending] = useState(true);
  const [exercise, setExercise] = useState<null | ExerciseWithSets>(null);

  useEffect(() => {
    const getExerciseFunc = async () => {
      try {
        setIsPending(true);
        const exercise = await getExercise(id);

        setExercise(exercise);
      } catch (error) {
        console.log(error);
      } finally {
        setIsPending(false);
      }
    };

    getExerciseFunc();
  }, []);
  if (isPending || !exercise)
    return <Loader2 className="animate-spin mx-auto" />;
  const sets = exercise.sets;
  const { maxKg, maxReps } = getRecord(sets);
  const percentage = getWeightDynamics(sets);
  console.log(percentage);
  return (
    <section className="container">
      <h2 className="font-bold text-4xl">Упражнение</h2>
      <div className="flex items-start gap-2 mt-5">
        {exercise.image && (
          <Image
            src={exercise.image}
            width={140}
            height={100}
            className="rounded-xl min-w-35 min-h-25 w-35 h-25  object-cover"
            alt="Становая тяга"
          />
        )}
        <div>
          <h4 className="text-2xl">{exercise.name}</h4>
        </div>
      </div>
      <ProgressLine sets={sets} />
      <div className="grid grid-cols-2 gap-y-5 gap-x-2 mt-5">
        <div className="bg-border rounded-xl p-4">
          <p className="text-gray">Последний результат</p>
          {sets.length > 0 ? (
            <p className="font-bold text-2xl">
              {sets[sets.length - 1].kg} кг x {sets[sets.length - 1].reps}
            </p>
          ) : (
            <p className="text-xs mt-3">Нет результатов</p>
          )}
        </div>
        <div className="bg-border rounded-xl p-4">
          <Trophy className="text-amber-300 " />
          <p className="text-gray">Рекорд</p>
          <p className="font-bold text-2xl">
            <span className="text-amber-300">{maxKg} кг</span> x {maxReps} кг
          </p>
        </div>
        {percentage && (
          <div className="bg-border rounded-xl px-4 col-span-2 flex justify-between py-6">
            <p className="text-gray">Динамика</p>
            <div>
              {percentage > 0 ? (
                <p className="font-bold flex items-center gap-1 text-2xl text-[#50d071]">
                  <TrendingUp /> {percentage}%
                </p>
              ) : (
                <p className="font-bold flex items-center gap-1 text-2xl text-[#d42727]">
                  <TrendingDown /> {percentage}%
                </p>
              )}
              <p className="text-gray">к весу за месяц</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

