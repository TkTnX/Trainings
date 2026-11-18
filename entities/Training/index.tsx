import { MuscleGroupEnum, TrainingWithExercise } from "@/shared/types";
import { TrainingInfo } from "@/shared/ui";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface Props {
  isLastTraining?: boolean;
  training: TrainingWithExercise;
}

export const Training = ({ isLastTraining = false, training }: Props) => {
  const trainingDate = training.createdAt.toLocaleDateString("ru-RU", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
  return (
    <div className="border-b border-border pb-8 relative">
      <Link
        href={`/training/${training.id}`}
        className="absolute inset-0"
      ></Link>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-xl">
            {isLastTraining ? "Последняя тренировка" : "Грудь | Трицепс"}
          </h3>
          <p className="text-main-light">
            {isLastTraining
              ? `${trainingDate} | ${training.muscleGroup.map((item) => MuscleGroupEnum[item]).join(" & ")}`
              : trainingDate}
          </p>
        </div>
        <ChevronRight className="text-gray" />
      </div>
      <TrainingInfo training={training} />
    </div>
  );
};
