import { Set } from "@/app/generated/prisma/client";

export function getWeightDynamics(sets: Set[]) {
  console.log(sets);
  const now = Date.now();
  const day = 24 * 60 * 60 * 1000;

  const currPeriod = now - 30 * day;
  const prevPeriod = now - 60 * day;

  const currentSets = sets.filter((set) => {
    const date = new Date(set.createdAt).getTime();
    return date >= currPeriod && date <= now;
  });

  const previousSets = sets.filter((set) => {
    const date = new Date(set.createdAt).getTime();
    return date >= prevPeriod && date < currPeriod;
  });

  const currMax = currentSets.length
    ? Math.max(...currentSets.map((set) => set.kg))
    : null;
  const prevMax = previousSets.length
    ? Math.max(...previousSets.map((set) => set.kg))
    : null;

  if (currMax === null || prevMax === null || prevMax === 0) {
    return null;
  }

  const percentage = ((currMax - prevMax) / prevMax) * 100;
  console.log(percentage);
  return Number(percentage.toExponential(1));
}
