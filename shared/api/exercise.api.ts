"use server";
import { prisma } from "@/prisma/prisma.client";

export async function getExercises(trainingId?: string) {
  let training = null;

  if (trainingId) {
    training = await prisma.training.findUnique({ where: { id: trainingId } });
  }

  const exercises = await prisma.exercise.findMany({
    where: {
      muscleGroup: training ? { in: training?.muscleGroup } : undefined,
    },
    include: {
      sets: true,
    },
  });
  return exercises;
}

export async function getExercise(id: string) {
  const exercise = await prisma.exercise.findUnique({
    where: {
      id,
    },
    include: {
      sets: { orderBy: { createdAt: "asc" } },
    },
  });

  return exercise;
}
