import { StartTrainingButton } from "@/features";
import { LastTraining, Visites } from "@/widgets";
import { Play } from "lucide-react";

export default function Home() {
  return (
    <>
      <section className="container">
        <StartTrainingButton />
      </section>
      <LastTraining />
      <section className="container mt-5">
        <Visites />
      </section>
    </>
  );
}
