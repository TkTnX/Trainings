import { MuscleGroupEnum, TrainingWithExercise } from "@/shared/types";
import { BicepsFlexed, ChevronRight, Clock, Dumbbell } from "lucide-react";
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
    <div className="border-b border-border pb-8">
      <Link href={"/training/1"} className="absolute inset-0"></Link>
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
      <div className="flex mt-8 gap-1 justify-center">
        <div className=" flex-col flex items-center gap-2 bg-[#1e1e2a] flex-1  rounded-lg py-5 px-1">
          <Clock className="text-gray" />
          <p className="font-semibold">{training.time} мин</p>
        </div>
        <div className=" flex-col  flex items-center gap-2 bg-[#1e1e2a]  rounded-lg py-5 px-2">
          <Dumbbell className="text-main" />
          <p className="font-semibold">{training.exercises.length} упражнений</p>
        </div>
        <div className=" flex-col flex items-center gap-2 bg-[#1e1e2a] flex-1  rounded-lg py-5 px-1">
          <BicepsFlexed className="text-gray" />
          <p className="font-semibold">{training.exercises.reduce((acc, i) => acc + i.sets.length, 0)} подходов</p>
        </div>
      </div>
    </div>
  );
};
