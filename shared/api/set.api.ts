"use server";
import { prisma } from "@/prisma/prisma.client";
import { ICreateSet } from "@/shared/types";

export async function createSet(data: ICreateSet) {
  const set = await prisma.set.create({
    data: {
      ...data,
      isIncrease: data.isIncrease ? true : false,
    },
  });

  if (!set) throw new Error("Подход не был добавлен!");

  return set;
}

export async function getLastTrainingSets(
  exerciseId: string,
  currTrainingId: string,
) {
  const lastTraining = await prisma.training.findFirst({
    where: {
      AND: [
        {
          exercises: {
            some: {
              id: exerciseId,
            },
          },
        },
        {
          id: {
            not: currTrainingId,
          },
        },
      ],
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  if (!lastTraining) return null

  const sets = await prisma.set.findMany({
    where: {
      AND: [
        {
          exerciseId,
        },
        {
          trainingId: lastTraining.id,
        },
      ],
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return sets;
}

export async function getExerciseSets(trainingId: string, exerciseId: string) {
  const sets = await prisma.set.findMany({
    where: {
      AND: [
        {
          exerciseId,
        },
        {
          trainingId,
        },
      ],
    },
  });

  return sets;
}

export async function deleteSet(id: string) {
  return await prisma.set.delete({
    where: { id },
  });
}
