import { MuscleGroupEnum } from "@/shared/types/muscle-group.type"

export interface ICreateExercise {
    image: File
    name: string
    muscleGroup: MuscleGroupEnum
}