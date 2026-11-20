"use server";
import { MuscleGroups } from "@/app/generated/prisma/enums";
import { prisma } from "@/prisma/prisma.client";
import { ICreateExercise, MuscleGroupEnum } from "@/shared/types";

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

export async function createExercise(formData: FormData) {
  const { image, muscleGroup, name } = Object.fromEntries(formData);
  let imageUrl: string | undefined = undefined;

  if (image instanceof File && image.size > 0) {
    const cloudinaryFormData = new FormData();

    cloudinaryFormData.append("file", image);
    cloudinaryFormData.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!,
    );

    const res = await fetch(process.env.NEXT_PUBLIC_CLOUDINARY_URL!, {
      method: "POST",
      body: cloudinaryFormData,
    });

    if (!res.ok) {
      throw new Error("Ошибка загрузки изображения");
    }

    const data = await res.json();
    imageUrl = data.secure_url;
  }

  const exercise = await prisma.exercise.create({
    data: {
      name: name as string,
      muscleGroup: muscleGroup as unknown as MuscleGroups,
      image: imageUrl,
    },
  });

  return exercise;
}
