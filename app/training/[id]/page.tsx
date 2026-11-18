import { BigTraining } from "@/entities";
import { Suspense } from "react";

interface Props {
  params: Promise<{ id: string }>;
}

const TrainingPage = ({ params }: Props) => {
  return (
    <Suspense fallback={<div>Загрузка тренировки...</div>}>
      <TrainingContent params={params} />
    </Suspense>
  );
};

const TrainingContent = async ({ params }: Props) => {
  const { id } = await params;

  return <BigTraining id={id} />;
};

export default TrainingPage;
