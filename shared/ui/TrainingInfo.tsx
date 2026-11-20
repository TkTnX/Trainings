import { Set } from "@/app/generated/prisma/client";
import { TrainingWithExercise } from "@/shared/types";
import { BicepsFlexed, Clock, Dumbbell } from "lucide-react";

interface Props {
  training: TrainingWithExercise ;
}

export const TrainingInfo = ({ training }: Props) => {
  console.log(training);
  return (
    <div className="flex mt-8 gap-1 justify-center">
      <div className=" flex-col text-sm flex items-center gap-2 bg-[#1e1e2a] flex-1  rounded-lg py-5 px-1">
        <Clock className="text-gray" />
        <p className="font-semibold">{training.time} мин</p>
      </div>
      <div className=" flex-col text-sm  flex items-center gap-2 bg-[#1e1e2a]  rounded-lg py-5 px-2">
        <Dumbbell className="text-main" />
        <p className="font-semibold">{training.exercises.length} упражнений</p>
      </div>
      <div className=" flex-col text-sm flex items-center gap-2 bg-[#1e1e2a] flex-1  rounded-lg py-5 px-1">
        <BicepsFlexed className="text-gray" />
        <p className="font-semibold">{training.sets.length} подходов</p>
      </div>
    </div>
  );
};
