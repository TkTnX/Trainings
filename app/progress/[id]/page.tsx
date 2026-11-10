import { ProgressLine } from "@/widgets";
import { ChartNoAxesCombined, Trophy } from "lucide-react";
import Image from "next/image";

const ExercisePage = () => {
  return (
    <section className="container">
      <h2 className="font-bold text-4xl">Упражнение</h2>
      <div className="flex items-start gap-2 mt-5">
        <Image
          src={"/images/exercises/stanovaya-tyaga.jpg"}
          width={140}
          height={100}
          className="rounded-xl min-w-35 min-h-25 w-35 h-25 "
          alt="Становая тяга"
        />
        <div>
          <h4 className="text-2xl">Название упражнения</h4>
        </div>
      </div>
      <ProgressLine id="1" />
      <div className="grid grid-cols-2 gap-y-5 gap-x-2 mt-5">
        <div className="bg-border rounded-xl p-4">
          <p className="text-gray">Последний результат</p>
          <p className="font-bold text-2xl">80 кг x 10</p>
        </div>
        <div className="bg-border rounded-xl p-4">
          <Trophy className="text-amber-300 " />
          <p className="text-gray">Рекорд</p>
          <p className="font-bold text-2xl">
            <span className="text-amber-300">80 кг</span> x 10
          </p>
        </div>
        <div className="bg-border rounded-xl px-4 col-span-2 flex justify-between py-6">
          <p className="text-gray">Динамика</p>
          <div>
            <p className="font-bold flex items-center gap-1 text-2xl text-[#50d071]">
              <ChartNoAxesCombined /> +12.5%
            </p>
            <p className="text-gray">к весу за месяц</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExercisePage;
