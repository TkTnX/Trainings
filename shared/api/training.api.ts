"use server";

import { prisma } from "@/prisma/prisma.client";
import { IUpdateTraining } from "@/shared/types";

export const getTrainings = async () => {
  const trainings = await prisma.training.findMany({
    include: {
      exercises: { include: { exercise: { include: { sets: true } } } },
      sets: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return trainings;
};

export const getTraining = async (id: string) => {
  const training = await prisma.training.findUnique({
    where: { id },
    include: {
      sets: true,
      exercises: {
        orderBy: {
          position: "asc",
        },
        include: {
          exercise: {
            include: {
              sets: {
                where: {
                  trainingId: id,
                },
              },
            },
          },
        },
      },
    },
  });
  if (!training) throw new Error("Тренировка не найдена!");
  return training;
};

export const getLastTraining = async () => {
  const training = await prisma.training.findFirst({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      exercises: { include: { exercise: { include: { sets: true } } } },
      sets: true,
    },
  });
  return training;
};

export const getTrainingDays = async () => {
  const trainings = await prisma.training.findMany({
    select: {
      createdAt: true,
    },
  });
  return trainings;
};

export const createTraining = async () => {
  const newTraining = await prisma.training.create({
    data: {
      muscleGroup: [],
      time: 0,
    },
  });

  return newTraining;
};

export const updateTraining = async (id: string, data: IUpdateTraining) => {
  const training = await prisma.training.findFirst({
    where: { id },
  });

  if (!training) {
    throw new Error("Тренировка не найдена!");
  }

  return await prisma.$transaction(async (tx) => {
    if (data.exercises) {
      await tx.trainingExercise.deleteMany({
        where: {
          trainingId: id,
        },
      });

      await tx.trainingExercise.createMany({
        data: data.exercises.map((exerciseId, index) => ({
          trainingId: id,
          exerciseId,
          position: index,
        })),
      });
    }

    return tx.training.update({
      where: { id },
      data: {
        muscleGroup: data.muscleGroup ?? training.muscleGroup,
      },
    });
  });
};

export async function finishTraining(id: string) {
  const training = await prisma.training.findFirst({
    where: { id },
  });

  if (!training) {
    throw new Error("Тренировка не найдена!");
  }

  const startTime = new Date(training.createdAt).getTime();
  const endTime = Date.now();

  const duration = Math.floor((endTime - startTime) / 1000 / 60);

  return await prisma.training.update({
    where: { id },
    data: {
      time: duration,
    },
  });
}
