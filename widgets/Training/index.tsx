"use client";
import {
  Exercise,
  Set,
  Training as TrainingType,
} from "@/app/generated/prisma/client";
import { createSet, getTraining } from "@/shared/api";
import { Input } from "@/shared/components";
import { ProgressLine } from "@/widgets/ProgressLine";
import { ChevronDown, NotepadTextIcon } from "lucide-react";
import Image from "next/image";
import { SubmitEvent, useEffect, useState } from "react";

interface Props {
  id: string;
}

interface ExerciseWithSets extends Exercise {
  sets: Set[];
}

interface TrainingWithExercise extends TrainingType {
  exercises: ExerciseWithSets[];
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

  const onSubmitRep = async (e: SubmitEvent<HTMLFormElement>) => {
    if (!training) return null;
    e.preventDefault();

    const formData = new FormData(e.target);
    console.log(Object.fromEntries(formData));
    const set = await createSet({
      ...Object.fromEntries(formData),
      trainingId: training.id,
      exerciseId: formData.get("exerciseId") as unknown as string,
      kg: Number(formData.get("kg")),
      reps: Number(formData.get("reps")),
    });

    console.log(set);
  };

  return (
    <div className="flex flex-col gap-4">
      {training?.exercises.map((exercise) => (
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

              <div className="mt-4">
                <h3 className="font-semibold text-2xl">Текущий подход</h3>
                <form
                  onSubmit={(e) => onSubmitRep(e)}
                  className="flex flex-col gap-4 mt-4"
                >
                  <input hidden name="exerciseId" value={exercise.id} />
                  <div className="flex gap-4">
                    <Input
                      required
                      name="kg"
                      className="text-4xl font-bold flex flex-col"
                      label={
                        <span className="text-sm! font-normal! text-gray ">
                          Вес, кг
                        </span>
                      }
                      placeholder="50"
                      type="number"
                    />
                    <Input
                      required
                      name="reps"
                      label={
                        <span className="text-sm! font-normal! text-gray">
                          Повторения
                        </span>
                      }
                      className="text-4xl font-bold flex flex-col"
                      placeholder="10"
                      type="number"
                    />
                  </div>

                  <select
                    name="rest"
                    className="p-3 rounded-2xl bg-[#232330] text-white outline-none font-bold cursor-pointer"
                  >
                    <option value="" hidden>
                      Отдых после подхода
                    </option>
                    <option value={"2:00"}>2:00</option>
                    <option value={"2:30"}>2:30</option>
                    <option value={"3:00"}>3:00</option>
                    <option value={"3:30"}>3:30</option>
                  </select>
                  <Input
                    name="note"
                    className="flex items-center gap-4"
                    label={<NotepadTextIcon />}
                    placeholder="Заметки..."
                  />
                  <label className="flex text-gray items-center gap-4">
                    <input type="checkbox" name="isIncrease" />
                    <span className="text-sm">
                      Повысить вес на следующей тренировке
                    </span>
                  </label>
                  <button
                    type="submit"
                    className="mt-5 w-full bg-main rounded-lg py-3 transition active:opacity-80"
                  >
                    Добавить подход
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// TODO: http://localhost:3000/training?id=d1ba4689-348e-4127-addf-374bc1c58502&step=3
