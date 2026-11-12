"use client";
import {
  Exercise as ExerciseType,
  MuscleGroups,
  Set,
} from "@/app/generated/prisma/client";
import { Exercise } from "@/entities";
import { getExercises, updateTraining } from "@/shared/api";
import { MuscleGroupEnum } from "@/shared/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
  id: string;
}

interface ExerciseTypeWithSets extends ExerciseType {
  sets: Set[];
}

export const ChooseExercises = ({ id }: Props) => {
  const router = useRouter()
  const [exercises, setExercises] = useState<ExerciseTypeWithSets[]>([]);
  const [isPending, setIsPending] = useState(true);
  const [choosed, setChoosed] = useState<string[]>([]);

  useEffect(() => {
    const getExerciesFunc = async () => {
      const items = await getExercises();

      setExercises(items);
      setIsPending(false);
    };

    getExerciesFunc();
  }, []);
  const exercisesSortedByMuscleGroup: {
    [key: string]: ExerciseTypeWithSets[];
  } = {};

  for (const exercise of exercises) {
    const group = exercise.muscleGroup;

    if (!exercisesSortedByMuscleGroup[group]) {
      exercisesSortedByMuscleGroup[group] = [];
    }

    exercisesSortedByMuscleGroup[group].push(exercise);
  }

  const onChoose = (id: string) => {
    if (choosed.includes(id)) {
      setChoosed(choosed.filter((c) => c !== id));
    } else {
      setChoosed([...choosed, id]);
    }
  };

  const onSubmit = async () => {
    await updateTraining(id, {
      exercises: choosed
    })
    router.push(`/training?id=${id}&step=3`)
  }

  return (
    <div>
      {isPending ? (
        <p className="text-center text-gray">Загрузка...</p>
      ) : (
        Object.entries(exercisesSortedByMuscleGroup).map((item) => (
          <div className="mt-5" key={item[0]}>
            <h2 className="font-bold text-2xl">
              {MuscleGroupEnum[item[0] as MuscleGroups]}
            </h2>
            <div className="mt-5 flex flex-col gap-3">
              {item[1].map((exercise) => (
                <button
                  className={`${choosed.includes(exercise.id) && "border-green-500! scale-95 "} rounded-2xl border border-transparent transition`}
                  onClick={() => onChoose(exercise.id)}
                  key={exercise.id}
                >
                  <Exercise isChoose={true} exercise={exercise} />
                </button>
              ))}
            </div>
          </div>
        ))
      )}
      <button onClick={onSubmit} className="mt-5 w-full bg-main rounded-lg py-3 transition active:opacity-80">
        Начать тренировку
      </button>
    </div>
  );
};
