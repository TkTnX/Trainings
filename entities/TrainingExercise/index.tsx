import { ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const TrainingExercise = () => {
  return (
    <div className="border-b pb-5 border-border mt-3">
      <Link href={'/progress/1'} className="flex items-start gap-2">
        <Image
          src={"/images/exercises/stanovaya-tyaga.jpg"}
          width={140}
          height={100}
          className="rounded-xl w-35 h-25 "
          alt="Становая тяга"
        />
        <h4 className="text-xl">Становая тяга</h4>
      </Link>
      <div className="mt-4 flex flex-col gap-3">
        <div className="bg-border p-4 rounded-2xl relative">
          <h5 className="font-semibold text-xl">Подход №1</h5>
          <p className="text-lg">80кг x 10 раз</p>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-green-500/30 text-green-500 p-2 rounded-full">
            <ChevronUp size={32} />
          </div>
        </div>
        <div className="bg-border p-4 rounded-2xl realtive">
          <h5 className="font-semibold text-xl">
            Подход №2 <span className="text-xs text-gray">(перерыв 3:00)</span>
          </h5>
          <p className="text-lg">80кг x 8 раз</p>
          <p className="text-sm text-gray">Делал некачественно</p>
        </div>
        <div className="bg-border p-4 rounded-2xl realtive">
          <h5 className="font-semibold text-xl">
            Подход №3 <span className="text-xs text-gray">(перерыв 3:00)</span>
          </h5>
          <p className="text-lg">70кг x 9 раз</p>
        </div>
      </div>
    </div>
  );
};
