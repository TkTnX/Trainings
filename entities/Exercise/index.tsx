import { Exercise as ExerciseType, Set } from "@/app/generated/prisma/client";
import Image from "next/image";
import Link from "next/link";

interface Props {
  exercise: ExerciseType & { sets: Set[] };
  isChoose?: boolean
  
}

export const Exercise = ({ exercise, isChoose=false }: Props) => {
  return (
    <div className="flex items-start gap-2 relative">
      {!isChoose && (
        <Link href={`/progress/1`} className="absolute inset-0"></Link>
      )}
      <Image
        src={exercise.image || "/images/exercises/stanovaya-tyaga.jpg"}
        width={140}
        height={100}
        className="rounded-xl w-35 h-25 object-cover"
        alt={exercise.name || "Становая тяга"}
      />
      <div>
        <h4 className="text-xl">{exercise.name || "Становая тяга"}</h4>
        {exercise.sets.length > 0 && (
          <p className="text-gray">
            Рекорд: {exercise.sets.sort((a, b) => a.kg - b.kg)[0].kg}
          </p>
        )}
      </div>
    </div>
  );
};
