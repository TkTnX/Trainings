import {  TrainingExercise } from "@/entities";
import { BicepsFlexed, Clock, Dumbbell } from "lucide-react";

const TrainingPage = () => {
  return (
    <section className="container">
      <h1 className="font-bold text-4xl">Грудь | Трицепс</h1>
      <div className="flex mt-8 gap-1 justify-center">
        <div className=" flex-col flex items-center gap-2 bg-[#1e1e2a] flex-1  rounded-lg py-5 px-1">
          <Clock className="text-gray" />
          <p className="font-semibold">56 мин</p>
        </div>
        <div className=" flex-col  flex items-center gap-2 bg-[#1e1e2a]  rounded-lg py-5 px-2">
          <Dumbbell className="text-main" />
          <p className="font-semibold">5 упражнений</p>
        </div>
        <div className=" flex-col flex items-center gap-2 bg-[#1e1e2a] flex-1  rounded-lg py-5 px-1">
          <BicepsFlexed className="text-gray" />
          <p className="font-semibold">18 подходов</p>
        </div>
      </div>
      <div className="mt-5">
        <h2 className="text-2xl font-semibold">Упражнения</h2>
        <div className="mt-4 flex flex-col gap-3">
          <TrainingExercise />
          <TrainingExercise />
          <TrainingExercise />
          <TrainingExercise />
        </div>
      </div>
    </section>
  );
};

export default TrainingPage;
