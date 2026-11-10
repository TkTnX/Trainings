import { LastTraining, Visites } from "@/widgets";
import { Play } from "lucide-react";

export default function Home() {
  return (
    <>
      <section className="container">
        <button className="flex flex-col items-center w-full p-7 bg-linear-to-br from-main to-[#2f215e] rounded-2xl active:scale-95 transition">
          <Play className="text-white fill-white" size={48} />
          <h1 className="font-bold mt-4 text-2xl">Начать тренировку</h1>
          <p className="text-lg">Продолжить прогресс</p>
        </button>
      </section>
      <LastTraining />
      <section className="container mt-5">
        <Visites />
      </section>
    </>
  );
}
