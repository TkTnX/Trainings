import { Set } from "@/app/generated/prisma/client";

export function getRecord(sets: Set[]) {
    let maxKg = 0;
    let maxReps = 0;
    
    for (let i = 0; i < sets.length; i++) {
        if (sets[i].kg > maxKg) {
            maxKg = sets[i].kg;
        }
        if (sets[i].reps > maxReps) {
            maxReps = sets[i].reps;
        }
    }
    return {maxKg, maxReps};
}