"use client";
import { AddSetForm } from "@/features";
import { getTraining } from "@/shared/api";
import { TrainingWithExercise } from "@/shared/types";
import { LastTrainingResults } from "@/widgets/LastTrainingResults";
import { ProgressLine } from "@/widgets/ProgressLine";
import { Sets } from "@/widgets/Sets";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Props {
  id: string;
}

export const Training = ({ id }: Props) => {
  const [open, setOpen] = useState<string[]>([]);
  const [training, setTraining] = useState<null | TrainingWithExercise>(null);

  useEffect(() => {
    const getTrainingFunc = async () => {
      const data = await getTraining(id);

      setTraining(data);
    };

    getTrainingFunc();
  }, [id]);

  const onOpen = (id: string) => {
    if (open.includes(id)) {
      setOpen(open.filter((item) => item !== id));
    } else {
      setOpen([...open, id]);
    }
  };

  const onDeleteSet = (exerciseId: string, setId: string) => {
    setTraining((prev) => {
      if (!prev) return prev;

      return {
        ...prev,
        exercises: prev.exercises.map((item) =>
          item.exercise.id === exerciseId
            ? {
                ...item,
                exercise: {
                  ...item.exercise,
                  sets: item.exercise.sets.filter((set) => set.id !== setId),
                },
              }
            : item,
        ),
      };
    });
  };

  return (
    <div className="flex flex-col gap-4">
      {training?.exercises.map(({ exercise }) => (
        <div key={exercise.id} className="bg-border rounded-2xl p-4 text-left">
          <button
            onClick={() => onOpen(exercise.id)}
            className="flex items-start justify-between w-full gap-2 relative"
          >
            {exercise.image && (
              <Image
                src={exercise.image}
                width={140}
                height={100}
                className="rounded-xl w-35 h-25 object-cover"
                alt={exercise.name}
              />
            )}
            <h4 className="text-xl flex-1 text-left">{exercise.name}</h4>
            <ChevronDown
              className={`${open.includes(exercise.id) && "rotate-180"} transition`}
            />
          </button>
          {open.includes(exercise.id) && (
            <div>
              {exercise.sets.length > 0 && (
                <ProgressLine sets={exercise.sets} />
              )}
              <LastTrainingResults
                currTrainingId={id}
                exerciseId={exercise.id}
              />
              {open.includes(exercise.id) && exercise.sets.length > 0 && (
                <div className="mt-4">
                  <h3 className="font-semibold text-2xl">
                    Завершенные подходы
                  </h3>
                  <Sets
                    onDeleteSet={(setId: string) =>
                      onDeleteSet(exercise.id, setId)
                    }
                    sets={exercise.sets}
                  />
                </div>
              )}

              <div className="mt-4">
                <h3 className="font-semibold text-2xl">Текущий подход</h3>
                <AddSetForm
                  exerciseId={exercise.id}
                  training={training}
                  setTraining={setTraining}
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
