"use client";
import { Set } from "@/app/generated/prisma/client";
import { getLastTrainingSets } from "@/shared/api";
import { Sets } from "@/widgets/Sets";
import { useEffect, useState } from "react";

interface Props {
  exerciseId: string;
  currTrainingId: string;
}

export const LastTrainingResults = ({ exerciseId, currTrainingId }: Props) => {
  const [sets, setSets] = useState<Set[] | null>(null);
  useEffect(() => {
    const getSetsFunc = async () => {
      try {
        const sets = await getLastTrainingSets(exerciseId, currTrainingId);
        setSets(sets);
      } catch (error) {
        console.log(error);
      }
    };
    getSetsFunc();
  }, [currTrainingId, exerciseId]);

  if (!sets || sets.length === 0) return;
  return (
    <div className="mt-4">
      <h3 className="font-semibold text-2xl">Результаты прошлой тренировки</h3>
      <Sets isLastResult={true} sets={sets} />
    </div>
  );
};
