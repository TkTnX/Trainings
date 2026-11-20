import {
  Exercise,
  MuscleGroups,
  Set,
  Training,
  TrainingExercise,
} from "@/app/generated/prisma/client";

export interface IUpdateTraining {
  exercises?: string[];
  muscleGroup?: MuscleGroups[];
}

export interface ExerciseWithSets extends Exercise {
  sets: Set[];
}

export interface TrainingExerciseWithData extends TrainingExercise {
  exercise: ExerciseWithSets;
}

export interface TrainingWithExercise extends Training {
  exercises: TrainingExerciseWithData[];
}
