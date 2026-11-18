import { MuscleGroups } from "@/app/generated/prisma/enums";
import { Exercise } from "@/entities";
import { ExerciseWithSets, MuscleGroupEnum } from "@/shared/types";

interface Props {
  muscleGroup: { muscleGroup: MuscleGroups; exercises: ExerciseWithSets[] };
}

export const ProgressSection = ({ muscleGroup }: Props) => {
  return (
    <section className="container mt-4">
      <h2 className="font-bold text-xl">
        {MuscleGroupEnum[muscleGroup.muscleGroup]}
      </h2>
      <div className="grid gap-8 mt-4">
        {muscleGroup.exercises.map((exercise) => (
          <Exercise  exercise={exercise} key={exercise.id} />
        ))}
      </div>
      <div className="border-b border-b-border mt-4" />
    </section>
  );
};
