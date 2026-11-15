import { createSet } from "@/shared/api";
import { Input } from "@/shared/components";
import { TrainingWithExercise } from "@/shared/types";
import { NotepadTextIcon } from "lucide-react";
import { SubmitEvent } from "react";

interface Props {
  exerciseId: string;
  training: TrainingWithExercise;
  setTraining: React.Dispatch<
    React.SetStateAction<TrainingWithExercise | null>
  >;
}

export const AddSetForm = ({ exerciseId, training, setTraining }: Props) => {
  const onSubmitRep = async (e: SubmitEvent<HTMLFormElement>) => {
    if (!training) return null;
    e.preventDefault();
    try {
      const formData = new FormData(e.target);
      const set = await createSet({
        ...Object.fromEntries(formData),
        trainingId: training.id,
        exerciseId: formData.get("exerciseId") as unknown as string,
        kg: Number(formData.get("kg")),
        reps: Number(formData.get("reps")),
      });

      setTraining((prev) => {
        if (!prev) return prev;

        return {
          ...prev,
          exercises: prev.exercises.map((exercise) =>
            exercise.id === formData.get("exerciseId")
              ? {
                  ...exercise,
                  sets: [...exercise.sets, set],
                }
              : exercise,
          ),
        };
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={(e) => onSubmitRep(e)} className="flex flex-col gap-4 mt-4">
      <input readOnly hidden name="exerciseId" value={exerciseId} />
      <div className="flex gap-4">
        <Input
          required
          name="kg"
          className="text-4xl font-bold flex flex-col"
          label={
            <span className="text-sm! font-normal! text-gray ">Вес, кг</span>
          }
          placeholder="50"
          type="number"
        />
        <Input
          required
          name="reps"
          label={
            <span className="text-sm! font-normal! text-gray">Повторения</span>
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
        <span className="text-sm">Повысить вес на следующей тренировке</span>
      </label>
      <button
        type="submit"
        className="mt-5 w-full bg-main rounded-lg py-3 transition active:opacity-80"
      >
        Добавить подход
      </button>
    </form>
  );
};
