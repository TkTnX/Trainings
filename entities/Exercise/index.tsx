import { Exercise as ExerciseType, Set } from "@/app/generated/prisma/client";
import { getRecord } from "@/shared/helpers";
import Image from "next/image";
import Link from "next/link";

interface Props {
  exercise: ExerciseType & { sets: Set[] };
  isChoose?: boolean;
}

export const Exercise = ({ exercise, isChoose = false }: Props) => {
  const { maxKg, maxReps } = getRecord(exercise.sets);
  return (
    <div className="flex items-start gap-2 relative">
      {!isChoose && (
        <Link
          href={`/progress/${exercise.id}`}
          className="absolute inset-0"
        ></Link>
      )}
      {exercise.image && (
        <Image
          src={exercise.image}
          width={140}
          height={100}
          className="rounded-xl w-35 h-25 object-cover"
          alt={exercise.name || "Становая тяга"}
        />
      )}
      <div>
        <h4 className="text-xl">{exercise.name || "Становая тяга"}</h4>
        {exercise.sets.length > 0 && (
          <p className="text-gray">
            Рекорд: {maxKg} кг x {maxReps} раз
          </p>
        )}
      </div>
    </div>
  );
};
