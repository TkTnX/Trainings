"use client";
import { MuscleGroups } from "@/app/generated/prisma/enums";
import { getExercises } from "@/shared/api";
import { ExerciseWithSets } from "@/shared/types";
import { ProgressSection } from "@/widgets/ProgressSection";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

export const ProgressList = () => {
  const [isPending, setIsPending] = useState(true);
  const [muscleGroups, setMuscleGroups] = useState<
    { muscleGroup: MuscleGroups; exercises: ExerciseWithSets[] }[]
  >([]);
  useEffect(() => {
    const getExercisesFunc = async () => {
      try {
        setIsPending(true);
        const exercises = await getExercises();

        const groupedExercises = exercises.reduce<
          { muscleGroup: MuscleGroups; exercises: ExerciseWithSets[] }[]
        >((acc, item) => {
          const existing = acc.find(
            (group) => group.muscleGroup === item.muscleGroup,
          );

          if (existing) {
            existing.exercises.push(item);
          } else {
            acc.push({
              muscleGroup: item.muscleGroup,
              exercises: [item],
            });
          }
          return acc;
        }, []);

        setMuscleGroups(groupedExercises);
      } catch (error) {
        console.log(error);
      } finally {
        setIsPending(false);
      }
    };

    getExercisesFunc();
  }, []);

  console.log(muscleGroups);

  return (
    <section>
      {isPending ? (
        <div>
          <Loader2 className="animate-spin mx-auto mt-10" />
        </div>
      ) : (
        muscleGroups.map((group) => (
          <ProgressSection key={group.muscleGroup} muscleGroup={group} />
        ))
      )}
    </section>
  );
};
