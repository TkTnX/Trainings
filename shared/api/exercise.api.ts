"use server";
import { prisma } from "@/prisma/prisma.client";

export async function getExercises() {
  const exercises = await prisma.exercise.findMany({
    include: {
        sets: true
      }
    });
  return exercises;
}
