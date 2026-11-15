"use client";
import { getTrainingDays } from "@/shared/api";
import { Suspense, useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import { ru } from "react-day-picker/locale";
import "react-day-picker/style.css";
export const Visites = () => {
  const [isPending, setIsPending] = useState(true);
  const [trainings, setTrainings] = useState<{ createdAt: Date }[]>([]);
  useEffect(() => {
    const getTrainingDaysFunc = async () => {
      setIsPending(true);
      try {
        const trainings = await getTrainingDays();
        setTrainings(trainings);
      } catch (error) {
        console.log(error);
      } finally {
        setIsPending(false);
      }
    };

    getTrainingDaysFunc();
  }, []);

  return (
    <div>
      <h3 className="font-semibold text-xl">История посещений</h3>
      <Suspense>
        {isPending ? (
          <div className="w-full bg-border animate-pulse h-64 mt-4" />
        ) : (
          <DayPicker
            selected={trainings.flatMap(
              (training) => new Date(training.createdAt),
            )}
            mode="multiple"
            locale={ru}
            className="w-full! max-w-full!"
          />
        )}
      </Suspense>
    </div>
  );
};
