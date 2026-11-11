"use server";

import { prisma } from "@/prisma/prisma.client";
import { IUpdateTraining } from "@/shared/types";

export const createTraining = async () => {
  const newTraining = await prisma.training.create({
    data: {
          muscleGroup: []
        
    },
  });

  return newTraining;
};

export const updateTraining = async (id: string, data: IUpdateTraining) => {
    const training = await prisma.training.findFirst( {
        where: {id}
    })

    if(!training) {
        throw new Error('Тренировка не найдена!')
    }
    
    return await prisma.training.update({
        where: { id },
        data: {
            muscleGroup: data.muscleGroup || training.muscleGroup,
            exercises: {
                connect: data.exercises?.map((id) => ({ id }))
            }
        }
    })
}