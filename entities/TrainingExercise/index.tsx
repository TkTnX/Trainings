import { ExerciseWithSets } from "@/shared/types";
import { ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  exercise: ExerciseWithSets;
}

export const TrainingExercise = ({ exercise }: Props) => {
  return (
    <div className="border-b pb-5 border-border mt-3">
      <Link
        href={`/progress/${exercise.id}`}
        className="flex items-start gap-2"
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
        <h4 className="text-xl">{exercise.name}</h4>
      </Link>
      <div className="mt-4 flex flex-col gap-3">
        {exercise.sets.map((set, i) => (
          <div key={set.id} className="bg-border p-4 rounded-2xl relative">
            <h5 className="font-semibold text-xl">
              Подход №{i + 1}{" "}
              {set.rest && (
                <span className="text-xs text-gray">(перерыв {set.rest})</span>
              )}
            </h5>
            <p className="text-lg">
              {set.kg}кг x {set.reps} раз
            </p>
            {set.isIncrease && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-green-500/30 text-green-500 p-2 rounded-full">
                <ChevronUp size={32} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
