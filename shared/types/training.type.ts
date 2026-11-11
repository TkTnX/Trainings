import { MuscleGroups } from "@/app/generated/prisma/enums";

export interface IUpdateTraining {
    muscleGroup?: MuscleGroups[]
    exercises?: string[]
}