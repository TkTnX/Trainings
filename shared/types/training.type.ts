import { Exercise, Set, Training } from "@/app/generated/prisma/client";
import { MuscleGroups } from "@/app/generated/prisma/enums";

export interface IUpdateTraining {
    muscleGroup?: MuscleGroups[]
    exercises?: string[]
}

export interface ExerciseWithSets extends Exercise {
  sets: Set[];
}

export interface TrainingWithExercise extends Training {
  exercises: ExerciseWithSets[];
  sets: Set[]
}