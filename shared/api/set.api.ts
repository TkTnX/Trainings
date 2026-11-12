"use server";
import { prisma } from "@/prisma/prisma.client";
import { ICreateSet } from "@/shared/types";

export async function createSet(data: ICreateSet) {
  const set = await prisma.set.create({
    data,
  });

  if (!set) throw new Error("Подход не был добавлен!");

  return set;
}
